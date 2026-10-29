import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import Rich from '../components/Rich.jsx';
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
          <Link className="btn btn--gold" href="/sign-up">
            Create My Free Account
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
