#!/usr/bin/env python3
# Construit la page "AMV Label Excellence 2026" au design du blog AMV (Actualite Assurance)
# a partir du gabarit _template.html (article reel du blog) + contenu du docx.
# Sortie : mirror/www.amv.fr/ (deployable tel quel via ../../deploy.sh capture amv-label-excellence)
import re, os, pathlib, urllib.request, shutil, subprocess

HERE = pathlib.Path(__file__).parent
ROOT = HERE / "mirror" / "www.amv.fr"
PAGE_PATH = "actualite-assurance/amv-decroche-le-label-excellence-2026/"
SRC_DIR = pathlib.Path.home() / "Desktop/SEO-Claude/Clients/AMV/Sémantique/label-excellence-2026"
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"}

def fetch(url, dest):
    dest = ROOT / dest
    if dest.exists(): return
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            dest.write_bytes(r.read())
        print("ok ", url)
    except Exception as e:
        print("FAIL", url, e)

h = (HERE / "_template.html").read_text()

# ---------- 1. contenu article ----------
TITLE = "AMV décroche le Label Excellence 2026 pour ses assurances moto et scooter"
DATE = "4 juillet 2026"
META_DESC = "Les Dossiers de l'Épargne et de l'Assurance décernent le Label Excellence 2026 aux contrats d'assurance moto et scooter AMV, une distinction 100 % indépendante."
HERO_ALT = "AMV reçoit le Label Excellence 2026 pour ses assurances moto et scooter"
HERO_REL = "wp-content/uploads/2026/07/amv-label-excellence-2026-hero.jpg"

H2S = {
    "Le Label Excellence, une référence indépendante depuis 1984",
    "Ce que les experts ont distingué dans nos contrats",
    "Moto et scooter : les deux univers récompensés",
    "Une récompense qui appartient aussi à nos assurés",
    "1974-2026 : la même idée de l'assurance",
    "Et maintenant ?",
}

raw = subprocess.run(["textutil", "-convert", "html", "-stdout", str(SRC_DIR / "AMV-article-label-excellence-2026.docx")],
                     capture_output=True, text=True).stdout
raw = re.sub(r"<style.*?</style>", "", raw, flags=re.S)
raw = re.sub(r'<span class="[^"]*">|</span>', "", raw)
# retirer la table de notes d'integration
raw = re.sub(r"<table.*?</table>", "", raw, flags=re.S)
paras = [p.strip() for p in re.findall(r'<p class="p1">(.*?)</p>', raw, flags=re.S)]
paras = [p for p in paras if p and p != "Notes pour intégration"]
assert paras[0] == TITLE, paras[0]
paras = paras[1:]

body = []
for p in paras:
    p = p.replace("<b>", "<strong>").replace("</b>", "</strong>")
    if p in H2S:
        body.append(f"<h2><strong>{p}</strong></h2>")
    else:
        body.append(f"<p>{p}</p>")
body = "\n".join(body)

# maillage interne demande (1er paragraphe de la section garanties)
body = body.replace(
    "Si notre assurance moto et notre assurance scooter ont convaincu",
    'Si notre <a href="https://www.amv.fr/assurance/moto/" data-wpel-link="internal">assurance moto</a> et notre <a href="https://www.amv.fr/assurance/scooter/" data-wpel-link="internal">assurance scooter</a> ont convaincu',
    1)
# CTA final -> bouton devis maison (lien devis moto AMV)
body = body.replace(
    "Testez nos tarifs en quelques clics.",
    '<a href="https://www.amv.fr/moto/assurance-moto/devis-assurance-moto.aspx" data-wpel-link="internal"><strong>Testez nos tarifs en quelques clics.</strong></a>',
    1)

# ---------- 2. injection dans le gabarit ----------
# <title> + metas
h = re.sub(r"<title>.*?</title>", f"<title>{TITLE} - AMV Le Blog</title>", h, flags=re.S)
h = re.sub(r'<meta name="description"[^>]*>', f'<meta name="description" content="{META_DESC}" />', h)
h = re.sub(r'<link rel="canonical"[^>]*>', f'<link rel="canonical" href="https://www.amv.fr/{PAGE_PATH}" />', h)
h = re.sub(r'<meta property="og:[^>]*>\n?', "", h)
h = re.sub(r'<meta name="twitter:[^>]*>\n?', "", h)

# hero (thumb-post)
h = re.sub(r'<div class="thumb-post">.*?</div>',
           f'<div class="thumb-post"><img width="1820" height="860" src="/{HERO_REL}" class="attachment-full size-full wp-post-image" alt="{HERO_ALT}" decoding="async" fetchpriority="high" /></div>',
           h, flags=re.S)

# h1 + date
h = re.sub(r"<h1>.*?</h1>", f"<h1>{TITLE}</h1>", h, flags=re.S)
h = re.sub(r'(<p class="date-category">\s*)[^<]+', rf"\g<1>{DATE}        ", h)

# corps : de la fin de </p class date-category> jusqu'au bloc de partage/close-posts
m = re.search(r'(</p>\n?)(\s*<p><strong>.*?)(<div class="close-posts)', h, flags=re.S)
if not m:
    m = re.search(r'(date-category">.*?</p>)(.*?)(<div class="close-posts)', h, flags=re.S)
    h = h[:m.start(2)] + "\n" + body + "\n" + h[m.start(3):]
else:
    h = h[:m.start(2)] + "\n" + body + "\n" + h[m.start(3):]

# breadcrumb : remplacer titre article courant
h = h.replace("Note positive pour le marché moto en janvier", TITLE)

# ---------- 3. nettoyage tracking / externes ----------
h = re.sub(r"<!-- Google Tag Manager.*?End Google Tag Manager[^>]*-->", "", h, flags=re.S)
h = re.sub(r"<noscript><iframe src=\"https://www\.googletagmanager\.com.*?</noscript>", "", h, flags=re.S)
h = re.sub(r'<script[^>]*googletagmanager[^>]*>.*?</script>', "", h, flags=re.S)
h = re.sub(r'<script[^>]*tagcommander[^>]*>\s*</script>', "", h)
h = re.sub(r'<script[^>]*avis-verifies[^>]*>\s*</script>', "", h)
h = re.sub(r'<script[^>]*wordfence_syncAttackData[^>]*>\s*</script>', "", h)
h = re.sub(r"<script>[^<]*dataLayer[^<]*</script>", "", h, flags=re.S)
h = re.sub(r"<script[^>]*>[^<]*(tC\.|tag_commander|wpel)[^<]*</script>", "", h, flags=re.S)

# ---------- 4. localisation des assets ----------
assets = set(re.findall(r'https://static\.amv\.fr/([^"\' )]+)', h))
for a in assets:
    clean = a.split("?")[0]
    fetch(f"https://static.amv.fr/{clean}", clean)
h = re.sub(r'https://static\.amv\.fr/([^"\' )]+?)(\?[^"\' )]*)?(["\' )])', r"/\1\3", h)

# jQuery local
fetch("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "wp-content/themes/amv/js/jquery.min.js")
h = h.replace("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js?ver=3.3.1", "/wp-content/themes/amv/js/jquery.min.js")

# Google Fonts Montserrat -> local
gf_req = urllib.request.Request("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700", headers=UA)
gf = urllib.request.urlopen(gf_req, timeout=30).read().decode()
i = 0
def repl_font(m):
    global i
    i += 1
    name = f"fonts/montserrat-{i}.woff2"
    fetch(m.group(1), name)
    return f"url(/{name})"
gf = re.sub(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", repl_font, gf)
(ROOT / "fonts").mkdir(parents=True, exist_ok=True)
(ROOT / "fonts/montserrat.css").write_text(gf)
h = h.replace('<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">',
              '<link href="/fonts/montserrat.css" rel="stylesheet">')

# deps du CSS du theme (menu-icons + fontawesome webfonts)
css = (HERE / "_style.css").read_text()
for rel in set(re.findall(r"url\(['\"]?([^'\")?#]+)", css)):
    if rel.startswith(("data:", "http")): continue
    fetch(f"https://static.amv.fr/wp-content/themes/amv/{rel}", f"wp-content/themes/amv/{rel}")

# hero + logo label copies locales
dest = ROOT / HERO_REL
dest.parent.mkdir(parents=True, exist_ok=True)
shutil.copy(SRC_DIR / "amv-label-excellence-2026-hero.jpg", dest)

# favicon eventuel
for m2 in re.findall(r'<link rel="[^"]*icon"[^>]*href="([^"]+)"', h):
    if m2.startswith("/"): fetch(f"https://www.amv.fr{m2}", m2.lstrip("/"))

# ---------- 5. ecriture ----------
out = ROOT / PAGE_PATH / "index.html"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(h)
(ROOT / "_redirects").write_text(f"/    /{PAGE_PATH}    302\n")
print("\nOK ->", out)
# verif residus externes
ext = set(re.findall(r'(?:src|href)="(https?://[^"]+|//[^"]+)"', h))
ext = {e for e in ext if "amv.fr" not in e and "schema.org" not in e}
print("Externes restants:", *sorted(ext), sep="\n  ")
