import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import { FEATURES, FEATURES_PAGE } from '../../data/content.js';

export const metadata = {
  title: FEATURES_PAGE.seoTitle,
  description: FEATURES_PAGE.seoDescription,
};

export default function Features() {
  return (
    <div className="features-page">
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">Features</span>
            <h1>{FEATURES_PAGE.title}</h1>
            <p>{FEATURES_PAGE.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="features__grid">
            {FEATURES.items.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100} className="feature-card features-page__card">
                <span className="features-page__num">0{i + 1}</span>
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
    </div>
  );
}
