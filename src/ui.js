import { GUNS, KNIVES, TOOLS, UPGRADES, PERKS, PHASES, ECON, REFINED_NAMES } from './data.js';
import { ZONE_INFO, CELL } from './level.js';
import { SLOTS } from './weapons.js';

const $ = (id) => document.getElementById(id);
const fmt = (n) => Math.floor(n).toLocaleString('en-US');

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {};
    for (const id of ['objPhase', 'mapZone', 'dmgNums', 'hud', 'crosshair', 'hitmarker', 'scope', 'vignette', 'hurtDir', 'objTitle', 'objBrief', 'cleanFill', 'cleanText', 'objCounts', 'zoneName', 'minimap', 'banner', 'bannerTitle', 'bannerSub', 'prompt', 'flash', 'powerups', 'perks', 'credits', 'popups', 'hpFill', 'hpText', 'tankFill', 'tankText', 'waterFill', 'waterText', 'fuelFill', 'fuelText', 'waterM', 'fuelM', 'slots', 'weaponName', 'mag', 'reserve', 'grenades', 'fps', 'shopBody', 'shopTabs', 'shopCredits', 'statsBody'])
      this.el[id] = $(id);
    this.mm = this.el.minimap.getContext('2d');
    this.hitT = 0; this.hurtT = 0; this.flashT = 0; this.bannerT = 0; this.spread = 0;
    this.shopTab = 'weapons';
    this.lastHud = 0;
    this.mmBase = null;
    this.mmZoom = 4.2;
    this.dmg = [];
    this.dmgPool = [];
  }

  show(id, on = true) { $(id).classList.toggle('hidden', !on); }

  hurt(angle) {
    this.hurtT = 0.5;
    if (angle !== null && angle !== undefined) {
      this.el.hurtDir.style.transform = `rotate(${-angle}rad)`;
      this.el.hurtDir.style.opacity = 1;
      clearTimeout(this._hd);
      this._hd = setTimeout(() => { this.el.hurtDir.style.opacity = 0; }, 450);
    }
  }
  hitmarker(head, kill) {
    this.hitT = kill ? 0.3 : 0.15;
    this.el.hitmarker.className = kill ? 'kill' : head ? 'head' : '';
  }
  crosshairKick() { this.spread = Math.min(30, this.spread + 6); }
  flash(msg, color = '#fff') {
    if (this.el.flash.textContent !== msg || this.flashT < 0.5) { this.el.flash.textContent = msg; this.el.flash.style.color = color; }
    this.flashT = 1.6;
  }
  banner(title, sub = '', dur = 3, color = '#fff') {
    this.el.bannerTitle.textContent = title; this.el.bannerTitle.style.color = color;
    this.el.bannerSub.textContent = sub;
    this.bannerT = dur;
  }
  popup(text, big = false) {
    const d = document.createElement('div');
    d.className = 'popup' + (big ? ' big' : '');
    d.textContent = text;
    d.style.left = (Math.random() * 30) + 'px';
    this.popN = ((this.popN || 0) + 1) % 5;
    d.style.bottom = (this.popN * 20) + 'px';
    this.el.popups.appendChild(d);
    setTimeout(() => d.remove(), 1150);
    while (this.el.popups.children.length > 8) this.el.popups.firstChild.remove();
  }
  damageNumber(x, y, z, amount, type = 'normal') {
    const n = Math.round(amount);
    if (n <= 0) return;
    let el = this.dmgPool.pop();
    if (!el) { el = document.createElement('div'); this.el.dmgNums.appendChild(el); }
    el.className = 'dmg ' + type;
    el.textContent = (type === 'head' ? '✦ ' : '') + n;
    el.style.display = '';
    const jitter = (Math.random() - 0.5) * 0.5;
    this.dmg.push({ el, x: x + jitter, y, z: z + jitter, t: 0, life: type === 'fire' || type === 'water' ? 0.6 : 0.85, vx: (Math.random() - 0.5) * 0.6 });
    if (this.dmg.length > 40) { const d = this.dmg.shift(); d.el.style.display = 'none'; this.dmgPool.push(d.el); }
  }
  updateDamageNumbers(dt) {
    const cam = this.game.camera;
    const w = window.innerWidth, h = window.innerHeight;
    const v = this._v || (this._v = cam.position.clone());
    for (let i = this.dmg.length - 1; i >= 0; i--) {
      const d = this.dmg[i];
      d.t += dt;
      if (d.t >= d.life) { d.el.style.display = 'none'; this.dmgPool.push(d.el); this.dmg.splice(i, 1); continue; }
      v.set(d.x + d.vx * d.t, d.y + d.t * 0.9 - d.t * d.t * 0.4, d.z);
      v.project(cam);
      if (v.z > 1) { d.el.style.opacity = 0; continue; }
      const sx = (v.x * 0.5 + 0.5) * w, sy = (-v.y * 0.5 + 0.5) * h;
      const f = d.t / d.life;
      const pop = d.t < 0.08 ? 1.35 - d.t / 0.08 * 0.35 : 1;
      d.el.style.transform = `translate(${sx.toFixed(1)}px,${sy.toFixed(1)}px) translate(-50%,-50%) scale(${pop})`;
      d.el.style.opacity = f > 0.6 ? (1 - f) / 0.4 : 1;
    }
  }
  setPrompt(html) { if (this._prompt !== html) { this._prompt = html; this.el.prompt.innerHTML = html || ''; } }

  update(dt) {
    const g = this.game, P = g.player, W = g.weapons;
    this.hitT -= dt; this.hurtT -= dt; this.flashT -= dt; this.bannerT -= dt;
    this.el.hitmarker.style.opacity = this.hitT > 0 ? 1 : 0;
    this.updateDamageNumbers(dt);
    this.el.flash.style.opacity = this.flashT > 0 ? 1 : 0;
    this.el.banner.style.opacity = this.bannerT > 0 ? 1 : 0;
    const lowHp = 1 - P.hp / P.maxHp;
    this.el.vignette.style.opacity = Math.max(this.hurtT > 0 ? 0.6 : 0, lowHp > 0.5 ? (lowHp - 0.5) * 1.6 : 0);

    // crosshair
    const c = W.current;
    let base = 8;
    if (c && c.type === 'gun') base = 4 + c.def.spread * 300 * (1 + Math.min(1, P.speedH() / 7) * 0.8) * (P.onGround ? 1 : 1.8);
    this.spread = Math.max(0, this.spread - dt * 60);
    const gap = (base + this.spread) * (1 - W.adsT);
    const ch = this.el.crosshair.children;
    ch[0].style.top = (-gap - 9) + 'px'; ch[1].style.top = gap + 'px';
    ch[2].style.left = (-gap - 9) + 'px'; ch[3].style.left = gap + 'px';
    this.el.crosshair.style.opacity = W.adsT > 0.6 || P.sprinting ? 0 : 1;
    const scoped = c && c.type === 'gun' && c.def.scope && W.adsT > 0.9;
    this.el.scope.classList.toggle('hidden', !scoped);

    // throttle the rest
    this.lastHud -= dt;
    if (this.lastHud > 0) return;
    this.lastHud = 0.05;

    this.el.credits.textContent = fmt(g.credits);
    this.el.hpFill.style.width = (P.hp / P.maxHp * 100) + '%';
    this.el.hpText.textContent = Math.ceil(P.hp);

    const cap = W.tankCap(), res = W.resCap();
    this.el.tankFill.style.width = (W.tank / cap * 100) + '%';
    this.el.tankFill.style.background = W.tank >= cap - 0.01 ? '#ff4a3a' : '';
    this.el.tankText.textContent = Math.floor(W.tank) + ' / ' + cap;
    this.el.waterM.style.display = W.tools.washer ? '' : 'none';
    this.el.fuelM.style.display = W.tools.torch ? '' : 'none';
    this.el.waterFill.style.width = (W.water / res * 100) + '%';
    this.el.waterText.textContent = Math.floor(W.water) + 'L';
    this.el.fuelFill.style.width = (W.fuel / res * 100) + '%';
    this.el.fuelText.textContent = Math.floor(W.fuel) + 'L';

    // slots
    const names = { gun0: '1', gun1: '2', knife: '3 KNIFE', vacuum: '4 VAC', washer: '5 LANCE', torch: '6 TORCH' };
    let sh = '';
    for (const s of SLOTS) {
      if (!W.has(s)) continue;
      let n = names[s];
      if (s === 'gun0' || s === 'gun1') { const st = W.guns[s === 'gun0' ? 0 : 1]; n += ' ' + (st.refined ? REFINED_NAMES[st.id] : GUNS[st.id].name).split(' ')[0].toUpperCase(); }
      sh += `<div class="${W.slot === s ? 'on' : ''}">${n}</div>`;
    }
    if (this._slots !== sh) { this._slots = sh; this.el.slots.innerHTML = sh; }

    if (c) {
      if (c.type === 'gun') {
        this.el.weaponName.textContent = c.def.name + (W.reloading ? '  — RELOADING' : '');
        this.el.mag.textContent = c.st.mag;
        this.el.mag.style.color = c.st.mag === 0 ? '#ff4a3a' : c.st.mag <= c.def.mag * 0.25 ? '#ffb03a' : '#fff';
        this.el.reserve.textContent = '/ ' + c.st.reserve;
      } else if (c.type === 'knife') {
        this.el.weaponName.textContent = c.def.name; this.el.mag.textContent = '∞'; this.el.mag.style.color = '#fff'; this.el.reserve.textContent = '';
      } else {
        this.el.weaponName.textContent = TOOLS[c.kind].name;
        this.el.mag.style.color = '#fff';
        if (c.kind === 'vacuum') { this.el.mag.textContent = Math.round(W.tank / cap * 100) + '%'; this.el.reserve.textContent = 'TANK'; }
        else if (c.kind === 'washer') { this.el.mag.textContent = Math.floor(W.water); this.el.reserve.textContent = 'L WATER'; }
        else { this.el.mag.textContent = Math.floor(W.fuel); this.el.reserve.textContent = 'L FUEL'; }
      }
    }
    this.el.grenades.textContent = W.grenades > 0 ? `FOAM GRENADES ×${W.grenades}  [G]` : '';

    // perks
    let ph = '';
    for (const [k, p] of Object.entries(PERKS)) if (g.perks[k]) ph += `<div class="perk" style="background:#${p.color.toString(16).padStart(6, '0')}">${p.name[0]}</div>`;
    if (this._perks !== ph) { this._perks = ph; this.el.perks.innerHTML = ph; }

    // powerups
    let pu = '';
    if (g.powerups.double > 0) pu += `<div style="color:#ffd23a">DOUBLE CREDITS ${Math.ceil(g.powerups.double)}</div>`;
    if (g.powerups.insta > 0) pu += `<div style="color:#ff5a4a">INSTA-CLEAN ${Math.ceil(g.powerups.insta)}</div>`;
    if (this._pu !== pu) { this._pu = pu; this.el.powerups.innerHTML = pu; }

    // objective
    const phase = g.phase;
    this.el.objPhase.textContent = g.victory ? 'COMPLETE' : g.bossActive() ? 'FINAL PHASE' : 'PHASE ' + Math.min(4, phase) + ' / 4';
    if (g.victory) {
      this.el.objTitle.textContent = 'Contract complete';
      this.el.objBrief.textContent = 'Free roam — keep cleaning, keep fighting.';
    } else if (g.bossActive()) {
      const b = g.enemies.boss;
      this.el.objTitle.textContent = 'The Bloom Mother';
      this.el.objBrief.textContent = b.shield > 0 ? 'Its slime shield deflects bullets — WASH it off with the Hydro Lance (or torch / foam), then shoot!' : 'Shield down! Unload on the core!';
    } else if (PHASES[phase]) {
      this.el.objTitle.textContent = PHASES[phase].title.split('— ')[1] || PHASES[phase].title;
      this.el.objBrief.textContent = PHASES[phase].brief;
    }
    const zk = g.bossActive() ? null : g.currentZoneKey();
    if (g.bossActive()) {
      const b = g.enemies.boss;
      const f = b.hp / b.maxHp;
      this.el.cleanFill.style.width = (f * 100) + '%';
      this.el.cleanFill.style.background = 'linear-gradient(90deg,#a02a7a,#ff4ad0)';
      this.el.cleanText.textContent = Math.ceil(f * 100) + '%';
      const sh = `<span><i style="color:#9cff6a">◈</i>Shield ${Math.ceil(b.shield / b.maxShield * 100)}%</span>`;
      if (this._counts !== sh) { this._counts = sh; this.el.objCounts.innerHTML = sh; }
    } else if (zk) {
      const cl = g.grime.cleanliness(zk);
      const th = PHASES[phase] ? PHASES[phase].threshold : 1;
      this.el.cleanFill.style.width = Math.min(100, cl * 100) + '%';
      this.el.cleanFill.style.background = '';
      this.el.cleanText.textContent = Math.floor(cl * 100) + '%';
      this.el.cleanText.title = 'goal ' + Math.round(th * 100) + '%';
      const r = g.grime.remaining(zk);
      let ch = `<span style="color:#6dff9e">Goal ${Math.round(th * 100)}%</span>`;
      if (r.piles) ch += `<span><i style="color:#e2b466">●</i>${r.piles}</span>`;
      if (r.stains) ch += `<span><i style="color:#8bff5a">◆</i>${r.stains}</span>`;
      if (r.spores) ch += `<span><i style="color:#d060ff">✦</i>${r.spores}</span>`;
      if (this._counts !== ch) { this._counts = ch; this.el.objCounts.innerHTML = ch; }
    }
    const here = g.level.zoneAtWorld(P.pos.x, P.pos.z);
    this.el.zoneName.textContent = '';
    this.el.mapZone.textContent = here ? ZONE_INFO[here].name : '';
    if (g.settings.showFps) this.el.fps.textContent = Math.round(g.fps) + ' FPS';
    else this.el.fps.textContent = '';
    this.drawMinimap();
  }

  // ---------------------------------------------------------------- minimap
  buildMinimapBase() {
    const L = this.game.level;
    const s = 6;
    const c = document.createElement('canvas'); c.width = L.W * s; c.height = L.H * s;
    const g = c.getContext('2d');
    const zc = { 0: '#3a4a58', 1: '#5a4f3a', 2: '#34425a', 3: '#34503c', 4: '#4a3428' };
    for (let y = 0; y < L.H; y++) for (let x = 0; x < L.W; x++) {
      const i = L.idx(x, y), t = L.type[i];
      if (t === 1) continue;
      g.fillStyle = t === 4 ? '#a03030' : t === 2 || t === 3 ? '#6a6a6a' : t === 5 ? '#2a9ad0' : zc[L.zone[i]] || '#333';
      g.fillRect(x * s, y * s, s, s);
    }
    for (const o of L.objects) {
      g.fillStyle = { S: '#1fd6ff', I: '#55ff33', W: '#2a8cf0', P: '#ff5aa0', R: '#c04dff', M: '#7fd8ff' }[o.kind] || '#fff';
      g.fillRect(o.x * s - 1, o.y * s - 1, s + 2, s + 2);
    }
    this.mmBase = c; this.mmScale = s;
  }
  invalidateMinimap() { this.mmBase = null; }
  drawMinimap() {
    const g = this.game, P = g.player;
    if (!this.mmBase) this.buildMinimapBase();
    const ctx = this.mm, S = 360, C = S / 2, R = C - 18;
    const s = this.mmScale / CELL; // base px per meter
    const zoom = 2.1; // screen px per base px  (~6.3 px per metre)
    ctx.clearRect(0, 0, S, S);
    // disc background
    ctx.save();
    ctx.beginPath(); ctx.arc(C, C, R, 0, Math.PI * 2); ctx.closePath();
    ctx.fillStyle = 'rgba(8,12,18,0.72)'; ctx.fill();
    ctx.clip();
    ctx.translate(C, C);
    ctx.rotate(P.yaw);
    ctx.scale(zoom, zoom);
    ctx.translate(-P.pos.x * s, -P.pos.z * s);
    ctx.globalAlpha = 0.85;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.mmBase, 0, 0);
    ctx.globalAlpha = 1;
    const zk = g.currentZoneKey();
    if (zk && zk !== 'h') {
      const cols = ['#e2b466', '#8bff5a', '#d060ff'];
      g.grime.forEachRemaining(zk, (x, z, k) => { ctx.fillStyle = cols[k]; ctx.fillRect(x * s - 0.8, z * s - 0.8, 1.6, 1.6); });
    }
    for (const b of g.barrels.list) if (b.alive) { ctx.fillStyle = '#b6ff3a'; ctx.beginPath(); ctx.arc(b.x * s, b.z * s, 1.3, 0, 7); ctx.fill(); }
    ctx.fillStyle = '#ff4a4a';
    for (const e of g.enemies.list) if (e.dying <= 0) { ctx.beginPath(); ctx.arc(e.pos.x * s, e.pos.z * s, 1.6, 0, 7); ctx.fill(); }
    for (const pk of g.enemies.pickups) { ctx.fillStyle = '#fff'; ctx.fillRect(pk.mesh.position.x * s - 1.5, pk.mesh.position.z * s - 1.5, 3, 3); }
    if (g.enemies.boss && g.enemies.boss.alive) { ctx.fillStyle = g.enemies.boss.active ? '#ff4ad0' : '#7a3a6a'; ctx.beginPath(); ctx.arc(g.enemies.boss.x * s, g.enemies.boss.z * s, 4, 0, 7); ctx.fill(); }
    ctx.restore();
    // view cone + player arrow
    ctx.save(); ctx.translate(C, C);
    const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 0.6);
    grd.addColorStop(0, 'rgba(92,225,255,0.22)'); grd.addColorStop(1, 'rgba(92,225,255,0)');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R * 0.6, -Math.PI / 2 - 0.55, -Math.PI / 2 + 0.55); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#ffcc4d'; ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -11); ctx.lineTo(-8, 8); ctx.lineTo(0, 4); ctx.lineTo(8, 8); ctx.closePath(); ctx.stroke(); ctx.fill();
    ctx.restore();
    // bezel + rotating compass
    ctx.beginPath(); ctx.arc(C, C, R, 0, Math.PI * 2); ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.stroke();
    ctx.beginPath(); ctx.arc(C, C, R + 9, 0, Math.PI * 2); ctx.lineWidth = 16; ctx.strokeStyle = 'rgba(8,12,18,0.6)'; ctx.stroke();
    ctx.font = '700 15px Rajdhani, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const dirs = [['N', 0], ['E', Math.PI / 2], ['S', Math.PI], ['W', -Math.PI / 2]];
    for (const [l, a] of dirs) {
      const ang = a + P.yaw; // screen angle from up
      const x = C + Math.sin(ang) * (R + 9), y = C - Math.cos(ang) * (R + 9);
      ctx.fillStyle = l === 'N' ? '#ff6a5a' : 'rgba(232,238,245,0.75)';
      ctx.fillText(l, x, y);
    }
    for (let i = 0; i < 24; i++) {
      const ang = i / 24 * Math.PI * 2 + P.yaw;
      if (i % 6 === 0) continue;
      const r0 = R + 5, r1 = R + (i % 3 === 0 ? 12 : 9);
      ctx.beginPath(); ctx.moveTo(C + Math.sin(ang) * r0, C - Math.cos(ang) * r0); ctx.lineTo(C + Math.sin(ang) * r1, C - Math.cos(ang) * r1);
      ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.stroke();
    }
  }

  // ---------------------------------------------------------------- shop
  renderShop() {
    const g = this.game, W = g.weapons;
    this.el.shopCredits.textContent = '¢ ' + fmt(g.credits);
    const tabs = [['weapons', 'Weapons'], ['knives', 'Knives'], ['tools', 'Tools'], ['upgrades', 'Upgrades'], ['supplies', 'Supplies']];
    this.el.shopTabs.innerHTML = tabs.map(([k, n]) => `<button data-tab="${k}" class="${this.shopTab === k ? 'on' : ''}">${n}</button>`).join('');
    const cards = [];
    const btn = (action, label, cost, disabled = false) => `<button data-act="${action}" ${disabled || g.credits < cost ? 'disabled' : ''}>${label}${cost ? ' — ' + fmt(cost) + ' ¢' : ''}</button>`;
    if (this.shopTab === 'weapons') {
      for (const [id, d] of Object.entries(GUNS)) {
        if (id === 'sidearm' && !W.ownsGun('sidearm')) { /* sidearm can be re-bought cheaply */ }
        const owned = W.ownsGun(id);
        const cost = id === 'sidearm' ? 300 : Math.round(d.cost * 1.15);
        cards.push(`<div class="card"><h4>${d.name}</h4><p>${d.cls.toUpperCase()}${d.pierce ? ' · piercing' : ''}${d.scope ? ' · scoped' : ''}</p>
          <div class="stats">DMG ${d.dmg}${d.pellets > 1 ? '×' + d.pellets : ''} · RPM ${Math.round(d.rate * 60)} · MAG ${d.mag}</div>
          ${owned ? btn('ammo:' + id, 'Refill ammo', W.guns.find(x => x && x.id === id).refined ? d.ammoCost * 3 : d.ammoCost) : btn('gun:' + id, 'Buy', cost)}</div>`);
      }
      cards.push(`<div class="card"><h4>Note</h4><p>You can carry two guns. Buying a third replaces the one in your hands. Wall-buys around the facility are cheaper (no terminal markup).</p></div>`);
    } else if (this.shopTab === 'knives') {
      for (const [id, d] of Object.entries(KNIVES)) {
        const owned = W.ownedKnives[id];
        const eq = W.knife === id;
        cards.push(`<div class="card"><h4>${d.name}</h4><p>${d.desc}</p><div class="stats">DMG ${d.dmg} · SPEED ${d.speed}/s · REACH ${d.range}m</div>
          ${eq ? '<span class="owned">EQUIPPED</span>' : owned ? btn('knife:' + id, 'Equip', 0) : btn('knife:' + id, 'Buy', d.cost)}</div>`);
      }
    } else if (this.shopTab === 'tools') {
      for (const [id, d] of Object.entries(TOOLS)) {
        const owned = W.tools[id];
        const locked = d.minPhase && g.phase < d.minPhase;
        cards.push(`<div class="card"><h4>${d.name}</h4><p>${d.desc}</p>
          ${owned ? '<span class="owned">OWNED</span>' : locked ? `<span class="owned" style="color:#ff8a5a">Unlocks in Phase ${d.minPhase}</span>` : btn('tool:' + id, 'Buy', d.cost)}</div>`);
      }
    } else if (this.shopTab === 'upgrades') {
      for (const [id, d] of Object.entries(UPGRADES)) {
        const lvl = g.upg[id];
        const max = d.costs.length;
        const pips = '<div class="pips">' + Array.from({ length: max }, (_, i) => `<i class="${i < lvl ? 'on' : ''}"></i>`).join('') + '</div>';
        const val = (v) => d.unit === '%' ? Math.round(v * 100) + '%' : d.unit === 'x' ? v + 'x' : v + ' ' + d.unit;
        const needs = d.needs && !W.tools[d.needs];
        cards.push(`<div class="card"><h4>${d.name}</h4><p>${d.desc}</p>${pips}<div class="stats">${val(d.values[lvl])}${lvl < max ? ' → ' + val(d.values[lvl + 1]) : ' (MAX)'}</div>
          ${lvl >= max ? '<span class="owned">MAXED</span>' : needs ? '<span class="owned" style="color:#ff8a5a">Requires Hydro Lance</span>' : btn('upg:' + id, 'Upgrade', d.costs[lvl])}</div>`);
      }
    } else {
      cards.push(`<div class="card"><h4>Foam Grenades ×2</h4><p>Throw with G. Explodes into cleaning foam: wipes stains & spores in a radius and blasts creatures. Max 6.</p>${btn('grenade', 'Buy', ECON.grenadeCost, W.grenades >= 6)}</div>`);
      cards.push(`<div class="card"><h4>Full Ammo Restock</h4><p>Refills every gun you're carrying.</p>${btn('allammo', 'Buy', this.allAmmoCost())}</div>`);
      cards.push(`<div class="card"><h4>Medkit</h4><p>Instantly restore full health.</p>${btn('heal', 'Buy', 250, g.player.hp >= g.player.maxHp)}</div>`);
      cards.push(`<div class="card"><h4>Remote Tank Purge</h4><p>Empty your vacuum tank from here (pays 75% of chute value).</p>${btn('remote', 'Use', 0, W.tank < 1)}</div>`);
    }
    this.el.shopBody.innerHTML = cards.join('');
  }
  allAmmoCost() {
    const W = this.game.weapons;
    let c = 0;
    for (const st of W.guns) if (st) { const d = W.gunStats(st); c += Math.round(d.ammoCost * 0.8); }
    return c;
  }

  renderStats(el) {
    const g = this.game, s = g.stats;
    const t = Math.floor(s.time);
    el.innerHTML = `
      <div>Phase<b>${g.victory ? 'Complete' : g.phase + ' / 4'}</b></div>
      <div>Credits<b>¢ ${fmt(g.credits)}</b></div>
      <div>Total earned<b>¢ ${fmt(s.earned)}</b></div>
      <div>Creatures killed<b>${s.kills}</b></div>
      <div>Debris piles vacuumed<b>${s.piles}</b></div>
      <div>Stains washed<b>${s.stains}</b></div>
      <div>Spore pods burned<b>${s.spores}</b></div>
      <div>Debris sold<b>${fmt(s.units)} units</b></div>
      <div>Deaths<b>${s.deaths}</b></div>
      <div>Time on contract<b>${Math.floor(t / 60)}m ${t % 60}s</b></div>`;
  }
}
