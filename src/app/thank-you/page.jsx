import Link from 'next/link';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import { THANKYOU } from '../../data/content.js';

export const metadata = {
  title: THANKYOU.seoTitle,
  description: THANKYOU.seoDescription,
  robots: 'noindex, follow',
};

export default function ThankYou() {
  return (
    <section className="section thankyou">
      <div className="container">
        <Reveal>
          <div className="thankyou__check">
            <Icon name="check" size={38} />
          </div>
          <h1 className="section-title">{THANKYOU.title}</h1>
          <p className="section-lead" style={{ margin: '14px auto 0' }}>
            {THANKYOU.lead}
          </p>

          <h2 className="section-label" style={{ margin: '44px 0 8px' }}>
            {THANKYOU.next}
          </h2>
          <ol className="thankyou__steps">
            {THANKYOU.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>

          <Link className="btn btn--ghost" href="/">
            Back to home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
