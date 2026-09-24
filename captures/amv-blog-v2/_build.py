#!/usr/bin/env python3
"""AMV Le Mag, v2 : refonte complete du blog, repartie de zero (24/09/2026).

Le design n'herite plus du theme WordPress. Il reprend la charte des nouvelles pages
Umbraco d'amv.fr (Paralucent pour les titres, Montserrat pour le texte, vert #00A850,
accent orange, cartes arrondies, filet vert devant les titres de section), et la mise en
page s'inspire d'April Moto, de la Mutuelle des Motards et de BikeSocial (Bennetts).

Les contenus et tous les besoins SEO/GEO de la v1 sont conserves : ils sont relus depuis
les pages construites de amv-blog-moderne, puis reposes dans le nouveau gabarit.
"""
import html as H
import json
import re
import shutil
import sys
from pathlib import Path

from bs4 import BeautifulSoup

HERE = Path(__file__).resolve().parent
V1 = HERE.parent / "amv-blog-moderne" / "mirror" / "www.amv.fr"
ASSETS = HERE.parent / "_modeles-blog-assets"
SITE = HERE / "site"

HUB_PATH = "assurance-moto/"
ART_PATH = "assurance-moto/budget-pour-debuter-la-moto/"
HUB = "/" + HUB_PATH
ART = "/" + ART_PATH

L_MOTO = "https://www.amv.fr/assurance/moto/"
L_SCOOTER = "https://www.amv.fr/assurance/scooter/"
L_QUAD = "https://www.amv.fr/assurance/quad/"
L_AUTO = "https://www.amv.fr/assurance/auto/"

LOGO = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 40" aria-hidden="true">'
        '<g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M51.276 14.217c0-3.228'
        '-.683-4.598-2.512-4.598-1.828 0-2.511 1.363-2.511 4.598V40h-10.27V1.176h9.931v4.57h.116C47.34 '
        '1.94 49.967 0 53.517 0c4.225 0 6.276 2.013 7.535 5.96C62.633 1.579 65.662 0 68.8 0c4.532 0 8.04 '
        '2.228 8.046 10.553V40H66.57V14.218c0-3.23-.684-4.598-2.512-4.598-1.829 0-2.512 1.362-2.512 4.598V40'
        'h-10.27V14.218ZM14.002 25.592l2.99-16.477h.118l2.989 16.472h-6.097v.005Zm9.912-24.415h-13.72L0 40h11.6'
        'l1.116-6.795h8.676L22.51 40h11.645L23.914 1.177ZM99.1 1.177l-4.51 29.257h-.114l-4.51-29.257h-11.9L87.32 '
        '40h14.425L111 1.177H99.1Z"/></g></svg>')

ICO = {
    "chev": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "down": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "user": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6.2 18.6c1.4-2.2 3.4-3.3 5.8-3.3s4.4 1.1 5.8 3.3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    "search": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    "check": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "clock": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    "bulb": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0012 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    "book": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15zM4 20.5A2.5 2.5 0 006.5 23H20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    "arrow": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
}

# Pictos des sous-rubriques (trait simple, couleur courante)
PICTO = {
    "Réglementation et permis": '<svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="11" cy="16" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M17 14h7M17 18h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    "Équipement": '<svg viewBox="0 0 32 32"><path d="M6 19a10 10 0 0120 0v3a2 2 0 01-2 2H14l-8-3v-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 14h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    "Entretien et mécanique": '<svg viewBox="0 0 32 32"><path d="M20.5 5.5a6 6 0 00-7.6 7.6L5 21l6 6 7.9-7.9a6 6 0 007.6-7.6l-3.8 3.8-3.6-.4-.4-3.6 3.8-3.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    "Sécurité et conduite": '<svg viewBox="0 0 32 32"><path d="M16 4l10 4v7c0 6.5-4.3 11-10 13-5.7-2-10-6.5-10-13V8l10-4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M11.5 16l3 3 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "Achat et budget": '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 11.5a5 5 0 100 9M9.5 14.5h8M9.5 17.5h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    "Culture et voyage": '<svg viewBox="0 0 32 32"><path d="M4 24l7-12 5 7 3-4 9 9H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="22" cy="9" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
}


def crit(n, titre, txt):
    return (f' data-crit="{n}" data-crit-titre="{H.escape(titre, quote=True)}"'
            f' data-crit-txt="{H.escape(txt, quote=True)}"')


def soup(chemin):
    return BeautifulSoup((V1 / chemin / "index.html").read_text(encoding="utf-8"), "html.parser")


def inner(el):
    return "".join(str(c) for c in el.contents).strip()


def nettoie(el):
    """Retire les annotations et classes de la v1 d'un fragment repris tel quel."""
    for t in [el] + el.find_all(True):
        for a in ("data-crit", "data-crit-titre", "data-crit-txt"):
            t.attrs.pop(a, None)
    for i in el.select("i.fas"):
        i.decompose()
    return el


# ------------------------------------------------------------------ extraction v1

def lire_cartes(s):
    cartes = []
    for a in s.select("a.mag-une, a.mag-card"):
        img = a.select_one("img")
        titre = (a.select_one("h2") or a.select_one("h3")).get_text(" ", strip=True)
        kick = a.select_one(".kicker") or a.select_one(".cat")
        cat = kick.get_text(" ", strip=True) if kick else "Moto"
        cat = cat.replace("À LA UNE ·", "").strip().capitalize()
        meta = a.select_one(".meta")
        meta = meta.get_text(" ", strip=True) if meta else ""
        m = re.search(r"(\d+)\s*min", meta)
        date = re.sub(r"^Par .*?·\s*", "", meta).split("·")[0].strip()
        cartes.append({"titre": titre, "cat": cat, "img": img["src"], "alt": img.get("alt") or titre,
                       "date": date, "min": m.group(1) if m else "4"})
    return cartes


def lire_ld(s):
    return [t.string for t in s.select('script[type="application/ld+json"]')]


def lire_head(s):
    garde = []
    for m in s.select("head meta"):
        if m.get("name") in ("description", "robots", "twitter:card") or \
           (m.get("property") or "").startswith("og:"):
            garde.append(str(m))
    can = s.select_one('link[rel="canonical"]')
    title = s.title.get_text(strip=True)
    return title, "\n".join(garde), str(can) if can else ""


# ------------------------------------------------------------------ gabarit commun

def entete(actif):
    rub = [("Moto", HUB), ("Scooter", None), ("Quad", None), ("Auto", None), ("Actualités", None)]
    nav = "".join(
        f'<a href="{u}" class="{"on" if r == actif else ""}">{r}</a>' if u else
        f'<span class="{"on" if r == actif else ""}">{r}</span>' for r, u in rub)
    return f"""
<header class="site">
  <div class="wrap site-in">
    <a class="logo" href="https://www.amv.fr/" aria-label="AMV, accueil">{LOGO}</a>
    <nav class="site-nav" aria-label="Navigation principale">
      <a href="https://www.amv.fr/assurance/moto/">Nos assurances {ICO['down']}</a>
      <a href="https://www.amv.fr/besoin-daide/">Besoin d'aide&nbsp;?</a>
    </nav>
    <div class="site-act">
      <a class="devis" href="https://www.amv.fr/retrouver-un-devis/">Retrouver un devis</a>
      <a class="espace" href="https://www.amv.fr/mon-espace-amv/">Mon Espace AMV {ICO['user']}</a>
    </div>
  </div>
</header>
<div class="mag-bar"{crit(1, "Marque éditoriale", "Le blog prend un nom, « Le Mag », avec sa propre barre de navigation sous l'en-tête d'amv.fr. C'est ce que font les assureurs qui investissent le contenu : « Vous! » chez Macif, « Liberiders » à la Mutuelle des Motards, « BikeSocial » chez Bennetts. Aujourd'hui le blog AMV n'a pas de nom, seulement des pages de catégorie homonymes des pages produit.")}>
  <div class="wrap mag-bar-in">
    <a class="mag-mark" href="{HUB}">Le Mag<i></i></a>
    <nav class="mag-rub" aria-label="Rubriques du Mag">{nav}</nav>
    <span class="mag-search" aria-hidden="true">{ICO['search']}</span>
    <a class="pill pill-green mag-cta" href="{L_MOTO}">Tester nos tarifs</a>
  </div>
  <div class="progress" aria-hidden="true"><span></span></div>
</div>"""


def pied():
    col1 = [("Devis assurance moto", "/assurance/moto/"),
            ("Devis assurance moto par marque", "/assurance-moto/assurance-moto-par-constructeur/"),
            ("Devis assurance moto par motorisation", "/assurance-moto/assurance-moto-par-motorisation/"),
            ("Devis assurance moto par profil", "/assurance-moto/assurance-moto-par-profil/"),
            ("Devis assurance scooter", "/assurance/scooter/"),
            ("Devis assurance quad/SSV", "/assurance/quad/")]
    col2 = [("Devis assurance moto 125", "/assurance-moto/assurance-moto-125cm3/"),
            ("Devis assurance moto 500", "/assurance-moto/assurance-moto-500cm3/"),
            ("Devis assurance YAMAHA", "/assurance-moto/assurance-moto-yamaha/"),
            ("Devis assurance HONDA", "/assurance-moto/assurance-moto-honda/"),
            ("Devis assurance KAWASAKI", "/assurance-moto/assurance-moto-kawasaki/"),
            ("Devis assurance BMW", "/assurance-moto/assurance-moto-bmw/")]
    li = lambda l: "".join(f'<li><a href="https://www.amv.fr{u}">{t}</a></li>' for t, u in l)
    return f"""
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div>
      <a class="logo" href="https://www.amv.fr/" aria-label="AMV">{LOGO}</a>
      <p>Leader de l'assurance moto, AMV offre des solutions en ligne dédiées aux particuliers,
      avec l'accompagnement de ses 300 conseillers basés à Bordeaux.</p>
    </div>
    <div><p class="foot-t">Assurance moto</p><ul>{li(col1)}</ul></div>
    <div><p class="foot-t">&nbsp;</p><ul>{li(col2)}</ul></div>
  </div>
  <div class="wrap foot-bas">
    <span><a href="https://www.amv.fr/mentions-legales/">Mentions légales</a>
    <a href="https://www.amv.fr/protection-des-donnees/">Protection des données</a>
    <a href="https://www.amv.fr/plan-du-site/">Plan du site</a></span>
    <span>© 2026 AMV Tous droits réservés</span>
  </div>
</footer>"""


def page(title, head_meta, canonical, ld, corps, extra_head=""):
    lds = "\n".join(f'<script type="application/ld+json">{j}</script>' for j in ld)
    return f"""<!DOCTYPE html>
<html lang="fr-FR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
{head_meta}
{canonical}
{extra_head}
<link rel="preload" href="/assets/fonts/paralucent-demibold-webfont-fixed.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/mag.css">
<link rel="stylesheet" href="/_criteres.css">
{lds}
</head>
<body>
{corps}
<script src="/assets/mag.js" defer></script>
<script src="/_criteres.js" defer></script>
</body>
</html>
"""


def carte(c, url, cls="card", h="h3", lazy=True):
    return f"""<a class="{cls}" href="{url}">
  <div class="card-img"><img src="{c['img']}" alt="{H.escape(c['alt'], quote=True)}" width="800" height="440"{' loading="lazy"' if lazy else ''}><span class="chip">{c['cat']}</span></div>
  <div class="card-txt"><{h}>{c['titre']}</{h}>
  <p class="meta">{c['date']} <b>·</b> {ICO['clock']} {c['min']} min</p></div>
</a>"""


def faq(items, crit_attr=""):
    qs = "".join(f"""<details class="q"{' open' if i == 0 else ''}>
  <summary><h3>{q}</h3>{ICO['down']}</summary>
  <div class="a">{a}</div>
</details>""" for i, (q, a) in enumerate(items))
    return f'<div class="faq"{crit_attr}>{qs}</div>'


# ------------------------------------------------------------------ hub

def construire_hub():
    s = soup(HUB_PATH)
    cartes = lire_cartes(s)
    title, meta, can = lire_head(s)
    ld = lire_ld(s)
    une, rail, reste = cartes[0], cartes[1:4], cartes[4:]
    chapo = inner(s.select_one(".mag-hero-band .chapo"))
    rubs = [li.get_text(" ", strip=True) for li in s.select(".mag-pills li")]
    silo = [(a["href"], a.get_text(" ", strip=True)) for a in s.select(".mag-silo a")]
    faqs = [(q.select_one("h3").get_text(" ", strip=True), inner(q.select_one(".a")))
            for q in s.select(".mag-faq .q")]

    rail_html = "".join(f"""<a class="rail-item" href="{ART}">
  <img src="{c['img']}" alt="{H.escape(c['alt'], quote=True)}" width="800" height="440" loading="lazy">
  <div><span class="chip chip-soft">{c['cat']}</span><h3>{c['titre']}</h3>
  <p class="meta">{c['date']} <b>·</b> {c['min']} min</p></div></a>""" for c in rail)

    rub_html = "".join(f"""<li><span class="rub">{PICTO.get(r, '')}<b>{r}</b><small>Bientôt</small></span></li>"""
                       for r in rubs)

    grille = "".join(carte(c, ART) for c in reste[:6])
    grille2 = "".join(carte(c, ART) for c in reste[6:15])

    silo_html = "".join(f'<li><a href="{u}">{ICO["check"]}<span>{t}</span>{ICO["chev"]}</a></li>'
                        for u, t in silo)

    corps = f"""{entete("Moto")}
<main>
<section class="hub-head wrap"{crit(2, "En-tête de rubrique", "Un H1 éditorial propre au Mag, distinct de celui de la page produit /assurance/moto/, avec un chapeau qui dit ce que la rubrique couvre. Aujourd'hui le hub affiche « ASSURANCE MOTO », le même H1 que la landing page, et les deux pages se disputent la même requête.")}>
  <nav class="fil" aria-label="Fil d'Ariane"><a href="https://www.amv.fr/">AMV</a>{ICO['chev']}<a href="{HUB}">Le Mag</a>{ICO['chev']}<span>Moto</span></nav>
  <div class="titre-barre">
    <p class="surtitre">AMV Le Mag · Moto</p>
    <h1>Conseils, réglementation et entretien pour motards</h1>
    <p class="chapo">{chapo}</p>
  </div>
</section>

<section class="wrap une-grid">
  <a class="une" href="{ART}"{crit(3, "Article à la une", "Une grande couverture photo, titre en blanc sur un dégradé, comme BikeSocial et April Moto. Elle hiérarchise la rubrique au lieu de laisser le dernier article publié se confondre avec les 19 autres.")}>
    <img src="{une['img']}" alt="{H.escape(une['alt'], quote=True)}" width="800" height="440" fetchpriority="high">
    <div class="une-txt">
      <span class="chip chip-orange">À la une</span><span class="chip">{une['cat']}</span>
      <h2>{une['titre']}</h2>
      <p class="meta">{une['date']} <b>·</b> {ICO['clock']} {une['min']} min de lecture</p>
      <span class="pill pill-white">Lire l'article {ICO['arrow']}</span>
    </div>
  </a>
  <div class="rail"{crit(4, "Rail des articles récents", "Trois articles récents à côté de la une, le schéma de BikeSocial. Le lecteur voit quatre sujets sans défiler, et chaque vignette porte sa rubrique, sa date et son temps de lecture réel.")}>
    <p class="rail-t">Les plus récents</p>
    {rail_html}
  </div>
</section>

<section class="wrap rubs-bloc"{crit(5, "Sous-rubriques", "La rubrique moto empile aujourd'hui 17 pages de pagination à plat. Six sous-rubriques créent autant de pages de destination thématiques et font tomber la profondeur de clic de 17 à 3. Elles restent à créer, donc affichées sans lien : on ne pointe jamais une page non publiée.")}>
  <h2 class="h2-barre"><small>Explorer par thème</small>Six thèmes pour trouver vite</h2>
  <ul class="rubs">{rub_html}</ul>
</section>

<section class="wrap">
  <h2 class="h2-barre"><small>Tous les articles moto</small>Les derniers conseils</h2>
  <div class="grid"{crit(6, "Vignettes", "Photo en 16/10 aux angles arrondis, rubrique en pastille sur la photo, titre en casse normale, date et temps de lecture réel. Chaque image a un attribut alt renseigné. Aujourd'hui : titres en capitales, extrait tronqué et les 20 vignettes du hub ont un alt vide.")}>{grille}</div>
</section>

<section class="silo-band"{crit(7, "Maillage vers les pages produit", "Le hub est la page la plus liée du blog. Ce bandeau transforme son autorité en trafic vers les pages d'assurance, avec des ancres exactes. Il n'existe aujourd'hui aucun lien du blog vers les pages produit, hors un bouton de sidebar qui pointe une .aspx en 301.")}>
  <div class="wrap silo-in">
    <div class="titre-barre">
      <p class="surtitre">Assurance moto</p>
      <h2>Nos assurances moto</h2>
      <p>Les garanties, les formules et les tarifs, par profil et par cylindrée. Un contrat
      pensé pour tous les motards, du jeune permis au motard expérimenté.</p>
    </div>
    <ul class="silo">{silo_html}</ul>
  </div>
</section>

<section class="wrap">
  <div class="grid">{grille2}</div>
  <nav class="pagination" aria-label="Pagination"{crit(8, "Pagination", "Avec les sous-rubriques, la pagination passe sous chaque thème au lieu de 17 pages à plat. Un rel=next est déclaré dans le head.")}>
    <span class="on">1</span><a href="https://www.amv.fr/assurance-moto/page/2/">2</a><a href="https://www.amv.fr/assurance-moto/page/3/">3</a><span class="dots">…</span><a href="https://www.amv.fr/assurance-moto/page/17/">17</a>
    <a class="next" href="https://www.amv.fr/assurance-moto/page/2/" aria-label="Page suivante">{ICO['chev']}</a>
  </nav>
</section>

<section class="wrap faq-bloc">
  <h2 class="h2-barre"><small>Questions fréquentes</small>L'assurance moto en trois questions</h2>
  {faq(faqs, crit(9, "FAQ de rubrique", "Trois questions de niveau catégorie, réponse dès la première phrase, et un JSON-LD FAQPage. C'est ce qui permet au hub d'être cité sur des requêtes larges, là où une simple liste d'articles n'apporte aucune réponse. Les réponses restent dans le HTML même repliées."))}
</section>

<section class="wrap">
  <div class="cta-band"{crit(10, "Appel à l'action", "Un seul bloc de conversion en bas de rubrique, vers la landing page produit et non vers une .aspx intermédiaire.")}>
    <div><p class="surtitre">Assurance moto</p><h2>Votre tarif moto en 3 minutes</h2>
    <p>Tarif sans engagement, assurance immédiate 24h/24.</p></div>
    <a class="pill pill-white" href="{L_MOTO}">Testez nos tarifs {ICO['arrow']}</a>
  </div>
</section>
</main>
{pied()}"""
    extra = '<link rel="next" href="https://www.amv.fr/assurance-moto/page/2/">'
    return page(title, meta, can, ld, corps, extra)


# ------------------------------------------------------------------ article

def sidebar(toc_html):
    """Sidebar reprise du blog actuel d'amv.fr (bouton tarifs, onglets Populaires et Recents,
    etiquettes, reseaux sociaux), restylee, plus le sommaire collant en dernier bloc."""
    d = json.loads((HERE / "sidebar.json").read_text(encoding="utf-8"))
    def liste(posts):
        return "".join(f"""<li><a href="{x['url']}"><b>{x['titre']}</b><span>{x['extrait']}</span></a></li>""" for x in posts)
    tags = "".join(f'<span class="tag" data-src="{t["src"]}">{t["t"]}</span>' for t in d["etiquettes"])
    rs = {"facebook": '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.3L14.2 2.3C11 2.3 10.3 4.6 10.3 6.1v2.4H8.4V12h1.9v10h3.7V12h2.7l.4-3.5H14z"/></svg>',
          "instagram": '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>',
          "youtube": '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22 8.2c-.2-1.6-1-2.7-2.7-2.9C16.6 5 12 5 12 5s-4.6 0-7.3.3C3 5.5 2.2 6.6 2 8.2 1.8 9.5 1.8 12 1.8 12s0 2.5.2 3.8c.2 1.6 1 2.7 2.7 2.9C7.4 19 12 19 12 19s4.6 0 7.3-.3c1.7-.2 2.5-1.3 2.7-2.9.2-1.3.2-3.8.2-3.8s0-2.5-.2-3.8zM10 15.1V8.9l5.3 3.1L10 15.1z"/></svg>'}
    reseaux = "".join(f'<a href="{u}" aria-label="{k}">{rs[k]}</a>' for u in d["reseaux"] for k in rs if k in u)
    return f"""<aside class="side"{crit(13, "Sidebar du blog actuel", "Les blocs de la sidebar d'aujourd'hui sont conservés : bouton de tarif, onglets Populaires et Récents, étiquettes et réseaux sociaux. L'onglet Commentaires est retiré parce qu'il est vide sur tout le blog. Le bouton pointe désormais la landing page /assurance/moto/ et non plus une .aspx en 301, et les étiquettes gardent leur lien masqué aux robots comme aujourd'hui.")}>
  <a class="pill pill-green side-tarifs" href="{L_MOTO}">Testez nos tarifs {ICO['chev']}</a>
  <div class="side-box side-tabs">
    <div class="tabs" role="tablist"><button class="on" role="tab" data-tab="pop">Populaires</button><button role="tab" data-tab="rec">Récents</button></div>
    <ul class="side-posts" data-pane="pop">{liste(d["populaires"])}</ul>
    <ul class="side-posts" data-pane="rec" hidden>{liste(d["recents"])}</ul>
  </div>
  <div class="side-box"><p class="side-t">Étiquettes</p><div class="tags">{tags}</div></div>
  <div class="side-box side-rs"><p class="side-t">Suivez-nous</p><div class="rs">{reseaux}</div></div>
  <div class="side-box toc"{crit(6, "Sommaire ancré et collant", "Il reste visible pendant toute la lecture et surligne la section en cours, avec une barre de progression. Navigation interne, ancres nommées, et surface supplémentaire pour les liens de site dans la SERP. Aucun article du blog n'en a aujourd'hui.")}>
    <p class="side-t">Sommaire</p>
    <ol>{toc_html}</ol>
  </div>
</aside>"""



def construire_article():
    s = soup(ART_PATH)
    title, meta, can = lire_head(s)
    ld = lire_ld(s)
    hub_cartes = lire_cartes(soup(HUB_PATH))
    h1 = s.find("h1").get_text(" ", strip=True).replace(" ?", "&nbsp;?")
    chapo = inner(s.select_one(".art-hero-band .chapo"))
    photo = s.select_one(".art-hero-band .photo img")
    toc = [(a["href"], a.get_text(" ", strip=True)) for a in s.select(".art-toc a")]
    body = s.select_one("article.art-body")

    sortie = []
    for el in body.find_all(recursive=False):
        cls = el.get("class") or []
        if "art-bref" in cls:
            cle = inner(el.select_one(".cle"))
            lis = "".join(f"<li>{ICO['check']}<span>{inner(li)}</span></li>" for li in el.select("li"))
            sortie.append(f"""<div class="bref"{crit(4, "Encart « L'essentiel »", "La réponse à la question du titre dès le premier écran, une phrase clé puis des puces. C'est le bloc que les moteurs génératifs citent en premier, il vaut 20 points de score GEO dans notre grille.")}>
  <p class="bloc-t">{ICO['bulb']} L'essentiel</p>
  <p class="cle">{cle}</p><ul>{lis}</ul></div>""")
        elif "art-source" in cls:
            ps = el.select("p")
            texte = "".join(str(p) for p in ps[1:-1])
            ref = ps[-1].get_text(" ", strip=True)
            sortie.append(f"""<aside class="conseil"{crit(7, "Encart « Le conseil AMV »", "Une information propre à AMV, isolée, attribuée et sourcée. C'est ce que les moteurs génératifs reprennent en nommant la marque, et ce qui distingue l'article d'un contenu de comparateur.")}>
  <p class="bloc-t">{ICO['bulb']} Le conseil AMV</p>{texte}<p class="ref">{ref}</p></aside>""")
        elif "art-cta" in cls:
            t = el.select_one("h3").get_text(" ", strip=True)
            p = el.select_one("p").get_text(" ", strip=True)
            sortie.append(f"""<div class="cta-inline"{crit(8, "CTA contextualisé", "Un seul appel à l'action dans le corps, placé au moment où le lecteur se pose la question du prix, et qui pointe directement la landing page produit.")}>
  <div><p class="cta-t">{t}</p><p>{p}</p></div>
  <a class="pill pill-white" href="{L_MOTO}">Obtenir mon tarif {ICO['arrow']}</a></div>""")
        elif "mag-faq" in cls:
            items = [(q.select_one("h3").get_text(" ", strip=True), inner(q.select_one(".a")))
                     for q in el.select(".q")]
            sortie.append(faq(items, crit(10, "FAQ en accordéon", "Questions reprises telles qu'elles sont tapées, réponse en 40 à 60 mots dès la première phrase, chaque question en H3 et un JSON-LD FAQPage. Les réponses restent dans le HTML même repliées.")))
        elif "art-auteur" in cls:
            nom = el.select_one("h3").get_text(" ", strip=True)
            bio = el.select_one("p").get_text(" ", strip=True)
            sortie.append(f"""<div class="auteur"{crit(11, "Bloc auteur", "Nom, fonction et expertise, repris en Person dans le JSON-LD. C'est la décision E-E-A-T actée au call du 30 juillet, elle attend les éléments d'AMV par univers : photo, biographie et lien de profil.")}>
  <span class="avatar">PN</span><div><p class="auteur-t">Écrit par</p><p class="auteur-nom">{nom}</p><p>{bio}</p></div></div>""")
        elif "art-sources" in cls:
            lis = "".join(f"<li>{inner(li)}</li>" for li in el.select("li"))
            sortie.append(f"""<div class="sources"{crit(12, "Sources", "Les fourchettes de prix viennent de sources externes, listées et datées. Un article d'assureur qui cite ses sources est repris plus volontiers par les moteurs génératifs.")}>
  <p class="bloc-t">{ICO['book']} Sources</p><ul>{lis}</ul></div>""")
        elif el.name == "table":
            nettoie(el)
            sortie.append(f'<div class="table-wrap"{crit(5, "Tableau de synthèse", "Deux tableaux au maximum par article, et de vrais tableaux de synthèse. C’est le bloc le plus repris tel quel par ChatGPT, Perplexity et les AI Overviews.")}>{el}</div>')
        else:
            if el.name == "p" and el.find("a"):
                if not any('data-crit="9"' in x for x in sortie):
                    nettoie(el)
                    el["data-crit"] = "9"
                    el["data-crit-titre"] = "Maillage interne en silo"
                    el["data-crit-txt"] = ("Cinq liens contextuels vers les pages produit du silo moto, ancres "
                                           "exactes, tous vérifiés en HTTP 200 avant publication. Les articles du "
                                           "blog n'ont aujourd'hui aucun lien vers les pages d'assurance.")
                    sortie.append(str(el))
                    continue
            nettoie(el)
            sortie.append(str(el))
    corps_art = "\n".join(sortie)
    # un seul marqueur de critere par numero
    vus = set()
    def dedoublonne(m):
        n = m.group(1)
        if n in vus:
            return ""
        vus.add(n)
        return m.group(0)
    corps_art = re.sub(r'\sdata-crit="(\d+)" data-crit-titre="[^"]*" data-crit-txt="[^"]*"', dedoublonne, corps_art)

    toc_html = "".join(f'<li><a href="{h}">{t}</a></li>' for h, t in toc)
    suite = "".join(carte(c, HUB, lazy=True) for c in hub_cartes[1:4])
    img = photo["src"]

    corps = f"""{entete("Moto")}
<main>
<div class="wrap"><nav class="fil" aria-label="Fil d'Ariane"><a href="https://www.amv.fr/">AMV</a>{ICO['chev']}<a href="{HUB}">Le Mag · Moto</a>{ICO['chev']}<span>Achat et budget</span></nav></div>
<div class="wrap art-layout">
  <article class="art-main">
    <header class="art-head">
      <div class="art-head-txt"{crit(2, "En-tête d'article", "Rubrique en pastille, H1 en casse normale, chapeau qui annonce la réponse. La lisibilité de la Mutuelle des Motards et d'April Moto. Aujourd'hui le blog AMV met tous ses H1 en capitales, sans chapeau ni signature.")}>
        <span class="chip chip-soft">Achat et budget</span>
        <h1>{h1}</h1>
        <p class="chapo">{chapo}</p>
      </div>
      <div class="signature"{crit(3, "Signature", "Auteur, fonction, date de publication, date de mise à jour et temps de lecture, dès le premier écran. C'est le signal E-E-A-T que Google et les moteurs génératifs cherchent. Le blog n'affiche aujourd'hui qu'une date de publication, parfois vieille de dix ans, et aucun auteur.")}>
        <span class="avatar">PN</span>
        <span class="sig-auteur">Par <b>Prénom Nom</b><small>Conseiller moto AMV</small></span>
        <span class="sig-dates"><span>Publié le <b>12 août 2026</b></span><span>Mis à jour le <b>11 septembre 2026</b></span></span>
        <span class="sig-temps">{ICO['clock']} 7 min</span>
      </div>
      <figure class="art-photo"><img src="{img}" alt="{H.escape(photo.get('alt', ''), quote=True)}" width="1600" height="900" fetchpriority="high"></figure>
    </header>
    <details class="toc-mobile"><summary>Sommaire {ICO['down']}</summary><ol>{toc_html}</ol></details>
    <div class="art-body">
{corps_art}
    </div>
  </article>
  {sidebar(toc_html)}
</div>

<section class="suite">
  <div class="wrap">
    <h2 class="h2-barre"><small>Le Mag · Moto</small>À lire ensuite</h2>
    <div class="grid">{suite}</div>
  </div>
</section>
</main>
{pied()}"""
    return page(title, meta, can, ld, corps)


# ------------------------------------------------------------------ build

def copie_images(html):
    for src in set(re.findall(r'src="(/wp-content/[^"]+)"', html)):
        dst = SITE / src.lstrip("/")
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(V1 / src.lstrip("/"), dst)


def controle(nom, html):
    ok = True
    n_h1 = len(re.findall(r"<h1[ >]", html))
    alt_vides = len(re.findall(r'alt=""', html))
    divs = (html.count("<div"), html.count("</div>"))
    lds = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    for j in lds:
        json.loads(j)
    crits = sorted(set(int(x) for x in re.findall(r'data-crit="(\d+)"', html)))
    print(f"{nom}: h1={n_h1} h2={len(re.findall(r'<h2[ >]', html))} h3={len(re.findall(r'<h3[ >]', html))}"
          f" alt vides={alt_vides} div={divs} json-ld={len(lds)} criteres={crits}")
    if n_h1 != 1 or alt_vides or divs[0] != divs[1]:
        ok = False
    return ok


def main():
    if SITE.exists():
        for p in SITE.iterdir():
            if p.name != "assets":
                shutil.rmtree(p) if p.is_dir() else p.unlink()
    (SITE / "assets").mkdir(parents=True, exist_ok=True)
    shutil.copy(HERE / "mag.css", SITE / "assets" / "mag.css")
    shutil.copy(HERE / "mag.js", SITE / "assets" / "mag.js")
    for f in ("_criteres.css", "_criteres.js"):
        shutil.copy(ASSETS / f, SITE / f)

    ok = True
    for chemin, fn in ((HUB_PATH, construire_hub), (ART_PATH, construire_article)):
        html = fn()
        copie_images(html)
        out = SITE / chemin / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding="utf-8")
        ok = controle(chemin, html) and ok

    (SITE / "_redirects").write_text(f"/    {HUB}    302\n")
    # apercu : jamais indexe, meme si le HTML porte les balises de la cible
    (SITE / "_headers").write_text("/*\n  X-Robots-Tag: noindex, nofollow\n")
    print("OK" if ok else "CONTROLES EN ECHEC", "->", SITE)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
