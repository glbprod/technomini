# TODO - Prochaines étapes

## 🎯 Priorité 1 : Composants UI

### 1. Créer le composant IconRenderer

**Objectif** : Composant utilitaire pour afficher dynamiquement des icônes Lucide

**Fichier** : `src/components/ui/IconRenderer.tsx`

**Fonctionnalités** :

- Accepte un nom d'icône Lucide en string
- Retourne l'icône correspondante avec props configurables (size, color, className)
- Gère les cas d'erreur (icône non trouvée)

**Utilité** :

- Simplifie l'affichage dynamique des icônes dans les cartes de cours/outils
- Permet de stocker les noms d'icônes dans `data/content.ts` au lieu d'importer chaque icône

---

## 📄 Priorité 2 : Pages de contenu

### 2. Générer la page Conception3DPage

**Objectif** : Créer une page complète pour le cours de Conception 3D

**Fichier** : `src/pages/Conception3DPage.tsx`

**Contenu à inclure** :

- Introduction au cours
- Objectifs pédagogiques
- Liste des notions abordées
- Ressources et liens utiles (Tinkercad, tutoriels)
- Exemples de projets
- Exercices pratiques

**Design** :

- Utiliser des composants Card pour structurer le contenu
- Sections clairement identifiées
- Images/captures d'écran si disponibles
- Boutons d'action vers Tinkercad

---

## 🎨 Priorité 3 : Amélioration visuelle

### 3. Remplacer les emojis par des icônes Lucide

**Objectif** : Uniformiser l'interface avec des icônes cohérentes

**Fichiers concernés** :

- `src/components/layout/Header.tsx` (logo ⚙️)
- `src/data/content.ts` (tous les emojis dans navigation, cours, outils, etc.)

**Icônes Lucide recommandées** :

- Logo app : `Settings`, `Cpu`, ou `Workflow`
- Navigation Cours : `BookOpen`
- Navigation Outils : `Wrench` ou `Hammer`
- Navigation Révisions : `Brain` ou `GraduationCap`
- Navigation Corrections : `CheckCircle`

**Étapes** :

1. Mettre à jour `data/content.ts` pour utiliser des composants Lucide au lieu de strings emoji
2. Modifier le Header pour utiliser une icône Lucide
3. Vérifier que toutes les sections utilisent des icônes cohérentes

---

## 📋 Tâches secondaires

- [ ] Créer un composant `Card` réutilisable dans `src/components/ui/`
- [ ] Ajouter des animations de transition entre les pages
- [ ] Implémenter un système de recherche global
- [ ] Ajouter un mode sombre (dark mode)
- [ ] Créer des pages de contenu pour ReparabilitePage
- [ ] Implémenter le système de flashcards interactives
- [ ] Ajouter des tests pour les composants principaux

---

## 🚀 État actuel du projet

✅ Architecture propre et organisée
✅ Routing fonctionnel avec React Router
✅ Layout avec Header/Footer/Outlet
✅ Composants sections de la HomePage créés
✅ Build sans erreurs ni warnings
✅ Scripts de maintenance (backup, restore, new-branch)

---

_Dernière mise à jour : 2026-01-29_
