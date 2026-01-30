import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import { FEATURES, type FeatureKey } from '../../config';

interface OutilItem {
  title: string;
  description: string;
  path: string;
  featureFlag: FeatureKey;
}

const allOutils: OutilItem[] = [
  {
    title: 'Tinkercad',
    description: 'Plateforme de modélisation 3D en ligne',
    path: '/outils/tinkercad',
    featureFlag: 'tinkercad',
  },
];

const outils = allOutils.filter((o) => FEATURES[o.featureFlag]);

export default function OutilsSection() {
  if (outils.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <Wrench className="text-blue-600" size={32} />
        Outils
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {outils.map((item) => (
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
