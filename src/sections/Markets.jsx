import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { MARKETS } from '../data/content.js';

// Split layout: market list on the left, an animated "market radar" visual
// on the right (pure CSS rings + sweep + floating market orbs).
export default function Markets() {
  return (
    <section className="section markets">
      <div className="container markets__layout">
        <Reveal className="markets__copy">
          <SectionHead align="left" title={MARKETS.title} />
          <div className="markets__list">
            {MARKETS.items.map((m, i) => (
              <div className="markets__row" key={m.title}>
                <div className="markets__row-icon">
                  <Icon name={m.icon} size={22} />
                </div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="markets__visual" delay={120}>
          <div className="markets__shot">
            <img src="/images/new%20img.webp" alt="Binnacrest AI platform" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
