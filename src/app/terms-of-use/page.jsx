import LegalPage from '../../components/LegalPage.jsx';
import { TERMS } from '../../data/content.js';

export const metadata = {
  title: TERMS.seoTitle,
  description: TERMS.description,
};

export default function TermsOfUse() {
  return <LegalPage content={TERMS} />;
}
