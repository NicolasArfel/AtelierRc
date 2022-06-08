# Liste des commandes Git à se rappeller :

1. Faire un clone du dossier :

    `git clone git@github.com:O-clock-Blob/projet-14-AtelierRC.git`

2. Aller dans le dossier sur lequel vous souhaitez travailler :
    - `cd API`
    - `cd Client`

3. Créer sa branche :
    - `git checkout -b nom-de-la-branche`
    - par exemple : `git checkout -b header`

4. Vérifier le status actuel du travail :
    - `git status`

5. Voir la branche locale:
    - `git branch`

6. Sauvegarder votre travail :
    - `git add`
    - `git commit -m "texte clair et explicite"`
    - `git push`

7. Switcher sur une autre branche :
    - `git checkout le-nom-de-la-branche`
    - par exemple : `git checkout main` vous renverra sur la branche 'master'.

8. Récupérer le travail de la branche master :
   - `git remote add origin git@github.com:O-clock-Blob/projet-14-AtelierRC.git`
   - `git switch main`
   - `git pull origin main --force --allow-unrelated-histories`

### N'oubliez pas de repartir d'une nouvelle branche en reprenant l'étape 3

