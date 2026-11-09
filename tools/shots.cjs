// Quick scenario screenshots. node tools/shots.cjs outDir
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const out = process.argv[2] || 'screenshots/tmp'; fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await page.addInitScript(() => { window.__TEST__ = true; window.__MANUAL__ = true; try { localStorage.clear(); } catch (e) {} });
  await page.goto('file://' + path.resolve('index.html'));
  await page.waitForFunction(() => window.GAME);
  await page.evaluate(() => { const g = window.GAME; g.input.forceLocked = true; document.getElementById('btnNew').click(); g.ui.bannerT = 0; g.god = true; });
  const scen = {
    fight: () => {
      const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999;
      g.weapons.giveGun('vanguard');
      const [x, z] = g.level.center(27, 28); P.spawnAt(x, z, -Math.PI / 2); P.pitch = 0.0;
      const a = g.enemies.spawn('sludger', x + 5, z - 0.6, true); g.enemies.spawn('sludger', x + 7, z + 0.9, true); g.enemies.spawn('spitter', x + 10, z - 0.4, true); g.enemies.spawn('brute', x + 13, z + 0.6, true);
      for (let k = 0; k < 30; k++) { P.yaw = -Math.PI / 2; g.step(1 / 60); }
      for (let k = 0; k < 6; k++) { P.yaw = -Math.PI / 2; P.pitch = 0.05; g.weapons.cool = 0; g.input.mouse[0] = true; g.step(1 / 60); }
      g.input.mouse[0] = false; g.step(1 / 60);
    },
    explosion: () => {
      const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999;
      let b, spot;
      for (const bb of g.barrels.list.filter(q => q.zone === 'a')) {
        for (let a = 0; a < 6.28 && !spot; a += 0.4) {
          const x = bb.x + Math.cos(a) * 7, z = bb.z + Math.sin(a) * 7;
          if (g.level.zoneAtWorld(x, z) === 'a' && !g.level.blockedCircle(x, z, 0.5, 0) && g.level.lineOfSight(x, 1.6, z, bb.x, 0.8, bb.z)) spot = [x, z];
        }
        if (spot) { b = bb; break; }
      }
      P.spawnAt(spot[0], spot[1], 0);
      const dx = b.x - P.pos.x, dz = b.z - P.pos.z; P.yaw = Math.atan2(-dx, -dz); P.pitch = 0.05;
      g.enemies.spawn('sludger', b.x + 1, b.z + 1, true);
      g.barrels.damage(b, 999);
      for (let k = 0; k < 12; k++) g.step(1 / 60);
    },
    hydro: () => {
      const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999;
      for (let p = 2; p <= 3; p++) g.level.openDoor(p, true); g.phase = 3;
      const [x, z] = g.level.center(7, 24); P.spawnAt(x, z, 0); P.pitch = -0.05;
      g.ambience.gustDur = 3; g.ambience.gust = 1;
      for (let k = 0; k < 60; k++) g.step(1 / 60);
    },
    reactor: () => {
      const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999;
      for (let p = 2; p <= 4; p++) g.level.openDoor(p, true); g.phase = 4; g.enemies.createBoss(); g.enemies.awakenBoss();
      const b = g.enemies.boss; P.spawnAt(b.x, b.z + 10, 0); P.pitch = 0.08;
      g.weapons.tools.torch = true; g.weapons.switchTo('torch');
      for (let k = 0; k < 120; k++) g.step(1 / 60);
      for (let k = 0; k < 20; k++) { g.input.mouse[0] = true; g.step(1 / 60); } g.input.mouse[0] = false;
    },
  };
  scen.hq = () => { const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999; const [x, z] = g.level.center(10, 34); P.spawnAt(x, z, Math.PI * 0.95); P.pitch = -0.05; g.weapons.switchTo('knife'); for (let k = 0; k < 40; k++) g.step(1 / 60); };
  scen.perks = () => { const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999; const [x, z] = g.level.center(10, 34); P.spawnAt(x, z, Math.PI); P.yaw = Math.PI; P.pitch = -0.1; for (let k = 0; k < 20; k++) g.step(1 / 60); };
  scen.creatures = () => { const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999; const [x, z] = g.level.center(27, 28); P.spawnAt(x, z, -Math.PI / 2); P.pitch = 0.08;
    const a = g.enemies.spawn('sludger', x + 3.2, z - 1.2, true), b = g.enemies.spawn('spitter', x + 4, z + 1.0, true), c = g.enemies.spawn('brute', x + 6, z, true);
    for (const e of [a, b, c]) { e.speedMul = 0; e.attackCd = 99; }
    for (let k = 0; k < 30; k++) { P.yaw = -Math.PI / 2; g.step(1 / 60); } };
  for (const t of ['sludger', 'spitter', 'brute']) scen['only_' + t] = new Function(`const g = window.GAME, P = g.player; g.enemies.clearAll(); g.enemies.spawnTimer = 999; const [x, z] = g.level.center(27, 28); P.spawnAt(x, z, -Math.PI / 2); P.pitch = 0.08;
    const a = g.enemies.spawn('${t}', x + 4, z, true); a.speedMul = 0; a.attackCd = 99;
    for (let k = 0; k < 30; k++) { P.yaw = -Math.PI / 2; g.step(1 / 60); }`);
  const which = (process.argv[3] || Object.keys(scen).join(',')).split(',');
  for (const n of which) {
    await page.evaluate(`(${scen[n].toString()})()`);
    await page.evaluate(() => { window.GAME.ui.bannerT = 0; window.GAME.ui.update(0.06); window.GAME.render(); });
    await page.screenshot({ path: path.join(out, 'sc_' + n + '.png') });
    console.log('shot', n);
  }
  if (errs.length) console.log('ERRORS', errs.join('\n'));
  await browser.close();
})();
