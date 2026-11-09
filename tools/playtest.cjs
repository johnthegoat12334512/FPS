// Headless playtest: boots the game, drives it through every system, fails on any console error.
// Usage: node tools/playtest.cjs [outDir]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const out = process.argv[2] || path.join(__dirname, '..', 'screenshots');
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + path.join(__dirname, '..', 'index.html');

(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e.stack || e)));
  await page.addInitScript(() => { window.__TEST__ = true; try { localStorage.clear(); } catch (e) {} });
  await page.goto(url);
  await page.waitForFunction(() => window.GAME, null, { timeout: 30000 });

  const shot = async (name) => { await page.screenshot({ path: path.join(out, name + '.png') }); console.log('shot', name); };
  // step the simulation deterministically (rAF still runs too)
  const run = (secs, fn) => page.evaluate(([secs, fn]) => {
    const g = window.GAME; const dt = 1 / 60;
    const f = fn ? new Function('g', 't', fn) : null;
    for (let t = 0; t < secs; t += dt) { if (f) f(g, t); g.step(dt); }
    g.render();
  }, [secs, fn || null]);
  const key = (code, down) => page.evaluate(([c, d]) => { const i = window.GAME.input; if (d) { i.down.add(c); i.pressed.add(c); } else i.down.delete(c); }, [code, down]);

  await page.waitForTimeout(500);
  await shot('01_title');

  // start
  await page.evaluate(() => { const g = window.GAME; g.input.forceLocked = true; document.getElementById('btnNew').click(); });
  await run(0.5);
  await shot('02_hq_start');

  const check = (label, cond) => { if (!cond) { errors.push('CHECK FAILED: ' + label); console.log('FAIL', label); } else console.log('ok  ', label); };

  // ---- movement: sprint + slide
  const sm = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player;
    P.spawnAt(...g.level.center(5, 33), -Math.PI / 2); // face +x (east)
    i.down.add('KeyW'); i.down.add('ShiftLeft');
    for (let k = 0; k < 60; k++) g.step(1 / 60);
    const sprintSpeed = P.speedH(), sprinting = P.sprinting;
    i.pressed.add('KeyC'); g.step(1 / 60);
    const sliding = P.sliding, slideSpeed = P.speedH();
    i.pressed.add('Space'); g.step(1 / 60);
    const jumped = !P.onGround, keep = P.speedH();
    for (let k = 0; k < 60; k++) g.step(1 / 60);
    i.down.clear();
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    return { sprintSpeed, sprinting, sliding, slideSpeed, jumped, keep, landed: P.onGround };
  });
  console.log(sm);
  check('sprint speed > 7', sm.sprintSpeed > 7 && sm.sprinting);
  check('slide starts fast', sm.sliding && sm.slideSpeed > 9);
  check('slide-jump keeps momentum', sm.jumped && sm.keep > 9);
  check('lands', sm.landed);

  // ---- mantle onto crate at (14,32) from west
  const mt = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player;
    const [x, z] = g.level.center(12, 32);
    P.spawnAt(x, z, -Math.PI / 2);
    i.down.add('KeyW');
    for (let k = 0; k < 40; k++) g.step(1 / 60);
    i.pressed.add('Space'); i.down.add('Space');
    for (let k = 0; k < 50; k++) g.step(1 / 60);
    i.down.clear();
    for (let k = 0; k < 20; k++) g.step(1 / 60);
    return { y: P.pos.y, x: P.pos.x };
  });
  console.log(mt);
  check('mantled onto crate (y≈1.1)', Math.abs(mt.y - 1.1) < 0.05);
  await run(0.1);
  await shot('03_on_crate');

  // ---- walk into loading bay, vacuum debris
  const vac = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player, W = g.weapons;
    const Z = g.grime.zones.a;
    const pile = Z.piles.find(p => !p.done && g.level.lineOfSight(p.x, 1.5, p.z, p.x + 2, 1.5, p.z));
    // stand 2.5m west of pile, look at it
    P.spawnAt(pile.x - 2.5, pile.z, -Math.PI / 2);
    if (g.level.blockedCircle(P.pos.x, P.pos.z, 0.35, 0)) P.spawnAt(pile.x + 2.5, pile.z, Math.PI / 2);
    const dx = pile.x - P.pos.x, dz = pile.z - P.pos.z, d = Math.hypot(dx, dz);
    P.yaw = Math.atan2(-dx, -dz); P.pitch = -Math.atan2(1.5, d);
    W.switchTo('vacuum');
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    i.mouse[0] = true;
    const before = W.tank;
    for (let k = 0; k < 90; k++) g.step(1 / 60);
    const mid = W.tank;
    g.render();
    return { before, mid, done: pile.done };
  });
  console.log(vac);
  check('vacuum fills tank', vac.mid > vac.before);
  await shot('04_vacuum');
  await page.evaluate(() => { window.GAME.input.mouse[0] = false; });

  // ---- disposal
  const disp = await page.evaluate(() => {
    const g = window.GAME, P = g.player;
    const it = g.interactables.find(x => x.kind === 'I' && g.level.zoneAtWorld(x.ox, x.oz) === 'h');
    P.spawnAt(it.x, it.z, 0);
    P.yaw = Math.atan2(-(it.ox - it.x), -(it.oz - it.z));
    g.step(1 / 60);
    const found = g.findInteractable();
    const c0 = g.credits;
    g.input.pressed.add('KeyE'); g.step(1 / 60);
    return { found: found && found.kind, gained: g.credits - c0, tank: g.weapons.tank };
  });
  console.log(disp);
  check('disposal pays', disp.found === 'I' && disp.gained > 0 && disp.tank === 0);
  await run(0.2);
  await shot('05_disposal');

  // ---- shop: buy washer
  const shop = await page.evaluate(() => {
    const g = window.GAME;
    g.credits += 5000;
    g.openShop();
    g.ui.shopTab = 'tools'; g.ui.renderShop();
    return document.querySelectorAll('#shopBody .card').length;
  });
  check('shop renders cards', shop >= 3);
  await shot('06_shop');
  await page.evaluate(() => { const g = window.GAME; g.shopAction('tool:washer'); g.ui.shopTab = 'knives'; g.ui.renderShop(); g.shopAction('knife:butterfly'); g.closeShop(); });
  check('washer owned', await page.evaluate(() => window.GAME.weapons.tools.washer));

  // ---- fight: spawn enemies in front and shoot
  const fight = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player, W = g.weapons;
    const [x, z] = g.level.center(30, 33);
    P.spawnAt(x, z, -Math.PI / 2); P.pitch = -0.05;
    W.switchTo('gun0');
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    const e = g.enemies.spawn('sludger', x + 7, z, true);
    g.enemies.spawn('sludger', x + 9, z + 2, true);
    const kills0 = g.stats.kills;
    for (let k = 0; k < 240; k++) {
      // aim at nearest enemy head
      const t = g.enemies.list.filter(q => q.dying <= 0)[0];
      if (t) { const h = new (P.pos.constructor)(); t.parts.head.getWorldPosition(h); const dx = h.x - P.pos.x, dz = h.z - P.pos.z, dy = h.y - (P.pos.y + P.eye); P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(dy, Math.hypot(dx, dz)); P.recoilPitch = 0; }
      i.mousePressed[0] = (k % 8 === 0);
      g.step(1 / 60);
      if (k === 20) g.render();
    }
    return { kills: g.stats.kills - kills0, hp: P.hp, e: !!e };
  });
  console.log(fight);
  check('killed enemies with pistol', fight.kills >= 1);

  // screenshot a fight scene with enemies approaching
  await page.evaluate(() => {
    const g = window.GAME, P = g.player;
    g.enemies.clearAll();
    const [x, z] = g.level.center(27, 28);
    P.spawnAt(x, z, -Math.PI / 2); P.pitch = 0.02;
    g.enemies.spawn('sludger', x + 6, z - 0.6, true); g.enemies.spawn('sludger', x + 8, z + 0.8, true); g.enemies.spawn('spitter', x + 12, z - 0.5, true); g.enemies.spawn('brute', x + 15, z + 0.4, true);
    g.enemies.spawnTimer = 99; g.ui.bannerT = 0;
    g.god = true;
    for (let k = 0; k < 20; k++) { P.yaw = -Math.PI / 2; P.pitch = 0.02; g.step(1 / 60); }
    g.weapons.cool = 0; g.input.mousePressed[0] = true; g.step(1 / 60);
    g.render();
  });
  await shot('07_fight');

  // ---- washer on a stain in offices (open door 2 by completing phase 1)
  const wash = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player, W = g.weapons;
    g.enemies.clearAll();
    for (const p of g.grime.zones.a.piles) { p.done = true; p.units = 0; g.grime._updatePile(g.grime.zones.a, p); }
    for (const s of g.grime.zones.a.stains) { s.done = true; s.hp = 0; s.mesh.visible = false; }
    g.checkProgress();
    const phase = g.phase;
    const Z = g.grime.zones.b;
    const st = Z.stains.find(s => s.ny > 0.5 && !g.level.blockedCircle(s.x - 2, s.z, 0.4, 0));
    P.spawnAt(st.x - 2, st.z, -Math.PI / 2);
    const dx = st.x - P.pos.x, dz = st.z - P.pos.z, d = Math.hypot(dx, dz);
    P.yaw = Math.atan2(-dx, -dz); P.pitch = -Math.atan2(P.eye, d);
    W.switchTo('washer');
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    i.mouse[0] = true;
    const hp0 = st.hp;
    for (let k = 0; k < 40; k++) g.step(1 / 60);
    g.render();
    return { phase, hp0, hp1: st.hp, water: W.water };
  });
  console.log(wash);
  check('phase advanced to 2', wash.phase === 2);
  check('washer cleans stain', wash.hp1 < wash.hp0);
  await shot('08_washer');
  await page.evaluate(() => { window.GAME.input.mouse[0] = false; });

  // ---- knife inspect (butterfly)
  await page.evaluate(() => { const g = window.GAME; g.weapons.switchTo('knife'); for (let k = 0; k < 30; k++) g.step(1 / 60); g.input.pressed.add('KeyF'); for (let k = 0; k < 50; k++) g.step(1 / 60); g.render(); });
  await shot('09_butterfly_inspect');

  // ---- phase 3: torch on spores
  const torch = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player, W = g.weapons;
    for (const s of g.grime.zones.b.stains) { s.done = true; s.hp = 0; s.mesh.visible = false; }
    for (const p of g.grime.zones.b.piles) { p.done = true; p.units = 0; }
    g.checkProgress();
    const phase = g.phase;
    g.credits += 3000; g.shopAction('tool:torch');
    const sp = g.grime.zones.c.spores.find(s => !g.level.blockedCircle(s.x - 2.5, s.z, 0.4, 0) && g.level.lineOfSight(s.x - 2.5, 1.4, s.z, s.x, 0.4, s.z));
    P.spawnAt(sp.x - 2.5, sp.z, -Math.PI / 2);
    const dx = sp.x - P.pos.x, dz = sp.z - P.pos.z, d = Math.hypot(dx, dz);
    P.yaw = Math.atan2(-dx, -dz); P.pitch = -Math.atan2(P.eye - 0.4, d);
    W.switchTo('torch');
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    i.mouse[0] = true;
    const hp0 = sp.hp;
    for (let k = 0; k < 45; k++) g.step(1 / 60);
    g.render();
    return { phase, hp0, hp1: sp.hp, owned: W.tools.torch };
  });
  console.log(torch);
  check('phase 3 reached', torch.phase === 3);
  check('torch burns spores', torch.owned && torch.hp1 < torch.hp0);
  await shot('10_torch');
  await page.evaluate(() => { window.GAME.input.mouse[0] = false; });

  // ---- sniper scope
  await page.evaluate(() => {
    const g = window.GAME, P = g.player, W = g.weapons;
    W.giveGun('longbow');
    const [x, z] = g.level.center(24, 37);
    P.spawnAt(x, z, -Math.PI / 2 + 0.3); P.pitch = 0;
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    g.input.mouse[2] = true;
    for (let k = 0; k < 30; k++) g.step(1 / 60);
    g.render();
  });
  await shot('11_sniper_scope');
  await page.evaluate(() => { window.GAME.input.mouse[2] = false; });

  // ---- phase 4 + boss
  const boss = await page.evaluate(() => {
    const g = window.GAME, P = g.player, W = g.weapons;
    for (const zk of ['c']) { const Z = g.grime.zones[zk]; for (const s of Z.stains) { s.done = true; s.mesh.visible = false; } for (const s of Z.spores) { s.done = true; s.mesh.visible = false; } for (const p of Z.piles) p.done = true; }
    g.checkProgress();
    const p4 = g.phase;
    const Z = g.grime.zones.d; for (const s of Z.stains) { s.done = true; s.mesh.visible = false; } for (const s of Z.spores) { s.done = true; s.mesh.visible = false; } for (const p of Z.piles) { p.done = true; g.grime._updatePile(Z, p); }
    g.checkProgress();
    const b = g.enemies.boss;
    P.spawnAt(b.x, b.z + 11, 0); P.pitch = 0.1;
    W.switchTo('washer'); W.water = 300;
    for (let k = 0; k < 90; k++) g.step(1 / 60);
    g.render();
    return { p4, awake: g.bossAwake, active: b && b.active };
  });
  console.log(boss);
  check('phase 4 + boss awake', boss.p4 === 4 && boss.awake && boss.active);
  await shot('12_boss');

  const win = await page.evaluate(() => {
    const g = window.GAME, i = g.input, P = g.player, W = g.weapons;
    const b = g.enemies.boss;
    // wash shield then shoot
    i.mouse[0] = true;
    const aim = () => { const dx = b.x - P.pos.x, dz = b.z - P.pos.z, d = Math.hypot(dx, dz); P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(2.1 - P.pos.y - P.eye, d); P.recoilPitch = 0; };
    for (let k = 0; k < 60 * 25 && b.shield > 0; k++) { aim(); W.water = 300; g.step(1 / 60); }
    const shield = b.shield;
    i.mouse[0] = false;
    W.switchTo('gun1'); for (let k = 0; k < 30; k++) g.step(1 / 60);
    b.hp = 300;
    for (let k = 0; k < 600 && b.alive; k++) { aim(); b.lastWash = g.time; i.mousePressed[0] = k % 50 === 0; const c = W.current; if (c.st) { c.st.mag = Math.max(c.st.mag, 1); } g.step(1 / 60); }
    for (let k = 0; k < 60 * 4; k++) g.step(1 / 60);
    return { shield, alive: b.alive, victory: g.victory, state: g.state };
  });
  console.log(win);
  check('boss shield washable', win.shield <= 0);
  check('boss defeated -> victory', !win.alive && win.victory && win.state === 'victory');
  await shot('13_victory');

  // ---- save/load roundtrip
  const sl = await page.evaluate(() => { const g = window.GAME; g.save(); const s = localStorage.getItem('grimeProtocol.save.v1'); return s ? JSON.parse(s).phase : -1; });
  check('save written', sl === 5);

  await browser.close();
  const real = errors.filter(e => !/GPU stall|WebGL|swiftshader|GL_/i.test(e));
  if (real.length) { console.log('\nERRORS:\n' + real.join('\n')); process.exit(1); }
  console.log('\nALL CHECKS PASSED');
})().catch(e => { console.error(e); process.exit(1); });
