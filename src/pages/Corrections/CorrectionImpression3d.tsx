import { html } from '../../content/md/corrections/correction-impression3d.md';
import CorrectionTemplate from '../../components/layout/CorrectionTemplate';

export default function CorrectionImpression3D() {
  return (
    <CorrectionTemplate title="Correction : Impression 3D" htmlContent={html} />
  );
}
