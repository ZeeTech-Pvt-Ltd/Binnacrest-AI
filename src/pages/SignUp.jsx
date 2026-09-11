import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { SIGNUP } from '../data/content.js';

export default function SignUp() {
  useMeta({
    title: SIGNUP.seoTitle,
    description: SIGNUP.seoDescription,
    path: '/sign-up',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">Sign Up</span>
            <h1>{SIGNUP.title}</h1>
            <p>{SIGNUP.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container signup__grid">
          <Reveal>
            <h2 className="section-title" style={{ fontSize: 26 }}>
              Why Australians Choose Binnacrest AI
            </h2>
            <ul className="signup__points">
              {SIGNUP.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={18} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <RegistrationForm
              idPrefix="signup"
              title="Create Your Account"
              subtitle="Registration Is Limited To Verified Residents Of Australia."
              buttonLabel="Open My Account"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
