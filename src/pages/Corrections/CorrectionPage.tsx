import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CorrectionPageProps {
  title: string;
  htmlContent: string;
}

export default function CorrectionPage({
  title,
  htmlContent,
}: CorrectionPageProps) {
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> Retour
      </Link>

      <article className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <header className="mb-10 pb-10 border-b border-slate-100">
          <div className="flex items-center gap-3 text-blue-600 mb-4">
            <FileText size={24} />
            <span className="font-bold tracking-widest uppercase text-sm">
              Correction Détaillée
            </span>
          </div>
          <h1 className="text-4xl font-bold font-display text-slate-900">
            {title}
          </h1>
        </header>

        {/* C'est ici que le Markdown transformé en HTML est injecté */}
        <div
          className="prose prose-slate prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}
