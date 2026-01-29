// Types pour les cours
export interface Cours {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

// Types pour les outils
export interface Outil {
  id: string;
  name: string;
  tag: string;
  icon: string;
  url: string;
  isExternal: boolean;
  logo?: string;
}

// Types pour les révisions
export interface Revision {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  variant: 'flashcards' | 'fiches' | 'quiz';
}

// Types pour les corrections
export interface Correction {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  variant: 'fiches' | 'quiz' | 'eval';
}

// Types pour la navigation
export interface NavItem {
  label: string;
  icon: string;
  href: string;
}
