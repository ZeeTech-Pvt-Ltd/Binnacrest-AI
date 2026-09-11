import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Rich from '../components/Rich.jsx';
import { LEGITIMACY } from '../data/content.js';

export default function Legitimacy() {
  return (
    <section className="section section--surface legitimacy">
      <div className="container">
        <Reveal>
          <div className="legitimacy__card">
            <h2>{LEGITIMACY.title}</h2>
            <p>{LEGITIMACY.lead}</p>
            <ul className="legitimacy__points">
              {LEGITIMACY.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={18} />
                  <span>
                    <Rich text={p} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="legitimacy__closing">{LEGITIMACY.closing}</p>
            <Link className="btn btn--gold" to="/sign-up">
              {LEGITIMACY.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
