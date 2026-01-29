import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAppStore } from '../../stores/useAppStore';
import { navigation } from '../../data/content';

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppStore();

  const handleNavClick = () => {
    closeMobileMenu();
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <span className="text-2xl">⚙️</span>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Techno<span className="text-blue-600">Docs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 bg-white border-t border-slate-100">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
