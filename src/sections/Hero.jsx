import Icon from '../components/Icon.jsx';
import Rich from '../components/Rich.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { HERO } from '../data/content.js';

// No Reveal wrapper here on purpose: the static shell in index.html shows the
// hero instantly, and the mounted version must appear the same way (no fade)
// so the swap is seamless.
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">{HERO.badge}</span>
          <h1>
            {HERO.titleLead} {HERO.titleGold} {HERO.titleTail}
          </h1>
          <p className="hero__sub">
            <Rich text={HERO.sub} />
          </p>

          <div className="hero__trust">
            {HERO.bullets.map((b) => (
              <span key={b.text}>
                <Icon name={b.icon} size={15} />
                {b.text}
              </span>
            ))}
          </div>
        </div>

        <div>
          <RegistrationForm
            idPrefix="hero"
            title={HERO.formTitle}
            buttonLabel={HERO.ctaLabel}
            belowButton={HERO.belowButton}
          />
        </div>
      </div>
    </section>
  );
}
