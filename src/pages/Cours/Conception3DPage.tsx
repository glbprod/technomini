import {
  Box,
  MousePointer2,
  Layers,
  Printer,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Conception3DPage() {
  const etapes = [
    {
      title: '1. Modélisation',
      desc: 'Apprendre à manipuler les formes primitives et à les grouper.',
      icon: <MousePointer2 className="text-blue-500" />,
    },
    {
      title: '2. Assemblage',
      desc: "Utiliser les fonctions d'alignement pour créer un objet complexe.",
      icon: <Layers className="text-purple-500" />,
    },
    {
      title: '3. Fabrication',
      desc: "Exporter en .STL et préparer l'impression 3D.",
      icon: <Printer className="text-green-500" />,
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      {/* Retour */}
      <Link
        to="/"
        className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> Retour à l'accueil
      </Link>

      {/* Header de Page */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-100 rounded-2xl">
            <Box className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold font-display">Conception 3D</h1>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed">
          Transformez vos idées en objets réels. Ce module vous guide dans la
          maîtrise de la modélisation 3D pour la réalisation de projets
          techniques.
        </p>
      </header>

      {/* Workflow */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {etapes.map((etape, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="mb-4">{etape.icon}</div>
            <h3 className="font-bold text-lg mb-2">{etape.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {etape.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Zone d'action Tinkercad */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Prêt à modéliser ?</h2>
          <p className="text-slate-400">
            Rejoignez votre classe sur Tinkercad pour commencer votre projet.
          </p>
        </div>
        <a
          href="https://www.tinkercad.com/joinclass"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all whitespace-nowrap"
        >
          Ouvrir Tinkercad <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
