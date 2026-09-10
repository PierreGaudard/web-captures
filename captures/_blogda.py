#!/usr/bin/env python3
"""Socle commun aux modeles de blog AMV.

Fournit la localisation d'une page du blog AMV (WordPress, theme "amv") :
- retrait du tracking (GTM, TagCommander, Avis Verifies, Wordfence),
- rapatriement des assets static.amv.fr, de jQuery et de Montserrat,
- reecriture des URLs absolues vers des chemins locaux.

Meme chaine que captures/amv-label-excellence/_build.py, factorisee pour etre
partagee par les deux modeles (hub de categorie et article).
"""
import re, shutil, urllib.request, pathlib

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/126.0 Safari/537.36"}

# mirror deja localise dont on reprend polices, CSS du theme, webfonts et icones
ASSET_SOURCE = pathlib.Path(__file__).parent / "amv-label-excellence" / "mirror" / "www.amv.fr"


def fetch(url, dest_root, rel):
    dest = dest_root / rel
    if dest.exists():
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
            dest.write_bytes(r.read())
        print("  ok  ", rel)
    except Exception as e:
        print("  FAIL", url, e)


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def seed_assets(root):
    """Copie polices, CSS du theme, webfonts et icones depuis le mirror de reference."""
    for sub in ("fonts", "wp-content/themes/amv"):
        src = ASSET_SOURCE / sub
        if src.exists():
            shutil.copytree(src, root / sub, dirs_exist_ok=True)


def strip_tracking(h):
    h = re.sub(r"<!-- Google Tag Manager.*?End Google Tag Manager[^>]*-->", "", h, flags=re.S)
    h = re.sub(r'<noscript><iframe src="https://www\.googletagmanager\.com.*?</noscript>', "", h, flags=re.S)
    h = re.sub(r"<script[^>]*googletagmanager[^>]*>.*?</script>", "", h, flags=re.S)
    h = re.sub(r"<script[^>]*tagcommander[^>]*>\s*</script>", "", h)
    h = re.sub(r"<script[^>]*avis-verifies[^>]*>\s*</script>", "", h)
    h = re.sub(r"<script[^>]*wordfence_syncAttackData[^>]*>\s*</script>", "", h)
    h = re.sub(r"<script>[^<]*dataLayer[^<]*</script>", "", h, flags=re.S)
    h = re.sub(r"<script[^>]*>[^<]*(tC\.|tag_commander|wpel)[^<]*</script>", "", h, flags=re.S)
    return h


def localise_assets(h, root):
    """static.amv.fr -> local, jQuery -> local, Google Fonts -> local."""
    for a in set(re.findall(r"https://static\.amv\.fr/([^\"' )]+)", h)):
        fetch(f"https://static.amv.fr/{a.split('?')[0]}", root, a.split("?")[0])
    h = re.sub(r"https://static\.amv\.fr/([^\"' )]+?)(\?[^\"' )]*)?([\"' )])", r"/\1\3", h)

    fetch("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", root,
          "wp-content/themes/amv/js/jquery.min.js")
    h = re.sub(r"https://ajax\.googleapis\.com/ajax/libs/jquery/3\.3\.1/jquery\.min\.js(\?[^\"']*)?",
               "/wp-content/themes/amv/js/jquery.min.js", h)

    if not (root / "fonts" / "montserrat.css").exists():
        gf = get("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700")
        n = [0]

        def repl(m):
            n[0] += 1
            rel = f"fonts/montserrat-{n[0]}.woff2"
            fetch(m.group(1), root, rel)
            return f"url(/{rel})"

        gf = re.sub(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", repl, gf)
        (root / "fonts").mkdir(parents=True, exist_ok=True)
        (root / "fonts" / "montserrat.css").write_text(gf)
    h = re.sub(r"https://fonts\.googleapis\.com/css\?family=Montserrat[^\"']*", "/fonts/montserrat.css", h)

    # dependances du CSS du theme (icones de menu, webfonts fontawesome)
    css_path = root / "wp-content/themes/amv/style.css"
    if css_path.exists():
        for rel in set(re.findall(r"url\(['\"]?([^'\")?#]+)", css_path.read_text(errors="replace"))):
            if rel.startswith(("data:", "http", "/")):
                continue
            fetch(f"https://static.amv.fr/wp-content/themes/amv/{rel}", root,
                  f"wp-content/themes/amv/{rel}")

    for ico in re.findall(r'<link rel="[^"]*icon"[^>]*href="(/[^"]+)"', h):
        fetch(f"https://www.amv.fr{ico}", root, ico.lstrip("/"))
    return h


def clean_head(h):
    """Retire meta description, canonical et meta robots AVANT le parsing.

    A ne surtout pas faire avec BeautifulSoup : sur le hub, html.parser imbrique
    le <meta name="robots"> de facon a ce qu'il contienne le reste du <head>, et
    un decompose() emporte alors la CSS du theme et les 5 blocs <style> avec lui
    (6 241 caracteres perdus en silence, page servie sans aucun style).
    """
    h = re.sub(r'<meta\s[^>]*name=[\'"]description[\'"][^>]*>', "", h, flags=re.I)
    h = re.sub(r'<meta\s[^>]*name=[\'"]robots[\'"][^>]*>', "", h, flags=re.I)
    h = re.sub(r'<link\s[^>]*rel=[\'"]canonical[\'"][^>]*>', "", h, flags=re.I)
    return h


DA_ATTENDUE = (
    "wp-content/themes/amv/style.css",
    "wp-content/themes/amv/mobile.css",
    "fonts/montserrat.css",
    "wp-content/themes/amv/img/logo-amv.png",
)


def check_da(h):
    """Garde-fou : la page doit toujours porter la DA du theme AMV.

    Sans ce controle, une suppression de balise mal placee sort une page servie
    sans feuille de style, ce qui ne se voit qu'a la capture d'ecran.
    """
    manquant = [a for a in DA_ATTENDUE if a not in h]
    if manquant:
        print("DA INCOMPLETE, manquant :", *manquant, sep="\n  ")
        return False
    print("DA du theme AMV : style.css, mobile.css, Montserrat et logo presents -> OK")
    return True


def report_externals(h):
    ext = {e for e in re.findall(r'(?:src|href)="(https?://[^"]+|//[^"]+)"', h)
           if "amv.fr" not in e and "schema.org" not in e and "legifrance" not in e
           and "securite-routiere" not in e}
    print("Externes restants:", *sorted(ext), sep="\n  ")


def balance_check(h):
    """Un ecart de 1 entre <div et </div> suffit a exploser la mise en page."""
    o, c = len(re.findall(r"<div\b", h)), h.count("</div>")
    print(f"divs: {o} ouvrants / {c} fermants -> {'OK' if o == c else 'DESEQUILIBRE'}")
    return o == c
