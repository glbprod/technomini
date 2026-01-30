/**
 * Feature flags centralisés
 * Permet d'activer/désactiver des fonctionnalités en un seul endroit
 */

export const FEATURES = {
  // === Sections de la HomePage ===
  sectionCours: true,
  sectionOutils: true,
  sectionRevisions: true,
  sectionCorrections: true,

  // === Corrections ===
  correctionImpression3D: true,
  correctionReparabilite: false, // Préparé pour plus tard

  // === Cours ===
  coursConception3D: true,
  coursReparabilite: false,

  // === Révisions ===
  flashcards: true,
  fiches: false,
  quiz: false,

  // === Outils ===
  tinkercad: true,
} as const;

export type FeatureKey = keyof typeof FEATURES;

/**
 * Helper pour vérifier si une feature est activée
 */
export function isEnabled(feature: FeatureKey): boolean {
  return FEATURES[feature] === true;
}
