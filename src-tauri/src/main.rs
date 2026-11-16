#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod engine;

use engine::Engine;
use std::sync::Arc;
use std::time::Duration;
use tauri::menu::{Menu, MenuItem, PredefinedMenuItem};
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
use tauri::{AppHandle, Emitter, Manager, PhysicalPosition, PhysicalSize, State, WebviewWindow, WindowEvent};
use tauri_plugin_autostart::{MacosLauncher, ManagerExt};

type Eng<'a> = State<'a, Arc<Engine>>;

/* ---------- commands for the two windows ---------- */
#[tauri::command] fn status(e: Eng) -> serde_json::Value { e.status() }
#[tauri::command] fn set_mode(e: Eng, mode: String) { e.set_mode(&mode); e.save(); }
#[tauri::command] fn set_sched(e: Eng, times: Vec<String>, days: Vec<u32>) { e.set_sched(times, days); e.save(); }
#[tauri::command] fn set_test_mode(e: Eng, on: bool) { e.set_test_mode(on); e.save(); }
#[tauri::command] fn reset_today(e: Eng) { e.reset_today(); e.save(); }
#[tauri::command] fn snooze(e: Eng) { e.snooze(); e.save(); }
#[tauri::command] fn react(e: Eng, up: bool) -> String { let m = e.react(up); e.save(); m }
#[tauri::command] fn show_now(app: AppHandle) { show_quote(&app, "Preview"); }
#[tauri::command] fn hide_popup(app: AppHandle) { if let Some(w) = app.get_webview_window("popup") { let _ = w.hide(); } }
#[tauri::command] fn reset_popup_position(app: AppHandle) { if let Some(w) = app.get_webview_window("popup") { place_default(&w); } }
#[tauri::command] fn get_autostart(app: AppHandle) -> bool { app.autolaunch().is_enabled().unwrap_or(false) }
#[tauri::command] fn set_autostart(app: AppHandle, on: bool) -> bool {
    let a = app.autolaunch();
    let _ = if on { a.enable() } else { a.disable() };
    a.is_enabled().unwrap_or(false)
}

/// Bottom-right corner of the main screen, above the taskbar/dock.
fn place_default(w: &WebviewWindow) {
    let size = PhysicalSize::new(400u32, 470u32);
    if let Ok(Some(m)) = w.primary_monitor() {
        let scale = m.scale_factor();
        let wa = m.work_area();
        let (ww, hh) = ((size.width as f64 * scale) as i32, (size.height as f64 * scale) as i32);
        let margin = (20.0 * scale) as i32;
        let _ = w.set_size(PhysicalSize::new(ww as u32, hh as u32));
        let _ = w.set_position(PhysicalPosition::new(
            wa.position.x + wa.size.width as i32 - ww - margin,
            wa.position.y + wa.size.height as i32 - hh - margin,
        ));
    }
}

/// Ask the popup to load a quote, then show it on top without stealing keyboard focus.
fn show_quote(app: &AppHandle, why: &str) {
    let Some(w) = app.get_webview_window("popup") else { return };
    let _ = w.emit("show-quote", why.to_string());
    let w2 = w.clone();
    std::thread::spawn(move || {
        std::thread::sleep(Duration::from_millis(220));
        let _ = w2.set_focusable(false);
        let _ = w2.set_always_on_top(true);
        let _ = w2.show();
        std::thread::sleep(Duration::from_millis(400));
        let _ = w2.set_focusable(true);
    });
}

fn open_settings(app: &AppHandle) {
    if let Some(w) = app.get_webview_window("settings") {
        let _ = w.show();
        let _ = w.unminimize();
        let _ = w.set_focus();
    }
}

/* ---------- watching activity (timing only, never which keys) ---------- */
fn start_watchers(app: AppHandle, eng: Arc<Engine>) {
    // Keys + general activity
    let e1 = eng.clone();
    std::thread::spawn(move || {
        use device_query::{DeviceQuery, DeviceState, Keycode};
        let ds = DeviceState::checked_new(); // None on macOS until Accessibility access is granted
        e1.set_keys_ok(ds.is_some());
        let mut prev: Vec<Keycode> = vec![];
        let mut last_mark = 0u128;
        let mut retry = 0u32;
        let mut ds = ds;
        loop {
            std::thread::sleep(Duration::from_millis(30));
            // any input at all (mouse, keys, trackpad) via the system idle timer: no special permission needed
            if let Ok(idle) = user_idle::UserIdle::get_time() {
                let now = std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.as_millis()).unwrap_or(0);
                if idle.as_milliseconds() < 1200 && now - last_mark > 400 { e1.activity(); last_mark = now; }
            }
            match &ds {
                Some(d) => {
                    let keys = d.get_keys();
                    for k in &keys { if !prev.contains(k) { e1.key(*k == Keycode::Backspace); } }
                    prev = keys;
                }
                None => { // check again now and then (the user may grant access later)
                    retry += 1;
                    if retry % 300 == 0 { ds = DeviceState::checked_new(); e1.set_keys_ok(ds.is_some()); }
                }
            }
        }
    });
    // The once-a-second decision loop
    std::thread::spawn(move || {
        let mut n = 0u64;
        loop {
            std::thread::sleep(Duration::from_secs(1));
            n += 1;
            if let Some(why) = eng.tick() { eng.save(); show_quote(&app, &why); }
            if n % 5 == 0 { eng.learn_baseline(); }
            if n % 30 == 0 { eng.save(); }
        }
    });
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| open_settings(app)))
        .plugin(tauri_plugin_autostart::init(MacosLauncher::LaunchAgent, Some(vec!["--hidden"])))
        .plugin(tauri_plugin_window_state::Builder::default()
            .with_denylist(&["settings"])
            .with_state_flags(tauri_plugin_window_state::StateFlags::POSITION | tauri_plugin_window_state::StateFlags::SIZE)
            .build())
        .invoke_handler(tauri::generate_handler![
            status, set_mode, set_sched, set_test_mode, reset_today, snooze, react,
            show_now, hide_popup, reset_popup_position, get_autostart, set_autostart
        ])
        .setup(|app| {
            #[cfg(target_os = "macos")]
            app.set_activation_policy(tauri::ActivationPolicy::Accessory); // tray only, no Dock icon

            let dir = app.path().app_config_dir().unwrap_or_else(|_| std::env::temp_dir().join("rally"));
            let eng = Arc::new(Engine::load(dir.join("state.json")));
            app.manage(eng.clone());
            let first = eng.first_run();
            eng.save();

            // Start with the computer by default (can be switched off in Settings)
            if first { let _ = app.autolaunch().enable(); }

            let popup = app.get_webview_window("popup").expect("popup window");
            if first { place_default(&popup); }

            // Closing Settings only hides it; Rally keeps running in the tray
            if let Some(s) = app.get_webview_window("settings") {
                let s2 = s.clone();
                s.on_window_event(move |ev| if let WindowEvent::CloseRequested { api, .. } = ev { api.prevent_close(); let _ = s2.hide(); });
                let hidden = std::env::args().any(|a| a == "--hidden");
                if first || !hidden { let _ = s.show(); }
            }

            // Tray icon + menu
            let show = MenuItem::with_id(app, "show", "Show a quote now", true, None::<&str>)?;
            let settings = MenuItem::with_id(app, "settings", "Settings…", true, None::<&str>)?;
            let snooze = MenuItem::with_id(app, "snooze", "Snooze today", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Quit Rally", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&show, &settings, &snooze, &PredefinedMenuItem::separator(app)?, &quit])?;
            TrayIconBuilder::with_id("rally")
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("Rally")
                .menu(&menu)
                .show_menu_on_left_click(false)
                .on_menu_event(|app, ev| match ev.id().as_ref() {
                    "show" => show_quote(app, "Preview"),
                    "settings" => open_settings(app),
                    "snooze" => { if let Some(e) = app.try_state::<Arc<Engine>>() { e.snooze(); e.save(); } }
                    "quit" => { if let Some(e) = app.try_state::<Arc<Engine>>() { e.save(); } app.exit(0); }
                    _ => {}
                })
                .on_tray_icon_event(|tray, ev| {
                    if let TrayIconEvent::Click { button: MouseButton::Left, button_state: MouseButtonState::Up, .. } = ev { open_settings(tray.app_handle()); }
                })
                .build(app)?;

            start_watchers(app.handle().clone(), eng);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Rally");
}
