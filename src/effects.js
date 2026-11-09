import * as THREE from 'three';
import { CELL } from './level.js';
import { mulberry32 } from './rng.js';
import { mergeStatic } from './merge.js';

function radialTex(stops, size = 128, noiseAmt = 0) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [o, col] of stops) grd.addColorStop(o, col);
  g.fillStyle = grd; g.fillRect(0, 0, size, size);
  if (noiseAmt) {
    const rng = mulberry32(5);
    g.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < noiseAmt; i++) { g.fillStyle = `rgba(0,0,0,${rng() * 0.5})`; g.beginPath(); g.arc(rng() * size, rng() * size, 2 + rng() * size * 0.12, 0, 7); g.fill(); }
    g.globalCompositeOperation = 'source-over';
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Effects {
  constructor(game) {
    this.game = game;
    const scene = this.scene = game.scene;
    this.tracers = [];
    this.holes = [];
    this.holeGeo = new THREE.CircleGeometry(0.05, 8);
    this.holeMat = new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    // explosion assets
    this.fireTex = radialTex([[0, 'rgba(255,255,230,1)'], [0.2, 'rgba(255,210,110,1)'], [0.5, 'rgba(255,110,30,0.8)'], [1, 'rgba(120,20,0,0)']], 128, 40);
    this.smokeTex = radialTex([[0, 'rgba(60,60,60,0.9)'], [0.6, 'rgba(40,40,40,0.5)'], [1, 'rgba(20,20,20,0)']], 128, 60);
    this.foamTex = radialTex([[0, 'rgba(255,255,255,1)'], [0.4, 'rgba(200,240,255,0.9)'], [1, 'rgba(120,200,255,0)']], 128, 50);
    this.ringTex = radialTex([[0, 'rgba(255,255,255,0)'], [0.75, 'rgba(255,255,255,0)'], [0.88, 'rgba(255,255,255,0.9)'], [1, 'rgba(255,255,255,0)']], 256);
    this.scorchTex = radialTex([[0, 'rgba(0,0,0,0.85)'], [0.6, 'rgba(10,8,5,0.5)'], [1, 'rgba(0,0,0,0)']], 128, 30);
    this.sprites = [];
    this.rings = [];
    this.scorches = [];
    this.lights = [];
    for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xff8a3a, 0, 16, 1.4); scene.add(l); this.lights.push(l); }
    this.lightI = 0;
    this.ringGeo = new THREE.PlaneGeometry(1, 1);
  }

  tracer(a, b, color) {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const c = new THREE.Color(color).multiplyScalar(2.2);
    const mat = new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, t: 0.07 });
  }
  bulletHole(hit) {
    let h;
    if (this.holes.length >= 80) { h = this.holes.shift(); }
    else { h = new THREE.Mesh(this.holeGeo, this.holeMat); this.scene.add(h); }
    h.position.set(hit.x + hit.nx * 0.01, hit.y + hit.ny * 0.01, hit.z + hit.nz * 0.01);
    h.lookAt(hit.x + hit.nx, hit.y + hit.ny, hit.z + hit.nz);
    this.holes.push(h);
  }

  sprite(tex, x, y, z, s0, s1, life, opts = {}) {
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending, color: opts.color || 0xffffff, rotation: Math.random() * 6.28 });
    const s = new THREE.Sprite(mat);
    s.position.set(x, y, z); s.scale.setScalar(s0);
    this.scene.add(s);
    this.sprites.push({ s, s0, s1, life, max: life, vy: opts.vy || 0, vx: opts.vx || 0, vz: opts.vz || 0, a0: opts.alpha ?? 1, spin: (Math.random() - 0.5) * (opts.spin || 1) });
  }

  // Big explosion: fire (barrels, boss) or foam (grenade)
  explosion(x, y, z, radius = 4, kind = 'fire') {
    const g = this.game;
    const foam = kind === 'foam', goo = kind === 'goo';
    const tex = foam ? this.foamTex : this.fireTex;
    const col = foam ? new THREE.Color(1.6, 1.9, 2.2) : goo ? new THREE.Color(1.2, 2.6, 0.5) : new THREE.Color(2.4, 1.8, 1.3);
    this.sprite(tex, x, y, z, radius * 0.3, radius * 1.3, 0.45, { additive: true, color: col, spin: 2 });
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * 6.28, d = Math.random() * radius * 0.35;
      this.sprite(tex, x + Math.cos(a) * d, y + Math.random() * radius * 0.3, z + Math.sin(a) * d, radius * 0.2, radius * (0.5 + Math.random() * 0.4), 0.35 + Math.random() * 0.25, { additive: true, color: col, vy: 1.5, spin: 3 });
    }
    // smoke
    for (let i = 0; i < (foam ? 10 : 8); i++) {
      const a = Math.random() * 6.28, d = Math.random() * radius * 0.4;
      this.sprite(foam ? this.foamTex : this.smokeTex, x + Math.cos(a) * d, y + 0.3, z + Math.sin(a) * d, radius * 0.4, radius * (0.9 + Math.random() * 0.5), 1.6 + Math.random() * 1.0,
        { color: foam ? 0xe8f6ff : goo ? 0x4a6a2a : 0x555555, alpha: foam ? 0.7 : 0.75, vy: 0.7 + Math.random() * 0.8, vx: Math.cos(a) * 0.8, vz: Math.sin(a) * 0.8, spin: 0.6 });
    }
    // shockwave ring
    const rm = new THREE.MeshBasicMaterial({ map: this.ringTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: foam ? new THREE.Color(1, 2, 2.5) : goo ? new THREE.Color(1, 2.5, 0.6) : new THREE.Color(2.5, 1.6, 0.9), side: THREE.DoubleSide });
    const ring = new THREE.Mesh(this.ringGeo, rm);
    ring.rotation.x = -Math.PI / 2; ring.position.set(x, 0.08, z);
    this.scene.add(ring);
    this.rings.push({ m: ring, t: 0.5, max: 0.5, r: radius * 2.4 });
    // light flash
    const l = this.lights[this.lightI++ % this.lights.length];
    l.position.set(x, y + 0.8, z); l.color.set(foam ? 0x8ad8ff : goo ? 0x8aff3a : 0xff8a3a); l.intensity = 120; l.userData.decay = 300;
    // particles
    g.particles.burst(x, y, z, foam ? 0xdff6ff : goo ? 0x9cff4a : 0xffb040, 70, radius * 2.2, 0.12);
    if (goo) g.particles.goo(x, y, z, 0x8aa830, 50, 9);
    if (!foam && !goo) for (let i = 0; i < 18; i++) g.particles.norm.spawn(x, y, z, (Math.random() - 0.5) * 12, 3 + Math.random() * 8, (Math.random() - 0.5) * 12, 1.2, 0.09, 0.15, 0.12, 0.1, 1, 16, 0.5);
    // scorch / foam mark on floor
    if (y < 1.5 && !goo) {
      let sc;
      if (this.scorches.length >= 24) sc = this.scorches.shift();
      else { sc = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.scorchTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 })); sc.rotation.x = -Math.PI / 2; this.scene.add(sc); }
      sc.material.color.set(foam ? 0xbfe8ff : 0xffffff);
      sc.material.blending = foam ? THREE.AdditiveBlending : THREE.NormalBlending;
      sc.material.opacity = foam ? 0.35 : 1;
      sc.position.set(x, 0.015 + this.scorches.length * 0.0005, z); sc.scale.setScalar(radius * 1.1); sc.rotation.z = Math.random() * 6;
      this.scorches.push(sc);
    }
    // camera shake + screen flash by distance
    const d = g.player.pos.distanceTo(new THREE.Vector3(x, y, z));
    g.shake = Math.max(g.shake, Math.max(0, 0.9 - d / (radius * 4)));
    if (g.post) g.post.flash(Math.max(0, 0.35 - d / 40));
  }

  update(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.t -= dt;
      t.line.material.opacity = Math.max(0, t.t / 0.07) * 0.9;
      if (t.t <= 0) { this.scene.remove(t.line); t.line.geometry.dispose(); t.line.material.dispose(); this.tracers.splice(i, 1); }
    }
    const wind = this.game.ambience ? this.game.ambience.wind : null;
    for (let i = this.sprites.length - 1; i >= 0; i--) {
      const p = this.sprites[i];
      p.life -= dt;
      const f = 1 - p.life / p.max;
      p.s.scale.setScalar(p.s0 + (p.s1 - p.s0) * (1 - Math.pow(1 - f, 3)));
      p.s.material.opacity = p.a0 * Math.min(1, (1 - f) * 1.6);
      p.s.position.x += (p.vx + (wind ? wind.x * 0.4 : 0)) * dt; p.s.position.y += p.vy * dt; p.s.position.z += (p.vz + (wind ? wind.z * 0.4 : 0)) * dt;
      p.s.material.rotation += p.spin * dt;
      if (p.life <= 0) { this.scene.remove(p.s); p.s.material.dispose(); this.sprites.splice(i, 1); }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t -= dt;
      const f = 1 - r.t / r.max;
      r.m.scale.setScalar(0.5 + r.r * (1 - Math.pow(1 - f, 2)));
      r.m.material.opacity = 1 - f;
      if (r.t <= 0) { this.scene.remove(r.m); r.m.material.dispose(); this.rings.splice(i, 1); }
    }
    for (const l of this.lights) if (l.intensity > 0) l.intensity = Math.max(0, l.intensity - (l.userData.decay || 300) * dt);
  }
}

// ---------------------------------------------------------------- wind, dust, foliage, flicker
export class Ambience {
  constructor(game) {
    this.game = game;
    this.wind = new THREE.Vector3(1, 0, 0.3);
    this.gust = 0; this.gustT = 6; this.time = 0;
    // dust motes that drift with the wind around the player
    const N = 500;
    this.N = N;
    this.box = 18;
    const pos = new Float32Array(N * 3);
    const rng = mulberry32(3);
    for (let i = 0; i < N; i++) { pos[i * 3] = (rng() - 0.5) * this.box * 2; pos[i * 3 + 1] = rng() * 4.4; pos[i * 3 + 2] = (rng() - 0.5) * this.box * 2; }
    this.offs = new Float32Array(N); for (let i = 0; i < N; i++) this.offs[i] = rng() * 100;
    this.local = pos;
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    const c = document.createElement('canvas'); c.width = c.height = 32;
    const g2 = c.getContext('2d'); const gr = g2.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,250,235,1)'); gr.addColorStop(1, 'rgba(255,250,235,0)'); g2.fillStyle = gr; g2.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(c);
    this.dust = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.05, map: tex, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xfff2d8 }));
    this.dust.frustumCulled = false;
    game.scene.add(this.dust);
    this.buildFoliage();
    this.flickerLights = [];
  }

  buildFoliage() {
    const L = this.game.level;
    const rng = mulberry32(42);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x4f9a3a, roughness: 0.6, side: THREE.DoubleSide, emissive: 0x0a2a08 });
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x3a5a22, roughness: 0.8 });
    const leafGeo = new THREE.PlaneGeometry(0.16, 0.42); leafGeo.translate(0, 0.21, 0);
    const bulbMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.5, 2.0) });
    this.plants = [];
    for (let y = 0; y < L.H; y++) for (let x = 0; x < L.W; x++) {
      const i = L.idx(x, y);
      if (L.type[i] !== 2 || L.zone[i] !== 3) continue; // planters in hydroponics
      const [cx, cz] = L.center(x, y);
      for (let k = 0; k < 3; k++) {
        const p = new THREE.Group();
        p.position.set(cx + (rng() - 0.5) * 1.3, 1.1, cz + (rng() - 0.5) * 1.3);
        const h = 0.5 + rng() * 0.6;
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.025, h, 5), stemMat); stem.position.y = h / 2; p.add(stem);
        for (let j = 0; j < 6; j++) {
          const leaf = new THREE.Mesh(leafGeo, leafMat);
          leaf.position.y = h * (0.3 + j * 0.12);
          leaf.rotation.set(0.6 + rng() * 0.5, j * 2.4, 0);
          leaf.scale.setScalar(0.7 + rng() * 0.6);
          p.add(leaf);
        }
        if (rng() < 0.4) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), bulbMat); b.position.y = h + 0.05; p.add(b); }
        mergeStatic(p);
        L.group.add(p);
        this.plants.push({ p, ph: rng() * 6.28, k: 0.6 + rng() * 0.5 });
      }
    }
  }

  update(dt) {
    const g = this.game, P = g.player;
    this.time += dt;
    const t = this.time;
    // gusts
    this.gustT -= dt;
    if (this.gustT <= 0) { this.gustT = 8 + Math.random() * 10; this.gustDur = 2.5; this.gustDir = Math.random() * 6.28; }
    if (this.gustDur > 0) { this.gustDur -= dt; this.gust = Math.min(1, this.gust + dt * 1.5); } else this.gust = Math.max(0, this.gust - dt * 0.6);
    const baseA = Math.sin(t * 0.07) * 2 + (this.gustDir || 0) * this.gust * 0.3;
    const str = 0.35 + this.gust * 2.8;
    this.wind.set(Math.cos(baseA) * str, 0, Math.sin(baseA) * str);
    if (g.audio) g.audio.wind(this.gust);
    // gust debris skittering across the floor near the player
    if (this.gust > 0.3 && Math.random() < dt * 25 * this.gust) {
      const a = Math.random() * 6.28, d = 2 + Math.random() * 10;
      const x = P.pos.x + Math.cos(a) * d, z = P.pos.z + Math.sin(a) * d;
      if (!g.level.blockedCircle(x, z, 0.1, 0)) {
        const col = Math.random() < 0.5 ? [0.55, 0.5, 0.4] : [0.75, 0.72, 0.65];
        g.particles.norm.spawn(x, 0.05 + Math.random() * 0.3, z, this.wind.x * 1.6, 0.4 + Math.random() * 0.8, this.wind.z * 1.6, 1.2, 0.05 + Math.random() * 0.04, col[0], col[1], col[2], 0.9, 2.5, 0.3);
      }
    }
    // dust motes
    const B = this.box, arr = this.posAttr.array, loc = this.local;
    for (let i = 0; i < this.N; i++) {
      const o = this.offs[i];
      loc[i * 3] += (this.wind.x * 0.35 + Math.sin(t * 0.7 + o) * 0.08) * dt;
      loc[i * 3 + 1] += (Math.sin(t * 0.5 + o * 1.3) * 0.06) * dt;
      loc[i * 3 + 2] += (this.wind.z * 0.35 + Math.cos(t * 0.6 + o) * 0.08) * dt;
      // wrap around player
      let wx = loc[i * 3] - P.pos.x, wz = loc[i * 3 + 2] - P.pos.z;
      if (wx > B) loc[i * 3] -= 2 * B; else if (wx < -B) loc[i * 3] += 2 * B;
      if (wz > B) loc[i * 3 + 2] -= 2 * B; else if (wz < -B) loc[i * 3 + 2] += 2 * B;
      if (loc[i * 3 + 1] > 4.4) loc[i * 3 + 1] = 0.1; else if (loc[i * 3 + 1] < 0.05) loc[i * 3 + 1] = 4.3;
      arr[i * 3] = loc[i * 3]; arr[i * 3 + 1] = loc[i * 3 + 1]; arr[i * 3 + 2] = loc[i * 3 + 2];
    }
    this.posAttr.needsUpdate = true;
    // foliage sway
    const wl = this.wind.length();
    for (const pl of this.plants) {
      pl.p.rotation.z = Math.sin(t * 2.2 * pl.k + pl.ph) * 0.06 * (1 + wl) + this.wind.x * 0.05;
      pl.p.rotation.x = Math.cos(t * 1.9 * pl.k + pl.ph) * 0.05 * (1 + wl) + this.wind.z * 0.05;
    }
    // light flicker
    for (const l of this.flickerLights) {
      if (l.userData.flickT > 0) { l.userData.flickT -= dt; l.intensity = l.userData.base * (Math.random() < 0.5 ? 0.15 : 1); }
      else { l.intensity = l.userData.base; if (Math.random() < dt * 0.08) l.userData.flickT = 0.2 + Math.random() * 0.6; }
    }
  }
}

// ---------------------------------------------------------------- explosive barrels
export class Barrels {
  constructor(game) {
    this.game = game;
    this.list = [];
    const L = game.level;
    const tex = this.texture();
    const bodyMat = new THREE.MeshStandardMaterial({ map: tex, metalness: 0.6, roughness: 0.4 });
    const topMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 2.6, 0.5) });
    const geo = new THREE.CylinderGeometry(0.38, 0.38, 1.05, 20);
    const lid = new THREE.CylinderGeometry(0.3, 0.3, 0.04, 20);
    const rimGeo = new THREE.TorusGeometry(0.38, 0.025, 6, 24);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.3 });
    const rng = mulberry32(777);
    const per = { a: 6, b: 5, c: 5, d: 6 };
    const bx = L.bossCell.x * CELL, bz = L.bossCell.y * CELL;
    for (const zk of Object.keys(per)) {
      const cells = L.zoneCells[zk];
      let placed = 0, tries = 0;
      while (placed < per[zk] && tries++ < 200) {
        const i = cells[(rng() * cells.length) | 0];
        const x = i % L.W, y = (i / L.W) | 0;
        // prefer cells next to a wall
        let nearWall = false;
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (L.type[L.idx(x + dx, y + dy)] === 1) nearWall = true;
        if (!nearWall) continue;
        const [cx, cz] = L.center(x, y);
        if (Math.hypot(cx - bx, cz - bz) < 6) continue;
        if (this.list.some(b => Math.hypot(b.x - cx, b.z - cz) < 3)) continue;
        if (L.objects.some(o => Math.abs(o.x - x) + Math.abs(o.y - y) <= 1)) continue;
        const ox = cx + (rng() - 0.5) * 0.6, oz = cz + (rng() - 0.5) * 0.6;
        const grp = new THREE.Group(); grp.position.set(ox, 0, oz);
        const body = new THREE.Mesh(geo, bodyMat); body.position.y = 0.525; grp.add(body);
        const top = new THREE.Mesh(lid, topMat); top.position.y = 1.06; grp.add(top);
        for (const ry of [0.05, 0.5, 1.0]) { const r = new THREE.Mesh(rimGeo, rimMat); r.rotation.x = Math.PI / 2; r.position.y = ry; grp.add(r); }
        grp.rotation.y = rng() * 6;
        mergeStatic(grp);
        L.group.add(grp);
        this.list.push({ x: ox, z: oz, hp: 35, mesh: grp, alive: true, fuse: -1, zone: zk });
        placed++;
      }
    }
  }
  texture() {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = '#3e6b2a'; g.fillRect(0, 0, 256, 128);
    for (let x = -40; x < 256; x += 32) { g.fillStyle = '#e0b21a'; g.beginPath(); g.moveTo(x, 50); g.lineTo(x + 16, 50); g.lineTo(x + 32, 78); g.lineTo(x + 16, 78); g.fill(); }
    g.fillStyle = '#111'; g.fillRect(0, 46, 256, 4); g.fillRect(0, 78, 256, 4);
    g.fillStyle = '#d8ff5a'; g.font = 'bold 22px sans-serif'; g.fillText('VOLATILE', 70, 30); g.fillText('SLUDGE', 82, 112);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  // ray vs barrel (vertical cylinder approximated by a capsule of spheres)
  raycast(o, d, maxDist) {
    let best = null;
    for (const b of this.list) {
      if (!b.alive) continue;
      for (const y of [0.3, 0.75]) {
        const cx = b.x - o.x, cy = y - o.y, cz = b.z - o.z;
        const tc = cx * d.x + cy * d.y + cz * d.z;
        if (tc < 0) continue;
        const d2 = cx * cx + cy * cy + cz * cz - tc * tc;
        if (d2 > 0.42 * 0.42) continue;
        const t = tc - Math.sqrt(0.42 * 0.42 - d2);
        if (t < maxDist && (!best || t < best.dist)) best = { barrel: b, dist: t };
      }
    }
    return best;
  }
  damage(b, amt) {
    if (!b.alive) return;
    b.hp -= amt;
    if (b.hp <= 0 && b.fuse < 0) b.fuse = 0.05;
    else if (b.fuse < 0) { b.fuse = -1; this.game.particles.goo(b.x, 1.0, b.z, 0x9cff6a, 4, 2); }
  }
  explode(b) {
    const g = this.game;
    b.alive = false; b.mesh.visible = false;
    g.audio.boom();
    g.effects.explosion(b.x, 0.7, b.z, 4.5, 'fire');
    g.particles.goo(b.x, 0.8, b.z, 0x9cff6a, 40, 8);
    g.enemies.radiusDamage(b.x, 0.7, b.z, 5.5, 450 * (1 + 0.5 * (g.phase - 1)));
    const P = g.player; const d = Math.hypot(P.pos.x - b.x, P.pos.z - b.z);
    if (d < 4.5 && g.state === 'playing') P.damage(Math.round(45 * (1 - d / 4.5)) + 5, { x: b.x, z: b.z });
    // the blast also cleans the floor & spores around it
    g.grime.foam(g.activeGrimeZones(), b.x, b.z, 3.2, () => { g.addCredits(12, null, true); g.stats.stains++; }, () => { g.addCredits(40, null, true); g.stats.spores++; });
    g.enemies.washBoss(0, null, b.x, b.z, 6, 60);
    g.enemies.damageBoss(300, null, 'fire');
    for (const o of this.list) if (o.alive && o.fuse < 0 && Math.hypot(o.x - b.x, o.z - b.z) < 5) o.fuse = 0.18 + Math.random() * 0.15; // chain reaction
  }
  push(pos, r) {
    for (const b of this.list) {
      if (!b.alive) continue;
      const dx = pos.x - b.x, dz = pos.z - b.z, d = Math.hypot(dx, dz), min = 0.4 + r;
      if (d < min && d > 1e-4 && pos.y < 1.0) { pos.x = b.x + dx / d * min; pos.z = b.z + dz / d * min; }
    }
  }
  update(dt) {
    for (const b of this.list) {
      if (!b.alive) continue;
      if (b.fuse >= 0) {
        b.fuse -= dt;
        b.mesh.position.x = b.x + (Math.random() - 0.5) * 0.04;
        if (b.fuse <= 0) this.explode(b);
      }
    }
  }
}
