import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { FEATURES, type FeatureKey } from '../../config';

interface CoursItem {
  title: string;
  description: string;
  path: string;
  featureFlag: FeatureKey;
}

const allCours: CoursItem[] = [
  {
    title: 'Conception 3D',
    description: 'Apprenez à modéliser en 3D avec Tinkercad',
    path: '/cours/conception-3d',
    featureFlag: 'coursConception3D',
  },
  {
    title: 'Réparabilité',
    description: 'Comprendre les enjeux de la réparation des objets',
    path: '/cours/reparabilite',
    featureFlag: 'coursReparabilite',
  },
];

const cours = allCours.filter((c) => FEATURES[c.featureFlag]);

export default function CoursSection() {
  if (cours.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <BookOpen className="text-blue-600" size={32} />
        Cours
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {cours.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
