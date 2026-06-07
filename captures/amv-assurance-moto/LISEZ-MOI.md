# Copie locale de https://www.amv.fr/assurance/moto/

Date : 2026-06-07

## ⭐ La bonne version : copie interactive (recommandée)

Le site AMV est une **SPA JavaScript**. Pour que tout fonctionne (accordéons cliquables,
carrousels, bon design), il faut la servir en HTTP local, pas l'ouvrir en double-clic.

### Comment l'ouvrir
**Double-clique sur `LANCER-LA-COPIE.command`**
Ça démarre un petit serveur local et ouvre la page sur http://localhost:8787/assurance/moto/
Laisse la fenêtre Terminal ouverte tant que tu consultes. Ferme-la pour arrêter.

(Alternative en ligne de commande : `node serve.js` dans ce dossier, puis ouvrir l'URL.)

Cette version reproduit le site fidèlement : design correct, accordéons "Détails des
options" / "Détails des formules" / FAQ qui s'ouvrent au clic, carrousels, etc.

## Contenu du dossier

- `LANCER-LA-COPIE.command` — lanceur double-cliquable (LA façon de consulter).
- `serve.js` — le serveur local (gère les noms de fichiers avec query string de wget).
- `mirror/www.amv.fr/` — tous les fichiers du site (75 fichiers) : HTML + CSS + **tous les
  chunks JS dynamiques** (Collapse, Carrousel, Glide, etc.) + images + fonts. C'est ce que
  le serveur sert.
- `monolith/amv-moto-monolith.html` — snapshot 1 fichier auto-contenu (HTML serveur). Ouvrable
  en double-clic mais SANS interactivité JS (accordéons figés).
- `rendered/amv-moto-rendered.html` — le DOM après exécution JS (référence).
- `rendered/amv-moto-fullpage.jpeg` — capture d'écran pleine page de référence.

## Limites
- Les parties qui appellent l'API serveur d'AMV en direct (devis dynamique, formulaires)
  ne fonctionneront pas hors-ligne : le backend AMV n'est pas là. Le reste du contenu et
  les interactions front (accordéons, sliders) marchent.
- Le single-file `monolith` est pratique à partager mais fige l'interactivité (limite
  inhérente aux SPA dans un seul fichier).
