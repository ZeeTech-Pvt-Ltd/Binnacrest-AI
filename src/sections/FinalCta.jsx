import Reveal from '../components/Reveal.jsx';
import Rich from '../components/Rich.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { FINAL_CTA } from '../data/content.js';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <h2 className="final-cta__title">{FINAL_CTA.title}</h2>
          <p className="final-cta__lead">
            <Rich text={FINAL_CTA.lead} />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <RegistrationForm
            idPrefix="final"
            title="Create Your Free Account"
            buttonLabel="Create My Free Account"
            belowButton="Free sign-up · Takes under 2 minutes · Secure registration"
          />
        </Reveal>
      </div>
    </section>
  );
}
