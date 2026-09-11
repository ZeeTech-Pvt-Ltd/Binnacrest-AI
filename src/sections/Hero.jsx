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
          <span className="hero__scarcity">{HERO.scarcity}</span>
          <h1>
            {HERO.titleLead} <span className="serif-italic gold-text">{HERO.titleAmount}</span>{' '}
            {HERO.titleTail} <span className="gold-text">{HERO.titleBrand}</span>
          </h1>
          <p className="hero__sub">
            <Rich text={HERO.sub} />
          </p>

          <div className="hero__coins">
            {HERO.coins.map((c) => (
              <span className="coin-chip" key={c.symbol}>
                <span className="coin-chip__icon">{c.symbol}</span>
                <span className="coin-chip__meta">
                  <span className="coin-chip__symbol">{c.name}</span>
                  <br />
                  <span className="coin-chip__price">
                    {c.price} <span className="coin-chip__change">{c.change}</span>
                  </span>
                </span>
              </span>
            ))}
          </div>

          <div className="hero__rating">
            <div className="avatar-cluster">
              {HERO.avatars.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <div>
              <div className="hero__rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={15} />
                ))}
              </div>
              <p className="hero__rating-text">
                <strong>{HERO.rating.score}/5</strong> from {HERO.rating.count}{' '}
                {HERO.rating.note}
              </p>
            </div>
          </div>

          <div className="hero__trust">
            {HERO.trust.map((t) => (
              <span key={t}>
                <Icon name="check" size={15} />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <RegistrationForm
            idPrefix="hero"
            title="Create Your Account"
            subtitle="Registration Is Limited To Verified Residents Of Australia."
            buttonLabel="Register Now"
          />
        </div>
      </div>
    </section>
  );
}
