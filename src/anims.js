// Unique per-weapon viewmodel animations.
// s = { fT: time since last shot, rP: reload progress 0..1 (or -1), dT: draw remaining 1..0,
//       iP: inspect progress 0..1 (or -1), shellP, reloadPhase, time, mag, reloadCount }
// o = { pos: Vector3, rot: Euler } offsets are added in place. Parts are moved directly.

const TAU = Math.PI * 2;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ease = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };
// smooth bump: 0 outside [a,b], rises to 1 in the middle
export const bump = (t, a, b) => { if (t <= a || t >= b) return 0; const x = (t - a) / (b - a); return Math.sin(x * Math.PI); };
// plateau: ramps up over [a,a+r], holds, ramps down over [b-r,b]
const plateau = (t, a, b, r = 0.1) => { if (t <= a || t >= b) return 0; return Math.min(ease((t - a) / r), ease((b - t) / r)); };
const seg = (t, a, b) => ease((t - a) / (b - a));
const kick = (fT, k) => Math.exp(-fT * k);

function magSwap(P, rP, outA, outB, inA, inB, drop = 0.3) {
  if (!P.mag) return;
  const rest = P.magRest;
  P.mag.visible = true;
  if (rP >= outA && rP < inA) {
    const t = seg(rP, outA, outB);
    P.mag.position.set(rest.x - t * 0.02, rest.y - t * drop, rest.z + t * 0.03);
    P.mag.rotation.z = t * 0.6;
    if (rP > outB + 0.02) P.mag.visible = false;
  } else if (rP >= inA && rP < inB + 0.001) {
    const t = seg(rP, inA, inB);
    P.mag.position.set(rest.x - (1 - t) * 0.04, rest.y - (1 - t) * 0.2, rest.z + (1 - t) * 0.02);
    P.mag.rotation.z = (1 - t) * -0.3;
  } else { P.mag.position.copy(rest); P.mag.rotation.z = 0; }
}
function leftHandTo(model, target, w) {
  const L = model.userData.leftHand, rest = model.userData.leftRest;
  if (!L || !rest) return;
  L.position.set(rest.x + (target.x - rest.x) * w, rest.y + (target.y - rest.y) * w, rest.z + (target.z - rest.z) * w);
}

export function gunAnim(model, id, s, o, fx) {
  const P = model.userData.parts || {};
  const { fT, rP, dT, iP } = s;
  const reloading = rP >= 0;
  const r = reloading ? rP : 0;
  const ins = iP >= 0 ? iP : -1;
  if (model.userData.leftRest && !reloading) leftHandTo(model, model.userData.leftRest, 0);

  switch (id) {
    case 'sidearm': {
      if (P.slide) P.slide.position.z = 0.032 * Math.max(bump(fT, 0, 0.09) * (fT < 0.045 ? 1 : 1), 0) + (s.mag === 0 && !reloading ? 0.032 : 0) + 0.035 * bump(r, 0.78, 0.92);
      o.rot.x += 0.14 * kick(fT, 16); o.pos.z += 0.02 * kick(fT, 20);
      if (reloading) {
        o.rot.z += 0.5 * plateau(r, 0, 1, 0.15); o.rot.x += 0.15 * plateau(r, 0, 1, 0.15); o.pos.y += 0.02 * plateau(r, 0, 1);
        magSwap(P, r, 0.1, 0.32, 0.42, 0.62, 0.35);
        leftHandTo(model, { x: -0.03, y: -0.2, z: 0.02 }, bump(r, 0.3, 0.68));
      } else magSwap(P, 1, 0, 0, 0, 0);
      o.rot.z -= ease(dT) * TAU; o.pos.y -= dT * 0.08; // twirl draw
      if (ins >= 0) { o.rot.y += Math.sin(ins * TAU) * 0.7; o.rot.z += plateau(ins, 0.35, 0.85, 0.12) * Math.PI; o.pos.x -= bump(ins, 0, 1) * 0.06; }
      break;
    }
    case 'cannon': {
      o.rot.x += 0.5 * kick(fT, 8); o.pos.z += 0.06 * kick(fT, 11); o.pos.y += 0.02 * kick(fT, 9);
      if (P.hammer) P.hammer.rotation.x = fT < 0.04 ? 0 : -0.6 * clamp01((fT - 0.04) / 0.25) * (fT < 0.6 ? 1 : 0) ;
      if (P.hammer && fT >= 0.6) P.hammer.rotation.x = -0.6;
      if (P.cylinder) {
        const advance = s.shots * (TAU / 6) + (fT < 0.15 ? -(1 - fT / 0.15) * (TAU / 6) : 0);
        P.cylinder.rotation.z = advance + (reloading ? seg(r, 0.3, 0.75) * TAU * 3 : 0) + ease(dT) * TAU * 2;
      }
      if (P.cylPivot) { const out = plateau(r, 0.1, 0.88, 0.1); P.cylPivot.position.x = -0.045 * out; P.cylPivot.rotation.z = 0.8 * out; }
      if (reloading) {
        o.rot.z += 0.75 * plateau(r, 0.05, 0.9, 0.12) - 0.25 * bump(r, 0.86, 0.98); o.rot.x -= 0.5 * bump(r, 0.15, 0.35);
        if (r > 0.24 && !s.flags.ejected) { s.flags.ejected = true; for (let i = 0; i < 6; i++) fx.casingAt(model, -0.05, 0.02, -0.06); }
        leftHandTo(model, { x: -0.06, y: -0.04, z: -0.05 }, bump(r, 0.35, 0.8));
      }
      o.rot.x -= ease(dT) * TAU; o.pos.y -= dT * 0.05;
      if (ins >= 0) { const t = ins < 0.75 ? seg(ins, 0, 0.75) : 1; o.rot.x += t * TAU * 2; o.pos.y += bump(ins, 0, 0.75) * 0.03; }
      break;
    }
    case 'hornet': {
      if (fT < 0.08) { o.pos.x += (Math.random() - 0.5) * 0.006; o.pos.y += (Math.random() - 0.5) * 0.006; }
      o.rot.x += 0.06 * kick(fT, 25); o.pos.z += 0.015 * kick(fT, 25);
      if (P.bolt) P.bolt.position.z = -0.05 + 0.02 * kick(fT, 30) + 0.04 * bump(r, 0.76, 0.92);
      if (reloading) {
        o.rot.z -= 0.7 * plateau(r, 0, 1, 0.14); o.rot.x += 0.2 * plateau(r, 0, 1, 0.14); o.pos.x -= 0.03 * plateau(r, 0, 1);
        magSwap(P, r, 0.14, 0.36, 0.45, 0.66);
        leftHandTo(model, { x: -0.02, y: -0.22, z: -0.13 }, bump(r, 0.3, 0.7));
        o.rot.y += 0.25 * bump(r, 0.74, 0.9);
      } else magSwap(P, 1, 0, 0, 0, 0);
      o.pos.x += dT * 0.25; o.rot.z -= dT * 1.0; o.rot.y += dT * 0.4;
      if (ins >= 0) { o.rot.z += plateau(ins, 0.2, 0.85, 0.15) * Math.PI; o.rot.y += Math.sin(ins * TAU) * 0.35; }
      break;
    }
    case 'scatter': {
      o.rot.x += 0.42 * kick(fT, 9); o.pos.z += 0.08 * kick(fT, 11);
      const pumpT = bump(fT, 0.16, 0.5);
      let pump = pumpT;
      o.rot.z += 0.18 * pumpT; o.rot.x -= 0.06 * pumpT;
      if (fT > 0.3 && !s.flags.shellOut) { s.flags.shellOut = true; fx.casing(model, true); }
      if (reloading) {
        const tilt = ease(Math.min(1, s.reloadTime / 0.25)) * (s.reloadPhase === 'close' ? 1 - ease(s.phaseT / 0.35) : 1);
        o.rot.z += 0.65 * tilt; o.rot.y -= 0.25 * tilt; o.pos.x -= 0.03 * tilt; o.pos.y += 0.03 * tilt;
        if (P.shell) {
          P.shell.visible = s.reloadPhase === 'shell';
          const sp = s.shellP;
          P.shell.position.set(0.0, -0.13 + seg(sp, 0, 0.6) * 0.08, -0.04 - seg(sp, 0.5, 0.9) * 0.08);
          P.shell.rotation.x = 0.5 - seg(sp, 0.4, 0.8) * 0.5;
          o.pos.y += 0.006 * bump(sp, 0.75, 1);
        }
        if (s.reloadPhase === 'close') pump = bump(s.phaseT / 0.35, 0, 1);
      } else if (P.shell) P.shell.visible = false;
      pump = Math.max(pump, dT > 0 && dT < 0.6 ? bump(dT, 0, 0.6) : 0);
      if (P.pump) P.pump.position.z = P.pumpRest + 0.085 * pump;
      if (ins >= 0) { o.rot.z += ease(ins) * TAU; o.pos.x -= bump(ins, 0, 1) * 0.05; o.rot.y -= bump(ins, 0, 1) * 0.3; }
      o.pos.y -= dT * 0.12; o.rot.x -= dT * 0.4;
      break;
    }
    case 'vanguard': {
      o.rot.x += 0.07 * kick(fT, 20); o.pos.z += 0.025 * kick(fT, 20);
      if (P.bolt) P.bolt.position.z = -0.08 + 0.025 * kick(fT, 35);
      let charge = 0;
      if (reloading) {
        o.rot.z += 0.5 * plateau(r, 0, 1, 0.14); o.rot.x += 0.12 * plateau(r, 0, 1, 0.14);
        magSwap(P, r, 0.1, 0.34, 0.44, 0.62, 0.35);
        o.pos.y += 0.012 * bump(r, 0.6, 0.68); // mag slap
        leftHandTo(model, { x: -0.01, y: -0.2, z: -0.13 }, bump(r, 0.28, 0.68));
        charge = bump(r, 0.76, 0.93); o.rot.y -= 0.3 * charge;
        if (charge > 0) leftHandTo(model, { x: 0.0, y: 0.03, z: 0.05 }, charge);
      } else magSwap(P, 1, 0, 0, 0, 0);
      charge = Math.max(charge, bump(1 - dT, 0.35, 0.85) * (dT > 0 ? 1 : 0));
      if (P.charge) P.charge.position.z = P.chargeRest + 0.06 * charge;
      o.rot.z -= dT * 0.8; o.pos.y -= dT * 0.1;
      if (ins >= 0) { o.rot.y -= plateau(ins, 0.05, 0.55, 0.12) * 0.9; o.rot.z += plateau(ins, 0.5, 0.95, 0.12) * 0.7; o.pos.x -= bump(ins, 0, 1) * 0.05; if (bump(ins, 0.3, 0.4) > 0.5) o.pos.y += 0.006; }
      break;
    }
    case 'mauler': {
      if (fT < 0.1) { o.rot.z += (Math.random() - 0.5) * 0.03; o.rot.y += (Math.random() - 0.5) * 0.02; }
      o.pos.z += 0.03 * kick(fT, 16); o.rot.x += 0.04 * kick(fT, 16);
      if (P.belt) P.belt.position.y = -0.006 * ((s.shots % 2));
      if (reloading) {
        o.rot.x += 0.3 * plateau(r, 0, 1, 0.15); o.rot.z -= 0.25 * plateau(r, 0, 1, 0.15);
        if (P.lid) P.lid.rotation.x = -1.3 * plateau(r, 0.08, 0.84, 0.1);
        if (P.box) { const out = seg(r, 0.2, 0.38) * (1 - seg(r, 0.45, 0.62)); P.box.position.y = P.boxRest.y - out * 0.3; P.box.visible = !(r > 0.37 && r < 0.46); }
        if (P.belt) P.belt.visible = r < 0.2 || r > 0.62;
        leftHandTo(model, { x: 0.0, y: -0.15, z: -0.1 }, bump(r, 0.15, 0.7));
        if (r > 0.82 && r < 0.88) { o.pos.y -= 0.012; o.rot.z += (Math.random() - 0.5) * 0.03; } // lid slam
      } else { if (P.lid) P.lid.rotation.x = 0; if (P.box) { P.box.position.copy(P.boxRest); P.box.visible = true; } if (P.belt) P.belt.visible = true; }
      o.pos.y -= Math.pow(dT, 1.5) * 0.3; o.rot.x -= dT * 0.5;
      if (ins >= 0) { o.rot.x -= bump(ins, 0, 1) * 0.35; o.rot.y += bump(ins, 0.1, 0.9) * 0.6; if (P.lid) P.lid.rotation.x = -0.8 * plateau(ins, 0.3, 0.7); }
      break;
    }
    case 'marksman': {
      o.rot.x += 0.16 * kick(fT, 11); o.rot.z += 0.06 * kick(fT, 8); o.pos.z += 0.035 * kick(fT, 12);
      if (P.bolt) P.bolt.position.z = -0.06 + 0.03 * kick(fT, 25) + 0.03 * bump(r, 0.82, 0.95);
      if (reloading) {
        o.rot.z -= 0.55 * plateau(r, 0, 1, 0.14); o.rot.y += 0.15 * plateau(r, 0, 1, 0.14);
        magSwap(P, r, 0.12, 0.34, 0.44, 0.64, 0.3);
        leftHandTo(model, { x: -0.01, y: -0.18, z: -0.14 }, bump(r, 0.28, 0.7));
      } else magSwap(P, 1, 0, 0, 0, 0);
      o.pos.z += dT * 0.1; o.rot.y += dT * 0.5; o.pos.y -= dT * 0.06;
      if (ins >= 0) { o.rot.y += plateau(ins, 0.05, 0.6, 0.15) * 0.85; o.rot.x += plateau(ins, 0.05, 0.6, 0.15) * 0.15; o.rot.z -= plateau(ins, 0.55, 0.95, 0.12) * 0.6; }
      break;
    }
    case 'longbow': {
      o.rot.x += 0.32 * kick(fT, 7); o.pos.z += 0.09 * kick(fT, 10);
      // bolt cycle after each shot, on draw, and in reload
      let c = -1;
      if (fT > 0.32 && fT < 1.15 && s.shots > 0 && !reloading) c = (fT - 0.32) / 0.8;
      if (dT > 0) c = 1 - dT;
      let up = 0, back = 0;
      if (c >= 0 && c <= 1) {
        up = plateau(c, 0, 1, 0.22); back = plateau(c, 0.22, 0.78, 0.2);
        o.rot.z += 0.28 * bump(c, 0, 1); o.pos.x -= 0.03 * bump(c, 0, 1);
        if (c > 0.42 && !s.flags.boltEject && dT <= 0) { s.flags.boltEject = true; fx.casing(model); }
        leftHandTo(model, { x: 0.03, y: 0.03, z: 0.03 }, plateau(c, 0, 1, 0.15));
      }
      if (reloading) {
        up = plateau(r, 0.0, 1, 0.1); back = plateau(r, 0.08, 0.92, 0.08);
        o.rot.z += 0.45 * plateau(r, 0, 1, 0.12); o.pos.y += 0.02 * plateau(r, 0, 1);
        const per = 0.6 / 5;
        for (let i = 0; i < 5; i++) { const b = bump(r, 0.18 + i * per, 0.18 + (i + 1) * per); o.pos.y -= 0.005 * b; }
        leftHandTo(model, { x: 0.02, y: 0.0, z: 0.0 }, bump(r, 0.12, 0.88));
      }
      if (P.boltHandle) P.boltHandle.rotation.z = 1.25 * up;
      if (P.bolt) P.bolt.position.z = P.boltRest + 0.075 * back;
      if (ins >= 0) { o.rot.y += plateau(ins, 0.05, 0.6, 0.15) * 0.7; o.rot.x -= plateau(ins, 0.05, 0.6, 0.15) * 0.2; o.rot.z += plateau(ins, 0.55, 0.95, 0.12) * 0.5; }
      o.pos.y -= dT * 0.05;
      break;
    }
  }
}

// Knife swings: unique per knife kind
export function knifeAnim(model, kind, s, o) {
  const H = model.userData.holder;
  const { mT, heavy, alt, dT, iP } = s;
  if (H) H.rotation.set(0.5, 0, 0);
  if (model.userData.h1) { model.userData.h1.rotation.x = 0; model.userData.h2.rotation.x = 0; }
  if (mT >= 0) {
    const t = mT;
    if (heavy) {
      const back = t < 0.4 ? ease(t / 0.4) : 1, thrust = t < 0.4 ? 0 : t < 0.6 ? ease((t - 0.4) / 0.2) : 1 - ease((t - 0.6) / 0.4);
      o.pos.z += back * 0.08 - thrust * 0.28; o.pos.x -= thrust * 0.12; o.rot.x += thrust * 0.2 - back * 0.25;
      if (kind === 'karambit' && H) H.rotation.z = -thrust * 1.2;
    } else {
      const sw = Math.sin(t * Math.PI);
      const dir = alt ? -1 : 1;
      if (kind === 'karambit') { // horizontal hooking slash with wrist roll
        o.rot.y += (0.9 - t * 1.8) * dir; o.pos.x -= sw * 0.16 * dir; o.rot.z += sw * 0.6 * dir;
        if (H) H.rotation.z = t * TAU * dir;
      } else if (kind === 'butterfly') {
        o.rot.z += dir * (t - 0.5) * 2.2; o.rot.y += sw * 0.9 * dir; o.pos.x -= sw * 0.18; o.pos.z -= sw * 0.06;
        if (model.userData.h1) { model.userData.h1.rotation.x = Math.sin(t * TAU) * 0.8; model.userData.h2.rotation.x = -Math.sin(t * TAU) * 0.8; }
      } else if (kind === 'bayonet') { // straight stab
        o.pos.z -= sw * 0.26; o.pos.x -= sw * 0.1; o.rot.x -= sw * 0.15; o.rot.y += sw * 0.15;
      } else if (kind === 'huntsman') { // overhead chop
        const raise = t < 0.35 ? ease(t / 0.35) : 0, chop = t < 0.35 ? 0 : t < 0.6 ? ease((t - 0.35) / 0.25) : 1 - ease((t - 0.6) / 0.4);
        o.rot.x += raise * 0.9 - chop * 0.7; o.pos.y += raise * 0.08 - chop * 0.06; o.pos.x -= (raise + chop) * 0.1; o.pos.z -= chop * 0.12;
      } else { // combat diagonal slash
        o.rot.z += dir * (t - 0.5) * 2.2; o.rot.y += sw * 0.9 * dir; o.pos.x -= sw * 0.18; o.pos.y += sw * 0.05; o.pos.z -= sw * 0.08;
      }
    }
  }
  // draw animations
  if (dT > 0) {
    if (kind === 'karambit') { if (H) H.rotation.z = ease(dT) * TAU * 2; }
    else if (kind === 'butterfly') { if (model.userData.h1) { model.userData.h1.rotation.x = ease(dT) * Math.PI * 3; model.userData.h2.rotation.x = -ease(dT) * Math.PI * 3; } }
    else { o.rot.x += ease(dT) * TAU; }
    o.pos.y -= dT * 0.06;
  }
  // inspects
  if (iP >= 0) {
    const e = Math.sin(iP * Math.PI);
    if (kind === 'butterfly') {
      o.rot.z += e * 0.8; o.pos.x -= e * 0.1;
      const spin = iP * Math.PI * 8;
      if (model.userData.h1) { model.userData.h1.rotation.x = Math.sin(spin) * Math.PI; model.userData.h2.rotation.x = -Math.sin(spin) * Math.PI; }
      if (H) H.rotation.z = Math.sin(spin * 0.5) * 0.5;
    } else if (kind === 'karambit') {
      if (H) H.rotation.z = iP < 0.7 ? iP / 0.7 * TAU * 2 : 0;
      o.rot.y -= e * 0.6; o.pos.x -= e * 0.08;
    } else if (kind === 'huntsman') {
      o.rot.y -= e * 1.0; o.rot.x += plateau(iP, 0.4, 0.9) * 0.6; o.pos.x -= e * 0.1;
    } else if (kind === 'bayonet') {
      o.rot.z += plateau(iP, 0.1, 0.9) * Math.PI * (iP < 0.5 ? 1 : 1); o.rot.y -= e * 0.5; o.pos.x -= e * 0.08;
    } else {
      o.rot.y -= e * 1.2; o.rot.z += e * 0.9; o.pos.x -= e * 0.12; o.pos.y += e * 0.04;
      if (H) H.rotation.z = Math.sin(iP * TAU) * 0.3;
    }
  }
}

export function toolAnim(model, kind, s, o) {
  const P = model.userData.parts || {};
  if (kind === 'vacuum') {
    if (P.head) { const k = s.active ? 1 + Math.sin(s.time * 60) * 0.02 : 1; P.head.scale.set(k, k, 1); }
    if (P.ring) P.ring.material.color.setRGB(s.full ? 3 : 0.2, s.full ? 0.4 : 2.2, s.full ? 0.2 : 3);
    if (s.active) { o.pos.z += 0.01 * Math.sin(s.time * 50); o.rot.x -= 0.03; }
  } else if (kind === 'washer') {
    if (s.active) { o.pos.z += 0.012 + Math.sin(s.time * 70) * 0.004; o.rot.x += 0.02 + Math.sin(s.time * 55) * 0.006; }
  } else if (kind === 'torch') {
    if (s.active) { o.pos.x += Math.sin(s.time * 37) * 0.003; o.pos.y += Math.sin(s.time * 29) * 0.003; o.rot.x += 0.02; }
  }
  o.pos.y -= s.dT * 0.15; o.rot.x -= s.dT * 0.5;
  if (s.iP >= 0) { const e = Math.sin(s.iP * Math.PI); o.rot.y -= e * 0.8; o.rot.z += e * 0.5; o.pos.x -= e * 0.08; }
}
