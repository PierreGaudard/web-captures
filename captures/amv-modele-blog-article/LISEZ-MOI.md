# Modèle d'article de blog AMV

Aperçu : https://amv-modele-blog-article.pages.dev/assurance-moto/budget-pour-debuter-la-moto/
Construction : `python3 _build.py`

Le gabarit est un **article réel du blog WordPress AMV** (thème « amv »), repris tel quel : en-tête,
menu de rubriques, fil d'ariane, sidebar, pied de page, articles associés. Seul le contenu de
`.entry-content` est remplacé. Les blocs ajoutés n'utilisent que les tokens du thème (vert
`#00aa50`, filet orange `#ee8d00`, gris `#f2f2f2`, rayon 4 px, Montserrat, titres en majuscules).

Contenu : l'article pilote « Quel budget prévoir pour débuter la moto ? », déjà passé au format
cible en août (`Sémantique/Article-pilote-blog-budget-moto/`), jamais envoyé à AMV.

Le bouton « Critères SEO & GEO » en bas à droite numérote chaque élément et l'explique.

## Ce que le modèle ajoute

| N° | Élément | Pourquoi |
|---|---|---|
| 1 | Balises head et données structurées | title 60 c., meta description 142 c., canonical, Open Graph, et un graphe JSON-LD `BlogPosting` (auteur `Person`, `datePublished`, `dateModified`, `speakable` sur l'encart En bref) + `FAQPage` + `BreadcrumbList` + `Organization` |
| 2 | H1 unique au format question | reprend l'intention telle qu'elle est tapée, distinct du title |
| 3 | Auteur, date de mise à jour, temps de lecture | signal E-E-A-T ; le blog n'affiche que la date de publication, parfois vieille de dix ans |
| 4 | Image de mise en avant | 1 600 px, WebP, nom parlant, alt descriptif, `width`/`height`, `fetchpriority=high` |
| 5 | Encart « En bref » | réponse dès le premier écran, en italique puis en puces ; 20 points de score GEO dans notre grille |
| 6 | Sommaire ancré | navigation, ancres nommées, surface de liens de site |
| 7 | Tableaux de synthèse | 2 maximum, avec `caption` et `th scope` ; c'est le bloc le plus repris par les IA génératives |
| 8 | Encart sourcé | information verticale AMV isolée et attribuée |
| 9 | Maillage interne en silo | 5 liens contextuels, **tous vérifiés en HTTP 200 le 10/09/2026** |
| 10 | CTA contextualisé | un seul, au moment de la question du prix |
| 11 | FAQ en accordéon | 7 questions en H3, réponse en 40 à 60 mots, JSON-LD `FAQPage`, réponses présentes dans le HTML même repliées |
| 12 | Encart auteur | en attente des éléments AMV par univers |
| 13 | Sources | fourchettes de prix issues de sources externes, listées et datées |

## Constats relevés sur les articles live le 10/09/2026

- **Aucune meta description**, **aucun Open Graph**, **aucune donnée structurée** sur les articles
  du blog. Seul le canonical est présent (sortie WordPress par défaut).
- Les H2 et H3 sont enveloppés dans des `<span style="font-weight: 400;">`, héritage de collage
  depuis Word.
- **0 FAQ, 0 sommaire, 0 encart de synthèse, 0 auteur** sur l'ensemble du blog.
- Diagnostic des 87 articles fournis par Camille en août : 0 style de titre Word, 0 maillage
  interne, 0 title ni meta, images à 5 283 px et 3,2 Mo en médiane.

## Ce qui reste à fournir par AMV

- **L'encart auteur** : nom, fonction, bio, photo et lien de profil, par univers. Décision E-E-A-T
  du call du 30/07, toujours en attente.
- **Les images de corps de texte** : accès à la photothèque interne. Le modèle n'a que l'image de
  mise en avant.
- Les **fourchettes de prix** de l'article pilote viennent de sources externes datées d'août 2026,
  à confirmer ou à assumer comme des ordres de grandeur sourcés.

## Contrôles passés

- équilibre `<div>` / `</div>` sur la page servie : **74 / 74**
- 1 H1, 8 H2, 11 H3
- rendu vérifié dans un navigateur, pleine page et en mode critères
- liens internes testés un par un : `/assurance/moto/`, `assurance-moto-permis-a2`,
  `assurance-moto-125cm3`, `assurance-moto-50cm3`, `assurance-moto-jeune-conducteur` → 200.
  `assurance-moto-tous-risques` → **404**, donc écarté du maillage.
