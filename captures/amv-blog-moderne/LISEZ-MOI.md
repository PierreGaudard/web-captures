# AMV Le Mag — proposition de refonte du blog

- Hub : https://amv-blog-moderne.pages.dev/assurance-moto/
- Article : https://amv-blog-moderne.pages.dev/assurance-moto/budget-pour-debuter-la-moto/
- Construction : `python3 _build.py`

C'est l'**option B** à présenter à AMV. L'option A (`amv-modele-blog-hub` et
`amv-modele-blog-article`) garde le gabarit WordPress actuel et se contente d'y ajouter ce qui
manque. Ici, l'en-tête et le pied de page d'amv.fr sont conservés à l'identique et **toute la zone
éditoriale est redessinée**.

**Les URL ne changent pas.** `/assurance-moto/` pour le hub, `/assurance-moto/<slug>/` pour
l'article. « AMV Le Mag » est un nom de marque et une direction artistique, pas une migration.

## La veille du 10/09/2026 qui a nourri la proposition

| Référence | Ce qu'on en retient |
|---|---|
| **Vous! par Macif** (vousparmacif.macif.fr) | Une marque éditoriale nommée, grille 4 colonnes, aucune sidebar, temps de lecture sur chaque carte, pas d'extrait tronqué |
| **Liberiders** (Mutuelle des Motards) | Hero photo pleine largeur, catégorie en surtitre vert sur les cartes, titres en gras et en casse normale |
| **BikeSocial** (Bennetts, assureur moto britannique) | Sous-marque avec sa propre barre de navigation sous l'en-tête du site, hero + rail de 3 articles, auteur affiché avant la date |
| Pinterest, Dribbble (editorial / magazine layout) | Grandes échelles typographiques, aplats noirs, respiration, grilles asymétriques |

Les trois assureurs qui investissent le contenu lui donnent un **nom**. Le blog AMV n'en a pas :
il n'a que des pages de catégorie appelées « Assurance Moto », homonymes de la landing page produit.

## Ce qui change concrètement

- **Bandeau de marque noir** sous l'en-tête, avec la carte du logo AMV qui déborde dessus, la nav
  des univers et un bouton de devis. Il remplace le `#blog-menu` gris du thème.
- **Fin des majuscules partout.** Aujourd'hui H1, H2 et titres de cartes sont tous en capitales,
  ce qui écrase la hiérarchie. Ici, une échelle typographique réelle, du H1 à 46 px au corps à 18 px.
- **Corps de texte lisible** : 18 px sur `#3f4448`, contre 16 px sur `#888` aujourd'hui.
- **Plus de sidebar** sur le hub (onglets Populaires / Récents / Commentaires, nuage d'étiquettes).
  Aucune des trois références n'en a.
- **Hero éditorial** : une grande carte à la une plus un rail de 3 articles.
- **Cartes** : image en 16/10 recadrée, catégorie en surtitre vert, titre en casse normale, auteur,
  date et temps de lecture réel.
- **Article** : hero photo pleine largeur avec dégradé, signature avec pastille auteur, sommaire
  collant qui suit la lecture, barre de progression, encarts En bref et source, FAQ épurée,
  bloc auteur, sources, 3 articles associés.
- **Bandeau noir de maillage** vers les 5 pages produit, en bas du hub.

Palette : le vert `#00aa50` et l'orange `#ee8d00` sont ceux de la charte AMV, le noir et les gris
sont neutres. Aucune couleur inventée. La police reste Montserrat, déjà chargée par le site.

## Le bouton « Critères SEO & GEO »

En bas à droite des deux pages : il numérote chaque bloc et explique ce qu'il apporte.
8 critères sur le hub, 11 sur l'article.

## Pièges techniques rencontrés

- **`.header` du thème n'a que des enfants en `position:absolute`**, donc une hauteur nulle. Sans
  hauteur explicite, le menu et le logo se superposent au bandeau. On lui donne 72 px, la carte du
  logo (191 × 144 px, calée à 60 px du bord) déborde alors de 72 px sur le noir, et le bandeau
  reçoit un `padding-left` de 300 px au-dessus de 1 000 px de large.
- **Spécificité CSS** : `.mag .wrap { padding: 0 24px }` (0,2,0) bat `.mag-section { padding-top }`
  (0,1,0). Tous les blocs qui portent aussi `.wrap` doivent être préfixés `.mag`, sinon leurs
  espacements sautent sans erreur.
- **`margin: 66px 0 70px 0`** sur un élément `.wrap` annule son `margin: 0 auto` et décentre tout le
  bloc. Utiliser `margin-top` / `margin-bottom`.
- **Le thème ne déclare que 3 glyphes Font Awesome** (`chevron-right`, `chevron-left`, `circle`).
  `fa-chevron-down` doit être déclaré à la main avec `content: "\f078"`.
- Le contrôle `check_da()` de `_blogda.py` vérifie que `style.css`, `mobile.css`, Montserrat et le
  logo sont bien présents dans la page produite : les deux pages passent.

## Contrôles passés

| Page | divs | H1 | JSON-LD |
|---|---|---|---|
| Hub | 62 / 62 | 1 | CollectionPage, ItemList (20), FAQPage, BreadcrumbList, Organization |
| Article | 50 / 50 | 1 | BlogPosting, ImageObject, FAQPage, BreadcrumbList, Organization |

Rendu vérifié dans un navigateur, pleine page et en mode critères, sur les deux pages.
Liens internes tous testés en HTTP 200 le 10/09/2026 ;
`assurance-moto-tous-risques` répond en 404 et a été écarté.
