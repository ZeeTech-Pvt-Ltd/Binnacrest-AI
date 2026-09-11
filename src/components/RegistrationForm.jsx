import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/dist/css/intlTelInput.min.css';
import { SITE } from '../data/content.js';

// Full-size validator package (~300KB) is attached lazily; the input renders instantly
// with flag + dial code, and the validators arrive on first focus or after 4s idle.
// v29's attachUtils() invokes its loader immediately, so it must NOT run at module scope.

export default function RegistrationForm({
  idPrefix = 'hero',
  title = 'Create Your Account',
  subtitle = 'Registration Is Limited To Verified Residents Of Australia.',
  buttonLabel = 'Register Now',
  showConsent = true,
}) {
  const navigate = useNavigate();
  const phoneRef = useRef(null);
  const itiRef = useRef(null);
  const utilsDeferred = useRef(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [phoneCountry, setPhoneCountry] = useState(null);

  const fid = (name) => `${idPrefix}-${name}`;

  useEffect(() => {
    const input = phoneRef.current;
    if (!input || itiRef.current) return;

    // Registration is AU-only, so the default country is fixed. This also keeps
    // the geo-lookup request out of the page-load critical path (PSI flagged it
    // as a 1.1s chain tail) and shows the +61 dial code from the first frame.
    const iti = intlTelInput(input, {
      initialCountry: 'au',
    });
    itiRef.current = iti;

    // With a fixed initialCountry the countrychange event fires during the
    // constructor, before our listener below attaches - sync the label now.
    const initialCountry = iti.getSelectedCountry();
    if (initialCountry) {
      setPhoneCountry({ name: initialCountry.name, dialCode: initialCountry.dialCode });
    }

    // Warm up the validators on first focus or after 4s idle - whichever comes first.
    const warm = () => {
      if (utilsDeferred.current) return;
      let resolveDeferred;
      utilsDeferred.current = new Promise((r) => {
        resolveDeferred = r;
      });
      intlTelInput
        .attachUtils(() => import('intl-tel-input/utils'))
        .then(resolveDeferred)
        .catch(() => resolveDeferred());
    };
    const onFocus = () => {
      warm();
      input.removeEventListener('focus', onFocus);
    };
    input.addEventListener('focus', onFocus);
    // Note: no idle warm-up - loading utils on idle cost ~3s of main-thread blocking
    // (TBT) on mobile. Validators now load on first focus; submit waits ≤3s if needed.

    // Keep the phone label in sync with the selected country (flag + dial code).
    const onCountryChange = (e) => {
      const c = e.detail;
      setPhoneCountry(c ? { name: c.name, dialCode: c.dialCode } : null);
    };
    input.addEventListener('countrychange', onCountryChange);

    return () => {
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('countrychange', onCountryChange);
      iti.destroy();
      itiRef.current = null;
      utilsDeferred.current = null;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSuccess('');

    const data = Object.fromEntries(new FormData(e.target).entries());
    const errs = {};

    if (!data.firstName.trim()) errs.firstName = 'First name is required';
    if (!data.lastName.trim()) errs.lastName = 'Last name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    // Honeypot - bots fill it, humans never see it.
    if (data.website) return;

    // Phone: full validation once utils are loaded; raw sanity check otherwise.
    let phone = data.phone.trim();
    const iti = itiRef.current;
    if (iti) {
      let valid = false;
      try {
        valid = iti.isValidNumber();
      } catch {
        // v29's ensureUtils throws until utils are attached - wait briefly, then retry.
        await Promise.race([
          utilsDeferred.current || Promise.resolve(),
          new Promise((r) => setTimeout(r, 3000)),
        ]);
        try {
          valid = iti.isValidNumber();
        } catch {
          valid = false;
        }
      }
      if (valid) {
        phone = iti.getNumber();
      } else if (phone.replace(/\D/g, '').length < 7) {
        errs.phone = 'Enter a valid phone number';
      }
    } else if (phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Enter a valid phone number';
    }

    if (showConsent && !agreed) {
      errs.consent = 'Please accept to continue';
    }

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    setSubmitting(true);
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerName: SITE.offerName,
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          email: data.email.trim(),
          phone,
        }),
      });
      if (!res.ok) {
        // The endpoint rate-limits 3 attempts per 5 minutes per IP.
        const msg = await res.text().catch(() => '');
        throw new Error(
          res.status === 429 || /limit|many|attempt/i.test(msg)
            ? 'Too many attempts. Please wait a few minutes and try again.'
            : 'Something went wrong on our side. Please try again in a moment.'
        );
      }
      setSuccess('Account request received. Redirecting…');
      setTimeout(() => navigate('/thank-you'), 600);
    } catch (err) {
      setFormError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form form-wrap" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">{title}</h2>
      <p className="form__sub">{subtitle}</p>

      {formError && (
        <div className="form__error" role="alert">
          {formError}
        </div>
      )}
      {success && (
        <div className="form__success" role="status">
          {success}
        </div>
      )}

      {/* Honeypot field - hidden from humans */}
      <input className="form__honey" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form__row">
        <div className="field">
          <label htmlFor={fid('firstName')}>First name</label>
          <input
            id={fid('firstName')}
            name="firstName"
            type="text"
            placeholder="Oliver"
            autoComplete="given-name"
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>
        <div className="field">
          <label htmlFor={fid('lastName')}>Last name</label>
          <input
            id={fid('lastName')}
            name="lastName"
            type="text"
            placeholder="Hartley"
            autoComplete="family-name"
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={fid('email')}>Email</label>
        <input
          id={fid('email')}
          name="email"
          type="email"
          placeholder="oliver@example.com"
          autoComplete="email"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor={fid('phone')}>
          Phone{phoneCountry ? ` (${phoneCountry.name} +${phoneCountry.dialCode})` : ''}
        </label>
        <input
          id={fid('phone')}
          ref={phoneRef}
          name="phone"
          type="tel"
          autoComplete="tel"
          className={errors.phone ? 'input-error' : ''}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      {showConsent && (
        <div>
          <label className="form__consent">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree to the{' '}
              <Link to="/terms-of-use" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent && <span className="error-text">{errors.consent}</span>}
        </div>
      )}

      <button className="btn btn--gold" type="submit" disabled={submitting}>
        {submitting ? 'Submitting…' : buttonLabel}
      </button>

      <p className="form__note">Protected by 2FA and 256-bit SSL encryption</p>
    </form>
  );
}
