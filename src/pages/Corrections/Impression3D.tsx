import CorrectionTemplate from '../../components/layout/CorrectionTemplate';
import { html } from '../../content/md/corrections/correction-impression3d.md';

export default function Impression3DPage() {
  return (
    <CorrectionTemplate
      title="Correction - Impression 3D"
      htmlContent={html}
      backLink="/#corrections"
      backLabel="Retour aux corrections"
    />
  );
}
