// Header responsiveness audit across mobile/tablet/desktop widths.
import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });

const widths = [320, 360, 390, 414, 480, 540, 768, 820, 859, 860, 861, 1024];
console.log('WIDTH | overflow | nav | burger | signup | allInView | gap');
for (const w of widths) {
  await page.setViewportSize({ width: w, height: 844 });
  await page.waitForTimeout(250);
  const r = await page.evaluate(() => {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.header__burger');
    const signup = document.querySelector('.header__actions .btn');
    const cs = (el) => getComputedStyle(el);
    const rect = (el) => el.getBoundingClientRect();
    const doc = document.documentElement;
    const logoRect = rect(logo);
    const signRect = rect(signup);
    const burgerRect = rect(burger);
    return {
      docOverflow: doc.scrollWidth - doc.clientWidth,
      navVisible: nav ? cs(nav).display !== 'none' : false,
      burgerVisible: burger ? cs(burger).display !== 'none' : false,
      signupVisible: signup ? cs(signup).display !== 'none' : false,
      gap: Math.round(signRect.left - logoRect.right),
      allInView: logoRect.left >= 0 && logoRect.right <= window.innerWidth &&
        signRect.right <= window.innerWidth + 0.5 && burgerRect.right <= window.innerWidth + 0.5,
      headerH: Math.round(rect(header).height),
    };
  });
  console.log(
    [String(w).padEnd(6), String(r.docOverflow).padEnd(9), String(r.navVisible).padEnd(5),
      String(r.burgerVisible).padEnd(8), String(r.signupVisible).padEnd(7),
      String(r.allInView).padEnd(10), `${r.gap}px (h=${r.headerH})`].join('| ')
  );
}

// Burger menu interaction at 390px
await page.setViewportSize({ width: 390, height: 844 });
await page.locator('.header__burger').click();
await page.waitForTimeout(300);
const menu = await page.evaluate(() => {
  const m = document.querySelector('.mobile-menu');
  const r = m.getBoundingClientRect();
  return {
    open: m.classList.contains('is-open'),
    display: getComputedStyle(m).display,
    width: Math.round(r.width),
    links: [...m.querySelectorAll('a')].map((a) => a.textContent.trim()),
  };
});
console.log('\nBURGER MENU @390:', JSON.stringify(menu));
console.log('Contact Us link visible in menu:', await page.locator('.mobile-menu a').filter({ hasText: 'Contact Us' }).isVisible());
await page.locator('.mobile-menu a').filter({ hasText: 'FAQs' }).click();
await page.waitForTimeout(400);
console.log('after click:', JSON.stringify(await page.evaluate(() => ({
  url: location.pathname,
  menuOpen: document.querySelector('.mobile-menu').classList.contains('is-open'),
}))));

// Smallest screens: tap targets + overlap check
for (const w of [320, 360]) {
  await page.setViewportSize({ width: w, height: 568 });
  await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });
  const small = await page.evaluate(() => {
    const b = document.querySelector('.header__burger').getBoundingClientRect();
    const l = document.querySelector('.logo').getBoundingClientRect();
    const s = document.querySelector('.header__actions .btn').getBoundingClientRect();
    const overlaps = (a, c) => !(a.right <= c.left || c.right <= a.left);
    return {
      burger: `${Math.round(b.width)}x${Math.round(b.height)}`,
      logoTextW: Math.round(l.width),
      signupW: Math.round(s.width),
      logoSignupOverlap: overlaps(l, s),
      signupBurgerOverlap: overlaps(s, b),
    };
  });
  console.log(`\n@${w}:`, JSON.stringify(small));
}
await browser.close();
