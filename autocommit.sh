#!/bin/bash

# Naviguer vers le dossier du script (optionnel, utile si lancé via cron)
# cd /chemin/vers/ton/projet

# Vérifier le statut de git
if [[ -n $(git status -s) ]]; then
    echo "Changements détectés. Préparation du commit..."
    
    # Ajouter tous les changements
    git add .

    # Créer un message de commit avec la date et l'heure
    timestamp=$(date +"%Y-%m-%d %H:%M:%S")
    commit_message="Auto-commit du $timestamp"

    # Commit
    git commit -m "$commit_message"

    # Push vers la branche actuelle
    # Note : Assure-toi que ton "upstream" est configuré (git push -u origin main)
    git push

    echo "✅ Changements poussés avec succès : $commit_message"
else
    echo "--- Aucun changement à commit ($date) ---"
fi