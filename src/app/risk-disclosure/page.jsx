import LegalPage from '../../components/LegalPage.jsx';
import { RISK } from '../../data/content.js';

export const metadata = {
  title: RISK.seoTitle,
  description: RISK.description,
};

export default function RiskDisclosure() {
  return <LegalPage content={RISK} />;
}
