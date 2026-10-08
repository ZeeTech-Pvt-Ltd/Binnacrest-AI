import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { LEGITIMACY } from '../data/content.js';

export default function Legitimacy() {
  return (
    <section className="section section--surface legitimacy">
      <div className="container">
        <div className="legitimacy__card">
          <div className="legitimacy__grid">
            <Reveal className="legitimacy__intro">
              <h2>{LEGITIMACY.title}</h2>
              <p>{LEGITIMACY.lead}</p>
              <p className="legitimacy__closing">{LEGITIMACY.closing}</p>
              <Link className="btn btn--gold" to="/sign-up">
                {LEGITIMACY.ctaLabel}
              </Link>
            </Reveal>

            <div className="legitimacy__cards">
              {LEGITIMACY.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="legitimacy__point">
                  <div className="feature-card__icon">
                    <Icon name={p.icon} size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
