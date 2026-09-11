import LegalPage from '../components/LegalPage.jsx';
import { TERMS } from '../data/content.js';

export default function TermsOfUse() {
  return <LegalPage content={TERMS} path="/terms-of-use" />;
}
