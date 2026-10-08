import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { HOME_STEPS } from '../data/content.js';

export default function HomeSteps() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={HOME_STEPS.title} />

        <div className="steps__grid steps__grid--3">
          {HOME_STEPS.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="feature-card">
              <span className="step-num">Step {i + 1}</span>
              <div className="feature-card__icon">
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="steps__cta" delay={140}>
          <Link className="btn btn--gold" to="/sign-up">
            {HOME_STEPS.ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
