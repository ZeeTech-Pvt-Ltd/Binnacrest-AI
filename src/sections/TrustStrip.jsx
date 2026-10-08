import Reveal from '../components/Reveal.jsx';
import { TRUST_STRIP } from '../data/content.js';

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__grid">
        {TRUST_STRIP.map((t, i) => (
          <Reveal key={t.title} delay={i * 90} className="trust-strip__item">
            <div className="trust-strip__title">{t.title}</div>
            <div className="trust-strip__text">{t.text}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
