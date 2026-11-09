import * as THREE from 'three';
import { ENEMIES, PHASES, ECON } from './data.js';
import { CELL, ZONE_KEYS } from './level.js';
import { clamp } from './rng.js';

const tmpV = new THREE.Vector3();

function raySphere(o, d, c, r) {
  const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z;
  const b = ox * d.x + oy * d.y + oz * d.z;
  const cc = ox * ox + oy * oy + oz * oz - r * r;
  const disc = b * b - cc;
  if (disc < 0) return -1;
  const s = Math.sqrt(disc);
  const t = -b - s;
  if (t >= 0) return t;
  const t2 = -b + s;
  return t2 >= 0 ? 0 : -1;
}

const POWERUPS = {
  ammo: { name: 'MAX AMMO', color: 0x55ff55 },
  double: { name: 'DOUBLE CREDITS', color: 0xffd23a },
  insta: { name: 'INSTA-CLEAN', color: 0xff3a3a },
  purge: { name: 'PURGE', color: 0x3ad8ff },
};

export class Enemies {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.projectiles = [];
    this.pickups = [];
    this.group = new THREE.Group(); game.scene.add(this.group);
    this.spawnTimer = 3;
    this.flowTimer = 0;
    this.surgeTimer = 100; this.surgeActive = 0;
    this.geo = {
      body: new THREE.SphereGeometry(1, 14, 10),
      eye: new THREE.SphereGeometry(1, 8, 6),
      arm: new THREE.CylinderGeometry(0.5, 0.3, 1, 8),
      glob: new THREE.SphereGeometry(0.16, 8, 6),
      pickup: new THREE.OctahedronGeometry(0.35, 0),
    };
    this.eyeMats = {};
    this.boss = null;
  }

  // ---------------------------------------------------------------- spawning
  makeMesh(type) {
    const d = ENEMIES[type];
    const g = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color: d.color, emissive: 0x000000 });
    const eyeMat = this.eyeMats[type] ||= new THREE.MeshBasicMaterial({ color: d.eye });
    const H = d.height;
    const body = new THREE.Mesh(this.geo.body, mat);
    const parts = { mat };
    if (type === 'brute') {
      body.scale.set(0.85, 0.95, 0.7); body.position.y = 1.25;
      const head = new THREE.Mesh(this.geo.body, mat); head.scale.set(0.35, 0.3, 0.35); head.position.set(0, 2.25, 0.25); g.add(head);
      parts.head = head;
      for (const s of [-1, 1]) {
        const arm = new THREE.Mesh(this.geo.arm, mat); arm.scale.set(0.55, 1.4, 0.55); arm.position.set(s * 0.95, 1.2, 0.15); arm.rotation.z = s * 0.2; g.add(arm);
        (parts.arms ||= []).push(arm);
      }
      for (const s of [-1, 1]) { const e = new THREE.Mesh(this.geo.eye, eyeMat); e.scale.setScalar(0.07); e.position.set(s * 0.13, 2.3, 0.55); g.add(e); }
    } else if (type === 'spitter') {
      body.scale.set(0.4, 0.75, 0.4); body.position.y = 0.95;
      const sac = new THREE.Mesh(this.geo.body, new THREE.MeshLambertMaterial({ color: 0x9cff6a, emissive: 0x3a7a10 })); sac.scale.set(0.32, 0.28, 0.32); sac.position.set(0, 1.55, -0.12); g.add(sac);
      parts.sac = sac;
      const head = new THREE.Mesh(this.geo.body, mat); head.scale.set(0.22, 0.24, 0.26); head.position.set(0, 1.72, 0.12); g.add(head);
      parts.head = head;
      for (const s of [-1, 1]) { const e = new THREE.Mesh(this.geo.eye, eyeMat); e.scale.setScalar(0.05); e.position.set(s * 0.09, 1.78, 0.34); g.add(e); }
      for (const s of [-1, 1]) { const arm = new THREE.Mesh(this.geo.arm, mat); arm.scale.set(0.15, 0.8, 0.15); arm.position.set(s * 0.38, 1.0, 0.1); arm.rotation.z = s * 0.3; g.add(arm); (parts.arms ||= []).push(arm); }
    } else {
      body.scale.set(0.48, 0.62, 0.42); body.position.y = 0.75;
      const head = new THREE.Mesh(this.geo.body, mat); head.scale.set(0.27, 0.25, 0.27); head.position.set(0, 1.42, 0.08); g.add(head);
      parts.head = head;
      for (const s of [-1, 1]) { const e = new THREE.Mesh(this.geo.eye, eyeMat); e.scale.setScalar(0.055); e.position.set(s * 0.1, 1.47, 0.32); g.add(e); }
      for (const s of [-1, 1]) { const arm = new THREE.Mesh(this.geo.arm, mat); arm.scale.set(0.18, 0.9, 0.18); arm.position.set(s * 0.45, 0.95, 0.25); arm.rotation.x = -1.1; g.add(arm); (parts.arms ||= []).push(arm); }
      // drippy blobs
      for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(this.geo.body, mat); b.scale.setScalar(0.12 + Math.random() * 0.08); b.position.set((Math.random() - 0.5) * 0.6, 0.3 + Math.random() * 0.7, (Math.random() - 0.5) * 0.5); g.add(b); }
    }
    g.add(body);
    parts.body = body;
    void H;
    return { g, parts };
  }

  spawn(type, x, z, instant = false) {
    const g = this.game;
    const d = ENEMIES[type];
    const ph = PHASES[Math.max(1, Math.min(4, g.phase))];
    const { g: mesh, parts } = this.makeMesh(type);
    const y = g.level.groundAt(x, z, d.radius);
    mesh.position.set(x, y, z);
    this.group.add(mesh);
    const hp = d.hp * ph.hpMul * (g.difficulty || 1);
    const e = {
      type, d, mesh, parts, pos: new THREE.Vector3(x, y, z), vel: new THREE.Vector3(), knock: new THREE.Vector3(),
      hp, maxHp: hp, attackCd: 1, windup: 0, spawnT: instant ? 0 : 0.9, dying: 0, flash: 0, burn: 0,
      los: false, losT: Math.random() * 0.3, anim: Math.random() * 10, lastClose: g.time, bestDist: 1e9,
      charge: 0, chargeCd: 4 + Math.random() * 3, strafe: Math.random() < 0.5 ? 1 : -1, lastCreditT: -1, yaw: 0,
      speedMul: 0.9 + Math.random() * 0.25,
    };
    this.list.push(e);
    if (!instant) g.particles.goo(x, 0.2, z, d.color, 16, 3);
    return e;
  }

  pickSpawnPoint() {
    const g = this.game, L = g.level, p = g.player.pos;
    const zones = g.spawnZones();
    if (!zones.length) return null;
    for (let attempt = 0; attempt < 30; attempt++) {
      const relax = attempt > 18;
      const zk = zones[(Math.random() * zones.length) | 0];
      const cells = L.zoneCells[zk];
      const i = cells[(Math.random() * cells.length) | 0];
      const cx = i % L.W, cz = (i / L.W) | 0;
      const [x, z] = L.center(cx, cz);
      const d = Math.hypot(x - p.x, z - p.z);
      if (d < 13 || d > 60) continue;
      if (L.flow[i] > 1e8) continue;
      if (!relax && L.lineOfSight(p.x, p.y + 1.6, p.z, x, 1.0, z)) continue;
      return [x + (Math.random() - 0.5) * 0.8, z + (Math.random() - 0.5) * 0.8];
    }
    return null;
  }

  director(dt) {
    const g = this.game;
    if (g.phase < 1) return;
    const ph = PHASES[Math.min(4, g.phase)];
    // surges
    if (!g.victory) this.surgeTimer -= dt;
    if (this.surgeActive > 0) { this.surgeActive -= dt; if (this.surgeActive <= 0) g.ui.banner('Surge contained', 'The bloom quiets down... for now', 2.5); }
    else if (this.surgeTimer <= 0) {
      this.surgeActive = 22; this.surgeTimer = 110 + Math.random() * 30;
      g.ui.banner('BLOOM SURGE', 'The sludge is boiling over — survive!', 3, '#ff4a4a');
      g.audio.surge();
    }
    const clean = g.grime.cleanliness(ph.zone);
    const surge = this.surgeActive > 0;
    const maxAlive = g.victory ? 6 : ph.maxAlive + (surge ? 8 : 0) + (this.boss && this.boss.active ? -4 : 0);
    let interval = ph.interval * (0.65 + 0.8 * clean) * (surge ? 0.35 : 1);
    if (g.inHub()) interval *= 1.6;
    this.spawnTimer -= dt;
    const alive = this.list.filter(e => e.dying <= 0).length;
    if (this.spawnTimer <= 0 && alive < maxAlive) {
      this.spawnTimer = interval * (0.7 + Math.random() * 0.6);
      const pt = this.pickSpawnPoint();
      if (pt) {
        let r = Math.random(), type = 'sludger';
        for (const [k, w] of Object.entries(ph.mix)) { if (r < w) { type = k; break; } r -= w; }
        this.spawn(type, pt[0], pt[1]);
      }
    }
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    const g = this.game, L = g.level, P = g.player;
    this.flowTimer -= dt;
    if (this.flowTimer <= 0) { this.flowTimer = 0.2; L.computeFlow(P.pos.x, P.pos.z); }
    if (g.state === 'playing') this.director(dt);
    const pc = new THREE.Vector3(P.pos.x, P.pos.y + 1.0, P.pos.z);

    for (let i = this.list.length - 1; i >= 0; i--) {
      const e = this.list[i];
      e.anim += dt;
      if (e.flash > 0) { e.flash -= dt; e.parts.mat.emissive.setHex(e.flash > 0 ? 0x884444 : (e.burn > 0 ? 0x552200 : 0)); }
      if (e.dying > 0) {
        e.dying -= dt;
        const t = 1 - e.dying / 0.6;
        e.mesh.scale.set(1 + t * 0.6, Math.max(0.01, 1 - t), 1 + t * 0.6);
        if (e.dying <= 0) { this.group.remove(e.mesh); this.list.splice(i, 1); }
        continue;
      }
      if (e.spawnT > 0) {
        e.spawnT -= dt;
        e.mesh.position.y = e.pos.y - Math.max(0, e.spawnT) / 0.9 * e.d.height;
        if (Math.random() < 0.3) g.particles.goo(e.pos.x, 0.1, e.pos.z, e.d.color, 1, 2);
        continue;
      }
      if (e.burn > 0) {
        e.burn -= dt;
        this.damage(e, 30 * dt * (1 + 0.4 * (g.phase - 1)), { kind: 'fire', silent: true });
        if (Math.random() < 0.4) g.particles.flame(e.pos.x + (Math.random() - 0.5) * 0.4, e.pos.y + 0.5 + Math.random(), e.pos.z + (Math.random() - 0.5) * 0.4, 0, 0.3, 0);
        if (e.burn <= 0) e.parts.mat.emissive.setHex(0);
        if (e.dying > 0) continue;
      }
      const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z;
      const dist = Math.hypot(dx, dz);
      const dy = P.pos.y - e.pos.y;
      e.losT -= dt;
      if (e.losT <= 0) { e.losT = 0.25 + Math.random() * 0.1; e.los = L.lineOfSight(e.pos.x, e.pos.y + e.d.height * 0.8, e.pos.z, pc.x, pc.y + 0.5, pc.z); }
      // progress tracking for despawn of stuck enemies
      if (dist < e.bestDist - 1) { e.bestDist = dist; e.lastClose = g.time; }
      if (g.time - e.lastClose > 14 && !e.los && dist > 18) { this.group.remove(e.mesh); this.list.splice(i, 1); continue; }

      let mx = 0, mz = 0, speed = e.d.speed * e.speedMul * (1 + 0.06 * (g.phase - 1));
      const direct = e.los && dist < 9 && Math.abs(dy) < 1.5;
      if (direct || dist < 1.2) { mx = dx / (dist || 1); mz = dz / (dist || 1); }
      else { const f = L.flowDir(e.pos.x, e.pos.z); if (f) { mx = f[0]; mz = f[1]; } else if (dist > 0) { mx = dx / dist; mz = dz / dist; } }

      if (e.type === 'spitter' && e.los && dist < 14) {
        // keep distance, strafe, spit
        const px = -dz / (dist || 1), pz = dx / (dist || 1);
        const toward = dist > 9 ? 1 : dist < 6 ? -1 : 0;
        mx = (dx / dist) * toward + px * e.strafe * 0.6; mz = (dz / dist) * toward + pz * e.strafe * 0.6;
        if (Math.random() < dt * 0.3) e.strafe *= -1;
        e.attackCd -= dt;
        if (e.attackCd <= 0) { e.attackCd = e.d.rate * (0.8 + Math.random() * 0.4); this.spit(e, pc); }
      }
      if (e.type === 'brute') {
        e.chargeCd -= dt;
        if (e.charge > 0) { e.charge -= dt; speed *= 2.6; mx = e.cdx; mz = e.cdz; }
        else if (e.chargeCd <= 0 && e.los && dist < 12 && dist > 3) {
          e.charge = 1.0; e.chargeCd = 6 + Math.random() * 3; e.cdx = dx / dist; e.cdz = dz / dist;
          g.audio.growl();
        }
      }

      // melee attack
      const reach = e.d.radius + 0.95;
      if (e.type !== 'spitter' || dist < reach) {
        e.attackCd -= e.type === 'spitter' ? 0 : dt;
        if (e.windup > 0) {
          e.windup -= dt;
          speed *= 0.35;
          if (e.windup <= 0) {
            if (dist < reach + 0.5 && Math.abs(dy) < 1.9 && g.state === 'playing') P.damage(e.d.dmg * (1 + 0.25 * (g.phase - 1)), e.pos);
            e.attackCd = e.d.rate;
          }
        } else if (dist < reach && e.attackCd <= 0 && Math.abs(dy) < 1.9) {
          e.windup = 0.32;
          if (e.charge > 0) e.charge = 0;
        }
      }
      if (dist < e.d.radius + P.radius + 0.1 && Math.abs(dy) < 1.8) { mx *= 0.1; mz *= 0.1; }

      // separation
      for (const o of this.list) {
        if (o === e || o.dying > 0) continue;
        const sx = e.pos.x - o.pos.x, sz = e.pos.z - o.pos.z;
        const sd = sx * sx + sz * sz, min = e.d.radius + o.d.radius;
        if (sd < min * min && sd > 1e-6) { const s = Math.sqrt(sd); mx += sx / s * 0.9; mz += sz / s * 0.9; }
      }
      const ml = Math.hypot(mx, mz);
      if (ml > 1) { mx /= ml; mz /= ml; }
      // water knockback
      const kx = e.knock.x, kz = e.knock.z;
      e.knock.multiplyScalar(Math.max(0, 1 - dt * 5));
      e.vel.x = mx * speed + kx; e.vel.z = mz * speed + kz;
      const [nx, nz] = L.moveCircle(e.pos.x, e.pos.z, e.vel.x * dt, e.vel.z * dt, e.d.radius * 0.8, e.pos.y, 1.25);
      // boss pushout
      e.pos.x = nx; e.pos.z = nz;
      if (this.boss && this.boss.alive) this.pushFromBoss(e.pos, e.d.radius);
      const gy = L.groundAt(e.pos.x, e.pos.z, e.d.radius * 0.5, e.pos.y + 0.9);
      e.pos.y += (gy - e.pos.y) * Math.min(1, dt * (gy > e.pos.y ? 8 : 12));

      // visuals
      e.mesh.position.copy(e.pos);
      if (ml > 0.05 || dist < 10) {
        const face = dist < 10 && e.los ? Math.atan2(dx, dz) : Math.atan2(mx, mz);
        let da = face - e.yaw; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
        e.yaw += clamp(da, -8 * dt, 8 * dt);
      }
      e.mesh.rotation.y = e.yaw;
      const wob = Math.sin(e.anim * (e.charge > 0 ? 18 : 9)) * 0.08;
      e.parts.body.rotation.z = wob;
      if (e.parts.arms) e.parts.arms.forEach((a, k) => { a.rotation.x = (e.type === 'sludger' ? -1.1 : 0) + Math.sin(e.anim * 9 + k * Math.PI) * 0.4 - (e.windup > 0 ? 0.9 : 0); });
      if (e.parts.sac) e.parts.sac.scale.setScalar(0.3 + (1 - e.attackCd / e.d.rate) * 0.08);
      if (Math.random() < dt * 0.15 && dist < 20) g.audio.growl();
    }

    this.updateProjectiles(dt);
    this.updatePickups(dt);
    if (this.boss) this.updateBoss(dt);
  }

  spit(e, target) {
    const g = this.game;
    const from = new THREE.Vector3(e.pos.x, e.pos.y + 1.6, e.pos.z);
    const lead = target.clone().add(new THREE.Vector3(g.player.vel.x * 0.3, 0, g.player.vel.z * 0.3));
    const d = lead.sub(from);
    const flat = Math.hypot(d.x, d.z);
    const speed = 14;
    const t = flat / speed;
    const vel = new THREE.Vector3(d.x / t, d.y / t + 0.5 * 9 * t, d.z / t);
    this.addProjectile(from, vel, e.d.dmg * (1 + 0.25 * (g.phase - 1)), 0x9cff6a, 9);
    g.audio.spit();
  }

  addProjectile(pos, vel, dmg, color, grav, size = 1) {
    const mesh = new THREE.Mesh(this.geo.glob, new THREE.MeshBasicMaterial({ color }));
    mesh.scale.setScalar(size);
    mesh.position.copy(pos);
    this.group.add(mesh);
    this.projectiles.push({ mesh, vel, dmg, color, grav, life: 5, size });
  }

  updateProjectiles(dt) {
    const g = this.game, L = g.level, P = g.player;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      pr.vel.y -= pr.grav * dt;
      const p = pr.mesh.position;
      p.addScaledVector(pr.vel, dt);
      if (Math.random() < 0.5) g.particles.norm.spawn(p.x, p.y, p.z, 0, 0, 0, 0.3, 0.1 * pr.size, ((pr.color >> 16) & 255) / 255, ((pr.color >> 8) & 255) / 255, (pr.color & 255) / 255, 0.6, 0, 0, 0);
      const dpx = p.x - P.pos.x, dpz = p.z - P.pos.z, dpy = p.y - (P.pos.y + 0.9);
      let hit = false;
      if (dpx * dpx + dpz * dpz < 0.5 * pr.size + 0.2 && Math.abs(dpy) < 1.0) { if (g.state === 'playing') P.damage(pr.dmg, p); hit = true; }
      const [cx, cz] = L.cellOf(p.x, p.z);
      if (p.y < L.hAt(cx, cz) || p.y < 0.05 || p.y > 4.5 || pr.life <= 0) hit = true;
      if (hit) {
        g.particles.goo(p.x, Math.max(0.1, p.y), p.z, pr.color, 10, 3);
        g.audio.splat();
        this.group.remove(pr.mesh);
        pr.mesh.material.dispose();
        this.projectiles.splice(i, 1);
      }
    }
  }

  // ---------------------------------------------------------------- damage
  raycast(o, d, maxDist) {
    const out = [];
    for (const e of this.list) {
      if (e.dying > 0 || e.spawnT > 0.5) continue;
      const head = e.parts.head;
      const hc = tmpV.set(0, 0, 0);
      head.getWorldPosition(hc);
      const hr = head.scale.x * 1.1;
      const th = raySphere(o, d, hc, hr);
      const bc = new THREE.Vector3(e.pos.x, e.pos.y + e.d.height * 0.42, e.pos.z);
      const br = e.d.radius * 1.05;
      // body as two spheres for height coverage
      let tb = raySphere(o, d, bc, br);
      const bc2 = new THREE.Vector3(e.pos.x, e.pos.y + e.d.height * 0.16, e.pos.z);
      const tb2 = raySphere(o, d, bc2, br * 0.9);
      if (tb < 0 || (tb2 >= 0 && tb2 < tb)) tb = tb2;
      let t = -1, isHead = false;
      if (th >= 0 && (tb < 0 || th <= tb + 0.05)) { t = th; isHead = true; }
      else if (tb >= 0) t = tb;
      if (t >= 0 && t < maxDist) out.push({ enemy: e, dist: t, head: isHead, point: o.clone().addScaledVector(d, t) });
    }
    out.sort((a, b) => a.dist - b.dist);
    return out;
  }

  meleeTarget(eye, fwd, range, minDot) {
    let best = null, bestD = 1e9;
    for (const e of this.list) {
      if (e.dying > 0 || e.spawnT > 0.5) continue;
      const c = new THREE.Vector3(e.pos.x, e.pos.y + e.d.height * 0.5, e.pos.z);
      const v = c.sub(eye);
      const d = v.length();
      if (d > range + e.d.radius) continue;
      v.normalize();
      const flatDot = (v.x * fwd.x + v.z * fwd.z) / (Math.hypot(v.x, v.z) * Math.hypot(fwd.x, fwd.z) || 1);
      if (flatDot < minDot) continue;
      if (!this.game.level.lineOfSight(eye.x, eye.y, eye.z, e.pos.x, e.pos.y + e.d.height * 0.5, e.pos.z)) continue;
      if (d < bestD) { bestD = d; best = e; }
    }
    return best;
  }

  coneDamage(eye, fwd, range, cosA, dmg, kind) {
    for (const e of this.list) {
      if (e.dying > 0 || e.spawnT > 0.5) continue;
      const c = new THREE.Vector3(e.pos.x, e.pos.y + e.d.height * 0.5, e.pos.z).sub(eye);
      const d = c.length();
      if (d > range + e.d.radius) continue;
      if (d > 0.5 && c.dot(fwd) / d < cosA) continue;
      if (!this.game.level.lineOfSight(eye.x, eye.y, eye.z, e.pos.x, e.pos.y + 1, e.pos.z)) continue;
      e.burn = 2.5;
      this.damage(e, dmg * (1 + 0.4 * (this.game.phase - 1)), { kind, silent: true });
    }
    if (this.boss && this.boss.alive && this.boss.active) {
      const b = this.boss;
      const c = new THREE.Vector3(b.x, 2.2, b.z).sub(eye); const d = c.length();
      if (d < range + 2.4 && c.dot(fwd) / d > cosA - 0.15) { this.damageBoss(dmg * 3, null, 'fire'); this.washBoss(dmg * 0.5, null); }
    }
  }

  radiusDamage(x, y, z, r, dmg) {
    for (const e of this.list) {
      if (e.dying > 0) continue;
      const d = Math.hypot(e.pos.x - x, e.pos.y + 0.8 - y, e.pos.z - z);
      if (d < r) {
        this.damage(e, dmg * (1 - d / r * 0.6), { kind: 'blast' });
        const k = (1 - d / r) * 10;
        e.knock.x += (e.pos.x - x) / (d || 1) * k; e.knock.z += (e.pos.z - z) / (d || 1) * k;
      }
    }
  }

  damage(e, dmg, info = {}) {
    const g = this.game;
    if (e.dying > 0 || e.hp <= 0) return;
    if (g.powerups.insta > 0 && info.kind !== 'water') dmg = e.hp + 1;
    e.hp -= dmg;
    if (!info.silent) {
      e.flash = 0.08; e.parts.mat.emissive.setHex(0x884444);
      if (info.point) g.particles.goo(info.point.x, info.point.y, info.point.z, e.d.color, info.head ? 10 : 5, 3);
      g.audio.hit();
      if (info.head) g.audio.headshot();
      if (info.kind === 'bullet' && g.time - e.lastCreditT > 0.06) { e.lastCreditT = g.time; g.addCredits(ECON.hit, null, true); }
    }
    if (e.hp <= 0) {
      this.kill(e, info);
    } else if (!info.silent) g.ui.hitmarker(!!info.head, false);
  }

  kill(e, info) {
    const g = this.game;
    e.hp = 0;
    e.dying = 0.6;
    g.stats.kills++;
    const reward = info.kind === 'melee' ? ECON.meleeKill : info.head ? ECON.headKill : ECON.kill;
    g.addCredits(reward + (e.d.reward - 60), null, false, info.kind === 'melee' ? 'MELEE KILL' : info.head ? 'HEADSHOT' : null);
    g.ui.hitmarker(!!info.head, true);
    g.audio.kill();
    g.particles.goo(e.pos.x, e.pos.y + e.d.height * 0.5, e.pos.z, e.d.color, 30, 5);
    // re-dirty: corpses leave sludge
    const zk = g.level.zoneAtWorld(e.pos.x, e.pos.z);
    if (zk && zk !== 'h' && Math.random() < 0.3) g.grime.addGooStain(zk, e.pos.x, e.pos.z, 1.0 + e.d.radius);
    // power-up drop
    if (Math.random() < 0.035 && this.pickups.length < 3) {
      const keys = Object.keys(POWERUPS);
      this.dropPickup(keys[(Math.random() * keys.length) | 0], e.pos.x, e.pos.z);
    }
  }

  // ---------------------------------------------------------------- powerups
  dropPickup(kind, x, z) {
    const pu = POWERUPS[kind];
    const mesh = new THREE.Mesh(this.geo.pickup, new THREE.MeshBasicMaterial({ color: pu.color }));
    const y = this.game.level.groundAt(x, z, 0.3) + 0.9;
    mesh.position.set(x, y, z);
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.6, 24), new THREE.MeshBasicMaterial({ color: pu.color, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
    mesh.add(halo);
    this.group.add(mesh);
    this.pickups.push({ kind, mesh, life: 25, y });
  }
  updatePickups(dt) {
    const g = this.game, P = g.player;
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const pk = this.pickups[i];
      pk.life -= dt;
      pk.mesh.rotation.y += dt * 2;
      pk.mesh.position.y = pk.y + Math.sin(g.time * 3) * 0.12;
      pk.mesh.visible = pk.life > 5 || Math.sin(g.time * 20) > 0;
      const d = Math.hypot(pk.mesh.position.x - P.pos.x, pk.mesh.position.z - P.pos.z);
      if (d < 1.2 && Math.abs(pk.y - 0.9 - P.pos.y) < 1.5) {
        g.applyPowerup(pk.kind, POWERUPS[pk.kind].name);
        this.group.remove(pk.mesh); this.pickups.splice(i, 1);
      } else if (pk.life <= 0) { this.group.remove(pk.mesh); this.pickups.splice(i, 1); }
    }
  }
  purgeAll() {
    for (const e of this.list) if (e.dying <= 0 && e.spawnT <= 0.5) this.kill(e, { kind: 'blast' });
  }

  pushPlayer(P) {
    for (const e of this.list) {
      if (e.dying > 0 || e.spawnT > 0) continue;
      const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z;
      const min = P.radius + e.d.radius * 0.8;
      const d2 = dx * dx + dz * dz;
      if (d2 < min * min && d2 > 1e-6 && Math.abs(P.pos.y - e.pos.y) < 1.6) {
        const d = Math.sqrt(d2), push = (min - d) * 0.5;
        const nx = P.pos.x + dx / d * push, nz = P.pos.z + dz / d * push;
        if (!this.game.level.blockedCircle(nx, nz, P.radius, P.pos.y, 0.45)) { P.pos.x = nx; P.pos.z = nz; }
      }
    }
    if (this.boss && this.boss.alive) this.pushFromBoss(P.pos, P.radius, true);
  }

  // ---------------------------------------------------------------- boss
  createBoss() {
    const g = this.game, L = g.level;
    const [x, z] = L.center(L.bossCell.x, L.bossCell.y);
    const bx = x - CELL / 2, bz = z - CELL / 2; // centred on a cell corner (between 4 cells)
    const grp = new THREE.Group(); grp.position.set(bx, 0, bz);
    const coreMat = new THREE.MeshLambertMaterial({ color: 0x8a2a6a, emissive: 0x3a0a2a });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 2), coreMat); core.position.y = 2.1; grp.add(core);
    const shellMat = new THREE.MeshLambertMaterial({ color: 0x6aff3a, transparent: true, opacity: 0.55, emissive: 0x1a5a0a });
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.3, 2), shellMat); shell.position.y = 2.1; grp.add(shell);
    const tentacles = [];
    const tMat = new THREE.MeshLambertMaterial({ color: 0x5a1a4a });
    for (let i = 0; i < 8; i++) {
      const piv = new THREE.Group();
      const a = i / 8 * Math.PI * 2;
      piv.position.set(Math.cos(a) * 1.5, 0.6, Math.sin(a) * 1.5);
      piv.rotation.y = -a;
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.32, 3.2, 8), tMat);
      t.position.y = 1.6; piv.add(t);
      grp.add(piv); tentacles.push(piv);
    }
    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.2, 0.5, 20), new THREE.MeshLambertMaterial({ color: 0x3a1a2a })); base.position.y = 0.25; grp.add(base);
    for (let i = 0; i < 6; i++) { const eye = new THREE.Mesh(this.geo.eye, new THREE.MeshBasicMaterial({ color: 0xffe23a })); const a = i / 6 * Math.PI * 2; eye.scale.setScalar(0.18); eye.position.set(Math.cos(a) * 1.75, 2.4 + Math.sin(i) * 0.4, Math.sin(a) * 1.75); grp.add(eye); }
    g.scene.add(grp);
    const hp = 9000 * (g.difficulty || 1);
    this.boss = { x: bx, z: bz, grp, core, shell, coreMat, shellMat, tentacles, hp, maxHp: hp, shield: 800, maxShield: 800, active: false, alive: true, volleyT: 4, summonT: 10, slamT: 3, lastWash: -10, flash: 0, r: 2.4 };
    grp.scale.setScalar(0.6);
  }
  awakenBoss() {
    if (!this.boss) this.createBoss();
    this.boss.active = true;
    this.game.audio.boss();
  }
  pushFromBoss(pos, r, isPlayer = false) {
    const b = this.boss;
    const dx = pos.x - b.x, dz = pos.z - b.z;
    const d = Math.hypot(dx, dz);
    const min = (b.active ? 3.1 : 2.0) + r;
    if (d < min && d > 1e-4) {
      const nx = b.x + dx / d * min, nz = b.z + dz / d * min;
      if (!this.game.level.blockedCircle(nx, nz, r, pos.y, 0.45)) { pos.x = nx; pos.z = nz; }
    }
    void isPlayer;
  }
  bossRaycast(o, d, maxDist) {
    const b = this.boss;
    if (!b || !b.alive || !b.active) return null;
    const t = raySphere(o, d, new THREE.Vector3(b.x, 2.1, b.z), b.shield > 0 ? 2.3 : 1.9);
    if (t >= 0 && t < maxDist) return { dist: t, point: o.clone().addScaledVector(d, t) };
    return null;
  }
  damageBoss(dmg, point, kind) {
    const g = this.game, b = this.boss;
    if (!b || !b.alive || !b.active) return;
    let real = dmg;
    if (b.shield > 0 && kind !== 'fire') { real = dmg * 0.08; if (point) g.particles.goo(point.x, point.y, point.z, 0x6aff3a, 3, 2); }
    else if (point) g.particles.goo(point.x, point.y, point.z, 0xd04aa0, 6, 3);
    if (g.powerups.insta > 0) real *= 2;
    b.hp -= real; b.flash = 0.06;
    if (kind === 'bullet' && g.time - (b.lastCredit || 0) > 0.08) { b.lastCredit = g.time; g.addCredits(ECON.hit, null, true); }
    g.ui.hitmarker(false, false);
    if (b.hp <= 0) this.killBoss();
  }
  washBoss(amount, point, x, z, radius, flat) {
    const b = this.boss;
    if (!b || !b.alive || !b.active) return;
    if (x !== undefined) { if (Math.hypot(b.x - x, b.z - z) < radius + 2.3) { b.shield = Math.max(0, b.shield - flat * 4); b.lastWash = this.game.time; } return; }
    b.shield = Math.max(0, b.shield - amount);
    b.lastWash = this.game.time;
    if (point && Math.random() < 0.5) this.game.particles.mist(point.x, point.y, point.z);
  }
  killBoss() {
    const g = this.game, b = this.boss;
    b.alive = false; b.hp = 0;
    g.particles.burst(b.x, 2.2, b.z, 0xd04aa0, 200, 14, 0.3);
    g.particles.goo(b.x, 2.2, b.z, 0x6aff3a, 80, 10);
    g.audio.boom();
    g.scene.remove(b.grp);
    this.purgeAll();
    g.addCredits(10000, null, false, 'BLOOM MOTHER DESTROYED');
    g.onBossDefeated();
  }
  updateBoss(dt) {
    const g = this.game, b = this.boss, P = g.player;
    if (!b.alive) return;
    const t = g.time;
    const s = b.active ? Math.min(1, b.grp.scale.x + dt * 0.5) : 0.6;
    b.grp.scale.setScalar(s);
    b.core.rotation.y += dt * 0.3;
    const pulse = 1 + Math.sin(t * 2) * 0.04;
    b.core.scale.setScalar(pulse);
    b.shell.visible = b.shield > 0;
    b.shell.scale.setScalar(pulse * (0.9 + 0.1 * b.shield / b.maxShield));
    b.shellMat.opacity = 0.2 + 0.45 * b.shield / b.maxShield;
    b.tentacles.forEach((tp, i) => { tp.rotation.z = Math.sin(t * 1.5 + i) * 0.5 - 0.3; tp.rotation.x = Math.cos(t * 1.2 + i * 2) * 0.3; });
    if (b.flash > 0) { b.flash -= dt; b.coreMat.emissive.setHex(b.flash > 0 ? 0xaa3a7a : 0x3a0a2a); }
    if (!b.active) return;
    // shield regen
    if (t - b.lastWash > 6 && b.shield < b.maxShield) b.shield = Math.min(b.maxShield, b.shield + 60 * dt);
    const dist = Math.hypot(P.pos.x - b.x, P.pos.z - b.z);
    b.volleyT -= dt; b.summonT -= dt; b.slamT -= dt;
    const rage = 1 + (1 - b.hp / b.maxHp) * 0.8;
    if (b.volleyT <= 0) {
      b.volleyT = 3.6 / rage;
      if (g.level.lineOfSight(b.x, 3.5, b.z, P.pos.x, P.pos.y + 1, P.pos.z)) {
        for (let k = 0; k < 5; k++) {
          const from = new THREE.Vector3(b.x, 3.6, b.z);
          const target = new THREE.Vector3(P.pos.x + (Math.random() - 0.5) * 3, P.pos.y + 0.8, P.pos.z + (Math.random() - 0.5) * 3);
          const d = target.clone().sub(from); const flat = Math.hypot(d.x, d.z);
          const tt = Math.max(0.6, flat / 11);
          this.addProjectile(from, new THREE.Vector3(d.x / tt, d.y / tt + 0.5 * 9 * tt, d.z / tt), 18, 0xd060ff, 9, 1.8);
        }
        g.audio.spit();
      }
    }
    if (b.summonT <= 0) {
      b.summonT = 13 / rage;
      if (this.list.length < 18) for (let k = 0; k < 3; k++) {
        const a = Math.random() * Math.PI * 2;
        const x = b.x + Math.cos(a) * 4.5, z = b.z + Math.sin(a) * 4.5;
        if (!g.level.blockedCircle(x, z, 0.5, 0, 0.45)) this.spawn(Math.random() < 0.25 ? 'spitter' : 'sludger', x, z);
      }
    }
    if (b.slamT <= 0 && dist < 6.5) {
      b.slamT = 3.5;
      g.particles.burst(b.x, 0.3, b.z, 0x6aff3a, 60, 10, 0.2);
      g.audio.boom(); g.shake = Math.max(g.shake, 0.4);
      if (P.onGround || P.pos.y < 0.6) {
        P.damage(28, { x: b.x, z: b.z });
        const k = 12;
        P.vel.x += (P.pos.x - b.x) / (dist || 1) * k; P.vel.z += (P.pos.z - b.z) / (dist || 1) * k; P.vel.y = 5; P.onGround = false;
      }
    }
  }

  clearAll() {
    for (const e of this.list) this.group.remove(e.mesh);
    for (const p of this.projectiles) this.group.remove(p.mesh);
    for (const p of this.pickups) this.group.remove(p.mesh);
    this.list = []; this.projectiles = []; this.pickups = [];
    this.spawnTimer = 4;
  }
}

export { POWERUPS, ZONE_KEYS };
