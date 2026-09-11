import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';

export default function NotFound() {
  useMeta({
    title: 'Page Not Found | Binnacrest AI',
    description:
      'The page you are looking for does not exist. Head back to the Binnacrest AI homepage and sign up today.',
    path: '/404',
  });

  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__code gold-text">404</div>
        <h1 className="section-title" style={{ marginBottom: 10 }}>
          Page Not Found
        </h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="btn btn--gold" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
