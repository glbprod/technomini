import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export default function OutilsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <Wrench className="text-blue-600" size={32} />
        Outils
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/outils/tinkercad"
          className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">Tinkercad</h3>
          <p className="text-slate-600">
            Plateforme de modélisation 3D en ligne
          </p>
        </Link>
      </div>
    </div>
  );
}
