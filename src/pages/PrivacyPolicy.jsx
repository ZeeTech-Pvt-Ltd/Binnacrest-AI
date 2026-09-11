import LegalPage from '../components/LegalPage.jsx';
import { PRIVACY } from '../data/content.js';

export default function PrivacyPolicy() {
  return <LegalPage content={PRIVACY} path="/privacy-policy" />;
}
