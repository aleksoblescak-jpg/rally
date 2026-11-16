//! Rally's timing engine: notices when the workday starts, watches the last hour of activity,
//! and decides when (if at all) to show a quote. Only timing is recorded — never which keys.

use chrono::{Datelike, Local, Timelike};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::collections::{BTreeMap, VecDeque};
use std::path::PathBuf;
use std::sync::Mutex;

pub const DAILY_MAX: u32 = 1;
pub const THRESHOLD: f64 = 55.0;
const WINDOW: i64 = 60; // look back over the last hour
const PAUSE_MIN: i64 = 3; // pauses of 3–20 min count…
const PAUSE_MAX: i64 = 20; // …a single longer break (lunch, meeting) is ignored
const START_NEED: usize = 5; // workday starts once active in 5 of 10 minutes
const START_OF: i64 = 10;
const EARLIEST_START: f64 = 5.0; // activity before 5 am never starts a workday
const SHOW_FROM: f64 = 9.0; // automatic popups never before 9 am
const END_AFTER: f64 = 16.0; // after 4 pm…
const END_IDLE: i64 = 45; // …45 min without activity ends the workday
const RETURN_WAIT: i64 = 30; // scheduled popup waits up to 30 min for you to come back

#[derive(Serialize, Deserialize, Clone)]
pub struct Sched { pub times: Vec<String>, pub days: Vec<u32> }
#[derive(Serialize, Deserialize, Clone)]
pub struct Weights { pub idle: f64, pub typing: f64, pub time: f64 }
#[derive(Serialize, Deserialize, Clone, Default)]
pub struct Day { pub date: String, pub start: Option<i64>, pub end: Option<i64> }
#[derive(Serialize, Deserialize, Clone, Default)]
pub struct Daily { pub date: String, pub count: u32, pub snoozed: bool, pub fired: Vec<String> }

#[derive(Serialize, Deserialize, Clone)]
pub struct Persist {
    pub mode: String,
    pub sched: Sched,
    pub weights: Weights,
    pub baseline: f64,
    pub day: Day,
    pub daily: Daily,
    pub eval_from: i64,
    pub test_mode: bool,
    pub first_run_done: bool,
    #[serde(default)]
    pub unit: i64,
    #[serde(default)]
    pub log: Vec<(i64, [u32; 3])>,
}
impl Default for Persist {
    fn default() -> Self {
        Persist {
            mode: "auto".into(),
            sched: Sched { times: vec!["10:30".into()], days: vec![1, 2, 3, 4, 5] },
            weights: Weights { idle: 1.0, typing: 1.0, time: 1.0 },
            baseline: 0.0,
            day: Day::default(),
            daily: Daily::default(),
            eval_from: 0,
            test_mode: false,
            first_run_done: false,
            unit: 60_000,
            log: vec![],
        }
    }
}

struct Inner {
    p: Persist,
    log: BTreeMap<i64, [u32; 3]>, // bucket -> [active, keys, backspaces]
    last_activity: i64,
    keys: VecDeque<(i64, bool)>,
    last_trigger: Option<[f64; 3]>,
    keys_ok: bool,
}

pub struct Engine { inner: Mutex<Inner>, path: PathBuf }

fn now_ms() -> i64 { chrono::Utc::now().timestamp_millis() }
fn today() -> String { Local::now().format("%Y-%m-%d").to_string() }
fn hour_of(d: &chrono::DateTime<Local>) -> f64 { d.hour() as f64 + d.minute() as f64 / 60.0 }
fn fmt_clock(h: f64) -> String {
    let hh = h.floor() as i64;
    let mm = ((h - hh as f64) * 60.0).floor() as i64;
    let ap = if hh >= 12 { "pm" } else { "am" };
    format!("{}:{:02} {}", (hh + 11) % 12 + 1, mm, ap)
}
fn fmt_min(m: f64) -> String { if m < 1.0 { "<1 min".into() } else { format!("{} min", m.round() as i64) } }
fn parse_t(t: &str) -> f64 {
    let mut it = t.split(':');
    let h: f64 = it.next().and_then(|x| x.parse().ok()).unwrap_or(0.0);
    let m: f64 = it.next().and_then(|x| x.parse().ok()).unwrap_or(0.0);
    h + m / 60.0
}
const DAYN: [&str; 7] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

struct Hour { cells: Vec<&'static str>, pauses: i64, paused: i64, rate: f64, typing_mins: i64, bs_ratio: f64, covered: i64, ready: bool }

impl Inner {
    fn unit(&self) -> i64 { if self.p.test_mode { 2_000 } else { 60_000 } }
    fn bucket(&self, t: i64) -> i64 { t.div_euclid(self.unit()) }
    fn mark(&mut self, key: bool, bs: bool) {
        let b = self.bucket(now_ms());
        let e = self.log.entry(b).or_insert([0, 0, 0]);
        e[0] = 1;
        if key { e[1] += 1; if bs { e[2] += 1; } }
    }
    fn prune(&mut self) {
        let keep = self.bucket(now_ms()) - WINDOW - END_IDLE - 5;
        self.log = self.log.split_off(&keep);
    }
    fn new_day(&mut self) { self.p.day = Day { date: today(), start: None, end: None }; }

    fn update_workday(&mut self) {
        if self.p.day.date != today() { self.new_day(); }
        let now = self.bucket(now_ms());
        let h = hour_of(&Local::now());
        let recent: Vec<i64> = (now - START_OF + 1..=now).filter(|k| self.log.contains_key(k)).collect();
        if (self.p.day.start.is_none() || self.p.day.end.is_some()) && h >= EARLIEST_START && recent.len() >= START_NEED {
            if self.p.day.start.is_none() { self.p.day.start = Some(recent[0] * self.unit()); }
            self.p.day.end = None;
        }
        // End of day: after 4 pm, 45 min since the last active minute
        let last_active = self.log.keys().next_back().map(|k| (k + 1) * self.unit()).unwrap_or(0).max(self.last_activity);
        if self.p.day.start.is_some() && self.p.day.end.is_none() && h >= END_AFTER && last_active > 0
            && now_ms() - last_active > END_IDLE * self.unit() {
            self.p.day.end = Some(last_active);
        }
    }

    fn analyse(&self) -> Hour {
        let u = self.unit();
        let now = self.bucket(now_ms());
        let from = now - WINDOW + 1;
        let day_b = self.p.day.start.map(|s| s.div_euclid(u)).unwrap_or(now + 1);
        let eval_b = if self.p.eval_from > 0 { self.p.eval_from.div_euclid(u) } else { i64::MIN };
        let floor = from.max(day_b).max(eval_b);
        let mut cells: Vec<&'static str> = (from..=now).map(|k| if k < floor { "none" } else if self.log.contains_key(&k) { "on" } else { "idle" }).collect();
        let (mut pauses, mut paused, mut clean_from, mut last) = (0i64, 0i64, floor, None::<i64>);
        let mut k = floor;
        while k <= now {
            if self.log.contains_key(&k) {
                if let Some(l) = last {
                    let gap = k - l - 1;
                    if gap >= PAUSE_MIN && gap <= PAUSE_MAX {
                        pauses += 1; paused += gap;
                        for j in l + 1..k { cells[(j - from) as usize] = "pause"; }
                    } else if gap > PAUSE_MAX {
                        for j in l + 1..k { cells[(j - from) as usize] = "long"; }
                        pauses = 0; paused = 0; clean_from = k;
                    }
                }
                last = Some(k);
            }
            k += 1;
        }
        for j in 0..cells.len() {
            if from + (j as i64) < clean_from && cells[j] != "long" && cells[j] != "none" {
                cells[j] = if cells[j] == "on" { "old" } else { "oldidle" };
            }
        }
        let (mut keys, mut bs, mut tm) = (0u32, 0u32, 0i64);
        for k in clean_from..=now { if let Some(e) = self.log.get(&k) { if e[1] >= 3 { keys += e[1]; bs += e[2]; tm += 1; } } }
        let per_min = 60_000.0 / u as f64;
        let rate = if tm > 0 { keys as f64 / tm as f64 * per_min } else { 0.0 };
        let covered = now - clean_from + 1;
        Hour { cells, pauses, paused, rate, typing_mins: tm, bs_ratio: if keys > 0 { bs as f64 / keys as f64 } else { 0.0 }, covered, ready: covered >= WINDOW }
    }

    /// (hour, idle, typing, time, slump label, score, typing label)
    fn components(&self) -> (Hour, f64, f64, f64, Option<&'static str>, f64, String) {
        let hr = self.analyse();
        let w = &self.p.weights;
        let idle = (hr.pauses as f64 / 3.0).max(hr.paused as f64 / 15.0).min(1.4);
        let mut typing = 0.0;
        let mut tl = "learning your pace…".to_string();
        if self.p.baseline >= 40.0 && hr.typing_mins >= 5 {
            let ratio = hr.rate / self.p.baseline;
            typing = (((0.8 - ratio) / 0.5).max(0.0) + if hr.bs_ratio > 0.25 { 0.3 } else { 0.0 }).min(1.0);
            tl = format!("{}% of usual{}", (ratio * 100.0).round(), if hr.bs_ratio > 0.25 { " · lots of ⌫" } else { "" });
        } else if self.p.baseline >= 40.0 { tl = "not enough typing".into(); }
        let h = hour_of(&Local::now());
        let slump = if (13.5..15.5).contains(&h) { Some("afternoon slump") } else if h >= 21.0 { Some("late evening") } else { None };
        let time = if slump.is_some() { 1.0 } else { 0.0 };
        let score = (50.0 * w.idle * idle + 30.0 * w.typing * typing + 20.0 * w.time * time).round().min(100.0);
        (hr, idle, typing, time, slump, score, tl)
    }

    fn next_scheduled(&self) -> String {
        let now = Local::now();
        let h = hour_of(&now);
        let dow = now.weekday().num_days_from_sunday();
        let mut times = self.p.sched.times.clone(); times.sort();
        if self.p.sched.days.contains(&dow) {
            for t in &times {
                if self.p.daily.fired.contains(t) { continue; }
                let th = parse_t(t);
                if th + RETURN_WAIT as f64 * self.unit() as f64 / 3_600_000.0 > h {
                    return format!("today {}{}", fmt_clock(th), if th <= h { " (waiting for you)" } else { "" });
                }
            }
        }
        if !times.is_empty() {
            for i in 1..=7u32 {
                let d = (dow + i) % 7;
                if self.p.sched.days.contains(&d) {
                    return format!("{} {}", if i == 1 { "tomorrow".to_string() } else { DAYN[d as usize].to_string() }, fmt_clock(parse_t(&times[0])));
                }
            }
        }
        "nothing scheduled".into()
    }
}

impl Engine {
    pub fn load(path: PathBuf) -> Engine {
        let p: Persist = std::fs::read_to_string(&path).ok().and_then(|s| serde_json::from_str(&s).ok()).unwrap_or_default();
        let mut log = BTreeMap::new();
        let unit = if p.test_mode { 2_000 } else { 60_000 };
        if p.unit == unit { for (k, v) in &p.log { log.insert(*k, *v); } }
        Engine { inner: Mutex::new(Inner { p, log, last_activity: 0, keys: VecDeque::new(), last_trigger: None, keys_ok: false }), path }
    }
    pub fn save(&self) {
        let mut g = self.inner.lock().unwrap();
        g.prune();
        g.p.unit = g.unit();
        g.p.log = g.log.iter().map(|(k, v)| (*k, *v)).collect();
        if let Some(dir) = self.path.parent() { let _ = std::fs::create_dir_all(dir); }
        let _ = std::fs::write(&self.path, serde_json::to_string(&g.p).unwrap_or_default());
    }
    pub fn first_run(&self) -> bool {
        let mut g = self.inner.lock().unwrap();
        let f = !g.p.first_run_done; g.p.first_run_done = true; f
    }
    pub fn set_keys_ok(&self, ok: bool) { self.inner.lock().unwrap().keys_ok = ok; }

    pub fn activity(&self) {
        let mut g = self.inner.lock().unwrap();
        g.last_activity = now_ms();
        g.mark(false, false);
    }
    pub fn key(&self, backspace: bool) {
        let mut g = self.inner.lock().unwrap();
        let t = now_ms();
        g.last_activity = t;
        g.keys.push_back((t, backspace));
        g.mark(true, backspace);
    }
    /// Learn the usual typing pace, only from steady typing.
    pub fn learn_baseline(&self) {
        let mut g = self.inner.lock().unwrap();
        let t = now_ms();
        while g.keys.front().map(|k| t - k.0 > 30_000).unwrap_or(false) { g.keys.pop_front(); }
        let n = g.keys.len() as f64;
        let rate = n * 2.0;
        let bs = g.keys.iter().filter(|k| k.1).count() as f64 / n.max(1.0);
        if rate >= 60.0 && bs < 0.2 { g.p.baseline = if g.p.baseline > 0.0 { g.p.baseline * 0.85 + rate * 0.15 } else { rate }; }
    }

    /// Called every second. Returns Some(reason) when a quote should appear now.
    pub fn tick(&self) -> Option<String> {
        let mut g = self.inner.lock().unwrap();
        g.update_workday();
        if g.p.daily.date != today() { g.p.daily = Daily { date: today(), ..Default::default() }; }
        let t = now_ms();
        let active = t - g.last_activity < 5_000;
        let now = Local::now();
        let h = hour_of(&now);
        let dow = now.weekday().num_days_from_sunday();
        if g.p.daily.snoozed { return None; }
        if g.p.mode == "auto" {
            let weekday = (1..=5).contains(&dow);
            let (hr, idle, typing, time, slump, score, _) = g.components();
            if active && g.p.daily.count < DAILY_MAX && weekday && h >= SHOW_FROM && g.p.day.start.is_some()
                && g.p.day.end.is_none() && hr.ready && score >= THRESHOLD {
                g.p.daily.count += 1;
                g.last_trigger = Some([idle, typing, time]);
                g.p.eval_from = t;
                let mut parts = vec![];
                if idle > 0.3 { parts.push(format!("{} pauses in the last hour", hr.pauses)); }
                if typing > 0.3 { parts.push("typing has slowed".into()); }
                if let Some(s) = slump { parts.push(s.into()); }
                return Some(if parts.is_empty() { "Looks like a dip".into() } else { parts.join(" · ") });
            }
        } else if g.p.sched.days.contains(&dow) {
            let mut times = g.p.sched.times.clone(); times.sort();
            let wait_h = RETURN_WAIT as f64 * g.unit() as f64 / 3_600_000.0;
            for tt in times {
                if g.p.daily.fired.contains(&tt) { continue; }
                let th = parse_t(&tt);
                if h < th { break; }
                if h > th + wait_h { g.p.daily.fired.push(tt); continue; } // missed: skip
                if active { g.p.daily.fired.push(tt); g.last_trigger = None; return Some(format!("Your {} quote", fmt_clock(th))); }
                break;
            }
        }
        None
    }

    pub fn status(&self) -> Value {
        let mut g = self.inner.lock().unwrap();
        g.update_workday();
        let (hr, idle, typing, time, slump, score, tl) = g.components();
        let now = Local::now();
        let h = hour_of(&now);
        let dow = now.weekday().num_days_from_sunday();
        let active = now_ms() - g.last_activity < 5_000;
        let day_label = match (&g.p.day.start, &g.p.day.end) {
            (None, _) => "waiting for your workday to start".to_string(),
            (Some(_), Some(_)) => "workday over · quiet until tomorrow".to_string(),
            (Some(s), None) => {
                let d = chrono::DateTime::from_timestamp_millis(*s).map(|d| d.with_timezone(&Local)).unwrap_or(now);
                format!("workday started {}", fmt_clock(hour_of(&d)))
            }
        };
        let status = if g.p.mode == "auto" {
            if g.p.daily.snoozed { "snoozed".to_string() }
            else if g.p.daily.count >= DAILY_MAX { "done for today".into() }
            else if !(1..=5).contains(&dow) { "weekend · off".into() }
            else if h < SHOW_FROM { "quiet until 9:00 am".into() }
            else if g.p.day.start.is_none() { "waiting for workday".into() }
            else if g.p.day.end.is_some() { "workday over".into() }
            else if !hr.ready { format!("watching ({})", fmt_min(hr.covered as f64)) }
            else if score >= THRESHOLD { if active { "showing".into() } else { "ready when you're back".into() } }
            else { "watching".into() }
        } else if g.p.daily.snoozed { "snoozed".into() } else { format!("next: {}", g.next_scheduled()) };
        let count_label = if g.p.mode == "auto" { format!("today {} / {}", g.p.daily.count, DAILY_MAX) }
            else { format!("today {} / {}", g.p.daily.fired.len(), if g.p.sched.days.contains(&dow) { g.p.sched.times.len() } else { 0 }) };
        json!({
            "mode": g.p.mode, "sched": g.p.sched, "test_mode": g.p.test_mode, "keys_ok": g.keys_ok,
            "clock": format!("{} {}", DAYN[dow as usize], fmt_clock(h)),
            "day": day_label, "day_on": g.p.day.start.is_some() && g.p.day.end.is_none(),
            "score": score, "threshold": THRESHOLD,
            "idle": idle, "typing": typing, "time": time,
            "idle_label": format!("{} {} · {}", hr.pauses, if hr.pauses == 1 { "pause" } else { "pauses" }, fmt_min(hr.paused as f64)),
            "typing_label": tl,
            "time_label": format!("{}{}", fmt_clock(h), slump.map(|s| format!(" · {}", s)).unwrap_or_default()),
            "weights": [g.p.weights.idle, g.p.weights.typing, g.p.weights.time],
            "cells": hr.cells,
            "strip_note": if g.p.day.start.is_none() { "starts with your workday".to_string() } else if hr.ready { "full hour".into() } else { format!("{} of 60 collected", fmt_min(hr.covered as f64)) },
            "count": count_label, "status": status, "status_on": status == "showing" || status == "ready when you're back",
            "snoozed": g.p.daily.snoozed,
            "next": format!("Next: {}", g.next_scheduled()),
        })
    }

    pub fn set_mode(&self, m: &str) { self.inner.lock().unwrap().p.mode = if m == "sched" { "sched".into() } else { "auto".into() }; }
    pub fn set_sched(&self, times: Vec<String>, days: Vec<u32>) { self.inner.lock().unwrap().p.sched = Sched { times, days }; }
    pub fn set_test_mode(&self, on: bool) {
        let mut g = self.inner.lock().unwrap();
        g.p.test_mode = on; g.log.clear(); g.new_day(); g.p.eval_from = 0;
    }
    pub fn reset_today(&self) {
        let mut g = self.inner.lock().unwrap();
        g.p.daily = Daily { date: today(), ..Default::default() };
        g.new_day(); g.p.eval_from = 0; g.log.clear();
    }
    pub fn snooze(&self) { self.inner.lock().unwrap().p.daily.snoozed = true; }
    pub fn react(&self, up: bool) -> String {
        let mut g = self.inner.lock().unwrap();
        if let Some(t) = g.last_trigger.take() {
            let f = if up { 1.1 } else { 0.9 };
            let adj = |w: f64| (w * f).clamp(0.5, 1.6);
            if t[0] > 0.3 { g.p.weights.idle = adj(g.p.weights.idle); }
            if t[1] > 0.3 { g.p.weights.typing = adj(g.p.weights.typing); }
            if t[2] > 0.3 { g.p.weights.time = adj(g.p.weights.time); }
            if up { "Noted. Rally will trust those signals a bit more.".into() } else { "Noted. Rally will be pickier about moments like this.".into() }
        } else if up { "Glad it landed.".into() } else { "Fair enough.".into() }
    }
}
