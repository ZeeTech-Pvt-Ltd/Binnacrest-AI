import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { COMPARISON } from '../data/content.js';

export default function Comparison() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={COMPARISON.title} />

        <Reveal>
          <div className="comparison">
            <div className="comparison__row comparison__row--head">
              <div className="comparison__label" aria-hidden="true" />
              <div className="comparison__col">{COMPARISON.manualLabel}</div>
              <div className="comparison__col comparison__col--gold">{COMPARISON.aiLabel}</div>
            </div>
            {COMPARISON.rows.map((r) => (
              <div className="comparison__row" key={r.label}>
                <div className="comparison__label">{r.label}</div>
                <div className="comparison__col">{r.manual}</div>
                <div className="comparison__col comparison__col--gold">{r.ai}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
