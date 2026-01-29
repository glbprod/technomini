📘 Journal d'Apprentissage : Migration React & Stack Moderne
🛠 Phase 1 : Stabilisation & Outillage
Automatisation Git : Mise en place d'un script .sh pour l'auto-commit afin de sécuriser le travail itératif avec les agents IA.

Qualité du Code (Husky/ESLint) : Compréhension du rôle de Husky (intercepteur de commits) et d'ESLint (analyseur de qualité logique) pour maintenir un code propre.

Correction TypeScript/Vitest : Identification d'un conflit entre les types Jest et le moteur Vitest. Résolution par l'alignement des types dans tsconfig.app.json et la configuration des globals dans vite.config.ts.

🏗 Phase 2 : Choix Architecturaux
Routing (Option A) : Choix d'une Single Page Application (SPA) avec react-router-dom pour une navigation fluide sans rechargement de page.

Gestion d'État (Zustand) : Adoption de Zustand à la place de Redux ou Context API pour sa simplicité et ses performances (sélecteurs précis qui évitent les re-renders inutiles).

Structure de Dossiers : Mise en place d'une architecture modulaire :

components/ui : Composants atomiques réutilisables.

components/layout : Structure globale (MainLayout, Header, Footer).

data/ : Centralisation du contenu pour séparer les données de l'affichage.

🤖 Phase 3 : Collaboration Homme-IA
Répartition des Rôles :

Lead Dev (Gemini) : Stratégie, architecture et explications de concepts.

Agent VS Code : Refactoring, corrections TS/Lint et gestion des fichiers locaux.

Agent Artefact : Production de composants UI complexes et styling Tailwind.
