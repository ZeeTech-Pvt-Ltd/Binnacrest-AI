import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });

const audit = await page.evaluate(() => {
  const section = document.querySelector('.testimonials__grid').closest('section');
  const grab = (el, props) => {
    const s = getComputedStyle(el);
    return Object.fromEntries(props.map((p) => [p, s[p]]));
  };
  const cards = [...document.querySelectorAll('.testimonial-card')];
  const heads = [...document.querySelectorAll('.testimonial-card__head')];
  const amounts = [...document.querySelectorAll('.testimonial-card__amount')];
  const avatars = [...document.querySelectorAll('.testimonial-card__avatar')];
  const comments = [...document.querySelectorAll('.comment')];
  const out = {};

  out.section = grab(section, ['backgroundColor', 'padding']);
  out.sectionLabel = grab(document.querySelector('.section-label'), ['color', 'fontFamily', 'fontSize']);
  out.grid = grab(document.querySelector('.testimonials__grid'), ['gridTemplateColumns', 'gap']);

  out.card0 = grab(cards[0], ['backgroundColor', 'border', 'borderRadius', 'padding']);
  out.cardHeights = cards.map((c) => Math.round(c.getBoundingClientRect().height));
  out.cardWidths = cards.map((c) => Math.round(c.getBoundingClientRect().width));

  // per-card: does the amount overflow the card or wrap?
  out.amounts = amounts.map((a) => {
    const r = a.getBoundingClientRect();
    return {
      text: a.innerText.replace(/\n/g, ' / '),
      w: Math.round(r.width),
      fontSize: getComputedStyle(a).fontSize,
      color: getComputedStyle(a).color,
      overflow: a.scrollWidth > a.clientWidth + 1,
    };
  });

  // head row geometry: avatar / name / amount vertical alignment
  out.headRows = heads.map((h, i) => {
    const r = h.getBoundingClientRect();
    const av = avatars[i].getBoundingClientRect();
    const am = amounts[i].getBoundingClientRect();
    return {
      h: Math.round(r.height),
      avatarCenter: Math.round(av.top + av.height / 2 - r.top),
      amountCenter: Math.round(am.top + am.height / 2 - r.top),
      amountRightGap: Math.round(r.right - am.right),
      headBottomMargin: getComputedStyle(h).marginBottom,
    };
  });

  out.stars = grab(document.querySelector('.testimonial-card__stars'), ['color', 'gap', 'marginBottom']);
  out.cardText = grab(cards[0].querySelector('p'), ['color', 'fontSize', 'lineHeight']);
  out.comment0 = grab(comments[0], ['backgroundColor', 'border', 'borderRadius', 'padding']);
  out.commentAction = grab(document.querySelector('.comment__actions button'), ['color', 'fontFamily']);

  // horizontal overflow anywhere in the section?
  out.sectionOverflow = (() => {
    const s = section.getBoundingClientRect();
    return document.documentElement.scrollWidth - document.documentElement.clientWidth;
  })();

  // reveal states
  out.revealsVisible = [...document.querySelectorAll('.testimonials__grid .reveal, .testimonials__comments .reveal')]
    .filter((el) => el.classList.contains('is-visible')).length;
  out.revealsTotal = document.querySelectorAll('.testimonials__grid .reveal, .testimonials__comments .reveal').length;

  return out;
});
console.log(JSON.stringify(audit, null, 2));
await page.screenshot({ path: 'shots/testimonials-section.png', fullPage: false });
await browser.close();
