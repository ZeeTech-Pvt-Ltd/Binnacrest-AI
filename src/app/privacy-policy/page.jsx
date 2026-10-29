import LegalPage from '../../components/LegalPage.jsx';
import { PRIVACY } from '../../data/content.js';

export const metadata = {
  title: PRIVACY.seoTitle,
  description: PRIVACY.description,
};

export default function PrivacyPolicy() {
  return <LegalPage content={PRIVACY} />;
}
