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
  backLink = '/',
  backLabel = "Retour à l'accueil",
}: CorrectionTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bouton retour */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{backLabel}</span>
        </Link>

        {/* Titre principal */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
        </header>

        {/* Contenu Markdown avec Tailwind Typography */}
        <article
          className="prose prose-slate lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
