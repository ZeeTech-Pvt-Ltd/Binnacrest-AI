import { Routes, Route, useLocation } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

// Route-level code splitting: only the homepage bundle loads up front.
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'));
const Faqs = lazy(() => import('./pages/Faqs.jsx'));
const Contacts = lazy(() => import('./pages/Contacts.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const ThankYou = lazy(() => import('./pages/ThankYou.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'));
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div className="section section--deep" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/contact-us" element={<Contacts />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
