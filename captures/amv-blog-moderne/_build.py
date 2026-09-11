#!/usr/bin/env python3
"""AMV Le Mag : proposition de refonte du blog (hub de rubrique + article).

Difference avec les captures amv-modele-blog-* : celles-ci gardent le gabarit
WordPress actuel et se contentent d'y ajouter ce qui manque. Ici on garde
l'en-tete et le pied de page d'amv.fr a l'identique, et on redessine toute la
zone editoriale, d'apres la veille du 10/09/2026 :

  Macif                -> "Vous!"        marque editoriale, grille 4 colonnes, zero sidebar
  Mutuelle des Motards -> "Liberiders"   hero photo pleine largeur, categorie en surtitre vert
  Bennetts (UK)        -> "BikeSocial"   sous-marque avec sa nav, hero + rail de 3, auteur en avant

Les URL ne changent pas : /assurance-moto/ pour le hub et
/assurance-moto/<slug>/ pour l'article. "AMV Le Mag" est un nom de marque et une
direction artistique, pas une migration.

Sortie : mirror/www.amv.fr/, deployable via ../../deploy.sh capture amv-blog-moderne
"""
import re, sys, json, shutil, pathlib
from bs4 import BeautifulSoup

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent))
import _blogda as da  # noqa: E402

ROOT = HERE / "mirror" / "www.amv.fr"
GABARIT = HERE.parent / "amv-label-excellence" / "mirror" / "www.amv.fr" / \
    "actualite-assurance" / "amv-decroche-le-label-excellence-2026" / "index.html"
HERO_SRC = HERE.parent / "amv-blog-budget-moto" / "mirror" / "www.amv.fr" / \
    "assets" / "budget-moto-hero.webp"
CACHE_LECTURE = HERE.parent / "amv-modele-blog-hub" / "_lecture-cache.json"
ASSETS = HERE.parent / "_modeles-blog-assets"

HUB_SRC = "https://www.amv.fr/assurance-moto/"
HUB_PATH = "assurance-moto/"
ART_PATH = "assurance-moto/budget-pour-debuter-la-moto/"
HUB_URL = "https://www.amv.fr/assurance-moto/"
ART_URL = "https://www.amv.fr/assurance-moto/budget-pour-debuter-la-moto/"

HERO_REL = "wp-content/uploads/2026/08/budget-pour-debuter-la-moto.webp"

L_MOTO = "https://www.amv.fr/assurance/moto/"
L_A2 = "https://www.amv.fr/assurance-moto/assurance-moto-permis-a2/"
L_125 = "https://www.amv.fr/assurance-moto/assurance-moto-125cm3/"
L_50 = "https://www.amv.fr/assurance-moto/assurance-moto-50cm3/"
L_JEUNE = "https://www.amv.fr/assurance-moto/assurance-moto-jeune-conducteur/"

E = "&#8239;€"

RUBRIQUES = ["Réglementation et permis", "Équipement", "Entretien et mécanique",
             "Sécurité et conduite", "Achat et budget", "Culture et voyage"]

FAQ_HUB = [
    ("Quelle assurance moto est obligatoire ?",
     "La Responsabilité civile est la couverture minimale obligatoire. Elle couvre les dommages "
     "causés aux tiers lors d'un sinistre responsable. Les formules supérieures, Vol / Incendie, "
     "Dommages collision et Tous risques, couvrent en plus les dommages subis par votre "
     "deux-roues."),
    ("Comment est calculé le prix d'une assurance moto ?",
     "La cotisation dépend du modèle du deux-roues et de sa cylindrée, de sa date de mise en "
     "circulation et d'achat, du lieu de stationnement, de votre sinistralité déclarée et du "
     "niveau de couverture retenu. Il n'existe pas de tarif unique, le devis se calcule au cas "
     "par cas."),
    ("Quels équipements sont couverts par l'assurance moto AMV ?",
     "Dès la première formule, le casque jusqu'à 250 euros, les gants jusqu'à 70 euros et le "
     "gilet airbag jusqu'à 500 euros. L'Option Plus étend la couverture à l'ensemble de "
     "l'équipement moto ainsi qu'aux accessoires hors-série et top case, dans la limite de "
     "5 000 euros."),
]

FAQ_ART = [
    ("Quel budget faut-il pour débuter la moto ?",
     "Il faut compter entre 5 000 et 6 000 € pour un projet équilibré, permis, équipement, moto "
     "d'occasion et assurance compris. Le budget descend à 2 500 à 4 000 € pour un projet en "
     "permis AM et monte à 6 000 à 8 000 € pour un projet en permis A2."),
    ("Combien coûte le permis moto ?",
     "Le permis AM se situe entre 150 et 400 €, le permis A1 entre 700 et 1 200 €, le permis A2 "
     "entre 850 et 1 200 €. La formation de 7 heures accessible aux titulaires du permis B depuis "
     "au moins 2 ans coûte entre 200 et 350 €."),
    ("Quel est le prix de l'équipement obligatoire ?",
     "Entre 520 et 760 € pour l'ensemble casque, gants, blouson, pantalon et chaussures "
     "montantes. Le casque homologué représente le poste le plus lourd, de 150 à 200 €, et doit "
     "être conforme à la norme ECE."),
    ("Combien coûte l'entretien d'une moto par an ?",
     "De 200 à 400 € par an pour une 50cc ou une 125cc, et jusqu'à 1 000 voire 1 500 € pour une "
     "machine plus puissante. Les postes principaux sont les pneus, de 300 à 400 €, le kit "
     "chaîne, environ 250 €, et la vidange, de 150 à 190 €."),
    ("Combien coûte l'assurance d'une première moto ?",
     "Il n'existe pas de tarif unique. La cotisation dépend du modèle, de la cylindrée, de la "
     "date de mise en circulation et d'achat, du lieu de stationnement, de la sinistralité "
     "déclarée et du niveau de couverture retenu."),
    ("Peut-on débuter la moto avec 3 000 € ?",
     "C'est envisageable avec un permis AM et un cyclomoteur 50cc d'occasion, en comptant 150 à "
     "400 € de permis, 520 à 760 € d'équipement et 2 000 à 3 000 € de machine. Il faut alors "
     "prévoir l'assurance et l'entretien en plus."),
]

SOMMAIRE = [
    ("budget-poste-par-poste", "Le budget poste par poste"),
    ("cout-permis-moto", "Le coût du permis moto"),
    ("prix-equipement", "Le prix de l'équipement"),
    ("prix-moto-occasion", "Le prix d'une moto d'occasion"),
    ("budget-entretien", "L'entretien, budget annuel"),
    ("budget-assurance", "L'assurance moto"),
    ("budget-en-resume", "Le budget de départ, en résumé"),
    ("faq", "Questions fréquentes"),
]


def crit(n, titre, txt):
    return f' data-crit="{n}" data-crit-titre="{titre}" data-crit-txt="{txt}"'


def bandeau(page):
    """Bandeau de marque editoriale, commun aux deux pages."""
    nav = "".join(
        f'<a href="{HUB_URL}"{" class=\'on\'" if r == "Moto" else ""}>{r}</a>'
        for r in ["Moto", "Scooter", "Quad", "Auto", "Actualités"])
    return f"""
<div class="mag-band"{crit(1, "Marque éditoriale",
    "Les trois assureurs qui investissent le contenu lui donnent un nom : « Vous! » chez Macif, "
    "« Liberiders » à la Mutuelle des Motards, « BikeSocial » chez Bennetts. Le blog AMV n'a "
    "aujourd'hui pas de nom, seulement des pages de catégorie appelées « Assurance Moto ». "
    "Le nom et la barre sont une couche de marque : les URL ne changent pas.") if page == "hub" else ""}>
  <div class="wrap">
    <a href="{HUB_URL}" class="mark"><em>Le Mag</em></a>
    <nav>{nav}</nav>
    <a href="{L_MOTO}" class="devis">Obtenir mon tarif</a>
  </div>
</div>"""


def faq_html(items, num=None):
    q = "".join(
        f'<div class="q"><h3><button type="button"><span>{a}</span>'
        f'<i class="fas fa-chevron-down"></i></button></h3>'
        f'<div class="a"><p>{b}</p></div></div>' for a, b in items)
    attr = ""
    if num:
        attr = crit(*num)
    return f'<div class="mag-faq"{attr}>{q}</div>'


def jsonld(graph):
    return ('<script type="application/ld+json">'
            + json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)
            + "</script>")


ORGA = {"@type": "Organization", "@id": "https://www.amv.fr/#organization", "name": "AMV",
        "url": "https://www.amv.fr/", "foundingDate": "1974",
        "logo": {"@type": "ImageObject",
                 "url": "https://static.amv.fr/wp-content/themes/amv/img/logo-amv.png"}}


def page(titre, desc, url, corps, extra_head=""):
    return f"""<!DOCTYPE html>
<html lang="fr-FR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titre}</title>
<meta name="description" content="{desc}" />
<link rel="canonical" href="{url}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:title" content="{titre}" />
<meta property="og:description" content="{desc}" />
<meta property="og:url" content="{url}" />
<meta property="og:site_name" content="AMV" />
<meta name="twitter:card" content="summary_large_image" />
<link href="/fonts/montserrat.css" rel="stylesheet">
<link href="/wp-content/themes/amv/style.css" rel="stylesheet">
<link rel="stylesheet" id="mobile-css" href="/wp-content/themes/amv/mobile.css"
      type="text/css" media="all and (max-width: 1140px)" />
<link rel="stylesheet" href="/_moderne.css" />
<link rel="stylesheet" href="/_criteres.css" />
{extra_head}
<script src="/wp-content/themes/amv/js/jquery.min.js"></script>
<script src="/wp-content/themes/amv/js/global.js"></script>
</head>
<body>
{CHROME_HAUT}
<main class="mag">
{corps}
</main>
{CHROME_BAS}
<script src="/_moderne.js"></script>
<script src="/_criteres.js"></script>
</body>
</html>"""


# ------------------------------------------------------- classement thematique
# Les 6 sous-rubriques proposees. Le classement se fait sur des mots du titre :
# il rend la taxonomie visible sur chaque vignette, comme le fait April Moto
# avec ses bandeaux incrustes. A faire valider par AMV, ce n'est qu'une proposition.
CLASSEMENT = [
    ("Réglementation et permis",
     ("permis", "loi", "réglementation", "reglementation", "retrait", "code de la route",
      "obligatoire", "immatricul", "carte grise", "amende", "contrôle technique")),
    ("Équipement",
     ("casque", "gants", "blouson", "équipement", "equipement", "antivol", "airbag",
      "gilet", "bottes", "intercom", "matière", "matiere")),
    ("Entretien et mécanique",
     ("entretien", "rodage", "batterie", "pneu", "chaîne", "chaine", "filtre", "échappement",
      "echappement", "nettoyage", "nettoyer", "hivernage", "outils", "révision", "revision",
      "monocylindre", "bicylindre", "e-clutch", "mécanique", "mecanique")),
    ("Sécurité et conduite",
     ("sécurité", "securite", "vent", "pluie", "groupe", "accident", "conduite", "conduire",
      "risque", "freinage", "passager", "enfant")),
    ("Achat et budget",
     ("budget", "prix", "occasion", "acheter", "achat", "vendre", "vente", "cote",
      "financement", "vol", "assurance", "coût", "cout", "tarif")),
    ("Culture et voyage",
     ("road trip", "voyage", "itinéraire", "itineraire", "musée", "musee", "balade",
      "étranger", "etranger", "circuit", "escapade")),
]


# Arbitrages humains : un titre que les mots-cles classent mal ou pas du tout.
# Toujours preferer une entree ici a l'ajout d'un mot-cle trop large.
ARBITRAGES = {
    "professionnel à moto": "Culture et voyage",
    "les figures emblématiques de l'histoire de la moto": "Culture et voyage",
    "pourquoi la moto passionne-t-elle autant": "Culture et voyage",
}


def rubrique(titre):
    # apostrophes courbes et droites normalisees : sans ca « l’histoire » ne
    # matche pas « l'histoire » et le titre sort sans rubrique
    t = titre.lower().replace("’", "'")
    for cle, nom in ARBITRAGES.items():
        if cle in t:
            return nom
    for nom, mots in CLASSEMENT:
        if any(m in t for m in mots):
            return nom
    return "Le Mag"


# ---------------------------------------------------------------- hub
def construire_hub(cartes, lecture):
    une = cartes[0]
    grille = cartes[1:]

    def meta(c, auteur=True):
        mn = lecture.get(c["url"])
        bout = c["date"] + (f" · {mn} min de lecture" if mn else "")
        return ("Par <b>Prénom Nom</b> · " + bout) if auteur else bout

    html_grille = "".join(f"""
    <a class="mag-card" href="{c['url']}"{crit(5, "Vignette façon couverture",
        "La rubrique est incrustée dans la photo, comme le fait April Moto sur tout son blog. "
        "Sous la photo, le titre en casse normale, l'auteur, la date et le temps de lecture "
        "réel. Aujourd'hui : titre tout en capitales, extrait tronqué, aucun auteur, et les "
        "20 vignettes du hub ont un attribut alt vide.") if i == 0 else ""}>
      <div class="vig">{c['img']}<span class="kicker">{rubrique(c['titre'])}</span></div>
      <h3>{c['titre']}</h3>
      <p class="meta">{meta(c, False)}</p>
    </a>""" for i, c in enumerate(grille))

    pills = "".join(f'<li><span class="off">{r}</span></li>' for r in RUBRIQUES)
    mn_une = lecture.get(une["url"])

    corps = f"""
{bandeau("hub")}

<section class="mag-hero-band"{crit(2, "Hero de rubrique",
    "Un aplat de marque plein écran qui pose un univers éditorial, avec le titre, le chapeau, "
    "les sous-rubriques et l'article à la une. C'est la structure d'April Moto et de "
    "Liberiders. Le hub AMV affiche aujourd'hui « ASSURANCE MOTO » sur fond blanc, sans une "
    "ligne de texte, et ce H1 est celui de la landing page /assurance/moto/ : deux pages du "
    "site se disputent la même requête.")}>
  <div class="wrap">
    <p class="fil"><a href="https://www.amv.fr/">AMV</a><span>›</span>AMV Le Mag<span>›</span>Moto</p>
    <div class="mag-hero-grid">
      <div>
        <span class="eyebrow">AMV LE MAG · MOTO</span>
        <h1>Conseils, réglementation et entretien pour motards</h1>
        <p class="chapo">Tout ce qu'il faut savoir avant de prendre la route&nbsp;: <strong>le permis
        et la réglementation</strong>, l'équipement, l'entretien de la machine, la sécurité et les
        budgets à prévoir. Chaque article est rédigé puis relu par des conseillers spécialistes du
        deux-roues, et daté de sa dernière mise à jour.</p>
        <ul class="mag-pills"{crit(3, "Sous-rubriques",
    "La rubrique moto empile 17 pages de pagination à plat. Six sous-rubriques créent autant de "
    "pages de destination thématiques et font tomber la profondeur de clic de 17 à 3. Elles "
    "restent à créer, donc affichées sans lien : on ne pointe jamais une page non publiée.")}>{pills}</ul>
      </div>
      <a class="mag-une" href="{une['url']}"{crit(4, "Article à la une",
    "Posé dans le hero, il hiérarchise la rubrique au lieu de laisser le dernier publié se "
    "confondre avec les 19 autres.")}>
        <div class="vig">{une['img']}</div>
        <div class="txt">
          <p class="cat">À LA UNE · {rubrique(une['titre']).upper()}</p>
          <h2>{une['titre']}</h2>
          <p class="meta">{meta(une)}</p>
          <span class="lire">Lire l'article <i class="fas fa-chevron-right"></i></span>
        </div>
      </a>
    </div>
  </div>
</section>

<div class="wrap mag-section">
  <h2>Tous les articles moto</h2>
  <p class="sous">{len(cartes)} articles publiés dans la rubrique</p>
  <div class="mag-grid">{html_grille}</div>

  <div class="mag-pagi"{crit(6, "Pagination",
    "17 pages à plat aujourd'hui. Avec les sous-rubriques, la pagination passe sous chaque "
    "thématique. Un rel=next est ajouté dans le head.")}>
    <span class="ici">1</span>
    <a href="{HUB_URL}page/2/">2</a>
    <a href="{HUB_URL}page/3/">3</a>
    <span class="pts">…</span>
    <a href="{HUB_URL}page/17/">17</a>
    <a href="{HUB_URL}page/2/" aria-label="Page suivante"><i class="fas fa-chevron-right"></i></a>
  </div>

  <div class="mag-silo"{crit(7, "Maillage vers les pages produit",
    "Le hub est la page la plus liée du blog. Un bandeau de liens descendants transforme son "
    "autorité en trafic transactionnel. Il n'existe aujourd'hui aucun lien du blog vers les "
    "pages d'assurance, hors le bouton de la sidebar, qui pointe une .aspx répondant en 301.")}>
    <h2>Nos assurances moto</h2>
    <p>Les garanties, les formules et les tarifs, par profil et par cylindrée.</p>
    <ul>
      <li><a href="{L_MOTO}"><i class="fas fa-chevron-right"></i>Assurance moto</a></li>
      <li><a href="{L_125}"><i class="fas fa-chevron-right"></i>Assurance moto 125</a></li>
      <li><a href="{L_50}"><i class="fas fa-chevron-right"></i>Assurance moto 50</a></li>
      <li><a href="{L_A2}"><i class="fas fa-chevron-right"></i>Assurance moto permis A2</a></li>
      <li><a href="{L_JEUNE}"><i class="fas fa-chevron-right"></i>Assurance moto jeune conducteur</a></li>
    </ul>
  </div>

  <div class="mag-section">
    <h2>Questions fréquentes sur l'assurance moto</h2>
    <p class="sous">Les réponses courtes, reprises telles quelles par les moteurs génératifs.</p>
    {faq_html(FAQ_HUB, (8, "FAQ de rubrique",
        "Trois questions de niveau catégorie et un JSON-LD FAQPage. C'est ce qui permet au hub "
        "d'être cité sur des requêtes larges, là où une liste d'articles n'apporte aucune "
        "réponse."))}
  </div>

  <div class="mag-cta-band">
    <div class="t">
      <h2>Votre tarif moto en 3 minutes</h2>
      <p>Le coût réel dépend de votre modèle, de votre lieu de stationnement et de la formule
      retenue. Le devis se calcule au cas par cas.</p>
    </div>
    <a class="mag-bouton" href="{L_MOTO}">Obtenir mon tarif <i class="fas fa-chevron-right"></i></a>
  </div>
</div>
"""
    items = [{"@type": "ListItem", "position": i, "url": c["url"], "name": c["titre"]}
             for i, c in enumerate(cartes, start=1)]
    graph = [
        {"@type": "CollectionPage", "@id": HUB_URL, "url": HUB_URL,
         "name": "AMV Le Mag · Moto", "inLanguage": "fr-FR",
         "mainEntity": {"@id": HUB_URL + "#liste"},
         "breadcrumb": {"@id": HUB_URL + "#breadcrumb"},
         "publisher": {"@id": "https://www.amv.fr/#organization"}},
        {"@type": "ItemList", "@id": HUB_URL + "#liste", "numberOfItems": len(items),
         "itemListElement": items},
        {"@type": "FAQPage", "@id": HUB_URL + "#faq", "mainEntity": [
            {"@type": "Question", "name": q,
             "acceptedAnswer": {"@type": "Answer", "text": r}} for q, r in FAQ_HUB]},
        {"@type": "BreadcrumbList", "@id": HUB_URL + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "AMV", "item": "https://www.amv.fr/"},
            {"@type": "ListItem", "position": 2, "name": "AMV Le Mag · Moto"}]},
        ORGA,
    ]
    return page("Blog moto AMV : conseils, réglementation et entretien",
                "Le blog moto AMV : réglementation, permis, équipement, entretien et sécurité. "
                "Des articles écrits et relus par des conseillers spécialistes du deux-roues.",
                HUB_URL, corps,
                f'<link rel="next" href="{HUB_URL}page/2/" />' + jsonld(graph))


# ------------------------------------------------------------ article
def construire_article(cartes, lecture):
    som = "".join(f'<li><a href="#{a}">{t}</a></li>' for a, t in SOMMAIRE)
    suite = "".join(f"""
    <a class="mag-card" href="{c['url']}">
      <div class="vig">{c['img']}<span class="kicker">{rubrique(c['titre'])}</span></div>
      <h3>{c['titre']}</h3>
      <p class="meta">{c['date']}{f" · {lecture.get(c['url'])} min de lecture" if lecture.get(c['url']) else ''}</p>
    </a>""" for c in cartes[:3])

    corps = f"""
{bandeau("art")}

<section class="art-hero-band"{crit(2, "Hero d'article",
    "Titre à gauche sur l'aplat de marque, photo à droite, et la colonne de lecture qui remonte "
    "par-dessus. C'est la mise en page d'April Moto. Le blog AMV met aujourd'hui tous ses H1 en "
    "capitales, sans chapeau ni signature.")}>
  <div class="wrap">
    <p class="fil"><a href="https://www.amv.fr/">AMV</a><span>›</span>
      <a href="{HUB_URL}">Le Mag · Moto</a><span>›</span>Achat et budget</p>
    <div class="art-hero-grid">
      <div>
        <span class="kicker">ACHAT ET BUDGET</span>
        <h1>Quel budget prévoir pour débuter la moto&nbsp;?</h1>
        <p class="chapo">Permis, équipement, machine, entretien, assurance&nbsp;: le panorama complet
        des frais à anticiper, poste par poste, avec les fourchettes de prix réelles.</p>
        <div class="art-signature"{crit(3, "Signature",
    "Auteur, fonction, date de publication, date de mise à jour et temps de lecture, dès le "
    "premier écran. C'est le signal E-E-A-T que Google et les moteurs génératifs cherchent. Le "
    "blog n'affiche aujourd'hui qu'une date de publication, parfois vieille de dix ans, et "
    "aucun auteur.")}>
          <span class="rond">PN</span>
          <span>Par <b>Prénom Nom</b>, conseiller moto AMV</span>
          <span class="sep">·</span><span>Publié le <b>12 août 2026</b></span>
          <span class="sep">·</span><span>Mis à jour le <b>11 septembre 2026</b></span>
          <span class="sep">·</span><span>7 min de lecture</span>
        </div>
      </div>
      <div class="photo"><img src="/{HERO_REL}" alt="Motard débutant à côté de sa première moto"
           width="1600" height="900" fetchpriority="high" /></div>
    </div>
  </div>
</section>

<div class="wrap">
 <div class="art-shell">
  <div class="art-wrap">
    <aside class="art-toc"{crit(6, "Sommaire ancré et collant",
    "Il suit la lecture et surligne la section en cours. Navigation interne, ancres nommées, et "
    "surface supplémentaire pour les liens de site dans la SERP. Aucun article du blog n'en a "
    "aujourd'hui.")}>
      <p class="t">SOMMAIRE</p>
      <ol>{som}</ol>
    </aside>

    <article class="art-body">
      <div class="art-bref"{crit(4, "Encart « En bref »",
    "La réponse à la question du titre dès le premier écran, une phrase clé puis des puces. "
    "C'est le bloc que les moteurs génératifs citent, et il vaut 20 points de score GEO dans "
    "notre grille.")}>
        <p class="t">EN BREF</p>
        <p class="cle">Il faut compter entre 5&nbsp;000 et 6&nbsp;000{E} pour un projet moto
        équilibré, en incluant le permis, l'équipement complet, une première moto d'occasion et
        l'assurance.</p>
        <ul>
          <li><strong>Permis</strong>&nbsp;: de 150 à 400{E} en AM, de 700 à 1&nbsp;200{E} en A1,
            de 850 à 1&nbsp;200{E} en A2</li>
          <li><strong>Équipement obligatoire</strong>&nbsp;: de 520 à 760{E}</li>
          <li><strong>Première moto d'occasion</strong>&nbsp;: de 2&nbsp;000 à 4&nbsp;000{E} en
            125cc, de 5&nbsp;000 à 6&nbsp;000{E} en permis A2</li>
          <li><strong>Entretien</strong>&nbsp;: de 200 à 400{E} par an en petite cylindrée,
            jusqu'à 1&nbsp;500{E} sur une grosse cylindrée</li>
          <li><strong>Assurance</strong>&nbsp;: selon le modèle, la cylindrée, le lieu de
            stationnement et la formule</li>
        </ul>
      </div>

      <p>Devenir motard commence par un budget à évaluer avec justesse. Permis, équipement, moto,
      assurance, entretien&nbsp;: voici les frais à anticiper pour établir un budget clair et adapté
      à vos premiers tours de roue.</p>

      <h2 id="budget-poste-par-poste">Le budget poste par poste</h2>
      <p>Un projet moto se découpe en cinq dépenses, dont <strong>quatre sont connues à
      l'avance</strong>. Seule l'assurance dépend de votre situation, car elle se calcule au cas
      par cas.</p>

      <table{crit(5, "Tableau de synthèse",
    "Deux tableaux au maximum par article, et de vrais tableaux de synthèse. C'est le bloc le "
    "plus repris tel quel par ChatGPT, Perplexity et les AI Overviews.")}>
        <caption>Budget à prévoir pour débuter la moto, par poste de dépense</caption>
        <thead><tr><th scope="col">Poste de dépense</th><th scope="col">Budget</th>
          <th scope="col">Ce qui fait varier le prix</th></tr></thead>
        <tbody>
          <tr><th scope="row">Permis</th><td>150 à 1&nbsp;200{E}</td>
            <td>La catégorie visée, le nombre d'heures de conduite, les sessions de rattrapage</td></tr>
          <tr><th scope="row">Équipement obligatoire</th><td>520 à 760{E}</td>
            <td>Le niveau de gamme du casque, la technicité du blouson et du pantalon</td></tr>
          <tr><th scope="row">Moto d'occasion</th><td>2&nbsp;000 à 6&nbsp;000{E}</td>
            <td>Le type de machine, sa cylindrée et son état</td></tr>
          <tr><th scope="row">Entretien, par an</th><td>200 à 1&nbsp;500{E}</td>
            <td>La cylindrée, les kilomètres parcourus, la technicité de la moto</td></tr>
          <tr><th scope="row">Assurance</th><td>Sur devis</td>
            <td>Le modèle, la cylindrée, le lieu de stationnement, la formule retenue</td></tr>
          <tr><th scope="row">Enveloppe de départ</th>
            <td><strong>5&nbsp;000 à 6&nbsp;000{E}</strong></td>
            <td>Pour un projet équilibré, assurance comprise</td></tr>
        </tbody>
      </table>

      <p>Le total varie surtout selon le permis visé, car c'est lui qui conditionne la cylindrée
      accessible, donc le prix de la machine.</p>

      <h2 id="cout-permis-moto">Le coût du permis moto selon la catégorie</h2>
      <p>L'obtention du permis constitue la première étape, et <strong>le budget initial varie du
      simple au sextuple</strong> selon la catégorie choisie.</p>
      <table>
        <caption>Coût et conditions d'accès des permis deux-roues</caption>
        <thead><tr><th scope="col">Permis</th><th scope="col">Âge</th>
          <th scope="col">Véhicules</th><th scope="col">Budget</th></tr></thead>
        <tbody>
          <tr><th scope="row">Permis AM</th><td>14 ans</td><td>Cyclomoteurs 50cc</td>
            <td>150 à 400{E}</td></tr>
          <tr><th scope="row">Permis A1</th><td>16 ans</td><td>125cc</td><td>700 à 1&nbsp;200{E}</td></tr>
          <tr><th scope="row">Formation 7 h</th><td>Permis B depuis 2 ans</td><td>125cc</td>
            <td>200 à 350{E}</td></tr>
          <tr><th scope="row">Permis A2</th><td>18 ans</td><td>Motos jusqu'à 35 kW</td>
            <td>850 à 1&nbsp;200{E}</td></tr>
          <tr><th scope="row">Permis A</th><td>Après 2 ans de A2</td><td>Toutes cylindrées</td>
            <td>200 à 400{E}</td></tr>
        </tbody>
      </table>
      <p>Le <a href="{L_A2}"{crit(9, "Maillage interne en silo",
    "Cinq liens contextuels vers les pages produit du silo moto, ancres exactes, tous vérifiés "
    "en HTTP 200 avant publication. Les articles du blog n'ont aujourd'hui aucun lien vers les "
    "pages d'assurance.")}>permis A2</a> est la première étape vers le permis A, qui prend la forme
      d'une formation complémentaire de 7 heures.</p>

      <h2 id="prix-equipement">Le prix de l'équipement obligatoire</h2>
      <p>Avant même de monter en selle, il faut s'équiper. Ce matériel n'est pas facultatif,
      <strong>il est obligatoire pour accéder aux cours de conduite</strong>.</p>
      <ul>
        <li><strong>Casque homologué, de 150 à 200{E}.</strong> La conformité à la norme ECE est
          obligatoire.</li>
        <li><strong>Gants homologués, de 40 à 60{E}.</strong> Un second modèle peut être utile
          selon la saison.</li>
        <li><strong>Blouson moto, de 100 à 200{E}</strong>, selon les matériaux et les protections.</li>
        <li><strong>Pantalon, environ 150{E}</strong>, conçu pour la résistance à l'abrasion.</li>
        <li><strong>Chaussures montantes, de 80 à 150{E}</strong>, nécessaires pour l'épreuve
          pratique.</li>
      </ul>

      <div class="art-source"{crit(7, "Encart sourcé",
    "Une information verticale AMV, isolée et attribuée. C'est ce que les moteurs génératifs "
    "citent en nommant la marque, et ce qui distingue l'article d'un contenu de comparateur.")}>
        <p class="t">BON À SAVOIR</p>
        <p>Dès la première formule, casque jusqu'à 250 euros, gants jusqu'à 70 euros et gilet
        airbag jusqu'à 500 euros. En souscrivant l'Option Plus, la couverture est étendue à
        l'ensemble de votre équipement moto ainsi qu'aux accessoires hors-série et top case, dans
        la limite de 5&nbsp;000 euros.</p>
        <p class="ref">Source&nbsp;: conditions de garantie AMV, formulation validée par AMV sur les
        pages assurance moto, scooter et quad.</p>
      </div>

      <h2 id="prix-moto-occasion">Le prix d'une première moto d'occasion</h2>
      <p><strong>L'occasion est souvent envisagée comme point de départ</strong>, avec des prix
      très variables selon le type, l'état et la cylindrée du deux-roues.</p>
      <ul>
        <li><strong>Une <a href="{L_50}">50cc</a> d'occasion, de 2&nbsp;000 à 3&nbsp;000{E}</strong>
          pour un véhicule fonctionnel.</li>
        <li><strong>Une <a href="{L_125}">125cc</a>, de 2&nbsp;000 à 4&nbsp;000{E}</strong>
          selon les caractéristiques.</li>
        <li><strong>Une moto accessible en permis A2, de 5&nbsp;000 à 6&nbsp;000{E}</strong>,
          plus un coût de débridage de 150 à 500{E}.</li>
      </ul>

      <h2 id="budget-entretien">L'entretien, un budget annuel à anticiper</h2>
      <p><strong>Le coût annuel moyen se situe entre 200 et 400{E} pour une petite
      cylindrée</strong>, 50cc ou 125cc, et peut atteindre 1&nbsp;000 voire 1&nbsp;500{E} sur une
      machine plus puissante.</p>
      <ul>
        <li><strong>Vidange, de 150 à 190{E}</strong></li>
        <li><strong>Remplacement des pneus, de 300 à 400{E}</strong></li>
        <li><strong>Plaquettes de frein, environ 150{E}</strong></li>
        <li><strong>Liquide de frein, environ 120{E}</strong></li>
        <li><strong>Kit chaîne, environ 250{E}</strong></li>
      </ul>

      <h2 id="budget-assurance">L'assurance moto, le poste qui dépend de votre situation</h2>
      <p>L'assurance est obligatoire dès l'acquisition du véhicule. Il est en revanche difficile de
      donner un ordre de prix, car <strong>de nombreux critères entrent dans le calcul de la
      cotisation</strong>&nbsp;: le modèle et la cylindrée, la date de mise en circulation et
      d'achat, le lieu de stationnement, la sinistralité déclarée et le niveau de couverture
      retenu.</p>
      <p>Chez AMV, <strong>un seul contrat et quatre formules</strong>, de la Responsabilité civile,
      couverture minimale obligatoire, jusqu'à la formule Tous risques. Entre les deux, la formule
      Vol / Incendie et la formule <strong>Dommages collision</strong>, qui couvre les accidents
      avec un tiers identifié tout en maîtrisant son budget. Si vous venez d'obtenir votre permis,
      notre page dédiée à l'<a href="{L_JEUNE}">assurance moto jeune conducteur</a> détaille les
      points à connaître.</p>

      <div class="art-cta"{crit(8, "CTA contextualisé",
    "Un seul appel à l'action, placé au moment où le lecteur se pose la question du prix, et "
    "pointant directement la landing page produit.")}>
        <div class="t">
          <h3>Votre tarif en 3 minutes</h3>
          <p>Le seul moyen de connaître le coût réel est de le calculer sur votre modèle et votre
          lieu de stationnement.</p>
        </div>
        <a class="mag-bouton" href="{L_MOTO}">Obtenir mon tarif
          <i class="fas fa-chevron-right"></i></a>
      </div>

      <h2 id="budget-en-resume">Le budget de départ à prévoir, en résumé</h2>
      <p>En agrégeant les étapes, l'enveloppe de départ pour un projet
      <a href="{L_MOTO}">assurance moto</a> complet se situe entre <strong>2&nbsp;500 et
      4&nbsp;000{E} en permis AM</strong>, <strong>3&nbsp;000 et 6&nbsp;000{E} en permis A1</strong>
      et <strong>6&nbsp;000 et 8&nbsp;000{E} en permis A2</strong>. <strong>Anticiper 5&nbsp;000 à
      6&nbsp;000{E} pour un projet équilibré</strong> permet de couvrir les postes essentiels,
      assurance comprise, en laissant une marge pour les imprévus.</p>

      <h2 id="faq">Questions fréquentes</h2>
      {faq_html(FAQ_ART, (10, "FAQ en accordéon",
        "Questions reprises telles qu'elles sont tapées, réponse en 40 à 60 mots dès la première "
        "phrase, chaque question en H3, et un JSON-LD FAQPage. Les réponses restent dans le HTML "
        "même repliées. Aucun article du blog n'a de FAQ aujourd'hui."))}

      <div class="art-auteur"{crit(11, "Bloc auteur",
        "Nom, fonction, expertise, repris en Person dans le JSON-LD. C'est la décision E-E-A-T "
        "actée au call du 30 juillet, elle attend les éléments AMV par univers.")}>
        <span class="rond">PN</span>
        <div>
          <h3>Prénom Nom</h3>
          <p>Conseiller moto chez AMV depuis X ans. Deux à trois lignes de biographie&nbsp;:
          parcours, spécialité, éventuelle pratique de la moto. Élément à fournir par AMV pour
          chaque univers, avec une photo et un lien de profil.</p>
        </div>
      </div>

      <div class="art-sources"{crit(12, "Sources",
        "Les fourchettes de prix viennent de sources externes, elles sont listées et datées. Un "
        "article d'assureur qui cite ses sources est repris plus volontiers par les moteurs "
        "génératifs.")}>
        <p class="t">SOURCES</p>
        <ul>
          <li>Tarifs des écoles de conduite du réseau Codes Rousseau, pour le coût des permis.</li>
          <li>Blog La Bécanerie, pour les tarifs d'équipement et d'entretien.</li>
          <li>permisapoints.fr et icasque.com, pour les équipements moto.</li>
          <li>Relevé des prix effectué en août 2026, à réactualiser à chaque mise à jour.</li>
        </ul>
      </div>
    </article>
  </div>
 </div>
</div>

<div class="wrap art-suite">
  <h2>À lire ensuite</h2>
  <div class="mag-grid">{suite}</div>
</div>
"""
    titre = "Quel budget prévoir pour débuter la moto ?"
    desc = ("Permis, équipement, moto, entretien, assurance : le budget complet pour débuter "
            "la moto, avec les fourchettes de prix réelles de chaque poste.")
    graph = [
        {"@type": "BlogPosting", "@id": ART_URL + "#article", "mainEntityOfPage": {"@id": ART_URL},
         "headline": titre, "description": desc, "inLanguage": "fr-FR",
         "articleSection": "Achat et budget",
         "datePublished": "2026-08-12T09:00:00+02:00",
         "dateModified": "2026-09-11T09:00:00+02:00",
         "image": {"@id": ART_URL + "#img"},
         "author": {"@type": "Person", "name": "Prénom Nom", "jobTitle": "Conseiller moto",
                    "worksFor": {"@id": "https://www.amv.fr/#organization"}},
         "publisher": {"@id": "https://www.amv.fr/#organization"},
         "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".art-bref"]}},
        {"@type": "ImageObject", "@id": ART_URL + "#img",
         "url": f"https://www.amv.fr/{HERO_REL}", "width": 1600, "height": 900,
         "caption": "Motard débutant à côté de sa première moto", "inLanguage": "fr-FR"},
        {"@type": "FAQPage", "@id": ART_URL + "#faq", "mainEntity": [
            {"@type": "Question", "name": q,
             "acceptedAnswer": {"@type": "Answer", "text": r}} for q, r in FAQ_ART]},
        {"@type": "BreadcrumbList", "@id": ART_URL + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "AMV", "item": "https://www.amv.fr/"},
            {"@type": "ListItem", "position": 2, "name": "AMV Le Mag · Moto", "item": HUB_URL},
            {"@type": "ListItem", "position": 3, "name": titre}]},
        ORGA,
    ]
    return page("Quel budget pour débuter la moto ? Le détail poste par poste",
                desc, ART_URL, corps, jsonld(graph))


# ------------------------------------------------------------------ main
CHROME_HAUT = CHROME_BAS = ""


def main():
    global CHROME_HAUT, CHROME_BAS
    if ROOT.exists():
        shutil.rmtree(ROOT)
    ROOT.mkdir(parents=True)

    print("1. assets")
    da.seed_assets(ROOT)
    (ROOT / HERO_REL).parent.mkdir(parents=True, exist_ok=True)
    shutil.copy(HERO_SRC, ROOT / HERO_REL)
    for f in ("_criteres.css", "_criteres.js"):
        shutil.copy(ASSETS / f, ROOT / f)
    for f in ("_moderne.css", "_moderne.js"):
        shutil.copy(HERE / f, ROOT / f)

    print("2. en-tete et pied de page reels d'amv.fr")
    g = BeautifulSoup(GABARIT.read_text(encoding="utf-8"), "html.parser")
    CHROME_HAUT = str(g.select_one("div.all-header"))
    CHROME_BAS = str(g.select_one("div.footer"))

    print("3. articles reels du hub")
    hub = BeautifulSoup(da.get(HUB_SRC), "html.parser")
    cartes = []
    for c in hub.select(".loop-content .loop-entry"):
        a = c.select_one(".loop-entry-infos h2 a")
        img = c.select_one(".loop-entry-thumbnail img")
        dc = c.select_one(".date-category")
        if not (a and img):
            continue
        # alt renseigne : les 20 vignettes du hub live ont un alt vide
        img["alt"] = a.get_text(strip=True)
        img["loading"] = "lazy"
        date = dc.get_text(" ", strip=True).split("  ")[0].strip() if dc else ""
        cat = dc.select_one("a").get_text(strip=True) if dc and dc.select_one("a") else "Moto"
        date = re.sub(re.escape(cat) + r"\s*$", "", date).strip()
        cartes.append({"url": a["href"], "titre": a.get_text(strip=True),
                       "img": str(img), "date": date, "cat": cat})
    print(f"   {len(cartes)} cartes")
    lecture = json.loads(CACHE_LECTURE.read_text()) if CACHE_LECTURE.exists() else {}

    print("4. pages")
    sorties = {HUB_PATH: construire_hub(cartes, lecture),
               ART_PATH: construire_article(cartes, lecture)}

    ok = True
    for chemin, html in sorties.items():
        html = da.strip_tracking(html)
        html = da.localise_assets(html, ROOT)
        out = ROOT / chemin / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding="utf-8")
        print(f"\n--- /{chemin}")
        ok = da.balance_check(html) and ok
        ok = da.check_da(html) and ok
        print("h1:", len(re.findall(r"<h1[ >]", html)),
              "| h2:", len(re.findall(r"<h2[ >]", html)),
              "| h3:", len(re.findall(r"<h3[ >]", html)),
              "| annotes:", len(re.findall(r'data-crit="', html)))

    (ROOT / "_redirects").write_text(f"/    /{HUB_PATH}    302\n")
    print("\nOK ->", ROOT)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
