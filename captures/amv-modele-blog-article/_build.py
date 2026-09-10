#!/usr/bin/env python3
"""Modele d'ARTICLE de blog AMV.

Reprend a 100 % la DA du blog AMV : le gabarit est un article reel du blog
WordPress (theme "amv"), avec son en-tete, son menu de rubriques, son fil
d'ariane, sa sidebar et son pied de page. Seul le contenu de .entry-content est
remplace, et les blocs ajoutes n'utilisent que les tokens du theme
(vert #00aa50, filet orange #ee8d00, gris #f2f2f2, rayon 4px, Montserrat).

Contenu : l'article pilote "Quel budget prevoir pour debuter la moto ?"
(Semantique/Article-pilote-blog-budget-moto/), deja passe au format cible.

Sortie : mirror/www.amv.fr/, deployable via ../../deploy.sh capture amv-modele-blog-article
"""
import re, sys, shutil, pathlib
from bs4 import BeautifulSoup

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent))
import _blogda as da  # noqa: E402

ROOT = HERE / "mirror" / "www.amv.fr"
GABARIT = HERE.parent / "amv-label-excellence" / "mirror" / "www.amv.fr" / \
    "actualite-assurance" / "amv-decroche-le-label-excellence-2026" / "index.html"
HERO_SRC = HERE.parent / "amv-blog-budget-moto" / "mirror" / "www.amv.fr" / \
    "assets" / "budget-moto-hero.webp"
ASSETS = HERE.parent / "_modeles-blog-assets"

PAGE_PATH = "assurance-moto/budget-pour-debuter-la-moto/"
URL = f"https://www.amv.fr/{PAGE_PATH}"
TITRE = "Quel budget prévoir pour débuter la moto ?"
TITLE_TAG = "Quel budget pour débuter la moto ? Le détail poste par poste"
META_DESC = ("Permis, équipement, moto, entretien, assurance : le budget complet pour débuter "
             "la moto, avec les fourchettes de prix réelles de chaque poste.")
HERO_REL = "wp-content/uploads/2026/08/budget-pour-debuter-la-moto.webp"
HERO_ALT = "Motard débutant à côté de sa première moto"
DATE_PUB, DATE_PUB_ISO = "12 août 2026", "2026-08-12T09:00:00+02:00"
DATE_MAJ, DATE_MAJ_ISO = "10 septembre 2026", "2026-09-10T09:00:00+02:00"
CATEGORIE, CAT_URL = "Assurance Moto", "https://www.amv.fr/assurance-moto/"

# Liens internes, tous verifies en HTTP 200 le 10/09/2026.
L_MOTO = "https://www.amv.fr/assurance/moto/"
L_A2 = "https://www.amv.fr/assurance-moto/assurance-moto-permis-a2/"
L_125 = "https://www.amv.fr/assurance-moto/assurance-moto-125cm3/"
L_50 = "https://www.amv.fr/assurance-moto/assurance-moto-50cm3/"
L_JEUNE = "https://www.amv.fr/assurance-moto/assurance-moto-jeune-conducteur/"

E = "&#8239;€"      # espace fine insecable + euro
NB = "&nbsp;"       # espace insecable avant ? et :

FAQ = [
    ("Quel budget faut-il pour débuter la moto&nbsp;?",
     "Il faut compter entre 5&nbsp;000 et 6&nbsp;000&#8239;€ pour un projet équilibré, permis, équipement, "
     "moto d'occasion et assurance compris. Le budget descend à 2&nbsp;500 à 4&nbsp;000&#8239;€ pour un projet "
     "en permis AM et monte à 6&nbsp;000 à 8&nbsp;000&#8239;€ pour un projet en permis A2."),
    ("Combien coûte le permis moto&nbsp;?",
     "Le permis AM se situe entre 150 et 400&#8239;€, le permis A1 entre 700 et 1&nbsp;200&#8239;€, le permis A2 "
     "entre 850 et 1&nbsp;200&#8239;€. La formation de 7 heures accessible aux titulaires du permis B depuis au "
     "moins 2 ans coûte entre 200 et 350&#8239;€, et la formation complémentaire vers le permis A entre 200 "
     "et 400&#8239;€."),
    ("Quel est le prix de l'équipement obligatoire pour passer le permis moto&nbsp;?",
     "Entre 520 et 760&#8239;€ pour l'ensemble casque, gants, blouson, pantalon et chaussures montantes. "
     "Le casque homologué représente le poste le plus lourd, de 150 à 200&#8239;€, et doit être conforme à "
     "la norme ECE."),
    ("Combien coûte l'entretien d'une moto par an&nbsp;?",
     "De 200 à 400&#8239;€ par an pour une 50cc ou une 125cc, et jusqu'à 1&nbsp;000 voire 1&nbsp;500&#8239;€ pour une "
     "machine plus puissante. Les postes principaux sont les pneus, de 300 à 400&#8239;€, le kit chaîne, "
     "environ 250&#8239;€, et la vidange, de 150 à 190&#8239;€."),
    ("Combien coûte l'assurance d'une première moto&nbsp;?",
     "Il n'existe pas de tarif unique. La cotisation dépend du modèle, de la cylindrée, de la date de "
     "mise en circulation et d'achat, du lieu de stationnement, de la sinistralité déclarée et du niveau "
     "de couverture retenu. Un devis en ligne reste le moyen le plus fiable de connaître le montant "
     "exact pour votre situation."),
    ("Faut-il acheter sa première moto neuve ou d'occasion&nbsp;?",
     "L'occasion est souvent le point de départ retenu, car elle permet de limiter le budget "
     "d'acquisition et la perte de valeur des premières années. Une machine récente justifie en général "
     "d'étudier une formule plus large, la valeur du véhicule étant le premier critère de choix de la "
     "couverture."),
    ("Peut-on débuter la moto avec 3&nbsp;000&#8239;€&nbsp;?",
     "C'est envisageable avec un permis AM et un cyclomoteur 50cc d'occasion, en comptant 150 à 400&#8239;€ "
     "de permis, 520 à 760&#8239;€ d'équipement et 2&nbsp;000 à 3&nbsp;000&#8239;€ de machine. Il faut alors prévoir "
     "l'assurance et l'entretien en plus de cette enveloppe."),
]

SOMMAIRE = [
    ("budget-poste-par-poste", "Le budget poste par poste, en un coup d'œil"),
    ("cout-permis-moto", "Le coût du permis moto selon la catégorie"),
    ("prix-equipement", "Le prix de l'équipement obligatoire du motard"),
    ("prix-moto-occasion", "Le prix d'une première moto d'occasion"),
    ("budget-entretien", "L'entretien, un budget annuel à anticiper"),
    ("budget-assurance", "L'assurance moto, le poste qui dépend de votre situation"),
    ("budget-en-resume", "Le budget de départ à prévoir, en résumé"),
    ("faq", "Questions fréquentes"),
]


def crit(n, titre, txt):
    return f' data-crit="{n}" data-crit-titre="{titre}" data-crit-txt="{txt}"'


def corps():
    """HTML des enfants de .entry-content, hors blocs de pied repris du gabarit."""
    som = "".join(f'<li><a href="#{a}">{t}</a></li>' for a, t in SOMMAIRE)

    faq_html = ""
    for i, (q, r) in enumerate(FAQ):
        faq_html += (
            f'<div class="q"><h3><button type="button">{q}'
            f'<i class="fas fa-chevron-down"></i></button></h3>'
            f'<div class="a"><p>{r}</p></div></div>'
        )

    return f"""
<div class="thumb-post"{crit(4, "Image de mise en avant",
    "1 600 px de large, WebP, nom de fichier parlant, alt descriptif, width et height "
    "renseignés et fetchpriority high pour le LCP. Les visuels fournis font aujourd'hui "
    "5 283 px et 3,2 Mo en médiane.")}>
  <img width="1600" height="900" src="/{HERO_REL}" class="attachment-full size-full wp-post-image"
       alt="{HERO_ALT}" decoding="async" fetchpriority="high" />
</div>

<h1{crit(2, "H1 unique, au format question",
    "Reprend l'intention de recherche telle qu'elle est tapée. Un seul H1 par page, "
    "distinct de la balise title.")}>{TITRE}</h1>

<p class="date-category">
  {DATE_PUB}        <i class="fas fa-circle"></i>
  <a href="{CAT_URL}">{CATEGORIE}</a>
</p>

<p class="amv-meta"{crit(3, "Auteur, date de mise à jour, temps de lecture",
    "Signal E-E-A-T attendu par Google comme par les moteurs génératifs. Le blog n'affiche "
    "aujourd'hui que la date de publication, parfois vieille de dix ans, et aucun auteur.")}>
  Par <b>Prénom Nom</b>, conseiller moto AMV
  <span class="sep">·</span> Publié le <b>{DATE_PUB}</b>
  <span class="sep">·</span> Mis à jour le <b>{DATE_MAJ}</b>
  <span class="sep">·</span> <span>Lecture&nbsp;: 7 min</span>
</p>

<div class="amv-enbref"{crit(5, "Encart « En bref »",
    "La réponse à la question du titre dès le premier écran, en italique puis en puces. "
    "C'est le bloc que les moteurs génératifs citent, et il vaut 20 points de score GEO "
    "dans notre grille.")}>
  <p class="title-h2">En bref</p>
  <p class="chapo"><strong>Il faut compter entre 5&nbsp;000 et 6&nbsp;000{E} pour un projet moto
  équilibré</strong>, en incluant le permis, l'équipement complet, une première moto d'occasion
  et l'assurance.</p>
  <ul>
    <li><strong>Permis</strong>&nbsp;: de 150 à 400{E} en permis AM, de 700 à 1&nbsp;200{E} en permis A1,
      de 850 à 1&nbsp;200{E} en permis A2</li>
    <li><strong>Équipement obligatoire</strong>&nbsp;: de 520 à 760{E} pour le casque, les gants,
      le blouson, le pantalon et les chaussures montantes</li>
    <li><strong>Première moto d'occasion</strong>&nbsp;: de 2&nbsp;000 à 4&nbsp;000{E} en 125cc,
      de 5&nbsp;000 à 6&nbsp;000{E} pour une moto accessible en permis A2</li>
    <li><strong>Entretien</strong>&nbsp;: de 200 à 400{E} par an en petite cylindrée, jusqu'à
      1&nbsp;500{E} sur une grosse cylindrée</li>
    <li><strong>Assurance</strong>&nbsp;: variable selon le modèle, la cylindrée, le lieu de
      stationnement et le niveau de couverture retenu</li>
  </ul>
</div>

<div class="amv-sommaire"{crit(6, "Sommaire ancré",
    "Navigation interne, ancres nommées et lisibles, et surface supplémentaire pour les "
    "liens de site dans la SERP. Absent de tous les articles du blog.")}>
  <p class="title-h2">Sommaire</p>
  <ol>{som}</ol>
</div>

<p>Devenir motard commence par un budget à évaluer avec justesse. Permis, équipement, moto,
assurance, entretien, voici le panorama des frais à anticiper pour établir un budget clair,
réaliste et adapté à vos premiers tours de roue.</p>

<h2 id="budget-poste-par-poste">Le budget poste par poste, en un coup d'œil</h2>
<p>Un projet moto se découpe en cinq dépenses, dont <strong>quatre sont connues à
l'avance</strong>. Seule l'assurance dépend de votre situation, car elle se calcule au cas par
cas.</p>

<table class="amv-table"{crit(7, "Tableau de synthèse",
    "Deux tableaux au maximum par article, et de vrais tableaux de synthèse. C'est le bloc "
    "le plus repris tel quel par ChatGPT, Perplexity et les AI Overviews. Le caption "
    "explicite ce que le tableau compare.")}>
  <caption>Budget à prévoir pour débuter la moto, par poste de dépense</caption>
  <thead><tr><th scope="col">Poste de dépense</th><th scope="col">Budget à prévoir</th>
    <th scope="col">Ce qui fait varier le prix</th></tr></thead>
  <tbody>
    <tr><th scope="row">Permis</th><td>150 à 1&nbsp;200{E}</td>
      <td>La catégorie visée, le nombre d'heures de conduite, les éventuelles sessions de rattrapage</td></tr>
    <tr><th scope="row">Équipement obligatoire</th><td>520 à 760{E}</td>
      <td>Le niveau de gamme du casque, la technicité du blouson et du pantalon</td></tr>
    <tr><th scope="row">Première moto d'occasion</th><td>2&nbsp;000 à 6&nbsp;000{E}</td>
      <td>Le type de machine, sa cylindrée et son état</td></tr>
    <tr><th scope="row">Entretien, par an</th><td>200 à 1&nbsp;500{E}</td>
      <td>La cylindrée, les kilomètres parcourus, la technicité de la moto</td></tr>
    <tr><th scope="row">Assurance</th><td>Sur devis</td>
      <td>Le modèle, la cylindrée, le lieu de stationnement, la formule retenue</td></tr>
    <tr><th scope="row">Enveloppe de départ</th><td><strong>5&nbsp;000 à 6&nbsp;000{E}</strong></td>
      <td>Pour un projet équilibré, assurance comprise</td></tr>
  </tbody>
</table>

<p>Le total varie surtout selon le permis visé, car c'est lui qui conditionne la cylindrée
accessible, donc le prix de la machine. Comptez <strong>2&nbsp;500 à 4&nbsp;000{E} en permis
AM</strong>, <strong>3&nbsp;000 à 6&nbsp;000{E} en permis A1</strong> et <strong>6&nbsp;000 à
8&nbsp;000{E} en permis A2</strong>, hors assurance et hors entretien courant.</p>

<h2 id="cout-permis-moto">Le coût du permis moto selon la catégorie</h2>
<p>L'obtention du permis constitue la première étape, et <strong>le budget initial varie du simple
au sextuple</strong> selon la catégorie choisie.</p>

<table class="amv-table">
  <caption>Coût et conditions d'accès des permis deux-roues</caption>
  <thead><tr><th scope="col">Permis</th><th scope="col">Âge minimum</th>
    <th scope="col">Véhicules accessibles</th><th scope="col">Budget</th></tr></thead>
  <tbody>
    <tr><th scope="row">Permis AM</th><td>14 ans</td><td>Cyclomoteurs 50cc</td><td>150 à 400{E}</td></tr>
    <tr><th scope="row">Permis A1</th><td>16 ans</td><td>125cc</td><td>700 à 1&nbsp;200{E}</td></tr>
    <tr><th scope="row">Formation 7 heures</th><td>Permis B depuis 2 ans</td><td>125cc</td>
      <td>200 à 350{E}</td></tr>
    <tr><th scope="row">Permis A2</th><td>18 ans</td><td>Motos jusqu'à 35 kW</td><td>850 à 1&nbsp;200{E}</td></tr>
    <tr><th scope="row">Permis A</th><td>Après 2 ans de permis A2</td><td>Toutes cylindrées</td>
      <td>200 à 400{E}</td></tr>
  </tbody>
</table>

<p>Le permis A1 inclut le code, le plateau et la circulation, et le budget peut dépasser la
fourchette haute selon les heures supplémentaires nécessaires. <strong>Attention aux forfaits
d'entrée</strong>, qui limitent le nombre d'heures de conduite ou excluent le code&nbsp;: vérifiez ce
qu'ils comprennent réellement avant de vous engager.</p>

<p>Le <a href="{L_A2}"{crit(9, "Maillage interne en silo",
    "Cinq liens contextuels vers les pages produit du silo moto, ancres exactes, tous "
    "vérifiés en HTTP 200 avant publication. Les articles du blog n'ont aujourd'hui aucun "
    "lien interne vers les pages d'assurance.")}>permis A2</a> est la première étape vers le permis A,
qui prend la forme d'une formation complémentaire de 7 heures pour accéder aux motos sans
restriction de puissance.</p>

<h2 id="prix-equipement">Le prix de l'équipement obligatoire du motard</h2>
<p>Avant même de monter en selle, il faut s'équiper. Ce matériel n'est pas facultatif,
<strong>il est obligatoire pour accéder aux cours de conduite</strong> et constitue le premier
bouclier du motard.</p>
<ul>
  <li><strong>Casque homologué, de 150 à 200{E}.</strong> La conformité à la norme ECE est obligatoire.</li>
  <li><strong>Gants homologués, de 40 à 60{E}.</strong> Un second modèle peut être utile selon la saison.</li>
  <li><strong>Blouson moto, de 100 à 200{E}</strong>, selon les matériaux et les protections intégrées.</li>
  <li><strong>Pantalon, environ 150{E}</strong>, conçu pour la résistance à l'abrasion.</li>
  <li><strong>Chaussures montantes, de 80 à 150{E}</strong>, nécessaires pour l'épreuve pratique.</li>
</ul>
<p>L'ensemble de l'équipement vestimentaire moto obligatoire représente donc <strong>un
investissement compris entre 520 et 760{E}</strong>, auquel peuvent s'ajouter des accessoires
facultatifs ou saisonniers.</p>

<div class="amv-source"{crit(8, "Encart sourcé",
    "Une information verticale AMV, isolée et attribuée. C'est ce que les moteurs "
    "génératifs citent en nommant la marque, et ce qui distingue l'article d'un contenu "
    "de comparateur.")}>
  <span class="lbl">Bon à savoir</span>
  <blockquote>Dès la première formule, casque jusqu'à 250 euros, gants jusqu'à 70 euros et gilet
  airbag jusqu'à 500 euros. En souscrivant l'Option Plus, la couverture est étendue à l'ensemble
  de votre équipement moto ainsi qu'aux accessoires hors-série et top case, dans la limite de
  5&nbsp;000 euros.</blockquote>
  <p class="ref">Source&nbsp;: conditions de garantie AMV, formulation validée par AMV sur les pages
  assurance moto, scooter et quad.</p>
</div>

<h2 id="prix-moto-occasion">Le prix d'une première moto d'occasion</h2>
<p>L'acquisition de la moto constitue un jalon important dans ce parcours.
<strong>L'occasion est souvent envisagée comme point de départ</strong>, avec des prix très
variables selon le type, l'état et la cylindrée du deux-roues.</p>
<ul>
  <li><strong>Une <a href="{L_50}">50cc</a> d'occasion, de 2&nbsp;000 à 3&nbsp;000{E}</strong>
    pour un véhicule fonctionnel.</li>
  <li><strong>Une <a href="{L_125}">125cc</a>, de 2&nbsp;000 à 4&nbsp;000{E}</strong>
    selon les caractéristiques.</li>
  <li><strong>Une moto accessible en permis A2, de 5&nbsp;000 à 6&nbsp;000{E}</strong>, à laquelle
    peut s'ajouter un coût de débridage de 150 à 500{E}.</li>
</ul>
<p>Ce poste de dépense est à adapter à votre profil et à vos intentions de conduite, tout en
anticipant d'éventuels ajustements mécaniques ou accessoires supplémentaires, comme un antivol,
un top case ou des sacoches.</p>

<h2 id="budget-entretien">L'entretien, un budget annuel à anticiper</h2>
<p>Une fois la moto acquise et assurée, il reste à l'entretenir. <strong>Le coût annuel moyen se
situe entre 200 et 400{E} pour une petite cylindrée</strong>, 50cc ou 125cc, et peut atteindre
1&nbsp;000 voire 1&nbsp;500{E} sur une machine plus puissante, selon l'intensité de l'usage et la
technicité de la moto.</p>
<ul>
  <li><strong>Vidange, de 150 à 190{E}</strong></li>
  <li><strong>Remplacement des pneus, de 300 à 400{E}</strong></li>
  <li><strong>Plaquettes de frein, environ 150{E}</strong></li>
  <li><strong>Liquide de frein, environ 120{E}</strong></li>
  <li><strong>Kit chaîne, environ 250{E}</strong></li>
</ul>
<p>Ces opérations sont échelonnées dans le temps, mais elles doivent être intégrées dans
<strong>une vision budgétaire à moyen terme</strong>.</p>

<h2 id="budget-assurance">L'assurance moto, le poste qui dépend de votre situation</h2>
<p>L'assurance est obligatoire dès l'acquisition du véhicule. Il est en revanche difficile de
donner un ordre de prix, car <strong>de nombreux critères entrent dans le calcul de la
cotisation</strong>&nbsp;:</p>
<ul>
  <li>le <strong>modèle</strong> du deux-roues et sa <strong>cylindrée</strong></li>
  <li>sa <strong>date de mise en circulation et d'achat</strong></li>
  <li>le <strong>lieu de stationnement</strong></li>
  <li>votre <strong>sinistralité déclarée</strong></li>
  <li>le <strong>niveau de couverture</strong> retenu</li>
</ul>
<p>Chez AMV, <strong>un seul contrat et quatre formules</strong>, de la Responsabilité civile,
couverture minimale obligatoire qui couvre les dommages causés aux tiers lors d'un sinistre
responsable, jusqu'à la formule Tous risques, qui couvre les dommages subis par votre deux-roues
quelles que soient les circonstances. Entre les deux, la formule Vol / Incendie et la formule
<strong>Dommages collision</strong>, qui couvre les accidents avec un tiers identifié et permet
une meilleure couverture tout en maîtrisant son budget.</p>
<p>S'y ajoutent des options complémentaires dédiées au pilote et aux équipements. L'option
<strong>Individuelle Pilote</strong> permet le versement d'un capital à l'assuré en cas de déficit
fonctionnel permanent ou à ses ayants droit en cas de décès, consécutifs à un accident, même
responsable. L'<strong>Assistance 0 km</strong>, également en option, vous permet de compter sur
une assistance même en bas de chez vous, qu'il s'agisse d'un accident, d'un vol, d'une crevaison
ou d'une panne.</p>
<p>Le choix de la formule dépend surtout de <strong>la valeur de votre deux-roues</strong>, de sa
fréquence d'utilisation et de votre budget. Pour un premier achat en occasion de faible valeur, la
formule Responsabilité civile peut suffire, alors qu'une machine récente ou financée à crédit
justifie en général d'étudier une couverture plus large. Si vous venez d'obtenir votre permis,
notre page dédiée à l'<a href="{L_JEUNE}">assurance moto jeune conducteur</a> détaille les points
à connaître.</p>

<div class="amv-cta"{crit(10, "CTA contextualisé",
    "Un seul appel à l'action, placé au moment où le lecteur se pose la question du prix, "
    "et pointant directement la landing page produit. Le CTA de la sidebar du blog pointe "
    "aujourd'hui vers une URL .aspx qui répond en 301.")}>
  <div class="txt">
    <p class="title-h2">Votre tarif en 3 minutes</p>
    <p>Le seul moyen de connaître le coût réel de votre assurance est de le calculer sur votre
    modèle et votre lieu de stationnement.</p>
  </div>
  <div class="act"><a href="{L_MOTO}" class="button button-l">Obtenir mon tarif moto
    <i class="fas fa-chevron-right"></i></a></div>
</div>

<h2 id="budget-en-resume">Le budget de départ à prévoir, en résumé</h2>
<p>En agrégeant les différentes étapes, il devient possible d'estimer une enveloppe de départ pour
un projet <a href="{L_MOTO}">assurance moto</a> complet&nbsp;:</p>
<ul>
  <li><strong>Permis AM, de 2&nbsp;500 à 4&nbsp;000{E}</strong> pour la formation, l'équipement et une
    première machine, hors assurance et entretien.</li>
  <li><strong>Permis A1, de 3&nbsp;000 à 6&nbsp;000{E}</strong>, avec un permis plus long et un
    deux-roues souvent plus imposant.</li>
  <li><strong>Permis A2, de 6&nbsp;000 à 8&nbsp;000{E}</strong>, en incluant le permis, l'équipement
    complet et la moto d'occasion.</li>
</ul>
<p>La diversité des cas de figure implique toutefois de moduler ces estimations. Selon la
formation suivie, une machine neuve ou d'occasion, une formule Responsabilité civile ou Tous
risques, les écarts peuvent être significatifs. <strong>Anticiper un budget de départ autour de
5&nbsp;000 à 6&nbsp;000{E} pour un projet équilibré</strong> permet généralement de couvrir les postes
essentiels, assurance comprise, tout en laissant une marge pour les imprévus.</p>

<h2 id="faq">Questions fréquentes sur le budget pour débuter la moto</h2>
<div class="amv-faq"{crit(11, "FAQ en accordéon",
    "Sept questions reprises telles qu'elles sont tapées, réponse en 40 à 60 mots dès la "
    "première phrase, chaque question en H3, et un JSON-LD FAQPage. Les réponses restent "
    "dans le HTML même repliées. Aucun article du blog n'a de FAQ aujourd'hui.")}>{faq_html}</div>

<div class="amv-auteur"{crit(12, "Encart auteur",
    "Nom, fonction, expertise et lien de profil, repris en Person dans le JSON-LD. C'est "
    "la décision E-E-A-T actée au call du 30 juillet, elle attend les éléments AMV par "
    "univers.")}>
  <p class="title-h2">L'auteur</p>
  <p><b>Prénom Nom</b>, conseiller moto chez AMV depuis X ans.</p>
  <p>Deux à trois lignes de biographie&nbsp;: parcours, spécialité, éventuelle pratique de la moto.
  Élément à fournir par AMV pour chaque univers, avec une photo et un lien de profil.</p>
</div>

<div class="amv-sources"{crit(13, "Sources",
    "Les fourchettes de prix viennent de sources externes, elles sont listées et datées. "
    "Un article d'assureur qui cite ses sources est repris plus volontiers par les moteurs "
    "génératifs, et la date de relevé protège en cas de contestation.")}>
  <p class="title-h2">Sources</p>
  <ul>
    <li>Tarifs des écoles de conduite du réseau Codes Rousseau, pour le coût des permis.</li>
    <li>Blog La Bécanerie, pour les tarifs d'équipement et d'entretien.</li>
    <li>permisapoints.fr et icasque.com, pour les équipements moto.</li>
    <li>Relevé des prix effectué en août 2026, à réactualiser à chaque mise à jour de l'article.</li>
  </ul>
</div>
"""


def jsonld():
    import json
    faq_items = [{"@type": "Question", "name": re.sub(r"&nbsp;", " ", q),
                  "acceptedAnswer": {"@type": "Answer",
                                     "text": re.sub(r"&nbsp;|&#8239;", " ", r)}}
                 for q, r in FAQ]
    graph = [
        {"@type": "BlogPosting", "@id": URL + "#article", "isPartOf": {"@id": URL},
         "mainEntityOfPage": {"@id": URL}, "headline": TITRE, "description": META_DESC,
         "inLanguage": "fr-FR", "articleSection": CATEGORIE,
         "datePublished": DATE_PUB_ISO, "dateModified": DATE_MAJ_ISO,
         "image": {"@id": URL + "#primaryimage"},
         "author": {"@type": "Person", "name": "Prénom Nom",
                    "jobTitle": "Conseiller moto", "worksFor": {"@id": "https://www.amv.fr/#organization"}},
         "publisher": {"@id": "https://www.amv.fr/#organization"},
         "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".amv-enbref"]}},
        {"@type": "ImageObject", "@id": URL + "#primaryimage",
         "url": f"https://www.amv.fr/{HERO_REL}", "contentUrl": f"https://www.amv.fr/{HERO_REL}",
         "width": 1600, "height": 900, "caption": HERO_ALT, "inLanguage": "fr-FR"},
        {"@type": "FAQPage", "@id": URL + "#faq", "mainEntity": faq_items},
        {"@type": "BreadcrumbList", "@id": URL + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "AMV", "item": "https://www.amv.fr/"},
            {"@type": "ListItem", "position": 2, "name": CATEGORIE, "item": CAT_URL},
            {"@type": "ListItem", "position": 3, "name": TITRE}]},
        {"@type": "Organization", "@id": "https://www.amv.fr/#organization", "name": "AMV",
         "url": "https://www.amv.fr/", "foundingDate": "1974",
         "logo": {"@type": "ImageObject",
                  "url": "https://static.amv.fr/wp-content/themes/amv/img/logo-amv.png"}},
    ]
    return json.dumps({"@context": "https://schema.org", "@graph": graph},
                      ensure_ascii=False, indent=None)


def main():
    if ROOT.exists():
        shutil.rmtree(ROOT)
    ROOT.mkdir(parents=True)

    print("1. assets du theme")
    da.seed_assets(ROOT)
    # vignettes des articles associes, reprises du mirror de reference
    for sub in ("wp-content/uploads",):
        src = da.ASSET_SOURCE / sub
        if src.exists():
            shutil.copytree(src, ROOT / sub, dirs_exist_ok=True)
    (ROOT / HERO_REL).parent.mkdir(parents=True, exist_ok=True)
    shutil.copy(HERO_SRC, ROOT / HERO_REL)
    for f in ("_criteres.css", "_criteres.js", "_modele.css", "_modele.js"):
        shutil.copy(ASSETS / f, ROOT / f)

    print("2. gabarit")
    soup = BeautifulSoup(GABARIT.read_text(encoding="utf-8"), "html.parser")

    # --- head ---
    soup.title.string = TITLE_TAG
    md = soup.find("meta", attrs={"name": "description"})
    md["content"] = META_DESC
    soup.find("link", rel="canonical")["href"] = URL
    for t in soup.find_all("script", class_="yoast-schema-graph"):
        t.decompose()
    for t in soup.find_all("meta", property=re.compile(r"^(og|article):")):
        t.decompose()
    for t in soup.find_all("meta", attrs={"name": re.compile(r"^twitter:")}):
        t.decompose()

    head = soup.head
    ajout = f"""
<meta property="og:locale" content="fr_FR" />
<meta property="og:type" content="article" />
<meta property="og:title" content="{TITLE_TAG}" />
<meta property="og:description" content="{META_DESC}" />
<meta property="og:url" content="{URL}" />
<meta property="og:site_name" content="AMV" />
<meta property="og:image" content="https://www.amv.fr/{HERO_REL}" />
<meta property="article:published_time" content="{DATE_PUB_ISO}" />
<meta property="article:modified_time" content="{DATE_MAJ_ISO}" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">{jsonld()}</script>
<link rel="stylesheet" href="/_modele.css" />
<link rel="stylesheet" href="/_criteres.css" />
"""
    head.append(BeautifulSoup(ajout, "html.parser"))

    # --- fil d'ariane ---
    for span in soup.select("#breadcrumbs [itemprop='name']"):
        if "Actualité" in span.get_text():
            span.string = CATEGORIE
            a = span.find_parent("a")
            if a:
                a["href"] = CAT_URL
        elif "Label Excellence" in span.get_text():
            span.string = TITRE

    # --- menu de rubriques : marquer Moto comme rubrique courante ---
    for a in soup.select("#blog-menu a"):
        a["class"] = [c for c in a.get("class", []) if c != "current"]
        if a.get("href") == CAT_URL:
            a["class"] = a.get("class", []) + ["current"]

    # --- corps ---
    ec = soup.select_one(".entry-content")
    garde = [c for c in ec.find_all(recursive=False)
             if (c.get("class") and set(c.get("class")) & {"close-posts", "related-posts", "socials"})
             or (c.name == "p" and "Articles associés" in c.get_text())]
    for c in ec.find_all(recursive=False):
        if c not in garde:
            c.decompose()
    ec["data-crit"] = "1"
    ec["data-crit-titre"] = "Balises head et données structurées"
    ec["data-crit-txt"] = ("title de 60 caractères, meta description de 142, canonical, Open "
                           "Graph, et un graphe JSON-LD BlogPosting + FAQPage + BreadcrumbList "
                           "+ Organization. Aucun de ces éléments n'existe aujourd'hui sur le "
                           "blog.")
    nouveau = BeautifulSoup(corps(), "html.parser")
    for el in reversed(list(nouveau.children)):
        ec.insert(0, el)

    # scripts en fin de body
    soup.body.append(BeautifulSoup(
        '<script src="/_modele.js"></script><script src="/_criteres.js"></script>', "html.parser"))

    h = str(soup)
    print("3. nettoyage et localisation")
    h = da.strip_tracking(h)
    h = da.localise_assets(h, ROOT)

    out = ROOT / PAGE_PATH / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(h, encoding="utf-8")
    (ROOT / "_redirects").write_text(f"/    /{PAGE_PATH}    302\n")

    print("4. controles")
    ok = da.balance_check(h) and da.check_da(h)
    print("h1:", len(re.findall(r"<h1[ >]", h)), "| h2:", len(re.findall(r"<h2[ >]", h)),
          "| h3:", len(re.findall(r"<h3[ >]", h)))
    print("blocs annotes:", len(re.findall(r'data-crit="', h)))
    da.report_externals(h)
    print("\nOK ->", out)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
