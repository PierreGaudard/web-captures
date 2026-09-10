#!/usr/bin/env python3
"""Modele de HUB de categorie du blog AMV.

Part de la page live https://www.amv.fr/assurance-moto/ (le hub de la rubrique
Moto), la localise, et lui ajoute ce qui lui manque : balises head, chapeau
editorial, sous-rubriques, article a la une, temps de lecture reels sur les
cartes, bloc de maillage vers les pages produit, FAQ de rubrique et donnees
structurees.

La DA n'est pas recree : c'est le gabarit WordPress reel du theme "amv", et les
blocs ajoutes n'utilisent que ses tokens (vert #00aa50, filet orange #ee8d00,
gris #f2f2f2, rayon 4px, Montserrat, titres en majuscules).

Sortie : mirror/www.amv.fr/, deployable via ../../deploy.sh capture amv-modele-blog-hub
"""
import re, sys, json, time, shutil, pathlib
from bs4 import BeautifulSoup

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent))
import _blogda as da  # noqa: E402

ROOT = HERE / "mirror" / "www.amv.fr"
ASSETS = HERE.parent / "_modeles-blog-assets"
CACHE = HERE / "_lecture-cache.json"

SOURCE = "https://www.amv.fr/assurance-moto/"
PAGE_PATH = "assurance-moto/"
URL = "https://www.amv.fr/assurance-moto/"

H1 = "Assurance moto : conseils, réglementation et entretien"
TITLE_TAG = "Blog moto AMV : conseils, réglementation et entretien"
META_DESC = ("Le blog moto AMV : réglementation, permis, équipement, entretien et sécurité. "
             "Des articles écrits et relus par des conseillers spécialistes du deux-roues.")

L_MOTO = "https://www.amv.fr/assurance/moto/"
L_A2 = "https://www.amv.fr/assurance-moto/assurance-moto-permis-a2/"
L_125 = "https://www.amv.fr/assurance-moto/assurance-moto-125cm3/"
L_50 = "https://www.amv.fr/assurance-moto/assurance-moto-50cm3/"
L_JEUNE = "https://www.amv.fr/assurance-moto/assurance-moto-jeune-conducteur/"

# Sous-rubriques proposees. Aucune n'existe encore : elles sont volontairement
# rendues sans lien, la regle etant de ne jamais pointer une page non publiee.
RUBRIQUES = [
    ("Réglementation et permis", "Ce que dit la loi, du permis AM au permis A"),
    ("Équipement et accessoires", "Casque, gants, blouson, antivol, top case"),
    ("Entretien et mécanique", "Révisions, pneus, chaîne, hivernage"),
    ("Sécurité et conduite", "Conduite en groupe, météo, passager, circuit"),
    ("Achat, vente et budget", "Occasion, cote, financement, frais réels"),
    ("Voyage et balade", "Itinéraires, road trips, moto à l'étranger"),
]

FAQ = [
    ("Quelle assurance moto est obligatoire&nbsp;?",
     "La Responsabilité civile est la couverture minimale obligatoire. Elle couvre les dommages "
     "causés aux tiers lors d'un sinistre responsable. Les formules supérieures, Vol / Incendie, "
     "Dommages collision et Tous risques, couvrent en plus les dommages subis par votre "
     "deux-roues."),
    ("Comment est calculé le prix d'une assurance moto&nbsp;?",
     "La cotisation dépend du modèle du deux-roues et de sa cylindrée, de sa date de mise en "
     "circulation et d'achat, du lieu de stationnement, de votre sinistralité déclarée et du "
     "niveau de couverture retenu. Il n'existe pas de tarif unique, le devis se calcule au cas "
     "par cas."),
    ("Quels équipements sont couverts par l'assurance moto AMV&nbsp;?",
     "Dès la première formule, le casque jusqu'à 250 euros, les gants jusqu'à 70 euros et le "
     "gilet airbag jusqu'à 500 euros. L'Option Plus étend la couverture à l'ensemble de "
     "l'équipement moto ainsi qu'aux accessoires hors-série et top case, dans la limite de "
     "5 000 euros."),
]


def crit(n, titre, txt):
    return f' data-crit="{n}" data-crit-titre="{titre}" data-crit-txt="{txt}"'


def temps_de_lecture(urls):
    """Temps de lecture reel, calcule sur le texte de chaque article (230 mots/min).

    Sequentiel avec pause : amv.fr rate-limite les requetes en parallele.
    """
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}
    for u in urls:
        if u in cache:
            continue
        try:
            h = da.get(u)
            s = BeautifulSoup(h, "html.parser")
            ec = s.select_one(".entry-content")
            if not ec:
                cache[u] = None
                continue
            for bad in ec.select(".close-posts, .related-posts, .socials, .date-category"):
                bad.decompose()
            mots = len(ec.get_text(" ", strip=True).split())
            cache[u] = max(1, round(mots / 230))
            print(f"  {cache[u]:>2} min  {mots:>5} mots  {u}")
        except Exception as e:
            print("  FAIL", u, e)
            cache[u] = None
        time.sleep(1)
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=1))
    return cache


def bloc_chapo():
    return f"""
<div class="amv-hub-chapo"{crit(3, "Chapeau éditorial",
    "Deux à trois paragraphes qui disent de quoi traite la rubrique et vers quoi elle mène. "
    "Le hub n'a aujourd'hui aucun texte : Google et les moteurs génératifs n'ont qu'une "
    "liste de titres à se mettre sous la dent.")}>
  <p>Retrouvez ici tous nos articles consacrés à la moto&nbsp;: <strong>la réglementation et le
  permis</strong>, l'équipement du motard, l'entretien de la machine, la sécurité et les
  budgets à prévoir. Chaque article est rédigé puis relu par des conseillers spécialistes du
  deux-roues, et daté de sa dernière mise à jour.</p>
  <p>Si vous cherchez à couvrir votre machine plutôt qu'à vous informer, nos pages dédiées
  détaillent les formules et les garanties&nbsp;: <a href="{L_MOTO}">assurance moto</a>,
  <a href="{L_125}">assurance moto 125</a>, <a href="{L_A2}">assurance moto permis A2</a> et
  <a href="{L_JEUNE}">assurance moto jeune conducteur</a>.</p>
</div>
"""


def bloc_rubriques():
    li = "".join(
        f'<li><span class="tuile">{nom}<span>{desc}</span></span></li>'
        for nom, desc in RUBRIQUES)
    return f"""
<div class="amv-rubriques"{crit(4, "Sous-rubriques",
    "Le hub moto empile 17 pages de pagination à plat. Découper en 6 sous-rubriques crée "
    "autant de pages de destination thématiques, raccourcit la profondeur de clic et donne "
    "à chaque cluster une page à positionner. Ces 6 pages restent à créer : elles sont "
    "affichées sans lien, on ne pointe jamais une page non publiée.")}>
  <p class="title-h2">Par thématique</p>
  <ul>{li}</ul>
</div>
"""


def bloc_silo():
    return f"""
<div class="amv-silo"{crit(8, "Maillage vers les pages produit",
    "Le hub est la page la plus liée du blog. Un bloc de liens descendants vers les "
    "landing pages transforme son autorité en trafic transactionnel. Il n'existe "
    "aujourd'hui aucun lien du blog vers les pages d'assurance, hors sidebar.")}>
  <p class="title-h2">Nos assurances moto</p>
  <p>Les garanties, les formules et les tarifs, par profil et par cylindrée.</p>
  <ul>
    <li><a href="{L_MOTO}">Assurance moto</a></li>
    <li><a href="{L_125}">Assurance moto 125</a></li>
    <li><a href="{L_50}">Assurance moto 50</a></li>
    <li><a href="{L_A2}">Assurance moto permis A2</a></li>
    <li><a href="{L_JEUNE}">Assurance moto jeune conducteur</a></li>
  </ul>
</div>
"""


def bloc_faq():
    q = "".join(
        f'<div class="q"><h3><button type="button">{a}'
        f'<i class="fas fa-chevron-down"></i></button></h3>'
        f'<div class="a"><p>{b}</p></div></div>' for a, b in FAQ)
    return f"""
<h2 id="faq">Questions fréquentes sur l'assurance moto</h2>
<div class="amv-faq"{crit(9, "FAQ de rubrique",
    "Trois questions de niveau catégorie, avec un JSON-LD FAQPage. C'est ce qui permet au "
    "hub d'être cité par les moteurs génératifs sur des requêtes larges, là où une simple "
    "liste d'articles n'apporte aucune réponse.")}>{q}</div>
"""


def main():
    if ROOT.exists():
        shutil.rmtree(ROOT)
    ROOT.mkdir(parents=True)

    print("1. assets du theme")
    da.seed_assets(ROOT)
    for f in ("_criteres.css", "_criteres.js", "_modele.css", "_modele.js"):
        shutil.copy(ASSETS / f, ROOT / f)

    print("2. page live")
    soup = BeautifulSoup(da.clean_head(da.get(SOURCE)), "html.parser")

    cartes = soup.select(".loop-content .loop-entry")
    print(f"   {len(cartes)} cartes")
    liens = []
    for c in cartes:
        a = c.select_one(".loop-entry-infos h2 a")
        if a:
            liens.append(a["href"])

    print("3. temps de lecture reels")
    lecture = temps_de_lecture(liens)

    # --- head ---
    if soup.title:
        soup.title.string = TITLE_TAG
    # description, canonical et robots ont deja ete retires du HTML brut par
    # da.clean_head() : les retirer via bs4 casse le head de cette page.
    head = soup.head
    head.append(BeautifulSoup(f"""
<meta name="description" content="{META_DESC}" />
<link rel="canonical" href="{URL}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{TITLE_TAG}" />
<meta property="og:description" content="{META_DESC}" />
<meta property="og:url" content="{URL}" />
<meta property="og:site_name" content="AMV" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="next" href="{URL}page/2/" />
<link rel="stylesheet" href="/_modele.css" />
<link rel="stylesheet" href="/_criteres.css" />
""", "html.parser"))

    # --- H1 ---
    h1 = soup.select_one("h1.category-title")
    h1.string = H1
    h1["data-crit"] = "2"
    h1["data-crit-titre"] = "H1 différencié"
    h1["data-crit-txt"] = ("Le hub affiche aujourd'hui « Assurance Moto », le H1 exact de la "
                           "landing page /assurance/moto/. Deux pages du même site se disputent "
                           "la même requête. Le hub prend un H1 éditorial, la landing page garde "
                           "le transactionnel.")
    for span in soup.select("#breadcrumbs [itemprop='name']"):
        if span.get_text().strip() == "Assurance Moto":
            span.string = "Blog moto"

    # --- injections dans la colonne de contenu ---
    lc = soup.select_one(".loop-content")
    grille = lc.select_one("div.clearfix")

    banner = BeautifulSoup(f"""<div class="crit-banner"{crit(1,
        "Balises head et données structurées",
        "Le hub live n'a ni meta description, ni canonical, ni Open Graph, ni la moindre "
        "donnée structurée, seulement un fil d'ariane en microdonnées. Le modèle ajoute "
        "title, meta description, canonical, rel next et un graphe JSON-LD CollectionPage "
        "+ ItemList + FAQPage + BreadcrumbList.")}>
      <b>Modèle de gabarit.</b> Hub de la rubrique Moto. La structure est la proposition&nbsp;; les
      articles listés sont les articles réels du blog. Le bouton en bas à droite affiche les
      critères SEO et GEO élément par élément.</div>""", "html.parser")
    h1.insert_before(banner)

    grille.insert_before(BeautifulSoup(bloc_chapo(), "html.parser"))
    grille.insert_before(BeautifulSoup(bloc_rubriques(), "html.parser"))

    # --- article a la une : la premiere carte, promue ---
    une = cartes[0]
    a_une = une.select_one(".loop-entry-infos h2 a")
    img_une = une.select_one(".loop-entry-thumbnail img")
    ex_une = une.select_one(".loop-entry-infos > p:not(.date-category)")
    date_une = une.select_one(".date-category")
    mn = lecture.get(a_une["href"])
    html_une = f"""
<div class="amv-une"{crit(5, "Article à la une",
    "Une entrée éditoriale en tête de hub, plutôt qu'une grille où le dernier publié se "
    "confond avec les autres. Elle porte l'article que la rubrique veut positionner.")}>
  <div class="img"><a href="{a_une['href']}">{img_une}</a></div>
  <div class="txt">
    <span class="lbl">À la une</span>
    <h2><a href="{a_une['href']}">{a_une.get_text(strip=True)}</a></h2>
    <p class="date-category">{date_une.get_text(' ', strip=True) if date_une else ''}
      <span class="amv-lecture">· Lecture&nbsp;: {mn or 6} min</span></p>
    {ex_une.decode_contents() if ex_une else ''}
    <a href="{a_une['href']}" class="entry-link">Lire la suite &raquo;</a>
  </div>
</div>"""
    grille.insert_before(BeautifulSoup(html_une, "html.parser"))
    une.decompose()

    # --- temps de lecture sur chaque carte restante ---
    premiere = True
    for c in lc.select(".loop-entry"):
        a = c.select_one(".loop-entry-infos h2 a")
        dc = c.select_one(".date-category")
        mn = lecture.get(a["href"]) if a else None
        if dc and mn:
            sp = soup.new_tag("span")
            sp["class"] = "amv-lecture"
            sp.string = f"· Lecture : {mn} min"
            dc.append(sp)
        if premiere and dc:
            c["data-crit"] = "6"
            c["data-crit-titre"] = "Carte enrichie"
            c["data-crit-txt"] = ("Date, rubrique et temps de lecture réel, calculé sur le texte "
                                  "de l'article. Les vignettes passent en WebP à 800 px : "
                                  "certaines images servies aujourd'hui font 2 450 px de large "
                                  "pour une carte affichée à 500 px. Et les 20 vignettes de ce "
                                  "hub ont un attribut alt vide, sans exception.")
            premiere = False

    # --- pagination annotee ---
    pg = soup.select_one(".pagination")
    if pg:
        pg["data-crit"] = "7"
        pg["data-crit-titre"] = "Pagination"
        pg["data-crit-txt"] = ("17 pages à plat aujourd'hui. Avec les sous-rubriques, la "
                               "pagination passe sous chaque thématique et la profondeur de clic "
                               "tombe de 17 à 3. Le rel next est ajouté dans le head.")

    # --- silo + FAQ en bas de colonne ---
    lc.append(BeautifulSoup(bloc_silo(), "html.parser"))
    lc.append(BeautifulSoup(bloc_faq(), "html.parser"))

    # --- CTA de la sidebar : l'URL .aspx repond en 301 ---
    for a in soup.select(".sidebar a[href*='devis-assurance-moto.aspx']"):
        a["href"] = L_MOTO

    # --- donnees structurees ---
    items = []
    for i, c in enumerate(lc.select(".amv-une, .loop-entry"), start=1):
        a = c.select_one("h2 a")
        if a:
            items.append({"@type": "ListItem", "position": i,
                          "url": a["href"], "name": a.get_text(strip=True)})
    graph = [
        {"@type": "CollectionPage", "@id": URL, "url": URL, "name": TITLE_TAG,
         "description": META_DESC, "inLanguage": "fr-FR",
         "isPartOf": {"@id": "https://www.amv.fr/#website"},
         "breadcrumb": {"@id": URL + "#breadcrumb"},
         "mainEntity": {"@id": URL + "#liste"},
         "publisher": {"@id": "https://www.amv.fr/#organization"}},
        {"@type": "ItemList", "@id": URL + "#liste", "name": "Articles de la rubrique moto",
         "numberOfItems": len(items), "itemListElement": items},
        {"@type": "FAQPage", "@id": URL + "#faq", "mainEntity": [
            {"@type": "Question", "name": re.sub(r"&nbsp;", " ", q),
             "acceptedAnswer": {"@type": "Answer", "text": r}} for q, r in FAQ]},
        {"@type": "BreadcrumbList", "@id": URL + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "AMV", "item": "https://www.amv.fr/"},
            {"@type": "ListItem", "position": 2, "name": "Blog moto"}]},
        {"@type": "Organization", "@id": "https://www.amv.fr/#organization", "name": "AMV",
         "url": "https://www.amv.fr/", "foundingDate": "1974",
         "logo": {"@type": "ImageObject",
                  "url": "https://static.amv.fr/wp-content/themes/amv/img/logo-amv.png"}},
    ]
    head.append(BeautifulSoup(
        '<script type="application/ld+json">'
        + json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)
        + "</script>", "html.parser"))

    soup.body.append(BeautifulSoup(
        '<script src="/_modele.js"></script><script src="/_criteres.js"></script>', "html.parser"))

    h = str(soup)
    print("4. nettoyage et localisation")
    h = da.strip_tracking(h)
    h = da.localise_assets(h, ROOT)

    out = ROOT / PAGE_PATH / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(h, encoding="utf-8")
    (ROOT / "_redirects").write_text(f"/    /{PAGE_PATH}    302\n")

    print("5. controles")
    ok = da.balance_check(h) and da.check_da(h)
    print("h1:", len(re.findall(r"<h1[ >]", h)), "| h2:", len(re.findall(r"<h2[ >]", h)),
          "| h3:", len(re.findall(r"<h3[ >]", h)))
    print("blocs annotes:", len(re.findall(r'data-crit="', h)),
          "| items ItemList:", len(items))
    da.report_externals(h)
    print("\nOK ->", out)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
