import * as THREE from 'three';
import { clamp, damp } from './rng.js';
import { CELL } from './level.js';

const R = 0.35;
const GRAV = 19;
const JUMP_V = 6.6;
const EYE_STAND = 1.62, EYE_CROUCH = 1.05, EYE_SLIDE = 0.78;

export class Player {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
    this.onGround = true;
    this.crouching = false;
    this.sprinting = false;
    this.sliding = false; this.slideT = 0; this.slideDir = new THREE.Vector2();
    this.mantle = null;
    this.eye = EYE_STAND;
    this.bob = 0; this.bobAmt = 0;
    this.landDip = 0;
    this.tilt = 0;
    this.hp = 100; this.maxHp = 100;
    this.lastHurt = -10;
    this.recoilPitch = 0;
    this.fallStartY = 0;
    this.stepAcc = 0;
    this.radius = R;
  }

  spawnAt(x, z, yaw = 0) {
    this.pos.set(x, 0, z);
    this.vel.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0;
    this.sliding = false; this.mantle = null; this.crouching = false;
    this.onGround = true;
  }

  forward() { return new THREE.Vector3(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch)); }
  eyePos() { return new THREE.Vector3(this.pos.x, this.pos.y + this.eye, this.pos.z); }
  speedH() { return Math.hypot(this.vel.x, this.vel.z); }

  damage(amount, src) {
    const g = this.game;
    if (g.god) return;
    const armor = g.stats.armor || 0;
    this.hp -= amount * (1 - armor);
    this.lastHurt = g.time;
    g.ui.hurt(src ? Math.atan2(src.x - this.pos.x, src.z - this.pos.z) - Math.atan2(-Math.sin(this.yaw), -Math.cos(this.yaw)) : null);
    g.audio.hurt();
    if (this.hp <= 0) { this.hp = 0; g.onPlayerDeath(); }
  }

  update(dt, input, look) {
    const g = this.game, L = g.level;
    // ---- look
    if (look) {
      const sens = g.settings.sens * 0.0022 * (g.weapons.adsZoomFactor ? 1 / Math.pow(g.weapons.adsZoomFactor, 0.85) : 1);
      this.yaw -= input.dx * sens;
      this.pitch -= input.dy * sens * (g.settings.invert ? -1 : 1);
    }
    // recoil recovery
    const rec = this.recoilPitch * Math.min(1, dt * 7);
    this.recoilPitch -= rec; this.pitch -= rec * 0.75;
    this.pitch = clamp(this.pitch, -1.5, 1.5);

    // ---- mantle animation
    if (this.mantle) {
      const m = this.mantle;
      m.t += dt / m.dur;
      const t = Math.min(1, m.t);
      const up = Math.min(1, t / 0.6), fw = Math.max(0, (t - 0.35) / 0.65);
      this.pos.y = m.y0 + (m.y1 - m.y0) * (1 - Math.pow(1 - up, 2));
      this.pos.x = m.x0 + (m.x1 - m.x0) * fw;
      this.pos.z = m.z0 + (m.z1 - m.z0) * fw;
      this.eye = damp(this.eye, EYE_STAND, 10, dt);
      if (t >= 1) { this.mantle = null; this.onGround = true; this.vel.set(m.dx * 3, 0, m.dz * 3); }
      return;
    }

    const fwd = input.key('KeyW') ? 1 : 0, back = input.key('KeyS') ? 1 : 0;
    const left = input.key('KeyA') ? 1 : 0, right = input.key('KeyD') ? 1 : 0;
    const mz = fwd - back, mx = right - left;
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    // forward = (-sy, -cy), right = (cy, -sy)
    let wx = -sy * mz + cy * mx, wz = -cy * mz - sy * mx;
    const wl = Math.hypot(wx, wz); if (wl > 0) { wx /= wl; wz /= wl; }

    const crouchKey = input.key('KeyC') || input.key('KeyZ');
    const crouchHit = input.hit('KeyC') || input.hit('KeyZ');
    const W = g.weapons;
    const rush = g.perks.rush ? 1.15 : 1;
    const wantSprint = input.key('ShiftLeft') || input.key('ShiftRight');
    const firing = W.isFiringBlocksSprint();
    this.sprinting = wantSprint && mz > 0 && !W.ads && !firing && !this.crouching && !this.sliding && this.onGround;
    if (wantSprint && mz > 0 && !this.onGround && this.wasSprinting) this.sprinting = true;

    // ---- slide start
    if (crouchHit && this.onGround && !this.sliding && (this.sprinting || this.speedH() > 6.2)) {
      this.sliding = true;
      this.slideT = 0;
      const sp = Math.max(this.speedH(), 7) + 3.6 * rush;
      const dx = wl > 0 ? wx : -sy, dz = wl > 0 ? wz : -cy;
      this.slideDir.set(dx, dz);
      this.vel.x = dx * sp; this.vel.z = dz * sp;
      g.audio.slide();
      this.sprinting = false;
    } else if (crouchHit && this.onGround && !this.sliding) {
      this.crouching = !this.crouching;
    }
    if (!crouchKey && this.crouchHeldViaHold) this.crouching = false;

    const slideMax = 0.85 * (g.perks.rush ? 1.3 : 1);
    if (this.sliding) {
      this.slideT += dt;
      const sp = this.speedH();
      const dec = 7.5;
      const nsp = Math.max(0, sp - dec * dt);
      if (sp > 0.001) { this.vel.x *= nsp / sp; this.vel.z *= nsp / sp; }
      // slight steering
      if (wl > 0) {
        const ang = Math.atan2(this.vel.x, this.vel.z), target = Math.atan2(wx, wz);
        let da = target - ang; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
        const na = ang + clamp(da, -1.2 * dt, 1.2 * dt);
        this.vel.x = Math.sin(na) * nsp; this.vel.z = Math.cos(na) * nsp;
      }
      if (this.slideT > slideMax || nsp < 3.2 || !this.onGround) {
        this.sliding = false;
        this.crouching = crouchKey;
      }
    }

    // ---- jump / mantle
    const jumpHit = input.hit('Space');
    if (jumpHit || (input.key('Space') && !this.onGround) || (!this.onGround && mz > 0)) {
      if (this.tryMantle(jumpHit)) return;
    }
    if (jumpHit && this.onGround) {
      if (this.crouching && !this.sliding) { this.crouching = false; }
      else {
        this.vel.y = JUMP_V;
        this.onGround = false;
        if (this.sliding) { // slide-jump keeps momentum
          this.sliding = false;
          this.vel.x *= 1.06; this.vel.z *= 1.06;
        }
        this.fallStartY = this.pos.y;
      }
    }

    // ---- horizontal movement
    let speed = 5.0;
    if (this.sprinting) speed = 7.6 * rush;
    if (this.crouching) speed = 2.7;
    if (W.ads) speed = Math.min(speed, W.adsMoveSpeed());
    if (W.current && W.current.type === 'knife') speed *= 1.08;
    if (this.onGround && !this.sliding) {
      const accel = wl > 0 ? 55 : 40;
      const tx = wx * speed, tz = wz * speed;
      const ddx = tx - this.vel.x, ddz = tz - this.vel.z;
      const dl = Math.hypot(ddx, ddz);
      const step = Math.min(dl, accel * dt);
      if (dl > 0) { this.vel.x += ddx / dl * step; this.vel.z += ddz / dl * step; }
    } else if (!this.onGround) {
      // air control: can steer, can't exceed current speed beyond walk
      const cur = this.speedH();
      const cap = Math.max(cur, speed);
      this.vel.x += wx * 14 * dt; this.vel.z += wz * 14 * dt;
      const ns = this.speedH();
      if (ns > cap) { this.vel.x *= cap / ns; this.vel.z *= cap / ns; }
    }

    // ---- integrate & collide
    const feet = this.pos.y;
    const [nx, nz] = L.moveCircle(this.pos.x, this.pos.z, this.vel.x * dt, this.vel.z * dt, R, feet, 0.45);
    if (nx === this.pos.x && Math.abs(this.vel.x) > 0) this.vel.x = 0;
    if (nz === this.pos.z && Math.abs(this.vel.z) > 0) this.vel.z = 0;
    this.pos.x = nx; this.pos.z = nz;
    // boss & enemy pushout
    g.enemies.pushPlayer(this);

    this.vel.y -= GRAV * dt;
    this.pos.y += this.vel.y * dt;
    const ground = L.groundAt(this.pos.x, this.pos.z, R, feet);
    const wasGround = this.onGround;
    if (this.pos.y <= ground) {
      if (!wasGround && this.vel.y < -4) { this.landDip = Math.min(0.25, -this.vel.y * 0.025); g.audio.land(); }
      this.pos.y = ground; this.vel.y = 0; this.onGround = true;
    } else if (this.pos.y > ground + 0.05) {
      if (wasGround && this.vel.y <= 0 && this.pos.y - ground < 0.5) { this.pos.y = ground; this.vel.y = 0; } // step down
      else this.onGround = false;
    }
    if (this.pos.y < ground) this.pos.y = ground;
    this.wasSprinting = this.sprinting || (this.wasSprinting && !this.onGround);

    // ---- camera feel
    const targetEye = this.sliding ? EYE_SLIDE : this.crouching ? EYE_CROUCH : EYE_STAND;
    this.eye = damp(this.eye, targetEye, 12, dt);
    const sp = this.speedH();
    if (this.onGround && !this.sliding && sp > 0.5) {
      this.bob += dt * sp * (this.sprinting ? 1.45 : 1.75);
      this.stepAcc += sp * dt;
      if (this.stepAcc > (this.sprinting ? 2.3 : 1.8)) { this.stepAcc = 0; g.audio.step(); }
    }
    this.bobAmt = damp(this.bobAmt, this.onGround && !this.sliding ? Math.min(1, sp / 7) : 0, 8, dt);
    this.landDip = damp(this.landDip, 0, 8, dt);
    this.tilt = damp(this.tilt, this.sliding ? 0.07 : -mx * 0.012, 8, dt);

    // ---- health regen (zombies style)
    this.maxHp = g.perks.ironhide ? 200 : 100;
    if (g.time - this.lastHurt > 4 && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + 40 * dt);
  }

  tryMantle(jumpHit) {
    const L = this.game.level;
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    const fx = -sy, fz = -cy;
    for (const dist of [R + 0.25, R + 0.6]) {
      const px = this.pos.x + fx * dist, pz = this.pos.z + fz * dist;
      const [cx, cz] = L.cellOf(px, pz);
      const h = L.hAt(cx, cz);
      if (h > 50 || h <= this.pos.y + 0.45) continue;
      const diff = h - this.pos.y;
      if (diff > 1.75) continue;
      if (!jumpHit && this.onGround) continue;
      // target point: just onto the ledge
      const tx = px + fx * (R + 0.15), tz = pz + fz * (R + 0.15);
      if (L.blockedCircle(tx, tz, R, h, 0.05)) continue;
      // keep target inside a surface at height h or lower (stand on the ledge)
      const gh = L.groundAt(tx, tz, R, h);
      if (gh < h - 0.01) {
        // ledge is narrow - land at the near edge of the cell
        const ex = cx * CELL + CELL / 2, ez = cz * CELL + CELL / 2;
        if (L.blockedCircle(ex, ez, R, h, 0.05)) continue;
        this.startMantle(ex, h, ez, fx, fz);
        return true;
      }
      this.startMantle(tx, h, tz, fx, fz);
      return true;
    }
    return false;
  }

  startMantle(x, y, z, dx, dz) {
    this.mantle = { t: 0, dur: 0.38, x0: this.pos.x, y0: this.pos.y, z0: this.pos.z, x1: x, y1: y, z1: z, dx, dz };
    this.sliding = false; this.crouching = false;
    this.vel.set(0, 0, 0);
    this.game.weapons.onMantle();
  }

  applyCamera(cam) {
    const bobY = Math.sin(this.bob * 2) * 0.035 * this.bobAmt;
    const bobX = Math.cos(this.bob) * 0.025 * this.bobAmt;
    cam.position.set(this.pos.x + Math.cos(this.yaw) * bobX, this.pos.y + this.eye + bobY - this.landDip, this.pos.z - Math.sin(this.yaw) * bobX);
    cam.rotation.order = 'YXZ';
    cam.rotation.set(this.pitch, this.yaw, this.tilt);
  }
}
