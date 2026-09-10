# Modèle de hub de catégorie du blog AMV

Aperçu : https://amv-modele-blog-hub.pages.dev/assurance-moto/
Construction : `python3 _build.py` (part de la page live, la localise, injecte les blocs).

La DA n'est pas reproduite, elle est **reprise** : le gabarit est la page live
`https://www.amv.fr/assurance-moto/` du thème WordPress « amv », avec son en-tête, son menu de
rubriques, son fil d'ariane, sa sidebar et son pied de page. Les blocs ajoutés n'utilisent que les
tokens du thème (vert `#00aa50`, filet orange `#ee8d00`, gris `#f2f2f2`, rayon 4 px, Montserrat,
titres en majuscules). Aucune couleur ni graisse nouvelle.

Le bouton « Critères SEO & GEO » en bas à droite numérote chaque élément et l'explique.

## Ce que le modèle ajoute

| N° | Élément | Pourquoi |
|---|---|---|
| 1 | Balises head et données structurées | title, meta description, canonical, `rel=next`, Open Graph, et un graphe JSON-LD `CollectionPage` + `ItemList` (20 articles) + `FAQPage` + `BreadcrumbList` + `Organization` |
| 2 | H1 différencié | le hub porte aujourd'hui « Assurance Moto », H1 exact de la landing page `/assurance/moto/` |
| 3 | Chapeau éditorial | 2 paragraphes, aucun texte sur le hub aujourd'hui |
| 4 | 6 sous-rubriques | découpe les 17 pages de pagination à plat, crée 6 pages de destination thématiques |
| 5 | Article à la une | entrée éditoriale en tête de rubrique |
| 6 | Cartes enrichies | temps de lecture **réel**, calculé sur le texte de chaque article (230 mots/min) |
| 7 | Pagination | 17 pages à plat aujourd'hui, 3 niveaux avec les sous-rubriques |
| 8 | Bloc de maillage produit | 5 liens descendants vers les landing pages, tous vérifiés en HTTP 200 |
| 9 | FAQ de rubrique | 3 questions de niveau catégorie + JSON-LD `FAQPage` |

## Constats relevés sur le hub live le 10/09/2026

- **Aucune meta description**, **aucun canonical**, **aucun Open Graph**, **aucune donnée
  structurée** (seul un fil d'ariane en microdonnées). Yoast n'est plus actif sur le blog, alors
  qu'il l'était sur le gabarit capturé en juillet.
- **Les 20 vignettes du hub ont un attribut `alt` vide**, sans exception.
- Le CTA « Testez nos tarifs » de la sidebar pointe vers
  `/moto/assurance-moto/devis-assurance-moto.aspx`, qui **répond en 301** vers `/assurance/moto/`.
  Le modèle pointe directement la cible.
- `https://www.amv.fr/blog/` redirige vers `/actualite-assurance/` : **il n'existe pas de racine de
  blog**, seulement des pages de catégorie.
- Temps de lecture réels des 20 articles listés : de **3 à 5 minutes** (cache dans
  `_lecture-cache.json`).

## Les 6 sous-rubriques ne sont pas cliquables

Elles n'existent pas encore. La règle est de ne jamais poser un lien vers une page non publiée :
elles sont affichées en tuiles inertes, avec un marqueur « page à créer » visible en mode critères.

## Contrôles passés

- équilibre `<div>` / `</div>` sur la page servie : **109 / 109**
- 1 seul H1
- `ItemList` : 20 items
- rendu vérifié dans un navigateur, pleine page et en mode critères
