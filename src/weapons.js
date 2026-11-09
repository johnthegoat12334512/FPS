import * as THREE from 'three';
import { GUNS, KNIVES, REFINED_NAMES, UPGRADES, ECON } from './data.js';
import { buildGun, buildKnife, buildTool, Casings } from './viewmodel.js';
import { gunAnim, knifeAnim, toolAnim } from './anims.js';
import { clamp, damp } from './rng.js';

export const SLOTS = ['gun0', 'gun1', 'knife', 'vacuum', 'washer', 'torch'];

export class Weapons {
  constructor(game) {
    this.game = game;
    this.guns = [{ id: 'sidearm', mag: GUNS.sidearm.mag, reserve: GUNS.sidearm.reserve, refined: false }, null];
    this.knife = 'combat';
    this.ownedKnives = { combat: true };
    this.tools = { vacuum: true, washer: false, torch: false };
    this.grenades = 2;
    this.slot = 'gun0'; this.lastSlot = 'vacuum';
    this.tank = 0; this.water = 100; this.fuel = 100;

    this.cool = 0; this.reloadT = 0; this.reloading = false;
    this.switchT = 0; this.switching = false; this.pendingSlot = null;
    this.adsT = 0; this.ads = false; this.adsZoomFactor = 1;
    this.lastShot = -10;
    this.meleeT = 0; this.meleeHeavy = false; this.meleeHitDone = true; this.quickMelee = false;
    this.inspectT = 0;
    this.kick = 0; this.kickRot = 0;
    this.sway = new THREE.Vector2();
    this.toolActive = false;
    this.grenadesLive = [];
    this.throwT = 0;

    this.vmScene = new THREE.Scene();
    this.vmCam = new THREE.PerspectiveCamera(62, 1, 0.01, 10);
    this.vmScene.add(new THREE.HemisphereLight(0xdfe8ff, 0x403830, 0.55));
    const dl = new THREE.DirectionalLight(0xfff2e0, 1.6); dl.position.set(1, 2, 1); this.vmScene.add(dl);
    const rim = new THREE.DirectionalLight(0x80b0ff, 0.9); rim.position.set(-1.5, 0.5, -1); this.vmScene.add(rim);
    this.vmRoot = new THREE.Group(); this.vmScene.add(this.vmRoot);
    this.casings = new Casings(this.vmScene);
    this.shots = 0; this.animFlags = {};
    this.flashLight = new THREE.PointLight(0xffb060, 0, 9, 1.6);
    game.scene.add(this.flashLight);
    // visible water jet + suction cone (world space)
    const jetGeo = new THREE.CylinderGeometry(0.015, 0.075, 1, 10, 1, true); jetGeo.translate(0, 0.5, 0);
    const stripes = document.createElement('canvas'); stripes.width = 64; stripes.height = 256;
    { const c2 = stripes.getContext('2d'); for (let y = 0; y < 256; y += 4) { c2.fillStyle = `rgba(255,255,255,${0.25 + Math.random() * 0.75})`; c2.fillRect(0, y, 64, 2 + Math.random() * 3); } }
    this.streamTex = new THREE.CanvasTexture(stripes); this.streamTex.wrapS = this.streamTex.wrapT = THREE.RepeatWrapping;
    this.jet = new THREE.Mesh(jetGeo, new THREE.MeshBasicMaterial({ map: this.streamTex, color: new THREE.Color(0.7, 1.3, 2.2), transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.jet.visible = false; this.jet.frustumCulled = false; game.scene.add(this.jet);
    const coneGeo = new THREE.CylinderGeometry(1, 0.06, 1, 20, 1, true); coneGeo.translate(0, 0.5, 0);
    this.suction = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ map: this.streamTex, color: new THREE.Color(0.9, 0.85, 0.7), transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.suction.visible = false; this.suction.frustumCulled = false; game.scene.add(this.suction);
    this.vmFlashLight = new THREE.PointLight(0xffb060, 0, 2, 1.5);
    this.vmScene.add(this.vmFlashLight);
    this.models = {};
    this.knifeVM = null;
    this.rebuildModel();
    this.grenadeGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.16, 10);
    this.grenadeMat = new THREE.MeshLambertMaterial({ color: 0x3fbfff, emissive: 0x0a3050 });
  }

  // ---------------------------------------------------------------- helpers
  get current() {
    const s = this.slot;
    if (s === 'gun0' || s === 'gun1') { const st = this.guns[s === 'gun0' ? 0 : 1]; return st ? { type: 'gun', st, def: this.gunStats(st) } : null; }
    if (s === 'knife') return { type: 'knife', def: KNIVES[this.knife] };
    return { type: 'tool', kind: s };
  }
  gunStats(st) {
    const b = GUNS[st.id];
    if (!st.refined) return { ...b, id: st.id };
    return { ...b, id: st.id, name: REFINED_NAMES[st.id], dmg: b.dmg * 2.2, mag: Math.round(b.mag * 1.5), reserve: Math.round(b.reserve * 1.5), rate: b.rate * 1.1, ammoCost: b.ammoCost * 3, pierce: (b.pierce || 0) + 1 };
  }
  has(slot) {
    if (slot === 'gun0') return !!this.guns[0];
    if (slot === 'gun1') return !!this.guns[1];
    if (slot === 'knife') return true;
    return !!this.tools[slot];
  }
  tankCap() { return UPGRADES.tank.values[this.game.upg.tank]; }
  resCap() { return UPGRADES.reservoir.values[this.game.upg.reservoir]; }
  cleanMul() { return this.game.perks.janitor ? 1.4 : 1; }
  isFiringBlocksSprint() {
    const c = this.current;
    if (!c) return false;
    const g = this.game;
    if (c.type === 'gun' && (g.input.mouse[0] && c.st.mag > 0)) return true;
    if (c.type === 'tool' && g.input.mouse[0]) return true;
    return g.time - this.lastShot < 0.2;
  }
  adsMoveSpeed() { const c = this.current; return c && c.type === 'gun' && c.def.scope ? 2.4 : 3.3; }

  ownsGun(id) { return this.guns.some(g => g && g.id === id); }

  giveGun(id) {
    const d = GUNS[id];
    const st = { id, mag: d.mag, reserve: d.reserve, refined: false };
    const idx = this.guns.findIndex(g => g && g.id === id);
    if (idx >= 0) return false;
    let slotIdx = this.guns[0] ? (this.guns[1] ? (this.slot === 'gun1' ? 1 : 0) : 1) : 0;
    this.guns[slotIdx] = st;
    this.models['gun' + slotIdx] = null;
    this.forceSwitch('gun' + slotIdx);
    return true;
  }
  refillAmmo(id) {
    const st = this.guns.find(g => g && g.id === id);
    if (!st) return false;
    const s = this.gunStats(st);
    st.mag = s.mag; st.reserve = s.reserve;
    return true;
  }
  refillAllAmmo() { for (const st of this.guns) if (st) { const s = this.gunStats(st); st.mag = s.mag; st.reserve = s.reserve; } }
  refine() {
    const c = this.current;
    if (!c || c.type !== 'gun' || c.st.refined) return false;
    c.st.refined = true;
    const s = this.gunStats(c.st); c.st.mag = s.mag; c.st.reserve = s.reserve;
    this.models[this.slot] = null;
    this.forceSwitch(this.slot);
    return true;
  }
  setKnife(id) { this.knife = id; this.ownedKnives[id] = true; this.models.knife = null; this.knifeVM = null; this.forceSwitch('knife'); }

  // ---------------------------------------------------------------- model mgmt
  modelFor(slot) {
    if (this.models[slot]) return this.models[slot];
    let m;
    if (slot === 'gun0' || slot === 'gun1') { const st = this.guns[slot === 'gun0' ? 0 : 1]; if (!st) return null; m = buildGun(st.id, st.refined); }
    else if (slot === 'knife') m = buildKnife(this.knife);
    else m = buildTool(slot);
    const sc = slot === 'knife' ? 0.8 : 0.62;
    m.scale.setScalar(sc); m.userData.sightY *= sc;
    this.models[slot] = m;
    return m;
  }
  rebuildModel() {
    this.vmRoot.clear();
    const m = this.modelFor(this.slot);
    if (m) this.vmRoot.add(m);
    if (!this.knifeVM) { this.knifeVM = buildKnife(this.knife); this.knifeVM.scale.setScalar(0.8); }
  }
  forceSwitch(slot) {
    this.slot = slot; this.switching = true; this.switchT = 0; this.pendingSlot = null;
    this.reloading = false; this.inspectT = 0; this.meleeT = 0;
    this.rebuildModel();
  }
  switchTo(slot) {
    if (slot === this.slot || !this.has(slot) || this.meleeT > 0) return;
    this.lastSlot = this.slot;
    this.slot = slot;
    this.switching = true; this.switchT = 0;
    this.reloading = false; this.inspectT = 0;
    this.adsT = 0;
    this.rebuildModel();
    this.game.audio.pickup();
  }
  onMantle() { this.inspectT = 0; }

  // ---------------------------------------------------------------- update
  update(dt, input, active) {
    const g = this.game, p = g.player;
    const quick = g.perks.quickhands ? 0.5 : 1;
    if (this.switching) { this.switchT += dt / (0.35 * quick); if (this.switchT >= 1) this.switching = false; }
    this.cool -= dt;

    if (active) {
      // slot switching
      const keys = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6'];
      keys.forEach((k, i) => { if (input.hit(k)) this.switchTo(SLOTS[i]); });
      if (input.hit('KeyQ')) this.switchTo(this.has(this.lastSlot) ? this.lastSlot : 'knife');
      if (input.wheel) {
        const avail = SLOTS.filter(s => this.has(s));
        let i = avail.indexOf(this.slot);
        i = (i + (input.wheel > 0 ? 1 : -1) + avail.length) % avail.length;
        this.switchTo(avail[i]);
      }
    }
    const c = this.current;
    if (!c) { this.switchTo('knife'); return; }

    // ADS
    const canAds = active && c.type === 'gun' && input.mouse[2] && !this.reloading && !p.sprinting && !this.switching && this.meleeT <= 0;
    this.adsT = clamp(this.adsT + (canAds ? dt / 0.2 : -dt / 0.15), 0, 1);
    this.ads = this.adsT > 0.5;
    const zoom = c.type === 'gun' ? c.def.zoom : 1;
    this.adsZoomFactor = 1 + (zoom - 1) * this.adsT * this.adsT;

    // reload
    if (this.reloading && c.type === 'gun') {
      this.reloadT += dt;
      if (c.def.cls === 'shotgun') {
        // shell-by-shell: open → shells → close (pump)
        const open = 0.25 * quick, per = 0.42 * quick, close = 0.35;
        this.phaseT += dt;
        if (this.reloadPhase === 'open' && this.phaseT >= open) { this.reloadPhase = 'shell'; this.phaseT = 0; }
        if (this.reloadPhase === 'shell') {
          this.shellP = this.phaseT / per;
          if (this.phaseT >= per) {
            this.phaseT -= per;
            if (c.st.mag < c.def.mag && c.st.reserve > 0) { c.st.mag++; c.st.reserve--; this.game.audio.reload(); }
            if (c.st.mag >= c.def.mag || c.st.reserve <= 0) { this.reloadPhase = 'close'; this.phaseT = 0; }
          }
        }
        if (this.reloadPhase === 'close' && this.phaseT >= close) this.reloading = false;
        this.reloadP = 0.5;
      } else {
        const dur = c.def.reload * quick;
        this.reloadP = Math.min(1, this.reloadT / dur);
        if (this.reloadT >= dur) {
          const need = c.def.mag - c.st.mag;
          const take = Math.min(need, c.st.reserve);
          c.st.mag += take; c.st.reserve -= take;
          this.reloading = false;
        }
      }
    }

    // melee timers
    if (this.meleeT > 0) {
      const dur = this.meleeDur;
      this.meleeT -= dt;
      if (!this.meleeHitDone && this.meleeT < dur * 0.55) { this.meleeHitDone = true; this.doMeleeHit(); }
      if (this.meleeT <= 0) { this.meleeT = 0; this.quickMelee = false; }
    }
    if (this.inspectT > 0) this.inspectT -= dt;

    let usingTool = false;
    if (active && !this.switching) {
      if (input.hit('KeyV') && this.meleeT <= 0) this.startMelee(false, c.type !== 'knife');
      if (input.hit('KeyF') && this.meleeT <= 0 && !this.reloading) { this.inspectT = this.inspectDur(c); this.inspectLen = this.inspectT; }
      if (input.hit('KeyG') && this.grenades > 0 && this.throwT <= 0) this.throwGrenade();

      if (c.type === 'gun' && this.meleeT <= 0) {
        if (input.hit('KeyR') && !this.reloading && c.st.mag < c.def.mag && c.st.reserve > 0) this.startReload();
        const want = c.def.auto ? input.mouse[0] : input.mousePressed[0];
        // shotgun reload can be interrupted by firing
        if (want && this.reloading && c.def.cls === 'shotgun' && c.st.mag > 0 && this.reloadPhase === 'shell') { this.reloading = false; this.cool = 0; }
        if (want && !this.reloading && this.cool <= 0 && !p.mantle) {
          if (c.st.mag > 0) this.fire(c);
          else if (c.st.reserve > 0) this.startReload();
          else { g.audio.click(); this.cool = 0.25; }
        }
      } else if (c.type === 'knife' && this.meleeT <= 0) {
        if (input.mouse[0]) this.startMelee(false, false);
        else if (input.mouse[2]) this.startMelee(true, false);
      } else if (c.type === 'tool' && this.meleeT <= 0 && !p.mantle) {
        if (input.mouse[0]) usingTool = this.useTool(c.kind, dt);
      }
    }
    if (usingTool !== this.toolActive) {
      this.toolActive = usingTool;
    }
    g.audio.loop('vacuum', usingTool && c.kind === 'vacuum');
    g.audio.loop('washer', usingTool && c.kind === 'washer');
    g.audio.loop('torch', usingTool && c.kind === 'torch');
    if (usingTool) this.inspectT = 0;

    this.throwT -= dt;
    this.updateGrenades(dt);
    this.animate(dt, input, c);
  }

  startReload() {
    this.reloading = true; this.reloadT = 0; this.inspectT = 0; this.reloadP = 0;
    this.reloadPhase = 'open'; this.phaseT = 0; this.shellP = 0;
    this.animFlags.ejected = false;
    this.game.audio.reload();
  }
  inspectDur(c) {
    if (c.type === 'knife') return this.knife === 'butterfly' ? 2.6 : 2.2;
    if (c.type === 'gun') return { cannon: 2.4, scatter: 2.0, mauler: 2.6, longbow: 2.6 }[c.st.id] || 2.2;
    return 1.8;
  }

  // ---------------------------------------------------------------- guns
  fire(c) {
    const g = this.game, p = g.player;
    const d = c.def;
    const rateMul = g.perks.doubletap ? 1.3 : 1;
    this.cool = 1 / (d.rate * rateMul);
    c.st.mag--;
    this.lastShot = g.time;
    this.inspectT = 0;
    g.audio.shot(d.sound);
    const eye = p.eyePos();
    const sp = p.speedH();
    let spread = this.ads ? d.ads : d.spread;
    if (!this.ads || !d.scope) spread *= 1 + Math.min(1, sp / 7) * 0.8;
    if (!p.onGround) spread *= 1.8;
    if (p.crouching || p.sliding) spread *= 0.8;
    if (d.scope && !this.ads) spread = Math.max(spread, d.spread);
    const fwd = p.forward();
    const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const muzzleW = eye.clone().addScaledVector(fwd, 0.6).addScaledVector(right, this.ads ? 0 : 0.14).addScaledVector(up, this.ads ? -0.06 : -0.12);
    for (let k = 0; k < d.pellets; k++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * spread;
      const dir = fwd.clone().addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r).normalize();
      this.hitscan(eye, dir, d, muzzleW);
    }
    // recoil
    const kick = d.recoil * (this.ads ? 0.6 : 1) * (p.crouching ? 0.8 : 1);
    p.pitch += kick; p.recoilPitch += kick;
    p.yaw += (Math.random() - 0.5) * kick * 0.6;
    this.kick = Math.min(0.12, this.kick + 0.03 + d.recoil * 0.6);
    this.kickRot = Math.min(0.3, this.kickRot + 0.05 + d.recoil * 1.5);
    const m = this.models[this.slot];
    if (m && m.userData.flash) { m.userData.flash.visible = true; m.userData.flash.rotation.z = Math.random() * 6; m.userData.flash.scale.multiplyScalar(1); this.flashT = 0.05; }
    this.shots++;
    this.animFlags.shellOut = false; this.animFlags.boltEject = false;
    if (m && !['scatter', 'longbow', 'cannon'].includes(c.st.id)) this.casings.eject(m);
    this.flashLight.position.copy(muzzleW); this.flashLight.intensity = d.cls === 'sniper' || d.cls === 'shotgun' ? 30 : 16;
    this.vmFlashLight.intensity = 3;
    if (m && m.userData.muzzle) { const mp = new THREE.Vector3(); m.userData.muzzle.getWorldPosition(mp); this.vmFlashLight.position.copy(mp); }
    g.ui.crosshairKick();
  }

  hitscan(eye, dir, d, muzzleW) {
    const g = this.game;
    const world = g.level.raycast(eye.x, eye.y, eye.z, dir.x, dir.y, dir.z, 150);
    const bh0 = g.barrels.raycast(eye, dir, world.dist);
    if (bh0) { g.barrels.damage(bh0.barrel, d.dmg); }
    const hits = g.enemies.raycast(eye, dir, bh0 ? bh0.dist : world.dist);
    let pierce = (d.pierce || 0) + 1;
    let mul = 1;
    let endDist = bh0 ? bh0.dist : world.dist;
    for (const h of hits) {
      if (pierce <= 0) { break; }
      const dmg = d.dmg * mul * (h.head ? d.head : 1);
      g.enemies.damage(h.enemy, dmg, { head: h.head, kind: 'bullet', point: h.point, dir });
      pierce--; mul *= 0.75;
      if (pierce <= 0) endDist = h.dist;
    }
    if (pierce > 0) {
      // boss
      const bh = g.enemies.bossRaycast(eye, dir, endDist);
      if (bh) { endDist = bh.dist; g.enemies.damageBoss(d.dmg * mul, bh.point, 'bullet'); }
      else if (endDist === world.dist && world.dist < 150) {
        g.particles.sparks(world.x, world.y, world.z, world.nx, world.ny, world.nz, 5);
        g.effects.bulletHole(world);
      }
    }
    const end = eye.clone().addScaledVector(dir, Math.min(endDist, 150));
    g.effects.tracer(muzzleW, end, d.cls === 'sniper' ? 0xbfe8ff : 0xffe2a0);
  }

  // ---------------------------------------------------------------- knife
  startMelee(heavy, quick) {
    const k = KNIVES[this.knife];
    const quickhands = this.game.perks.quickhands ? 0.85 : 1;
    this.meleeHeavy = heavy;
    this.quickMelee = quick;
    this.meleeDur = (heavy ? 1.6 : 1) / k.speed * quickhands;
    this.meleeT = this.meleeDur;
    this.meleeHitDone = false;
    this.inspectT = 0; this.reloading = this.reloading && !quick ? false : this.reloading;
    if (quick) this.reloading = false;
    this.game.audio.swing();
  }
  doMeleeHit() {
    const g = this.game, p = g.player;
    const k = KNIVES[this.knife];
    const eye = p.eyePos(), fwd = p.forward();
    const range = k.range * (this.meleeHeavy ? 1.1 : 1);
    const target = g.enemies.meleeTarget(eye, fwd, range + 1.2, 0.6);
    if (target) {
      const dist = Math.hypot(target.pos.x - p.pos.x, target.pos.z - p.pos.z);
      if (dist > range * 0.7) { // lunge
        const dx = (target.pos.x - p.pos.x) / dist, dz = (target.pos.z - p.pos.z) / dist;
        p.vel.x = dx * 9; p.vel.z = dz * 9;
      }
      const dmg = k.dmg * (this.meleeHeavy ? 1.85 : 1);
      g.enemies.damage(target, dmg, { kind: 'melee', point: target.pos.clone().setY(target.pos.y + 1.1), dir: fwd });
      g.audio.slash();
    } else {
      const brl = g.barrels.raycast(eye, fwd, range + 0.5);
      if (brl) { g.barrels.damage(brl.barrel, 999); }
      const bh = g.enemies.bossRaycast(eye, fwd, range + 0.8);
      if (bh) { g.enemies.damageBoss(k.dmg * (this.meleeHeavy ? 1.85 : 1), bh.point, 'melee'); g.audio.slash(); }
      else {
        const w = g.level.raycast(eye.x, eye.y, eye.z, fwd.x, fwd.y, fwd.z, range);
        if (w.dist < range) { g.particles.sparks(w.x, w.y, w.z, w.nx, w.ny, w.nz, 4); g.audio.hit(); }
      }
    }
  }

  // ---------------------------------------------------------------- tools
  useTool(kind, dt) {
    const g = this.game, p = g.player;
    const eye = p.eyePos(), fwd = p.forward();
    const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
    const nozzle = eye.clone().addScaledVector(fwd, 0.75).addScaledVector(right, 0.12).add(new THREE.Vector3(0, -0.15, 0));
    const zones = g.activeGrimeZones();
    if (kind === 'vacuum') {
      const cap = this.tankCap();
      if (this.tank >= cap - 0.01) { g.ui.flash('TANK FULL — empty it at a Disposal Chute', '#ffcf3a'); g.audio.deny(); return false; }
      const suction = UPGRADES.suction.values[g.upg.suction];
      const range = 4.5 + suction * 1.3;
      const rate = 16 * suction * this.cleanMul();
      const res = g.grime.vacuum(zones, eye.x, eye.y, eye.z, fwd.x, fwd.y, fwd.z, range, Math.cos(0.42), rate * dt, cap - this.tank, g.level, (pile) => { g.audio.pickup(); g.stats.piles++; void pile; });
      this.tank += res.collected;
      {
        const tip = nozzle.clone().addScaledVector(fwd, range);
        const dir = fwd.clone(); void tip;
        this.suction.position.copy(nozzle); this.suction.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir.clone().negate());
        const rr = range * Math.tan(0.42);
        this.suction.scale.set(rr, range, rr); this.suction.visible = true; this.suctionT = 0.05;
        this.streamTex.offset.y += 0.05; this.suction.rotation.y += 0.0;
      }
      for (const [, pile] of res.hits.slice(0, 6)) {
        if (Math.random() < 0.7) g.particles.suck(pile.x + (Math.random() - 0.5) * 0.5, 0.15, pile.z + (Math.random() - 0.5) * 0.5, nozzle.x, nozzle.y, nozzle.z);
      }
      // ambient suction swirl
      if (Math.random() < 0.5) {
        const d = 1 + Math.random() * 2.5;
        const px = nozzle.x + fwd.x * d + (Math.random() - 0.5) * d * 0.6, py = nozzle.y + fwd.y * d + (Math.random() - 0.5) * d * 0.6, pz = nozzle.z + fwd.z * d + (Math.random() - 0.5) * d * 0.6;
        g.particles.norm.spawn(px, py, pz, (nozzle.x - px) * 4, (nozzle.y - py) * 4, (nozzle.z - pz) * 4, 0.25, 0.03, 0.8, 0.8, 0.75, 0.4, 0, 0, 0);
      }
      // suction slows & pulls small enemies a bit, no damage
      return true;
    }
    if (kind === 'washer') {
      if (this.water <= 0) { g.ui.flash('OUT OF WATER — refill at a Service Station', '#7fc8ff'); g.audio.deny(); return false; }
      this.water = Math.max(0, this.water - 9 * dt);
      const pressure = UPGRADES.pressure.values[g.upg.pressure];
      const w = g.level.raycast(eye.x, eye.y, eye.z, fwd.x, fwd.y, fwd.z, 10);
      for (let i = 0; i < 4; i++) g.particles.water(nozzle.x, nozzle.y, nozzle.z, fwd.x, fwd.y, fwd.z, 0.08 + pressure * 0.02);
      {
        const end = eye.clone().addScaledVector(fwd, Math.min(w.dist, 10));
        const dir = end.clone().sub(nozzle); const len = dir.length(); dir.normalize();
        this.jet.position.copy(nozzle); this.jet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        this.jet.scale.set(0.8 + pressure * 0.2, len, 0.8 + pressure * 0.2); this.jet.visible = true; this.jetT = 0.05;
        this.streamTex.offset.y -= 0.12;
      }
      if (w.dist < 10) {
        if (Math.random() < 0.6) g.particles.mist(w.x + w.nx * 0.1, w.y + w.ny * 0.1, w.z + w.nz * 0.1);
        const radius = 0.55 + Math.sqrt(pressure) * 0.35;
        g.grime.wash(zones, w.x, w.y, w.z, radius, 85 * pressure * this.cleanMul() * dt, (s) => { g.addCredits(ECON.stain, null, true); g.stats.stains++; g.audio.pickup(); void s; });
      }
      // knockback + light damage to enemies
      const hits = g.enemies.raycast(eye, fwd, Math.min(w.dist, 10));
      if (hits.length) {
        const e = hits[0].enemy;
        g.enemies.damage(e, 18 * pressure * dt, { kind: 'water', silent: true });
        e.knock.x += fwd.x * 14 * dt; e.knock.z += fwd.z * 14 * dt;
      }
      const bh = g.enemies.bossRaycast(eye, fwd, Math.min(w.dist, 10));
      if (bh) g.enemies.washBoss(55 * pressure * this.cleanMul() * dt, bh.point);
      return true;
    }
    if (kind === 'torch') {
      if (this.fuel <= 0) { g.ui.flash('OUT OF FUEL — refill at a Service Station', '#ff8a3a'); g.audio.deny(); return false; }
      this.fuel = Math.max(0, this.fuel - 10 * dt);
      for (let i = 0; i < 4; i++) g.particles.flame(nozzle.x, nozzle.y, nozzle.z, fwd.x, fwd.y, fwd.z);
      const range = 6.5;
      g.grime.burn(zones, eye.x, eye.y - 0.2, eye.z, fwd.x, fwd.y, fwd.z, range, Math.cos(0.35), 50 * this.cleanMul() * dt, g.level, (s) => {
        g.addCredits(ECON.spore, null, true); g.stats.spores++; g.audio.pop();
        g.particles.burst(s.x, s.y + 0.2, s.z, 0xd060ff, 25, 4, 0.1);
      });
      g.enemies.coneDamage(eye, fwd, range, Math.cos(0.35), 95 * dt, 'fire');
      for (const b of g.barrels.list) { if (!b.alive) continue; const vx = b.x - eye.x, vz = b.z - eye.z, dd = Math.hypot(vx, vz); if (dd < range && (vx * fwd.x + vz * fwd.z) / dd > Math.cos(0.35)) g.barrels.damage(b, 25 * dt); }
      return true;
    }
    return false;
  }

  // ---------------------------------------------------------------- grenades
  throwGrenade() {
    const g = this.game, p = g.player;
    this.grenades--;
    this.throwT = 0.6;
    const fwd = p.forward();
    const eye = p.eyePos();
    const mesh = new THREE.Mesh(this.grenadeGeo, this.grenadeMat);
    mesh.position.copy(eye).addScaledVector(fwd, 0.5);
    g.scene.add(mesh);
    this.grenadesLive.push({ mesh, vel: fwd.clone().multiplyScalar(14).add(new THREE.Vector3(0, 3, 0)).add(p.vel.clone().multiplyScalar(0.5)), t: 1.6 });
    g.audio.swing();
  }
  updateGrenades(dt) {
    const g = this.game, L = g.level;
    for (let i = this.grenadesLive.length - 1; i >= 0; i--) {
      const gr = this.grenadesLive[i];
      gr.t -= dt;
      gr.vel.y -= 18 * dt;
      const p = gr.mesh.position;
      const nx = p.x + gr.vel.x * dt, ny = p.y + gr.vel.y * dt, nz = p.z + gr.vel.z * dt;
      const [cx, cz] = L.cellOf(nx, nz);
      const h = L.hAt(cx, cz);
      if (ny < h) {
        if (p.y >= h) { p.y = h; gr.vel.y *= -0.35; gr.vel.x *= 0.6; gr.vel.z *= 0.6; } // bounce top
        else { const [ox] = L.cellOf(p.x, p.z); if (ox !== cx) gr.vel.x *= -0.4; else gr.vel.z *= -0.4; }
      } else if (ny > 4.3) { gr.vel.y *= -0.3; }
      else p.set(nx, ny, nz);
      if (p.y < 0.08) { p.y = 0.08; gr.vel.y *= -0.35; gr.vel.x *= 0.7; gr.vel.z *= 0.7; }
      gr.mesh.rotation.x += dt * 8; gr.mesh.rotation.z += dt * 5;
      if (gr.t <= 0) {
        g.scene.remove(gr.mesh);
        this.grenadesLive.splice(i, 1);
        this.explodeFoam(p.x, Math.max(0.3, p.y), p.z);
      }
    }
  }
  explodeFoam(x, y, z) {
    const g = this.game;
    g.audio.boom();
    g.effects.explosion(x, y, z, 4.2, 'foam');
    for (let i = 0; i < 40; i++) g.particles.norm.spawn(x + (Math.random() - 0.5) * 3, y, z + (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3, 1.5, 0.5, 0.95, 0.98, 1, 0.6, 0.5, 1.5, 2);
    for (const b of g.barrels.list) if (b.alive && Math.hypot(b.x - x, b.z - z) < 4.5) g.barrels.damage(b, 999);
    g.grime.foam(g.activeGrimeZones(), x, z, 4.2,
      () => { g.addCredits(ECON.stain, null, true); g.stats.stains++; },
      (s) => { g.addCredits(ECON.spore, null, true); g.stats.spores++; void s; });
    g.enemies.radiusDamage(x, y, z, 5, 320 * (1 + 0.5 * (g.phase - 1)));
    g.enemies.washBoss(0, null, x, z, 6, 40);
  }

  // ---------------------------------------------------------------- viewmodel animation
  animate(dt, input, c) {
    const g = this.game, p = g.player;
    const m = this.models[this.slot];
    this.sway.x = damp(this.sway.x, clamp(-input.dx * 0.0006, -0.05, 0.05), 10, dt);
    this.sway.y = damp(this.sway.y, clamp(input.dy * 0.0006, -0.05, 0.05), 10, dt);
    this.kick = damp(this.kick, 0, 14, dt);
    this.kickRot = damp(this.kickRot, 0, 12, dt);
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0 && m && m.userData.flash) m.userData.flash.visible = false; }
    this.flashLight.intensity = Math.max(0, this.flashLight.intensity - dt * 400);
    if ((this.jetT -= dt) <= 0) this.jet.visible = false;
    if ((this.suctionT -= dt) <= 0) this.suction.visible = false;
    this.vmFlashLight.intensity = Math.max(0, this.vmFlashLight.intensity - dt * 60);
    this.casings.update(dt);

    const ads = this.adsT;
    const sightY = m ? m.userData.sightY : 0.05;
    const base = c.type === 'knife' ? new THREE.Vector3(0.17, -0.17, -0.34) : c.type === 'tool' ? new THREE.Vector3(0.15, -0.15, -0.3) : new THREE.Vector3(0.13, -0.125, -0.3);
    const adsPos = new THREE.Vector3(0, -sightY, -0.2);
    const pos = base.clone().lerp(adsPos, ads);
    const rot = new THREE.Euler(0, 0, 0);
    const o = { pos, rot };

    const bobA = p.bobAmt * (1 - ads * 0.85);
    pos.x += Math.cos(p.bob) * 0.012 * bobA;
    pos.y += Math.abs(Math.sin(p.bob)) * 0.014 * bobA;
    // idle breathing
    pos.y += Math.sin(g.time * 1.6) * 0.0025 * (1 - ads);
    rot.z += Math.sin(g.time * 0.8) * 0.006 * (1 - ads);
    pos.x += this.sway.x * (1 - ads * 0.7); pos.y += this.sway.y * (1 - ads * 0.7);
    rot.y += this.sway.x * 1.5;
    this.sprintT = damp(this.sprintT || 0, p.sprinting && this.meleeT <= 0 && !this.reloading ? 1 : 0, 10, dt);
    const sp = this.sprintT;
    if (c.type === 'gun') { pos.x += 0.04 * sp; pos.y -= 0.05 * sp; rot.y += 0.6 * sp; rot.x -= 0.2 * sp; rot.z += 0.25 * sp; }
    else { pos.y -= 0.04 * sp; rot.x -= 0.35 * sp; }
    pos.y += Math.sin(p.bob * 2) * 0.02 * sp;
    if (p.sliding) { rot.z += 0.2; pos.x -= 0.03; }
    if (p.mantle) { pos.y -= 0.12; rot.x -= 0.4; }
    pos.z += this.kick * (1 - ads * 0.5) * 0.4;
    rot.x += this.kickRot * (1 - ads * 0.6) * 0.3;

    const dT = this.switching ? 1 - this.switchT : 0;
    const iP = this.inspectT > 0 ? 1 - this.inspectT / (this.inspectLen || 2) : -1;
    const fx = {
      casing: (model, shell) => this.casings.eject(model, shell),
      casingAt: (model) => this.casings.eject(model),
    };
    let showQuickKnife = false;
    if (c.type === 'gun' && m) {
      gunAnim(m, c.st.id, {
        fT: g.time - this.lastShot, rP: this.reloading ? (this.reloadP || 0) : -1, dT, iP, shots: this.shots, mag: c.st.mag,
        reloadPhase: this.reloadPhase, phaseT: this.phaseT || 0, shellP: this.shellP || 0, reloadTime: this.reloadT, flags: this.animFlags, time: g.time,
      }, o, fx);
      if (ads > 0.01) { rot.x *= 1 - ads * 0.85; rot.y *= 1 - ads * 0.85; rot.z *= 1 - ads * 0.85; }
    } else if (c.type === 'knife' && m) {
      const t = this.meleeT > 0 && !this.quickMelee ? 1 - this.meleeT / this.meleeDur : -1;
      knifeAnim(m, m.userData.kind, { mT: t, heavy: this.meleeHeavy, alt: this.swingAlt, dT, iP }, o);
    } else if (c.type === 'tool' && m) {
      toolAnim(m, c.kind, { active: this.toolActive, full: this.tank >= this.tankCap() - 0.01, time: g.time, dT, iP }, o);
      if (m.userData.fill) {
        if (c.kind === 'vacuum') { const f = Math.max(0.02, this.tank / this.tankCap()); m.userData.fill.scale.y = f; }
        else if (c.kind === 'washer') m.userData.fill.material.opacity = 0.2 + 0.6 * (this.water / this.resCap());
      }
      if (m.userData.pilot) m.userData.pilot.scale.setScalar(this.toolActive ? 2.5 : 1 + Math.sin(g.time * 30) * 0.2);
    }
    if (this.meleeT > 0) {
      if (this.quickMelee) showQuickKnife = true;
      if (1 - this.meleeT / this.meleeDur > 0.97) this.swingAlt = !this.swingAlt;
    }

    if (m) {
      m.position.copy(pos);
      m.rotation.copy(rot);
      m.visible = !(c.type === 'gun' && c.def.scope && ads > 0.9) && !showQuickKnife;
    }
    if (this.knifeVM) {
      if (showQuickKnife) {
        if (this.knifeVM.parent !== this.vmRoot) this.vmRoot.add(this.knifeVM);
        const t = 1 - this.meleeT / this.meleeDur;
        const ko = { pos: new THREE.Vector3(0.15, -0.17, -0.34), rot: new THREE.Euler() };
        knifeAnim(this.knifeVM, this.knifeVM.userData.kind, { mT: t, heavy: false, alt: false, dT: 0, iP: -1 }, ko);
        ko.pos.y -= Math.pow(1 - Math.sin(t * Math.PI), 3) * 0.15;
        this.knifeVM.position.copy(ko.pos); this.knifeVM.rotation.copy(ko.rot);
        this.knifeVM.visible = true;
      } else if (this.knifeVM.parent === this.vmRoot) {
        this.vmRoot.remove(this.knifeVM);
      }
    }
  }

  serialize() {
    return { guns: this.guns, knife: this.knife, ownedKnives: this.ownedKnives, tools: this.tools, grenades: this.grenades, tank: this.tank, water: this.water, fuel: this.fuel };
  }
  deserialize(d) {
    if (!d) return;
    if (Array.isArray(d.guns)) this.guns = [d.guns[0] && GUNS[d.guns[0].id] ? d.guns[0] : null, d.guns[1] && GUNS[d.guns[1].id] ? d.guns[1] : null];
    if (!this.guns[0] && !this.guns[1]) this.guns[0] = { id: 'sidearm', mag: 12, reserve: 84, refined: false };
    if (d.knife && KNIVES[d.knife]) this.knife = d.knife;
    if (d.ownedKnives) this.ownedKnives = { combat: true, ...d.ownedKnives };
    if (d.tools) this.tools = { vacuum: true, washer: !!d.tools.washer, torch: !!d.tools.torch };
    this.grenades = d.grenades | 0; this.tank = +d.tank || 0; this.water = +d.water || 0; this.fuel = +d.fuel || 0;
    this.models = {}; this.knifeVM = null;
    this.slot = this.guns[0] ? 'gun0' : 'gun1';
    this.rebuildModel();
  }
}
