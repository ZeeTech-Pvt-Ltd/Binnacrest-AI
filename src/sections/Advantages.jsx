import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Rich from '../components/Rich.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ADVANTAGES } from '../data/content.js';

export default function Advantages() {
  return (
    <section className="section section--deep">
      <div className="container">
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
          {ADVANTAGES.label}
        </span>
        <SectionHead title={ADVANTAGES.title} lead={ADVANTAGES.lead} />

        <div className="features__grid">
          {ADVANTAGES.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 110} className="feature-card">
              <div className="feature-card__icon">
                <Icon name={f.icon} size={24} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="features__band" delay={120}>
          <Rich text={ADVANTAGES.band} />
        </Reveal>
      </div>
    </section>
  );
}
