// Captures mid-animation frames for visual checks. node tools/anims.cjs outDir
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const out = process.argv[2] || 'screenshots/tmp'; fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  const errs = []; page.on('pageerror', e => errs.push(String(e)));
  await page.addInitScript(() => { window.__TEST__ = true; window.__MANUAL__ = true; try { localStorage.clear(); } catch (e) {} });
  await page.goto('file://' + path.resolve('index.html'));
  await page.waitForFunction(() => window.GAME);
  await page.evaluate(() => { const g = window.GAME; g.input.forceLocked = true; document.getElementById('btnNew').click(); g.god = true; g.enemies.spawnTimer = 1e9; document.getElementById('hud').style.display = 'none'; });
  const cases = [];
  for (const id of ['sidearm', 'cannon', 'hornet', 'scatter', 'vanguard', 'mauler', 'marksman', 'longbow']) {
    for (const [what, frac] of [['reload', 0.25], ['reload', 0.55], ['inspect', 0.5]]) cases.push([id, what, frac]);
  }
  cases.push(['longbow', 'bolt', 0.6], ['scatter', 'pump', 0.3]);
  for (const k of ['karambit', 'butterfly', 'bayonet', 'huntsman']) cases.push(['knife:' + k, 'swing', 0.45], ['knife:' + k, 'inspect', 0.5]);
  const files = [];
  for (const [id, what, frac] of cases) {
    await page.evaluate(([id, what, frac]) => {
      const g = window.GAME, W = g.weapons, P = g.player;
      const [x, z] = g.level.center(10, 33); P.spawnAt(x, z, -Math.PI / 2);
      if (id.startsWith('knife:')) W.setKnife(id.split(':')[1]);
      else { W.guns = [{ id, mag: 2, reserve: 50, refined: false }, null]; W.models = {}; W.forceSwitch('gun0'); }
      for (let k = 0; k < 30; k++) g.step(1 / 60);
      const c = W.current;
      if (what === 'reload') { W.startReload(); const dur = c.def.cls === 'shotgun' ? 1.2 : c.def.reload; for (let t = 0; t < dur * frac; t += 1 / 60) g.step(1 / 60); }
      else if (what === 'inspect') { g.input.pressed.add('KeyF'); g.step(1 / 60); for (let t = 0; t < W.inspectLen * frac; t += 1 / 60) g.step(1 / 60); }
      else if (what === 'bolt' || what === 'pump') { W.cool = 0; g.input.mousePressed[0] = true; g.step(1 / 60); for (let t = 0; t < frac + (what === 'bolt' ? 0.4 : 0); t += 1 / 60) g.step(1 / 60); }
      else if (what === 'swing') { g.input.mouse[0] = true; g.step(1 / 60); g.input.mouse[0] = false; for (let t = 0; t < W.meleeDur * frac; t += 1 / 60) g.step(1 / 60); }
      g.render();
    }, [id, what, frac]);
    const f = path.join(out, `an_${id.replace(':', '_')}_${what}_${frac}.png`);
    await page.screenshot({ path: f }); files.push(f);
  }
  console.log(files.length, 'frames', errs.length ? 'ERRORS ' + errs.join('\n') : 'no errors');
  await browser.close();
})();
