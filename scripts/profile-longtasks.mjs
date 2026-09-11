import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.route('**/ipwho.is/**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"country_code":"au"}' }));
await page.route('**/ipapi.co/**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"country_code":"au"}' }));
await page.addInitScript(() => {
  window.__longTasks = [];
  const po = new PerformanceObserver((list) => {
    for (const e of list.getEntries()) {
      const attrs = e.attribution || [];
      window.__longTasks.push({
        dur: Math.round(e.duration),
        start: Math.round(e.startTime),
        attrs: attrs.slice(0, 2).map((a) => ({ name: a.name, src: String(a.containerSrc || '').slice(-60), type: a.containerType })),
      });
    }
  });
  po.observe({ type: 'longtask', buffered: true });
});
await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const tasks = await page.evaluate(() => window.__longTasks);
const total = tasks.reduce((s, t) => s + t.dur, 0);
console.log('long tasks:', tasks.length, 'total ms:', total);
for (const t of tasks.slice(0, 10)) console.log(` ${t.dur}ms @${t.start}`, JSON.stringify(t.attrs));
await browser.close();
