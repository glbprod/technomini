import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { IconRenderer } from '../../components/ui';
import { FEATURES, type FeatureKey } from '../../config';

interface CorrectionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  featureFlag: FeatureKey; // Référence au flag dans FEATURES
}

const allCorrections: CorrectionCard[] = [
  {
    id: 'impression-3d',
    title: 'Impression 3D',
    description: 'Correction du cours sur la conception et impression 3D',
    icon: 'Printer',
    path: '/corrections/impression-3d',
    featureFlag: 'correctionImpression3D',
  },
  // Ajouter d'autres corrections ici
];

// Filtrer selon les feature flags
const corrections = allCorrections.filter((c) => FEATURES[c.featureFlag]);

export default function CorrectionsFichesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Retour */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Retour à l'accueil</span>
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-green-100 rounded-2xl">
            <FileText className="text-green-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">
            Corrections des fiches d'activités
          </h1>
        </div>
        <p className="text-xl text-slate-600">
          Retrouvez les corrections détaillées des fiches d'activités.
        </p>
      </header>

      {/* Grid de cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {corrections.map((correction) => (
          <Link
            key={correction.id}
            to={correction.path}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                <IconRenderer
                  name={correction.icon}
                  size={24}
                  className="text-slate-600 group-hover:text-blue-600 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {correction.title}
              </h3>
            </div>
            <p className="text-slate-600">{correction.description}</p>
          </Link>
        ))}
      </div>

      {corrections.length === 0 && (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-500">Aucune correction disponible.</p>
        </div>
      )}
    </div>
  );
}
