# Fashion Jackson - Page d'accueil

Copie locale complète de https://fashionjackson.com/ (capturée le 2026-06-15).
Site **WordPress** (thème maison `fashionjackson` + Mega Menu, Klaviyo, rewardStyle/LTK).
Aucun hébergement en ligne : tout est sur le disque.

## Les 3 couches

- **`mirror/`** (51 Mo, 355 fichiers) : tous les fichiers du site (HTML, CSS, JS, images,
  fonts), liens réécrits. Assets des CDN externes inclus (Typekit, Font Awesome, rewardStyle,
  Klaviyo, etc.). Point d'entrée : `mirror/fashionjackson.com/index.html`.
  C'est la version fidèle et navigable -> à servir en local (voir ci-dessous).

- **`monolith/fashionjackson-home.html`** (152 Mo) : snapshot **1 seul fichier**
  auto-contenu (CSS/JS/images inlinés en data URIs). S'ouvre en double-clic, 100 % hors-ligne,
  sans serveur. Pratique pour archiver / comparer le contenu "avant".

- **`rendered/`** : référence de l'état rendu.
  - `fashionjackson-rendered.html` : DOM après exécution du JS (234 Ko).
  - `fashionjackson-fullpage.png` : screenshot pleine page (3,5 Mo).

## Ouvrir la copie navigable

```bash
cd ~/Desktop/web-captures
node serve.js fashionjackson-home        # http://localhost:8787/
```

## Limites

Les fonctions qui appellent un backend en direct (recherche WP, soumission newsletter Klaviyo,
liens d'affiliation LTK qui pingent rewardStyle) ne fonctionnent pas hors-ligne : seul le
front (contenu, mise en page, menus, images) est inclus. C'est suffisant pour le travail
de contenu avant/après.
