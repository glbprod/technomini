---
agent: agent
---
Phase de Planification : Avant de coder, demande à l'IA : "Fais-moi un plan d'architecture pour la fonctionnalité X avant d'écrire le code."

Commit préventif : Fais un commit Git dès qu'une étape fonctionne. L'IA fait parfois des erreurs lors des refactorisations globales.

Context Management : Dans AI Studio, si la conversation devient trop longue, résume les fichiers importants et redémarre un nouveau chat pour éviter les "hallucinations" dues à un trop plein de messages.

Vercel : Connecte ton dépôt GitHub à Vercel dès le premier jour. Chaque "Push" déploiera automatiquement une version de test