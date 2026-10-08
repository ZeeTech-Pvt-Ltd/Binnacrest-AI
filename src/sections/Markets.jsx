import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { MARKETS } from '../data/content.js';

export default function Markets() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={MARKETS.title} />

        <div className="markets__grid">
          {MARKETS.items.map((m, i) => (
            <Reveal key={m.title} delay={i * 100} className="feature-card">
              <div className="feature-card__icon">
                <Icon name={m.icon} size={24} />
              </div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
