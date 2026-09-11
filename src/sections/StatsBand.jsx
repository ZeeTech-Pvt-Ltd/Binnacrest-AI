import Reveal from '../components/Reveal.jsx';
import { STATS } from '../data/content.js';

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container stats-band__grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat">
            <div className="stat__value gold-text">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
