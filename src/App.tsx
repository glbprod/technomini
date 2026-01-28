import { useState } from 'react'
import { Layout, Rocket, Github, Menu, X } from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Rocket className="text-blue-600" size={24} />
              <span className="font-bold text-xl tracking-tight">MinimalApp</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">Fonctionnalités</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                Démarrer
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Déployez vos idées <span className="text-blue-600">plus vite.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Une base React + Vite optimisée pour Vercel. Minimaliste, performante et prête pour vos prochains grands projets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
              <Layout size={20} />
              Voir les composants
            </button>
            <a 
              href="https://github.com" 
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              <Github size={20} />
              Code Source
            </a>
          </div>

          {/* Exemple Tailwind */}
          <div className="mt-8 flex justify-center">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
              <p className="text-sm text-slate-600 mb-2">Exemple d'utilisation de Tailwind :</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-medium">
                <span className="font-mono text-xs">p-6 bg-blue-100 rounded-lg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { title: "Vite 6+", desc: "Démarrage instantané et Hot Module Replacement ultra-rapide." },
            { title: "Tailwind 4", desc: "Design utilitaire pour une flexibilité totale sans quitter votre HTML." },
            { title: "Vercel Native", desc: "Déploiement en un clic avec intégration continue automatique." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20 py-10 text-center text-slate-400 text-sm">
        <p>© 2026 MinimalApp — Créé avec AI Studio & Vercel</p>
      </footer>
    </div>
  )
}