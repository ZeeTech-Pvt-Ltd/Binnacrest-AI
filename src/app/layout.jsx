import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import '../styles/global.css';
import '../styles/home.css';
import '../styles/how-it-works.css';
import '../styles/inner-pages.css';
import '../styles/legal.css';
import 'intl-tel-input/dist/css/intlTelInput.min.css';

// Variable names match the CSS vars in global.css, so the stylesheet needs
// no changes: next/font defines --font-display / --font-body / --font-mono.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://binnacrest-ai.com/'),
  alternates: {
    // Resolves per route against metadataBase, e.g. /reviews ->
    // https://binnacrest-ai.com/reviews
    canonical: './',
  },
  title: 'Binnacrest AI: AI Trading Platform in Australia from AU$250',
  description:
    'Binnacrest AI is a browser-based trading platform for Australians. AI insights across crypto, forex, stocks and commodities. Start from AU$250.',
  keywords: [
    'Binnacrest AI',
    'AI trading platform Australia',
    'AI trading platform',
    'trading platform Australia',
    'AI market insights',
  ],
  icons: { icon: '/favicon.svg' },
  verification: { google: '-zjmd7ar93XX6b0UgAz0URV9YFF3tSBKLm0JoAweH2s' },
  openGraph: {
    siteName: 'Binnacrest AI',
    locale: 'en_AU',
    type: 'website',
    images: ['https://binnacrest-ai.com/og-image.png'],
  },
};

export const viewport = { themeColor: '#0a0e1a' };

const jsonLd = (data) => ({ __html: JSON.stringify(data) });

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Binnacrest AI',
  url: 'https://binnacrest-ai.com/',
  logo: 'https://binnacrest-ai.com/favicon.svg',
  description:
    'Binnacrest AI is a browser-based trading platform for Australians. AI insights across crypto, forex, stocks and commodities. Start from AU$250.',
};

const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Binnacrest AI',
  url: 'https://binnacrest-ai.com/',
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'Product'],
  serviceType: 'AI Trading Platform',
  name: 'Binnacrest AI',
  url: 'https://binnacrest-ai.com/',
  image: 'https://binnacrest-ai.com/og-image.png',
  description:
    'Binnacrest AI is an AI trading platform for Australians. AI insights across crypto, forex, stocks and commodities, starting from AU$250.',
  brand: { '@type': 'Brand', name: 'Binnacrest AI' },
  provider: { '@type': 'Organization', name: 'Binnacrest AI' },
  offers: {
    '@type': 'Offer',
    price: '250',
    priceCurrency: 'AUD',
    availability: 'https://schema.org/InStock',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-53H057QNRG" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-53H057QNRG');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ORG_SCHEMA)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(SITE_SCHEMA)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(SERVICE_SCHEMA)} />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
