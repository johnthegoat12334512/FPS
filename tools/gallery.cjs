// Renders each held item for visual tuning. node tools/gallery.cjs outDir
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const out = process.argv[2] || 'screenshots/tmp'; fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  page.on('pageerror', e => console.log('ERR', e));
  await page.addInitScript(() => { window.__TEST__ = true; try { localStorage.clear(); } catch (e) {} });
  await page.goto('file://' + path.resolve('index.html'));
  await page.waitForFunction(() => window.GAME);
  await page.evaluate(() => { const g = window.GAME; g.input.forceLocked = true; document.getElementById('btnNew').click(); g.ui.bannerT = 0; });
  const items = (process.argv[3] || 'sidearm,hornet,scatter,vanguard,mauler,marksman,longbow,cannon,knife:combat,knife:karambit,knife:butterfly,knife:bayonet,knife:huntsman,vacuum,washer,torch').split(',');
  for (const it of items) {
    await page.evaluate((it) => {
      const g = window.GAME, W = g.weapons, P = g.player;
      const [x, z] = g.level.center(10, 33); P.spawnAt(x, z, -Math.PI / 2);
      if (it.startsWith('knife:')) { W.setKnife(it.split(':')[1]); }
      else if (['vacuum', 'washer', 'torch'].includes(it)) { W.tools[it] = true; W.switchTo(it); }
      else { W.guns = [{ id: it, mag: 5, reserve: 5, refined: false }, null]; W.models = {}; W.forceSwitch('gun0'); }
      for (let k = 0; k < 40; k++) g.step(1 / 60);
      g.ui.bannerT = 0; g.render();
    }, it);
    await page.screenshot({ path: path.join(out, 'vm_' + it.replace(':', '_') + '.png') });
  }
  await browser.close();
})();
