// Soak / robustness test: random play, deaths, every shop button, interactables, save+reload.
// node tools/soak.cjs [minutesPerPhase]
const { chromium } = require('playwright');
const path = require('path');
const mins = parseFloat(process.argv[2] || '1.5');

(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + (e.stack || e)));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.addInitScript(() => { window.__TEST__ = true; window.__MANUAL__ = true; });
  const url = 'file://' + path.resolve('index.html');
  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForFunction(() => window.GAME);
  await page.evaluate(() => { const g = window.GAME; g.input.forceLocked = true; document.getElementById('btnNew').click(); g.post.setQuality('low'); });
  const fail = (m) => { errors.push('CHECK: ' + m); console.log('FAIL', m); };

  // ---------- every shop button
  const shop = await page.evaluate(() => {
    const g = window.GAME; g.credits = 1e6; g.phase = 3;
    const res = [];
    for (const tab of ['weapons', 'knives', 'tools', 'upgrades', 'supplies']) {
      g.openShop(); g.ui.shopTab = tab; g.ui.renderShop();
      let guard = 0;
      while (guard++ < 40) {
        const btn = [...document.querySelectorAll('#shopBody button')].find(b => !b.disabled && !b.dataset.done);
        if (!btn) break;
        btn.dataset.done = '1';
        const act = btn.dataset.act;
        try { g.shopAction(act); res.push(act); } catch (e) { res.push('ERR ' + act + ' ' + e.message); }
        g.ui.renderShop();
        document.querySelectorAll('#shopBody button').forEach(b => { if (b.dataset.act === act) b.dataset.done = '1'; });
      }
      g.closeShop();
    }
    for (const k of Object.keys(g.upg)) for (let n = 0; n < 4; n++) g.shopAction('upg:' + k);
    g.phase = 1;
    return { res, upg: g.upg, knife: g.weapons.knife, tools: g.weapons.tools, guns: g.weapons.guns.map(x => x && x.id) };
  });
  console.log('shop actions:', shop.res.length, JSON.stringify(shop.upg), shop.knife, JSON.stringify(shop.tools), shop.guns);
  if (shop.res.some(r => r.startsWith('ERR'))) fail('shop error ' + shop.res.filter(r => r.startsWith('ERR')));
  if (Object.values(shop.upg).some(v => v !== 3)) fail('upgrades not all maxed');

  // ---------- every interactable
  const inter = await page.evaluate(() => {
    const g = window.GAME, P = g.player, out = [];
    g.credits = 1e6; g.phase = 3; g.weapons.tank = 50;
    for (const it of g.interactables) {
      P.spawnAt(it.x, it.z, 0); P.yaw = Math.atan2(-(it.ox - it.x), -(it.oz - it.z));
      g.step(1 / 60);
      const f = g.findInteractable();
      if (!f) { out.push('notfound ' + it.kind); continue; }
      try { g.promptFor(f); g.interact(f); } catch (e) { out.push('ERR ' + it.kind + ' ' + e.message); }
      if (g.state === 'shop') g.closeShop();
      g.step(1 / 60);
    }
    g.phase = 1;
    return { out, perks: Object.keys(g.perks), n: g.interactables.length };
  });
  console.log('interactables:', inter.n, 'perks:', inter.perks.join(','), inter.out.join(' | ') || 'all ok');
  if (inter.out.length) fail('interactables: ' + inter.out.join(' | '));

  // ---------- random play through every phase, with deaths
  for (let phase = 1; phase <= 4; phase++) {
    const r = await page.evaluate(([phase, secs]) => {
      const g = window.GAME, P = g.player, i = g.input, W = g.weapons;
      g.god = false;
      // jump to the phase
      while (g.phase < phase) { const Z = g.grime.zones[g.currentZoneKey()]; for (const s of Z.stains) { s.done = true; s.mesh.visible = false; } for (const s of Z.spores) { s.done = true; s.mesh.visible = false; } for (const p of Z.piles) { p.done = true; } g.checkProgress(); }
      const zone = g.currentZoneKey();
      const cells = g.level.zoneCells[zone];
      const [x, z] = g.level.center(cells[(cells.length / 2) | 0] % g.level.W, (cells[(cells.length / 2) | 0] / g.level.W) | 0);
      P.spawnAt(x, z, 0);
      const keys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft'];
      let deaths = 0, maxEnemies = 0, nan = false, frames = 0;
      const slots = ['gun0', 'gun1', 'knife', 'vacuum', 'washer', 'torch'];
      for (let t = 0; t < secs; t += 1 / 30) {
        frames++;
        if (frames % 20 === 0) { i.down.clear(); for (const k of keys) if (Math.random() < 0.35) i.down.add(k); }
        if (Math.random() < 0.03) i.pressed.add('Space');
        if (Math.random() < 0.02) i.pressed.add('KeyC');
        if (Math.random() < 0.01) i.pressed.add('KeyR');
        if (Math.random() < 0.004) i.pressed.add('KeyG');
        if (Math.random() < 0.006) i.pressed.add('KeyV');
        if (Math.random() < 0.004) i.pressed.add('KeyF');
        if (Math.random() < 0.01) W.switchTo(slots[(Math.random() * slots.length) | 0]);
        i.mouse[0] = Math.random() < 0.6; i.mousePressed[0] = Math.random() < 0.3; i.mouse[2] = Math.random() < 0.2;
        // aim at the nearest enemy most of the time
        const e = g.enemies.list.find(q => q.dying <= 0);
        if (e && Math.random() < 0.8) { const dx = e.pos.x - P.pos.x, dz = e.pos.z - P.pos.z; P.yaw = Math.atan2(-dx, -dz) + (Math.random() - 0.5) * 0.1; P.pitch = Math.atan2(e.pos.y + 1 - P.pos.y - P.eye, Math.hypot(dx, dz)); }
        else { i.dx = (Math.random() - 0.5) * 40; i.dy = (Math.random() - 0.5) * 10; }
        W.water = Math.max(W.water, 20); W.fuel = Math.max(W.fuel, 20);
        if (W.current && W.current.st && W.current.st.reserve < 10) W.refillAllAmmo();
        g.step(1 / 30);
        if (g.state === 'dead') { deaths++; g.respawn(); P.spawnAt(x, z, 0); }
        if (g.state === 'victory') { g.ui.show('victory', false); g.state = 'playing'; }
        maxEnemies = Math.max(maxEnemies, g.enemies.list.length);
        if (!isFinite(P.pos.x + P.pos.y + P.pos.z + P.yaw + P.pitch) || g.enemies.list.some(q => !isFinite(q.pos.x + q.pos.y + q.pos.z))) { nan = true; break; }
        if (frames % 300 === 0) g.render();
      }
      i.down.clear(); i.mouse = [false, false, false];
      // stuck check: enemies that are alive should mostly be in passable cells
      const L = g.level;
      const badCells = g.enemies.list.filter(q => { const [cx, cz] = L.cellOf(q.pos.x, q.pos.z); const h = L.hAt(cx, cz); return h > 50; }).length;
      return { phase: g.phase, deaths, maxEnemies, nan, badCells, kills: g.stats.kills, credits: g.credits, clean: g.grime.cleanliness(zone), state: g.state };
    }, [phase, mins * 60]);
    console.log('phase', phase, JSON.stringify(r));
    if (r.nan) fail('NaN in phase ' + phase);
    if (r.badCells) fail(r.badCells + ' enemies inside walls in phase ' + phase);
    if (r.maxEnemies > 40) fail('too many enemies ' + r.maxEnemies);
  }

  // ---------- save -> reload -> continue
  const before = await page.evaluate(() => { const g = window.GAME; g.save(); return { phase: g.phase, credits: g.credits, perks: Object.keys(g.perks).length, guns: g.weapons.guns.map(x => x && x.id), clean: g.grime.cleanliness('a') }; });
  await page.reload();
  await page.waitForFunction(() => window.GAME);
  const after = await page.evaluate(() => {
    const g = window.GAME; g.input.forceLocked = true;
    const btn = document.getElementById('btnContinue');
    const visible = !btn.classList.contains('hidden');
    btn.click(); g.step(1 / 60); g.render();
    return { visible, phase: g.phase, credits: g.credits, perks: Object.keys(g.perks).length, guns: g.weapons.guns.map(x => x && x.id), clean: g.grime.cleanliness('a'), state: g.state, door4: g.level.doors[4].open };
  });
  console.log('save before', JSON.stringify(before));
  console.log('save after ', JSON.stringify(after));
  if (!after.visible) fail('continue button hidden');
  if (after.phase !== before.phase || after.credits !== before.credits || after.perks !== before.perks || JSON.stringify(after.guns) !== JSON.stringify(before.guns)) fail('save mismatch');
  if (Math.abs(after.clean - before.clean) > 0.05) fail('grime state mismatch');

  await browser.close();
  if (errors.length) { console.log('\nERRORS:\n' + errors.slice(0, 20).join('\n')); process.exit(1); }
  console.log('\nSOAK PASSED');
})().catch(e => { console.error(e); process.exit(1); });
