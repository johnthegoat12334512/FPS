import * as THREE from 'three';
import { Level, CELL, ZONE_KEYS, ZONE_INFO } from './level.js';
import { Grime } from './grime.js';
import { Particles } from './particles.js';
import { Effects, Ambience, Barrels } from './effects.js';
import { Enemies } from './enemies.js';
import { Weapons } from './weapons.js';
import { Player } from './player.js';
import { UI } from './ui.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Renderer } from './render.js';
import { GUNS, KNIVES, TOOLS, UPGRADES, PERKS, PHASES, ECON, CRATE_POOL } from './data.js';

const SAVE_KEY = 'grimeProtocol.save.v1';
const SET_KEY = 'grimeProtocol.settings.v1';
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
  sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
  sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } },
  sdel(k) { try { sessionStorage.removeItem(k); } catch (e) { /* ignore */ } },
};

class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!window.__TEST__ });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0e1116);
    this.scene.fog = new THREE.Fog(0x14181e, 18, 75);
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.05, 220);

    this.settings = { sens: 1, fov: 95, vol: 0.6, invert: false, showFps: false, quality: 'high' };
    try { Object.assign(this.settings, JSON.parse(store.get(SET_KEY) || '{}')); } catch (e) { /* ignore */ }

    this.time = 0; this.fps = 60; this.shake = 0;
    this.state = 'menu';
    this.phase = 1; this.victory = false; this.bossAwake = false;
    this.credits = 500;
    this.difficulty = 1;
    this.upg = { tank: 0, suction: 0, pressure: 0, reservoir: 0, armor: 0 };
    this.perks = {};
    this.powerups = { double: 0, insta: 0 };
    this.stats = { kills: 0, piles: 0, stains: 0, spores: 0, units: 0, deaths: 0, earned: 0, time: 0, armor: 0 };
    this.god = false;

    this.audio = new Audio();
    this.audio.setVolume(this.settings.vol);
    this.input = new Input(this.canvas);
    this.setupLights();
    this.level = new Level(this.scene);
    this.grime = new Grime(this.scene, this.level);
    this.particles = new Particles(this.scene);
    this.effects = new Effects(this);
    this.player = new Player(this);
    this.weapons = new Weapons(this);
    this.enemies = new Enemies(this);
    this.ui = new UI(this);
    this.post = new Renderer(this);
    this.ambience = new Ambience(this);
    this.ambience.flickerLights = [this.zoneLights[4], this.zoneLights[7], this.zoneLights[9], this.zoneLights[11]];
    this.barrels = new Barrels(this);
    this.buildInteractables();

    const st = this.level.startCell;
    const [sx, sz] = this.level.center(st.x, st.y);
    this.player.spawnAt(sx, sz, -Math.PI / 2);
    this.level.openDoor(1, true);

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.input.onLockChange = (locked) => {
      if (!locked && this.state === 'playing' && !this.input.forceLocked) this.pause();
    };
    this.canvas.addEventListener('click', () => { if (this.state === 'playing' && !this.input.isLocked()) this.input.lock(); });
    window.addEventListener('keydown', (e) => this.onKey(e));
    window.addEventListener('keyup', (e) => { if (e.code === 'Tab') this.ui.show('stats', false); });
    this.wireMenus();
    this.last = performance.now();
    this.autosaveT = 30;
    this.checkT = 0;
  }

  setupLights() {
    this.scene.add(new THREE.HemisphereLight(0xc8d4e6, 0x3a342c, 0.75));
    const amb = new THREE.AmbientLight(0xffffff, 0.12); this.scene.add(amb);
    const L = [
      [20, 66, 0xfff0d8], [30, 60, 0xd8e4ff], // hub
      [56, 56, 0xffe2b0], [80, 66, 0xffe2b0], [70, 52, 0xffd8a0], // bay
      [44, 30, 0xe0ecff], [70, 36, 0xe0ecff], [86, 28, 0xd0e0ff], // offices
      [12, 34, 0xc8ffd0], [22, 46, 0xc8ffd0], // hydroponics
      [48, 12, 0xff9a5a], [30, 10, 0xff7a3a], [66, 14, 0xff7a3a], // reactor
    ];
    this.zoneLights = [];
    for (const [x, z, c] of L) {
      const inten = z > 55 && x < 40 ? 14 : 26; // HQ is smaller & brighter-walled
      const p = new THREE.PointLight(c, inten, 30, 1.25);
      p.position.set(x, 3.9, z);
      p.userData.base = inten;
      this.scene.add(p);
      this.zoneLights.push(p);
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    if (this.post) this.post.setSize(w, h);
    this.camera.aspect = w / h;
    this.weapons.vmCam.aspect = w / h; this.weapons.vmCam.updateProjectionMatrix();
    this.particles.setScale(h * this.renderer.getPixelRatio());
    this.updateFov();
  }
  baseVFov() {
    const h = THREE.MathUtils.degToRad(this.settings.fov);
    return 2 * Math.atan(Math.tan(h / 2) / Math.max(1.0, this.camera.aspect * 0.75)) * 180 / Math.PI;
  }
  updateFov() {
    const v = THREE.MathUtils.degToRad(this.baseVFov());
    const z = this.weapons ? this.weapons.adsZoomFactor : 1;
    const sprintBoost = this.player && this.player.sprinting ? 1.04 : 1;
    this.camera.fov = 2 * Math.atan(Math.tan(v / 2) / z * sprintBoost) * 180 / Math.PI;
    this.camera.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- zones & progress
  currentZoneKey() { return this.phase <= 4 && PHASES[this.phase] ? PHASES[this.phase].zone : null; }
  unlockedZones() { const out = []; for (let p = 1; p <= Math.min(4, this.phase); p++) out.push(PHASES[p].zone); return out; }
  activeGrimeZones() { return this.unlockedZones(); }
  spawnZones() {
    const z = this.unlockedZones();
    const cur = this.currentZoneKey();
    if (this.victory) return z;
    return cur ? [cur, cur, cur, cur, ...z] : z;
  }
  inHub() { return this.level.zoneAtWorld(this.player.pos.x, this.player.pos.z) === 'h'; }
  bossActive() { return !!(this.enemies.boss && this.enemies.boss.alive && this.enemies.boss.active); }

  checkProgress() {
    if (this.victory || this.phase > 4) return;
    const ph = PHASES[this.phase];
    if (this.phase === 4 && this.bossAwake) return;
    const cl = this.grime.cleanliness(ph.zone);
    if (cl >= ph.threshold) this.completePhase();
  }
  completePhase() {
    const p = this.phase;
    const ph = PHASES[p];
    this.addCredits(ph.bonus, null, false, `PHASE ${p} COMPLETE`);
    this.audio.phase();
    if (p < 4) {
      this.phase = p + 1;
      this.level.openDoor(this.phase);
      this.audio.door();
      this.ui.invalidateMinimap();
      const next = PHASES[this.phase];
      this.ui.banner(`PHASE ${p} COMPLETE`, `${ZONE_INFO[next.zone].name} unlocked — +${ph.bonus} ¢`, 4.5, '#8bff5a');
      if (this.phase === 2 && !this.weapons.tools.washer) setTimeout(() => this.ui.flash('Tip: buy the Hydro Lance at the Supply Terminal in HQ', '#7fc8ff'), 4800);
      if (this.phase === 3 && !this.weapons.tools.torch) setTimeout(() => this.ui.flash('Tip: the Spore Torch is now for sale at the Supply Terminal', '#ff9a3a'), 4800);
      if (this.phase === 3) setTimeout(() => this.ui.flash('The Refinery in HQ is now online — upgrade your gun!', '#e09bff'), 9000);
      if (this.phase === 4) this.enemies.createBoss();
      this.enemies.surgeTimer = Math.min(this.enemies.surgeTimer, 45);
    } else {
      this.bossAwake = true;
      this.enemies.awakenBoss();
      this.ui.banner('THE BLOOM MOTHER AWAKENS', 'Wash off its slime shield, then destroy the core!', 5, '#ff4ad0');
    }
    this.save();
  }
  onBossDefeated() {
    this.victory = true;
    this.phase = 5;
    this.save();
    this.victoryT = 3.5;
  }
  showVictory() {
    this.state = 'victory';
    this.input.unlock();
    this.audio.stopLoops();
    this.ui.renderStats(document.getElementById('victoryStats'));
    this.ui.show('victory', true);
  }

  addCredits(n, pos, small = false, label = null) {
    const amt = Math.round(n * (this.powerups.double > 0 ? 2 : 1));
    this.credits += amt; this.stats.earned += amt;
    this.ui.popup((label ? label + '  ' : '') + '+' + amt, !small);
    if (!small) this.audio.cash();
  }
  spend(n) {
    if (this.credits < n) { this.audio.deny(); this.ui.flash('Not enough credits', '#ff5a4a'); return false; }
    this.credits -= n; this.audio.buy();
    return true;
  }
  applyPowerup(kind, name) {
    this.ui.banner(name, '', 2, '#fff');
    this.audio.phase();
    if (kind === 'ammo') { this.weapons.refillAllAmmo(); this.weapons.grenades = Math.min(6, this.weapons.grenades + 1); }
    else if (kind === 'double') this.powerups.double = 30;
    else if (kind === 'insta') this.powerups.insta = 30;
    else if (kind === 'purge') { this.enemies.purgeAll(); this.addCredits(400, null, false, 'PURGE'); }
  }

  // ---------------------------------------------------------------- interactables
  buildInteractables() {
    const L = this.level;
    this.interactables = [];
    for (const o of L.objects) {
      const ix = o.cx + o.face[0] * CELL * 0.9, iz = o.cz + o.face[1] * CELL * 0.9;
      this.interactables.push({ kind: o.kind, x: ix, z: iz, ox: o.cx, oz: o.cz, obj: o });
    }
    for (const wb of L.wallbuys) this.interactables.push({ kind: 'wallbuy', x: wb.x, z: wb.z, ox: wb.mesh.position.x, oz: wb.mesh.position.z, gun: wb.gun });
  }
  findInteractable() {
    const P = this.player;
    let best = null, bd = 1e9;
    const fx = -Math.sin(P.yaw), fz = -Math.cos(P.yaw);
    for (const it of this.interactables) {
      const d = Math.hypot(it.x - P.pos.x, it.z - P.pos.z);
      if (d > 1.9) continue;
      const tx = it.ox - P.pos.x, tz = it.oz - P.pos.z, tl = Math.hypot(tx, tz) || 1;
      if ((tx * fx + tz * fz) / tl < 0.2) continue;
      if (d < bd) { bd = d; best = it; }
    }
    return best;
  }
  promptFor(it) {
    const W = this.weapons;
    const E = '<b>[E]</b>';
    switch (it.kind) {
      case 'S': return `${E} Open Supply Terminal`;
      case 'I': return W.tank > 0 ? `${E} Empty tank — ${Math.floor(W.tank)} units → <b>${Math.floor(W.tank * ECON.perUnit * (this.powerups.double > 0 ? 2 : 1))} ¢</b>` : 'Disposal Chute — your tank is empty';
      case 'W': return W.tools.washer || W.tools.torch ? `${E} Refill water &amp; fuel` : 'Service Station — refills the Hydro Lance and Spore Torch';
      case 'P': { const p = PERKS[it.obj.perk]; return this.perks[it.obj.perk] ? `${p.name} — owned` : `${E} Buy ${p.name} — <b>${p.cost} ¢</b><br><small>${p.desc}</small>`; }
      case 'R': {
        if (this.phase < 3) return 'Refinery — offline until Phase 3';
        const c = W.current;
        if (!c || c.type !== 'gun') return 'Refinery — hold a gun to refine it';
        if (c.st.refined) return 'Refinery — this gun is already refined';
        return `${E} Refine ${c.def.name} — <b>${ECON.refineCost} ¢</b><br><small>×2.2 damage, bigger mags, extra pierce</small>`;
      }
      case 'M': return `${E} Supply Crate — random weapon — <b>${ECON.crateCost} ¢</b>`;
      case 'wallbuy': {
        const d = GUNS[it.gun];
        if (W.ownsGun(it.gun)) { const st = W.guns.find(x => x && x.id === it.gun); return `${E} Buy ammo for ${d.name} — <b>${st.refined ? d.ammoCost * 3 : d.ammoCost} ¢</b>`; }
        return `${E} Buy ${d.name} — <b>${d.cost} ¢</b>`;
      }
    }
    return '';
  }
  interact(it) {
    const W = this.weapons;
    switch (it.kind) {
      case 'S': this.openShop(); break;
      case 'I': {
        if (W.tank <= 0) { this.audio.deny(); break; }
        const units = Math.floor(W.tank);
        this.stats.units += units;
        this.addCredits(units * ECON.perUnit, null, false, 'DEBRIS SOLD');
        W.tank = 0;
        this.particles.burst(it.ox, 1.6, it.oz, 0x8dff6f, 25, 3, 0.1);
        this.save();
        break;
      }
      case 'W': {
        if (!W.tools.washer && !W.tools.torch) { this.audio.deny(); break; }
        W.water = W.resCap(); W.fuel = W.resCap();
        this.audio.buy(); this.ui.flash('Water and fuel refilled', '#7fc8ff');
        break;
      }
      case 'P': {
        const k = it.obj.perk, p = PERKS[k];
        if (this.perks[k]) break;
        if (this.spend(p.cost)) {
          this.perks[k] = true;
          this.ui.banner(p.name.toUpperCase(), p.desc, 2.5, '#' + p.color.toString(16).padStart(6, '0'));
          if (k === 'ironhide') this.player.hp = 200;
          this.save();
        }
        break;
      }
      case 'R': {
        if (this.phase < 3) { this.audio.deny(); break; }
        const c = W.current;
        if (!c || c.type !== 'gun' || c.st.refined) { this.audio.deny(); break; }
        if (this.spend(ECON.refineCost)) {
          W.refine();
          this.ui.banner('REFINED', W.current.def.name, 2.5, '#e09bff');
          this.particles.burst(it.ox, 1.5, it.oz, 0xc04dff, 50, 5, 0.12);
          this.save();
        }
        break;
      }
      case 'M': {
        const pool = CRATE_POOL.filter(id => !W.ownsGun(id));
        if (!pool.length) { this.ui.flash('You already own everything in the crate!', '#ffd25a'); break; }
        if (this.spend(ECON.crateCost)) {
          const id = pool[(Math.random() * pool.length) | 0];
          W.giveGun(id);
          this.ui.banner(GUNS[id].name.toUpperCase(), 'from the Supply Crate', 2.2, '#7fd8ff');
          this.particles.burst(it.ox, 1.3, it.oz, 0x7fd8ff, 40, 5, 0.1);
          this.save();
        }
        break;
      }
      case 'wallbuy': {
        const d = GUNS[it.gun];
        if (W.ownsGun(it.gun)) {
          const st = W.guns.find(x => x && x.id === it.gun);
          const s = W.gunStats(st);
          if (st.mag >= s.mag && st.reserve >= s.reserve) { this.ui.flash('Ammo already full', '#fff'); break; }
          if (this.spend(st.refined ? d.ammoCost * 3 : d.ammoCost)) W.refillAmmo(it.gun);
        } else if (this.spend(d.cost)) { W.giveGun(it.gun); this.save(); }
        break;
      }
    }
  }

  // ---------------------------------------------------------------- shop
  openShop() {
    this.state = 'shop';
    this.audio.stopLoops();
    this.input.unlock();
    this.ui.renderShop();
    this.ui.show('shop', true);
  }
  closeShop() {
    this.ui.show('shop', false);
    this.state = 'playing';
    this.input.lock();
  }
  shopAction(act) {
    const W = this.weapons;
    const [kind, id] = act.split(':');
    if (kind === 'gun') { const cost = id === 'sidearm' ? 300 : Math.round(GUNS[id].cost * 1.15); if (!W.ownsGun(id) && this.spend(cost)) W.giveGun(id); }
    else if (kind === 'ammo') { const st = W.guns.find(x => x && x.id === id); if (st && this.spend(st.refined ? GUNS[id].ammoCost * 3 : GUNS[id].ammoCost)) W.refillAmmo(id); }
    else if (kind === 'knife') {
      if (W.ownedKnives[id]) { W.setKnife(id); this.audio.pickup(); }
      else if (this.spend(KNIVES[id].cost)) W.setKnife(id);
    } else if (kind === 'tool') {
      const t = TOOLS[id];
      if (!W.tools[id] && (!t.minPhase || this.phase >= t.minPhase) && this.spend(t.cost)) {
        W.tools[id] = true;
        if (id === 'washer') W.water = W.resCap();
        if (id === 'torch') W.fuel = W.resCap();
        W.switchTo(id);
      }
    } else if (kind === 'upg') {
      const u = UPGRADES[id]; const lvl = this.upg[id];
      if (lvl < u.costs.length && this.spend(u.costs[lvl])) { this.upg[id]++; this.stats.armor = UPGRADES.armor.values[this.upg.armor]; }
    } else if (kind === 'grenade') { if (W.grenades < 6 && this.spend(ECON.grenadeCost)) W.grenades = Math.min(6, W.grenades + 2); }
    else if (kind === 'allammo') { if (this.spend(this.ui.allAmmoCost())) W.refillAllAmmo(); }
    else if (kind === 'heal') { if (this.player.hp < this.player.maxHp && this.spend(250)) this.player.hp = this.player.maxHp; }
    else if (kind === 'remote') {
      if (W.tank >= 1) { const u = Math.floor(W.tank); this.stats.units += u; this.addCredits(Math.floor(u * ECON.perUnit * 0.75), null, false, 'REMOTE PURGE'); W.tank = 0; }
    }
    this.save();
    this.ui.renderShop();
  }

  // ---------------------------------------------------------------- states
  wireMenus() {
    const $ = (id) => document.getElementById(id);
    const hasSave = !!store.get(SAVE_KEY);
    $('btnContinue').classList.toggle('hidden', !hasSave);
    $('btnNew').onclick = () => { this.audio.init(); this.newGame(); };
    $('btnContinue').onclick = () => { this.audio.init(); this.continueGame(); };
    const openSub = (id, from) => { this.subFrom = from; this.ui.show(from, false); this.ui.show(id, true); if (id === 'settings') this.syncSettingsUI(); };
    $('btnControls').onclick = () => openSub('controls', 'menu');
    $('btnSettings').onclick = () => openSub('settings', 'menu');
    $('btnPControls').onclick = () => openSub('controls', 'pause');
    $('btnPSettings').onclick = () => openSub('settings', 'pause');
    document.querySelectorAll('.btnBack').forEach(b => b.onclick = () => { this.ui.show('controls', false); this.ui.show('settings', false); this.ui.show(this.subFrom || 'menu', true); });
    $('btnResume').onclick = () => this.resume();
    $('btnSaveQuit').onclick = () => { this.save(); store.sdel('gp.autostart'); location.reload(); };
    $('btnRespawn').onclick = () => this.respawn();
    $('btnFreeRoam').onclick = () => { this.ui.show('victory', false); this.state = 'playing'; this.input.lock(); };
    $('btnVictoryQuit').onclick = () => { this.save(); location.reload(); };
    $('shopClose').onclick = () => this.closeShop();
    $('shopTabs').onclick = (e) => { const t = e.target.closest('button'); if (t && t.dataset.tab) { this.ui.shopTab = t.dataset.tab; this.ui.renderShop(); } };
    $('shopBody').onclick = (e) => { const t = e.target.closest('button'); if (t && t.dataset.act && !t.disabled) this.shopAction(t.dataset.act); };
    const bind = (id, key, fmt, apply) => {
      const el = $(id);
      el.oninput = () => { this.settings[key] = el.type === 'checkbox' ? el.checked : parseFloat(el.value); if (apply) apply(); this.syncSettingsUI(); store.set(SET_KEY, JSON.stringify(this.settings)); };
      void fmt;
    };
    bind('sens', 'sens'); bind('fov', 'fov', null, () => this.updateFov()); bind('vol', 'vol', null, () => this.audio.setVolume(this.settings.vol));
    bind('invert', 'invert'); bind('showFps', 'showFps');
    $('quality').onchange = () => { this.settings.quality = $('quality').value; this.post.setQuality(this.settings.quality); store.set(SET_KEY, JSON.stringify(this.settings)); };
    const diff = document.querySelectorAll('input[name=diff]');
    diff.forEach(r => r.onchange = () => { this.difficulty = parseFloat(r.value); });
  }
  syncSettingsUI() {
    const $ = (id) => document.getElementById(id);
    const s = this.settings;
    $('sens').value = s.sens; $('sensVal').textContent = s.sens.toFixed(2);
    $('fov').value = s.fov; $('fovVal').textContent = s.fov;
    $('vol').value = s.vol; $('volVal').textContent = Math.round(s.vol * 100) + '%';
    $('invert').checked = !!s.invert; $('showFps').checked = !!s.showFps;
    $('quality').value = s.quality || 'high';
  }

  newGame() {
    // If this page already has a game in progress, reload for a clean world.
    if (this.started) { store.del(SAVE_KEY); store.sset('gp.autostart', 'new:' + this.difficulty); location.reload(); return; }
    store.del(SAVE_KEY);
    this.started = true;
    this.startPlaying();
    this.ui.banner('PHASE 1 — LOADING BAY', 'Vacuum the debris (4), sell it at a Disposal Chute. Clean 80% to advance.', 6, '#8fe3ff');
  }
  continueGame() {
    if (this.started) { store.sset('gp.autostart', 'continue'); location.reload(); return; }
    this.started = true;
    if (!this.load()) { this.newGame(); return; }
    this.startPlaying();
    this.ui.banner('CONTRACT RESUMED', PHASES[Math.min(4, this.phase)] ? PHASES[Math.min(4, this.phase)].title : '', 3, '#8fe3ff');
  }
  startPlaying() {
    this.ui.show('menu', false);
    this.ui.show('loading', false);
    this.ui.show('hud', true);
    this.state = 'playing';
    this.input.lock();
  }
  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.audio.stopLoops();
    this.ui.renderStats(document.getElementById('pauseStats'));
    this.ui.show('pause', true);
  }
  resume() {
    this.ui.show('pause', false);
    this.state = 'playing';
    this.input.lock();
  }
  onKey(e) {
    if (e.code === 'Escape' || e.code === 'KeyE') {
      if (this.state === 'shop') { e.preventDefault(); this.closeShop(); return; }
    }
    if (e.code === 'Escape' && this.state === 'paused' && !document.getElementById('pause').classList.contains('hidden')) { this.resume(); return; }
    if (e.code === 'KeyP' && this.state === 'playing') { this.input.unlock(); this.pause(); return; }
    if (e.code === 'Tab' && this.state === 'playing') { this.ui.renderStats(document.getElementById('statsBody')); this.ui.show('stats', true); }
  }
  onPlayerDeath() {
    if (this.state !== 'playing') return;
    this.state = 'dead';
    this.stats.deaths++;
    this.audio.stopLoops();
    this.input.unlock();
    const lost = Math.floor(this.credits * 0.1);
    this.credits -= lost;
    const tank = Math.floor(this.weapons.tank);
    this.weapons.tank = 0;
    document.getElementById('deathText').textContent = `You dropped ${lost} ¢ and ${tank} units of debris. Your cleaning progress is safe.`;
    this.ui.show('death', true);
    this.save();
  }
  respawn() {
    this.ui.show('death', false);
    const st = this.level.startCell;
    const [sx, sz] = this.level.center(st.x, st.y);
    this.player.spawnAt(sx, sz, -Math.PI / 2);
    this.player.hp = this.player.maxHp;
    this.enemies.clearAll();
    this.weapons.refillAllAmmo();
    this.state = 'playing';
    this.input.lock();
  }

  // ---------------------------------------------------------------- save / load
  save() {
    if (!this.started) return;
    const data = {
      v: 1, phase: this.phase, victory: this.victory, bossAwake: this.bossAwake, credits: this.credits, difficulty: this.difficulty,
      upg: this.upg, perks: this.perks, stats: this.stats, weapons: this.weapons.serialize(), grime: this.grime.serialize(),
    };
    store.set(SAVE_KEY, JSON.stringify(data));
  }
  load() {
    let d;
    try { d = JSON.parse(store.get(SAVE_KEY) || 'null'); } catch (e) { d = null; }
    if (!d || d.v !== 1) return false;
    try {
      this.phase = Math.max(1, Math.min(5, d.phase | 0));
      this.victory = !!d.victory;
      this.bossAwake = !!d.bossAwake && !this.victory;
      this.credits = Math.max(0, d.credits | 0);
      this.difficulty = +d.difficulty || 1;
      for (const k in this.upg) this.upg[k] = Math.max(0, Math.min(UPGRADES[k].costs.length, (d.upg && d.upg[k]) | 0));
      this.perks = {}; for (const k in PERKS) if (d.perks && d.perks[k]) this.perks[k] = true;
      Object.assign(this.stats, d.stats || {});
      this.stats.armor = UPGRADES.armor.values[this.upg.armor];
      this.weapons.deserialize(d.weapons);
      this.grime.deserialize(d.grime);
      for (let p = 2; p <= Math.min(4, this.phase); p++) this.level.openDoor(p, true);
      if (this.phase >= 4 && !this.victory) { this.enemies.createBoss(); if (this.bossAwake) this.enemies.awakenBoss(); }
      this.player.hp = this.perks.ironhide ? 200 : 100;
      this.ui.invalidateMinimap();
      return true;
    } catch (e) {
      console.error('Save load failed', e);
      return false;
    }
  }

  // ---------------------------------------------------------------- loop
  step(dt) {
    this.time += dt;
    const playing = this.state === 'playing';
    const active = playing && this.input.isLocked();
    if (playing) {
      this.stats.time += dt;
      this.player.update(dt, this.input, active);
      this.weapons.update(dt, this.input, active);
      this.enemies.update(dt);
      this.powerups.double = Math.max(0, this.powerups.double - dt);
      this.powerups.insta = Math.max(0, this.powerups.insta - dt);
      // interaction
      const it = this.findInteractable();
      this.ui.setPrompt(it ? this.promptFor(it) : '');
      if (it && active && this.input.hit('KeyE')) this.interact(it);
      this.checkT -= dt;
      if (this.checkT <= 0) { this.checkT = 0.5; this.checkProgress(); }
      this.autosaveT -= dt;
      if (this.autosaveT <= 0) { this.autosaveT = 30; this.save(); }
      this.ui.update(dt);
      if (this.victoryT > 0) { this.victoryT -= dt; if (this.victoryT <= 0) this.showVictory(); }
    }
    this.level.update(dt, this.time);
    this.grime.update(dt, this.time);
    this.particles.update(dt);
    this.effects.update(dt);
    this.ambience.update(dt);
    if (playing) this.barrels.update(dt);
    this.input.endFrame();
  }
  render() {
    this.player.applyCamera(this.camera);
    if (this.shake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.2;
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.2;
      this.shake = Math.max(0, this.shake - 0.02);
    }
    this.updateFov();
    this.post.render(this.lastDt || 0.016, this.state !== 'menu');
  }
  frame(now) {
    const dt = Math.min(0.05, Math.max(0, (now - this.last) / 1000));
    this.last = now;
    if (dt > 0) this.fps = this.fps * 0.95 + (1 / dt) * 0.05;
    this.lastDt = dt;
    this.step(dt);
    this.render();
  }
  run() {
    if (window.__MANUAL__) return; // test harness drives step()/render() itself
    const loop = (t) => {
      try { this.frame(t); } catch (e) { showError(e); }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

function showError(e) {
  console.error(e);
  const box = document.getElementById('errorBox');
  if (box && !box.dataset.shown) { box.dataset.shown = '1'; box.classList.remove('hidden'); box.textContent = 'Error: ' + (e && e.stack ? e.stack : e); }
}

window.addEventListener('error', (e) => showError(e.error || e.message));

function boot() {
  let game;
  try {
    game = new Game();
  } catch (e) { showError(e); return; }
  window.GAME = game;
  document.getElementById('loading').classList.add('hidden');
  const auto = store.sget('gp.autostart');
  store.sdel('gp.autostart');
  if (auto) {
    // came from an in-game "new"/"continue" reload: one click to start (pointer lock needs a gesture)
    const menuBtn = auto === 'continue' ? 'btnContinue' : 'btnNew';
    if (auto.startsWith('new:')) {
      game.difficulty = parseFloat(auto.split(':')[1]) || 1;
      document.querySelectorAll('input[name=diff]').forEach(r => { r.checked = parseFloat(r.value) === game.difficulty; });
    }
    document.getElementById(menuBtn).classList.remove('hidden');
  }
  game.run();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

export { Game, ZONE_KEYS };
