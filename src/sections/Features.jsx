import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { FEATURES } from '../data/content.js';

export default function Features() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={FEATURES.title} />

        <div className="features__grid">
          {FEATURES.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="feature-card">
              <div className="feature-card__icon">
                <Icon name={f.icon} size={24} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
