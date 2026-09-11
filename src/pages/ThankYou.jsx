import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { THANKYOU } from '../data/content.js';

export default function ThankYou() {
  useMeta({
    title: THANKYOU.seoTitle,
    description: THANKYOU.seoDescription,
    path: '/thank-you',
    robots: 'noindex, follow',
  });

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

          <Link className="btn btn--ghost" to="/">
            Back to home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
