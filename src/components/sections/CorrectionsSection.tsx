import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function CorrectionsSection() {
  const corrections = [
    {
      title: "Fiches d'activités",
      description: 'Corrections détaillées des exercices',
      path: '/corrections/fiches-activites',
    },
    {
      title: 'Quiz',
      description: 'Réponses aux quiz',
      path: '/corrections/quiz',
    },
    {
      title: 'Évaluations',
      description: 'Corrigés des contrôles',
      path: '/corrections/evaluations',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <CheckCircle className="text-blue-600" size={32} />
        Corrections
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {corrections.map((item) => (
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
