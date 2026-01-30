export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <span className="font-semibold text-white">TechnoDocs</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            Ressources pédagogiques pour l'enseignement de la Technologie •
            Collège Moulin à Vent • © 2026 @glbprod
          </p>
        </div>
      </div>
    </footer>
  );
}
