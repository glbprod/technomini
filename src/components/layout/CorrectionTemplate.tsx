import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CorrectionTemplateProps {
  title: string;
  htmlContent: string;
  backLink?: string;
  backLabel?: string;
}

export default function CorrectionTemplate({
  title,
  htmlContent,
  backLink = '/corrections',
  backLabel = 'Retour aux corrections',
}: CorrectionTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation retour */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{backLabel}</span>
        </Link>

        {/* En-tête */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        </header>

        {/* Contenu HTML rendu avec Tailwind Typography */}
        <article
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
