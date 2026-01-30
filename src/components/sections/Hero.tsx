export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Bienvenue sur <span className="text-blue-600">TechnoDocs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Retrouvez tous vos cours, outils et révisions de Technologie au
            collège
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cours"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Explorer les cours
            </a>
            <a
              href="#revisions"
              className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Réviser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
