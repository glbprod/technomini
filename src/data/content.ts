import type { Cours, Outil, Revision, Correction, NavItem } from '../types';

export const navigation: NavItem[] = [
  { label: 'Cours', icon: '📚', href: '/#cours' },
  { label: 'Outils', icon: '🛠️', href: '/#outils' },
  { label: 'Révisions', icon: '🧠', href: '/#revisions' },
  { label: 'Corrections', icon: '✅', href: '/#corrections' },
];

export const cours: Cours[] = [
  {
    id: 'conception-3d',
    title: 'Conception 3D',
    description: "Conception d'un objet utile, modélisation et impression 3D",
    icon: '🏗️',
    path: '/cours/conception-3d',
  },
  {
    id: 'reparabilite',
    title: 'Réparabilité',
    description: 'Indice de réparabilité, diagnostic de panne et améliorations',
    icon: '🔌',
    path: '/cours/reparabilite',
  },
];

export const outils: Outil[] = [
  {
    id: 'tinkercad',
    name: 'Rejoignez votre classe',
    tag: '3D / Circuits',
    icon: '',
    logo: '/images/logo-tinkercad.png',
    url: '/outils/tinkercad',
    isExternal: false,
  },
  {
    id: 'scratch',
    name: 'Scratch',
    tag: 'Programmation visuelle',
    icon: '🐱',
    url: 'https://scratch.mit.edu/',
    isExternal: true,
  },
  {
    id: 'mblock',
    name: 'mBlock',
    tag: 'Robotique',
    icon: '🤖',
    url: 'https://ide.mblock.cc/',
    isExternal: true,
  },
  {
    id: 'vittascience',
    name: 'Vittascience',
    tag: 'Arduino / micro:bit',
    icon: '🔬',
    url: 'https://fr.vittascience.com/',
    isExternal: true,
  },
  {
    id: 'trinket',
    name: 'Trinket',
    tag: 'Python en ligne',
    icon: '🐍',
    url: 'https://trinket.io/',
    isExternal: true,
  },
];

export const revisions: Revision[] = [
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: "Révise en t'amusant avec des cartes interactives",
    icon: '🗒️',
    path: '/revisions/flashcards',
    variant: 'flashcards',
  },
  {
    id: 'fiches',
    title: 'Fiches de synthèse',
    description: "L'essentiel à retenir pour chaque chapitre",
    icon: '📝',
    path: '/revisions/fiches',
    variant: 'fiches',
  },
  {
    id: 'quiz',
    title: 'Évaluations',
    description: 'Teste tes connaissances et tes compétences',
    icon: '❓',
    path: '/revisions/quiz',
    variant: 'quiz',
  },
];

export const corrections: Correction[] = [
  {
    id: 'fiches-activites',
    title: "Fiches d'activités",
    description: "Corrections des fiches d'activités en classe",
    icon: '📋',
    path: '/corrections/fiches-activites',
    variant: 'fiches',
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description: 'Réponses et explications des quiz',
    icon: '❓',
    path: '/corrections/quiz',
    variant: 'quiz',
  },
  {
    id: 'evaluations',
    title: 'Évaluations',
    description: 'Corrigés détaillés des évaluations',
    icon: '📊',
    path: '/corrections/evaluations',
    variant: 'eval',
  },
];
