import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Binnacrest AI Trading Platform Australia',
  description:
    'The page you are looking for does not exist. Head back to the Binnacrest AI homepage to explore the platform and sign up today.',
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__code gold-text">404</div>
        <h1 className="section-title" style={{ marginBottom: 10 }}>
          Page Not Found
        </h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="btn btn--gold" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
