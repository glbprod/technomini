import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { FEATURES, type FeatureKey } from '../../config';

interface RevisionItem {
  title: string;
  description: string;
  path: string;
  featureFlag: FeatureKey;
}

const allRevisions: RevisionItem[] = [
  {
    title: 'Flashcards',
    description: 'Révisez avec des cartes mémo interactives',
    path: '/revisions/flashcards',
    featureFlag: 'flashcards',
  },
  {
    title: 'Fiches de révision',
    description: 'Consultez les synthèses de cours',
    path: '/revisions/fiches',
    featureFlag: 'fiches',
  },
  {
    title: 'Quiz',
    description: 'Testez vos connaissances',
    path: '/revisions/quiz',
    featureFlag: 'quiz',
  },
];

const revisions = allRevisions.filter((r) => FEATURES[r.featureFlag]);

export default function RevisionsSection() {
  if (revisions.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <GraduationCap className="text-blue-600" size={32} />
        Révisions
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {revisions.map((item) => (
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
