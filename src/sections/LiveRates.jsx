import Reveal from '../components/Reveal.jsx';
import Rich from '../components/Rich.jsx';
import { RATES, TICKER } from '../data/content.js';

// Marquee strip: items duplicated so the -50% translate loops seamlessly.
export function LiveTicker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <span className="ticker__item" key={i}>
            <span className="ticker__symbol">{t.symbol}</span>
            <span className="ticker__price">{t.price}</span>
            <span className="ticker__change">▲ {t.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LiveRates() {
  return (
    <section className="section">
      <div className="container rates__grid">
        <Reveal>
          <span className="section-label">{RATES.label}</span>
          <h2 className="section-title">{RATES.title}</h2>
          <p className="section-lead" style={{ margin: '14px 0 0' }}>
            <Rich text={RATES.lead} />
          </p>

          <div className="rates__list">
            {TICKER.slice(0, 3).map((r) => (
              <div className="rates__row" key={r.symbol}>
                <span className="coin-chip__icon">{r.symbol}</span>
                <span className="rates__pair">{r.name}</span>
                <span className="rates__price">{r.price}</span>
                <span className="rates__change">▲ {r.change}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="phone">
            <div className="phone__screen">
              <div className="phone__head">
                <span className="phone__brand">Binnacrest AI</span>
                <span className="phone__menu" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <p className="phone__balance-label">Portfolio balance</p>
              <p className="phone__balance">{RATES.phone.balance}</p>
              <p className="phone__today">{RATES.phone.today}</p>
              <div className="phone__chart" aria-hidden="true" />
              <div className="phone__rows">
                {RATES.phone.rows.map((r) => (
                  <div className="phone__row" key={r.pair}>
                    <span className="pair">{r.pair}</span>
                    <span className="move">{r.move}</span>
                    <span className="pnl">{r.pnl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
