/* Shared by both windows: storage, reports, and (in the popup) picking and showing quotes. */
const $ = id => document.getElementById(id);
const GENRES = ["business","kind","history","ancient","mix"];
const store = {
  get(k, d){ try{ const v = localStorage.getItem("rally:"+k); return v == null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem("rally:"+k, JSON.stringify(v)); }catch(e){} }
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
let toastT;
function toast(msg){ const t = $("toast"); if(!t) return; t.textContent = msg; t.classList.remove("hide"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.add("hide"), 2600); }

/* ---------- reports: flagged quotes never show again ---------- */
const qKey = q => { let h = 5381; const s = q.name + "|" + q.text; for(let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return "q" + h.toString(36); };
let REP = {};
function loadReports(){ REP = store.get("reported", {}); }
loadReports();
const isRep = i => !!REP[qKey(QUOTES[i])];

/* ---------- which quote each tab holds ---------- */
const S = {
  genre: store.get("genre", "mix"),   // first ever launch opens on Mix
  idx: store.get("qidx", {}),         // the quote each tab currently holds (index into QUOTES)
  seen: store.get("seen", []),        // shown this cycle: nothing repeats until a tab has shown them all
  viewed: store.get("viewed", [])     // tabs looked at since the last popup
};
if(!GENRES.includes(S.genre)) S.genre = "mix";
if(store.get("seenN", 0) !== QUOTES.length){ S.seen = []; S.idx = {}; store.set("seen", []); store.set("qidx", {}); store.set("seenN", QUOTES.length); }

const poolIdx = g => {
  const p = QUOTES.map((q,i) => i).filter(i => (g === "mix" || QUOTES[i].g === g) && !isRep(i));
  return p.length ? p : QUOTES.map((q,i) => i).filter(i => g === "mix" || QUOTES[i].g === g);
};
/* Random order with no repeats, and never the same quote in two tabs at once. */
function nextIdx(g, cur){
  const pool = poolIdx(g), seen = new Set(S.seen);
  const held = new Set(Object.entries(S.idx).filter(([t]) => t !== g).map(([,v]) => v));
  let cand = pool.filter(i => !seen.has(i) && !held.has(i) && i !== cur);
  if(!cand.length){
    const inPool = new Set(pool);
    S.seen = S.seen.filter(i => !inPool.has(i));
    cand = pool.filter(i => !held.has(i) && i !== cur);
    if(!cand.length) cand = pool;
  }
  return cand[Math.floor(Math.random()*cand.length)];
}
function markSeen(i){ if(!S.seen.includes(i)){ S.seen.push(i); store.set("seen", S.seen); } }
function markViewed(g){ if(!S.viewed.includes(g)){ S.viewed.push(g); store.set("viewed", S.viewed); } }
/* A tab's quote is replaced at the next popup only if you actually looked at that tab. */
function refreshViewedTabs(){
  for(const g of S.viewed) S.idx[g] = nextIdx(g, S.idx[g]);
  S.viewed = [];
  store.set("qidx", S.idx); store.set("viewed", S.viewed);
}

let imgToken = 0;
function setGenre(g, advance){
  S.genre = g; store.set("genre", g);
  const valid = i => Number.isInteger(i) && QUOTES[i] && (g === "mix" || QUOTES[i].g === g) && !isRep(i);
  if(!valid(S.idx[g]) || advance) S.idx[g] = nextIdx(g, S.idx[g]);
  store.set("qidx", S.idx);
  markViewed(g); markSeen(S.idx[g]);
  const q = QUOTES[S.idx[g]];
  const box = $("quoteBox"); box.classList.add("swap");
  setTimeout(() => {
    $("qText").textContent = q.text;
    $("qName").textContent = q.name;
    $("qSource").textContent = q.src;
    $("qDate").textContent = q.date;
    const img = $("qImg"), token = ++imgToken;
    img.style.opacity = 0;
    img.onload = () => { if(token === imgToken) img.style.opacity = ""; };
    img.onerror = () => img.removeAttribute("src");
    if(q.img){ img.style.objectPosition = q.pos || "50% 22%"; img.src = "img/" + q.img + ".webp"; } else img.removeAttribute("src");
    fitQuote();
    box.classList.remove("swap");
  }, 180);
  $("blob").style.transform = "translateX(" + (GENRES.indexOf(g)*100) + "%)";
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.g === g));
}
function reportCurrent(){
  const i = S.idx[S.genre]; if(!Number.isInteger(i)) return false;
  const q = QUOTES[i];
  loadReports();
  REP[qKey(q)] = {name:q.name, text:q.text, g:q.g, src:q.src, at:new Date().toISOString()};
  store.set("reported", REP);
  setGenre(S.genre, true);
  return true;
}

/* Keep the quote in the bottom half, clear of the face: shrink the text until it fits. */
function fitQuote(){
  const pop = $("pop"), qt = $("qText"), who = document.querySelector(".q-who");
  if(!pop || !qt) return;
  qt.style.fontSize = "";
  if(!pop.clientHeight) return;
  const room = pop.clientHeight / 2 - 30;
  let size = parseFloat(getComputedStyle(qt).fontSize);
  const block = () => qt.offsetHeight + who.offsetHeight + 14;
  while(block() > room && size > 14){ size -= 1; qt.style.fontSize = size + "px"; }
}
if($("pop")){ new ResizeObserver(() => fitQuote()).observe($("pop")); document.fonts && document.fonts.ready.then(fitQuote); }
