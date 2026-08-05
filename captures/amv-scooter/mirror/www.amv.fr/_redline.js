// Redline AMV (page assurance scooter) : ancien contenu barré rouge, nouveau vert.
// Contenu = version validée AMV (retours du 08/07/2026 intégrés). Aucune mention 50cc dans le nouveau contenu.
(function () {
  var EDITS = [
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader', hlevel: 'H1',
      newText: 'Assurance scooter, du 125cc au maxi-scooter' },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$', hlevel: 'H2',
      newText: "Nos 4 formules d'assurance scooter",
      addParas: ["AMV, spécialiste de l'assurance moto et scooter, propose quatre formules adaptées à chaque scooter, selon sa valeur, son utilisation et votre budget. Choisissez la formule la mieux adaptée à votre situation : dès le premier niveau de couverture, vous bénéficiez de la garantie responsabilité civile, d'une assistance juridique et d'une protection de vos équipements (casque, gants, gilet airbag) en cas de sinistre. Comparez les différentes formules d'assurance scooter et leurs options et obtenez gratuitement votre devis en ligne en quelques clics, sans engagement."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base, l'assurance scooter au tiers, couvre les dommages causés aux tiers lors d'un sinistre responsable (dommages corporels illimités et dommages matériels jusqu'à 100 millions d'euros), inclut une assistance juridique et garantit vos équipements de protection : casque jusqu'à 250 euros, gants jusqu'à 70 euros et gilet airbag jusqu'à 500 euros. Il s'agit de la solution la plus économique pour circuler en toute légalité, particulièrement adaptée aux scooters de faible valeur marchande, pour lesquels une couverture étendue pourrait ne pas être rentable." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément, cette formule couvre le vol, la tentative de vol et l'incendie de votre scooter, avec une indemnisation à la valeur de remplacement à dire d'expert ou à la valeur à neuf durant les 6 premiers mois, déduction faite de la franchise. Elle est particulièrement adaptée si vous stationnez majoritairement votre scooter en extérieur ou sur la voie publique, où le risque de vol est plus élevé que dans un box fermé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "En cas de collision avec un tiers identifié, les dommages causés à votre scooter sont pris en charge et indemnisés à la valeur de remplacement à dire d'expert ou à la valeur à neuf, déduction faite de la franchise prévue au contrat, en cas de sinistre responsable. Elle offre une protection renforcée au scootériste qui circule quotidiennement en ville, où le risque de collision avec une voiture ou un autre deux-roues est le plus important." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "La formule la plus complète pour protéger votre scooter. Elle couvre les dommages subis par votre véhicule, quelles que soient les circonstances, y compris en cas de sinistre responsable ou de vandalisme. L'indemnisation est effectuée selon les conditions prévues au contrat, après déduction de la franchise applicable. Cette formule est particulièrement recommandée pour les scooters neufs, récents ou financés à crédit." }
      ] },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$', hlevel: 'H2',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options afin d'adapter votre assurance scooter à vos besoins, à votre usage et aux caractéristiques de votre véhicule."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "L'option Individuelle Pilote permet le versement d'un capital à l'assuré en cas de déficit fonctionnel permanent ou à ses ayants droit en cas de décès, consécutifs à un accident, même responsable. C'est une garantie dédiée au pilote. Une option précieuse pour le scootériste urbain, plus exposé aux chutes." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "Assistance sans franchise kilométrique, 24h/24 et 7j/7 : panne, accident, vol ou tentative de vol, crevaison, perte ou casse de clés, fourrière. Votre scooter est dépanné ou remorqué, et vous êtes rapatrié avec votre passager, en France et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "Étend la couverture aux accessoires hors-série et à l'équipement vestimentaire de protection, à concurrence de 5 000 euros, et prolonge la valeur à neuf jusqu'à 18 mois. Intéressante pour les scooters équipés (top case, tablier, pare-brise) : votre assurance scooter couvre alors l'ensemble de vos accessoires, fréquents sur un deux-roues du quotidien." }
      ] },

    { mode: 'insertSection', beforeSel: 'section.c-avis-section',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre scooter ?" },
        { p: "AMV, leader de l'assurance deux-roues en France, compte plus d'1 million d'assurés. Avec une note de 4,7/5 via Avis Vérifiés, AMV est largement recommandé par ses assurés (9 sur 10). Que vous rouliez en 125cc, en maxi-scooter ou en trois-roues, votre assurance scooter est sur mesure. Découvrez les avantages : des formules pensées pour les deux-roues, un devis d'assurance scooter en ligne sans engagement et un conseiller dédié en cas de sinistre." }
      ] },

    { mode: 'appendInTitle', anchorMatch: 'AMV assure toutes les marques de scooter',
      content: [
        { p: "Depuis 1974, AMV assure les passions des scootéristes et des motards. Une expertise qui couvre ce que les assureurs généralistes connaissent moins : vol de casque, équipement endommagé lors d'une chute, panne en pleine circulation. AMV connaît chaque type de scooter, du 125cc urbain au maxi-scooter, et assure toutes les marques : Yamaha, Honda, Piaggio, Kymco, BMW, Peugeot, Vespa, Suzuki et bien d'autres." }
      ] },

    { mode: 'appendInTitle', anchorMatch: 'Un contrat spécial scooter pensé pour vous',
      content: [
        { p: "Plus de 350 conseillers basés à Bordeaux vous conseillent par téléphone ou en ligne. En cas de sinistre, un conseiller dédié suit votre dossier d'indemnisation de bout en bout. Vous gérez votre contrat en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé." }
      ] },

    { mode: 'faqCards', faqMatch: 'Des questions sur votre assurance',
      content: [
        { h2: "Le détail des garanties de votre assurance scooter" },
        { p: "Quelle que soit la formule choisie, elle repose sur un socle de garanties solides." },
        { h3: "Responsabilité civile" },
        { p: "La Compagnie vous garantit contre les conséquences pécuniaires de la responsabilité civile que vous pouvez encourir, en cas de sinistre responsable, en raison des dommages matériels et corporels causés à autrui, y compris à votre passager. Dommages corporels illimités, dommages matériels limités à 100 000 000 € en cas d'accident et 1 300 000 € en cas d'incendie." },
        { h3: "Assistance juridique" },
        { p: "Défense pénale et recours suite à accident, à concurrence de 2 300 €. Cette garantie vous accompagne en cas de conflit relatif au véhicule assuré (achat, entretien, réparation, vente ou financement) et pour les conséquences d'une infraction aux règles de la circulation, sans frais supplémentaires." },
        { h3: "Casque, gants et gilet airbag" },
        { p: "Remboursement, déduction faite de la vétusté, du casque à concurrence de 250 €, des gants à concurrence de 70 € et du gilet airbag à concurrence de 500 €, lorsqu'ils sont détériorés à la suite d'un événement couvert." },
        { h3: "Vol et incendie" },
        { p: "Remboursement des dommages résultant d'un vol, d'un incendie ou d'une tentative de vol avec traces d'effraction, à concurrence de la valeur de remplacement à dire d'expert, ou de la valeur à neuf, déduction faite d'une franchise." },
        { h3: "Dommages collision" },
        { p: "Remboursement des dommages subis par votre véhicule assuré lors d'une collision avec un tiers identifié, à concurrence de la valeur de remplacement ou de la valeur à neuf, déduction faite d'une franchise en cas de sinistre responsable." },
        { h3: "Dommages tous accidents" },
        { p: "Remboursement des dommages subis par votre véhicule assuré à la suite d'un accident, avec ou sans collision, avec ou sans tiers identifié, à concurrence de la valeur de remplacement ou de la valeur à neuf, déduction faite d'une franchise en cas de sinistre responsable." },
        { h3: "Valeur à neuf" },
        { p: "Prix d'achat d'un véhicule acquis neuf, pendant les 6 premiers mois, ou 18 mois au titre de l'Option Plus, suivant la date d'achat." },
        { h2: "Quel scooter peut-on assurer chez AMV ?" },
        { p: "Pour assurer votre scooter, AMV, assureur spécialiste de l'assurance deux-roues, couvre les scooters 125cc, les maxi-scooters et les trois-roues, quelle que soit la marque ou la motorisation. Découvrez l'assurance scooter qui correspond à votre véhicule et à votre usage, du trajet urbain quotidien aux plus longues distances." },
        { h3: "Scooter 125cc" },
        { p: "Le scooter 125cc est privilégié pour les trajets domicile-travail et périurbains. Très prisé des automobilistes qui passent au deux-roues pour gagner du temps, il se conduit avec le permis A1, A2 ou A, ou avec le permis B détenu depuis au moins 2 ans, après une formation de 7 heures. AMV assure tous les scooters 125cc, comme le Honda Forza 125, le Yamaha XMAX 125 ou le Piaggio Medley.",
          links: [{ t: "scooters 125cc", href: "https://www.amv.fr/assurance-scooter/assurance-scooter-125cm3/" }] },
        { h3: "Maxi-scooter et trois-roues" },
        { p: "Pour le scootériste qui recherche confort et puissance sur de longs trajets, le maxi-scooter est la solution : Yamaha TMAX (560cc), Honda Forza 350 et les autres modèles de 300cc et plus. AMV assure également les scooters trois-roues, comme le Piaggio MP3, du 125cc aux plus grosses cylindrées ; leur stabilité rassure en ville." },
        { h3: "Scooter électrique" },
        { p: "Silencieux, avec un entretien mécanique réduit et souvent exempté de certaines restrictions dans les zones à faibles émissions, le scooter électrique séduit de plus en plus de citadins. AMV l'assure, batterie comprise. Que votre scooter électrique soit un équivalent 125cc ou de puissance supérieure, votre assurance s'adapte à votre modèle et à votre usage.",
          links: [{ t: "scooter électrique", href: "https://www.amv.fr/assurance-scooter/assurance-scooter-electrique/" }] },
        { h2: "Le vol de scooter : pourquoi bien se protéger" },
        { p: "Le scooter est souvent stationné dans la rue, où le risque de vol est plus élevé, plutôt qu'au garage. Pour un usage urbain, la formule Vol / Incendie ou une formule plus complète peut être vivement conseillée. En cas de vol, votre assurance scooter AMV vous indemnise à la valeur de remplacement à dire d'expert ou à la valeur à neuf les 6 premiers mois suivant l'achat. Pour limiter le risque, privilégiez un antivol homologué (U, chaîne ou bloque-disque), idéalement combiné à une alarme, et attachez votre scooter à un point fixe. Le gravage du véhicule et le stationnement dans un parking fermé ou une zone surveillée sont également dissuasifs. En cas de vol, déclarez-le rapidement aux forces de l'ordre, puis à AMV depuis Mon Espace AMV, pour accélérer la prise en charge." },
        { h2: "L'assurance scooter pour vos trajets du quotidien" },
        { p: "Le scooter est avant tout un véhicule urbain et périurbain : trajets domicile-travail, circulation dense, stationnement facile. AMV adapte votre assurance scooter à cet usage. Du 125cc au maxi-scooter, votre couverture suit votre rythme. Pour rouler l'esprit serein, l'option Individuelle Pilote garantit le versement d'un capital en cas de déficit fonctionnel permanent, ou à vos ayants droit en cas de décès, et l'option Assistance 0 km vous dépanne même à proximité immédiate de votre domicile. Si vous utilisez votre scooter toute l'année, pensez à la garantie de vos équipements et accessoires, sollicités à chaque trajet." },
        { h2: "Comment souscrire une assurance scooter ?" },
        { p: "Souscrire une assurance scooter chez AMV est rapide. Munissez-vous de votre permis de conduire et de votre relevé d'information, renseignez les informations sur votre scooter (modèle, cylindrée, date de mise en circulation et d'achat) et votre profil pour obtenir votre tarif et recevoir votre devis d'assurance scooter en ligne en quelques minutes. Vous pouvez alors comparer les formules et choisir celle qui vous correspond. Si le prix vous convient, finalisez la souscription en quelques clics et recevez votre attestation d'assurance par e-mail. Les garanties prennent effet immédiatement ou à la date de votre choix." }
      ] },

    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: 'meilleure assurance pour un scooter', content: [
          { p: "La meilleure assurance scooter dépend de la valeur de votre scooter, de votre usage et de votre budget. Pour un scooter de faible valeur, la formule Responsabilité civile peut suffire. Pour un scooter neuf ou financé à crédit, la formule Tous risques offre la meilleure protection. AMV, assureur spécialiste de l'assurance deux-roues depuis plus de 50 ans, propose des formules sur mesure, adaptées à chaque scootériste." }
        ] },
        { existing: 'Combien coûte une assurance scooter', content: [
          { p: "Le prix d'une assurance scooter dépend du modèle et de la cylindrée du scooter, de la sinistralité déclarée du conducteur, du lieu de stationnement, et du niveau de couverture choisi. Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: "obligatoire d'assurer un scooter", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même stationné dans un garage et même s'il ne circule pas. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à tous les scooters, quelle que soit leur cylindrée." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option Plus, couverture étendue à l'ensemble de l'équipement vestimentaire de protection et aux accessoires hors-série montés sur votre scooter, jusqu'à 5 000 euros." }
        ] },
        { existing: 'jeunes conducteurs', newQ: "Les jeunes conducteurs sont-ils acceptés ?", content: [
          { p: "Oui, AMV assure les jeunes scootéristes et les conducteurs novices. Vous pouvez souscrire le contrat en votre nom dès lors que vous avez 18 ans ou être désigné, à partir de 16 ans, selon les conditions du contrat." }
        ] },
        { existing: 'déclarer un sinistre scooter', content: [
          { p: "Déclaration directement depuis Mon Espace AMV sur amv.fr, 24h/24. À la suite de votre déclaration, un conseiller dédié prend en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation." }
        ] }
      ],
      add: [
        { q: "Comment assurer un scooter 125cc ?", content: [
          { p: "Pour assurer un scooter 125cc, vous devez être titulaire du permis A1, A2 ou A, ou du permis B détenu depuis au moins 2 ans, avec une formation complémentaire de 7 heures. Munissez-vous de votre permis de conduire et de votre relevé d'information pour obtenir votre devis en ligne. Chez AMV, le devis est gratuit et la souscription se fait en quelques minutes." }
        ] },
        { q: "L'assurance scooter couvre-t-elle le passager ?", content: [
          { p: "Oui. La responsabilité civile couvre les dommages causés à votre passager en cas de sinistre responsable. L'option Assistance 0 km prend également en charge le passager lors d'un dépannage ou d'un rapatriement." }
        ] },
        { q: "Quelle assurance pour un scooter d'occasion ?", content: [
          { p: "Pour un scooter d'occasion de faible valeur, la formule Responsabilité civile, c'est-à-dire l'assurance au tiers, ou la formule Vol / Incendie peut suffire. Pour un scooter d'occasion récent et de valeur, une formule Dommages collision ou Tous risques reste pertinente. AMV vous aide à choisir la formule qui correspond à la valeur réelle de votre véhicule assuré." }
        ] },
        { q: "Comment résilier son assurance scooter ?", content: [
          { p: "Après la première année, vous pouvez résilier votre assurance scooter à tout moment grâce à la loi Hamon, sans frais ni pénalité. Avant la première échéance, la résiliation est possible dans certains cas (vente du scooter, changement de situation). Un conseiller AMV vous accompagne dans la démarche." }
        ] },
        { q: "Peut-on modifier ses garanties d'assurance scooter en cours de contrat ?", content: [
          { p: "Oui. Vous pouvez faire évoluer vos garanties et vos options en fonction de votre usage, en contactant un conseiller AMV ou depuis votre espace client Mon Espace AMV. La modification prend effet selon les conditions de votre contrat." }
        ] },
        { q: "Le scooter électrique est-il plus cher à assurer ?", content: [
          { p: "Pas nécessairement. Comme pour un scooter thermique, la cotisation d'un scooter électrique dépend du modèle et de la cylindrée équivalente, de la sinistralité déclarée du conducteur, du lieu de stationnement et du niveau de couverture choisi. Demandez un devis en ligne pour connaître le tarif correspondant à votre scooter électrique." }
        ] },
        { q: "L'assurance scooter couvre-t-elle les trajets domicile-travail ?", content: [
          { p: "Oui. Les trajets domicile-travail font partie de l'usage couvert par votre assurance scooter AMV, comme l'ensemble de vos déplacements urbains et périurbains du quotidien. Avec l'option Assistance 0 km, vous êtes dépanné sur ces trajets, même à proximité immédiate de votre domicile." }
        ] }
      ] },

    { mode: 'renameHeader', pairs: [
      ["Formule 1", "Formule Responsabilité civile"],
      ["Formule 2", "Formule Vol / Incendie"],
      ["Formule 3", "Formule Dommages collision"],
      ["Formule 4", "Formule Tous risques"],
      ["Option Individuelle pilote", "Individuelle pilote"],
      ["Option Assistance", "Assistance 0 km"],
      ["Option plus", "Option Plus"],
      ["Des questions sur votre assurance", "Questions fréquentes sur l'assurance scooter"],
    ] }
  ];
  // ===== Moteur de rendu (commun aux 3 LP Umbraco) =====
  // Recette AMV du 30/07/2026 : titres de surcouche retires, paragraphes alignes dans
  // le bloc titre (trait vert), blocs ajoutes en pleine largeur avec trait vert,
  // questions ajoutees rendues en vrais cadres d'accordeon FAQ, lien FAQ centre.

  // Classes du bloc titre AMV (petit trait vert a gauche)
  // 'in-screen' est indispensable : le site anime les blocs titre a l'apparition
  // (opacity 0 par defaut), et notre bloc n'est pas suivi par l'observer du site.
  var RL_TITLE_CLS = 'c-section-title in-screen pl-7 relative after:absolute after:left-0 after:top-0 after:h-full after:w-[5px] after:bg-vertamv-normal';
  var RL_CONT_CLS = 'mx-auto px-[1.81rem] md:px-[4rem] xl:px-[6.86rem] relative w-full max-w-[1440px] flex flex-col';

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function prependTag(node, label) {
    if (!label) return node;
    var b = document.createElement('span');
    b.className = 'rl-hntag';
    b.textContent = label;
    node.insertBefore(b, node.firstChild);
    return node;
  }

  // Clone un élément de référence pour hériter de sa typo, puis remplace le texte.
  function cloneAs(ref, txt) {
    var c = ref.cloneNode(true);
    ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-rl-prep', 'data-rl-title', 'data-collapse', 'data-lazy-load'].forEach(function (a) { c.removeAttribute(a); });
    c.classList.remove('opacity-0', 'rl-del');
    c.classList.add('rl-mark');
    c.style.opacity = '1';
    c.textContent = txt;
    return c;
  }
  // Références de style, résolues sur la page réelle
  function refHeading(tag) { return document.querySelector('section ' + tag) || document.querySelector(tag); }
  function refPara() {
    var cands = [].slice.call(document.querySelectorAll('.collapse-part p, .umb-rte p, section p'));
    cands.sort(function (a, b) { return b.textContent.trim().length - a.textContent.trim().length; });
    return cands[0] || null;
  }
  function refQuestion() { return document.querySelector('.collapse-block .flex.justify-between.items-center span'); }
  function refLI() { return document.querySelector('.collapse-part li, .umb-rte li, section li'); }

  function makePara(txt) {
    var r = refPara();
    var p = r ? cloneAs(r, txt) : el('p', 'rl-mark', null);
    if (!r) { p.textContent = txt; }
    p.style.marginTop = '10px';
    return p;
  }
  var RL_LINK_STYLE = 'color:inherit;text-decoration:underline;font-weight:600';
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function anchorHtml(label, href) { return '<a href="' + href + '" target="_blank" rel="noopener" class="rl-link" style="' + RL_LINK_STYLE + '">' + escapeHtml(label) + '</a>'; }
  function linkify(txt, links) {
    var h = escapeHtml(txt);
    (links || []).forEach(function (l) {
      var safe = escapeHtml(l.t);
      h = h.replace(safe, anchorHtml(l.t, l.href));
    });
    return h;
  }
  function makeParaLinked(txt, links) {
    var r = refPara();
    var p = r ? r.cloneNode(true) : el('p', 'rl-mark', null);
    ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-rl-prep', 'data-rl-title', 'data-collapse', 'data-lazy-load'].forEach(function (a) { p.removeAttribute(a); });
    p.classList.remove('opacity-0', 'rl-del'); p.classList.add('rl-mark'); p.style.opacity = '1';
    p.innerHTML = linkify(txt, links);
    p.style.marginTop = '10px';
    return p;
  }
  function makeUL(items) {
    var rli = refLI();
    var ul = el('ul', 'rl-mark');
    ul.style.listStyle = 'disc'; ul.style.marginLeft = '18px'; ul.style.marginTop = '6px';
    items.forEach(function (txt) {
      var isObj = txt && typeof txt === 'object';
      var label = isObj ? txt.t : txt;
      var li = rli ? cloneAs(rli, label) : el('li', null, label);
      if (isObj) { li.innerHTML = anchorHtml(label, txt.href); }
      li.style.display = 'list-item';
      ul.appendChild(li);
    });
    return ul;
  }
  function makeHeading(tag, txt) {
    var r = refHeading(tag);
    var node = r ? cloneAs(r, txt) : el(tag, 'rl-mark', txt);
    node.style.marginTop = '20px';
    prependTag(node, tag.toUpperCase());
    return node;
  }
  function makeQuestion(txt) {
    var r = refQuestion();
    var node = r ? cloneAs(r, txt) : el('p', 'rl-mark', txt);
    node.style.display = 'block';
    node.style.marginTop = '18px';
    node.style.marginBottom = '4px';
    prependTag(node, 'H3');
    return node;
  }
  function renderContent(items) {
    var nodes = [];
    items.forEach(function (it) {
      if (it.h2) nodes.push(makeHeading('h2', it.h2));
      else if (it.h3) nodes.push(makeHeading('h3', it.h3));
      else if (it.p) nodes.push(it.links ? makeParaLinked(it.p, it.links) : makePara(it.p));
      else if (it.ul) nodes.push(makeUL(it.ul));
    });
    return nodes;
  }
  function insertNodesBefore(nodes, ref, parent) {
    var frag = document.createDocumentFragment();
    nodes.forEach(function (n) { frag.appendChild(n); });
    parent.insertBefore(frag, ref);
  }

  function findCollapse(blockMatch, attr) {
    var re = new RegExp(blockMatch, 'i');
    return [].slice.call(document.querySelectorAll('.collapse-block')).find(function (b) {
      return re.test(b.textContent.replace(/\s+/g, ' ')) && !b.getAttribute(attr);
    });
  }
  // En-tête (titre) d'un accordéon, pour cibler sans confondre avec le texte interne
  function headerText(b) {
    var s = b.querySelector('.flex.justify-between.items-center span') || b.querySelector('.flex.justify-between.items-center');
    return (s ? s.textContent : b.textContent).trim();
  }
  // Cherche un accordéon par son en-tête, éventuellement restreint à une section
  function findCollapseScoped(blockMatch, attr, scope) {
    var re = new RegExp(blockMatch, 'i');
    var root = document;
    if (scope) {
      var sh = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return new RegExp(scope, 'i').test(x.textContent); });
      if (sh) root = sh.closest('section') || document;
    }
    return [].slice.call(root.querySelectorAll('.collapse-block')).find(function (b) {
      return re.test(headerText(b)) && !b.getAttribute(attr);
    });
  }

  function findTarget(edit) {
    var re = new RegExp(edit.match, 'i');
    var nodes = [].slice.call(document.querySelectorAll(edit.sel)).filter(function (n) {
      return !n.getAttribute('data-rl') && re.test(n.textContent.trim());
    });
    if (!nodes.length) return null;
    nodes.sort(function (a, b) { return a.textContent.trim().length - b.textContent.trim().length; });
    return nodes[0];
  }

  // ---- Recette 30/07 : helpers de structure ----
  // Certaines pages (quad) ont des accents decomposes (e + accent combinant) et des
  // apostrophes courbes : on normalise avant de comparer, sinon aucun match.
  function norm(s) {
    return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u2019\u02bc]/g, "'").replace(/\s+/g, ' ').toLowerCase();
  }
  function findH2(match) {
    var m = norm(match);
    return [].slice.call(document.querySelectorAll('h2')).find(function (x) { return norm(x.textContent).indexOf(m) >= 0; });
  }
  // Bloc titre AMV (div.c-section-title) qui porte le trait vert
  function titleWrapper(match) {
    var h = findH2(match);
    if (!h) return null;
    return h.closest('.c-section-title') || h.parentNode;
  }
  // Section pleine largeur au gabarit AMV, avec trait vert devant le titre
  function newTitleSection() {
    var sec = el('section', 'rl-sec pt-amv40 md:pt-amv60 w-full relative');
    var cont = el('div', RL_CONT_CLS);
    var wrap = el('div', RL_TITLE_CLS);
    cont.appendChild(wrap);
    sec.appendChild(cont);
    return { sec: sec, wrap: wrap };
  }
  // Un bloc titre (donc un trait vert) par H2 : chaque H2 ouvre une nouvelle section
  function buildTitleSections(items) {
    var sections = [], wrap = null;
    items.forEach(function (it) {
      if (it.h2 || !wrap) {
        var s = newTitleSection();
        sections.push(s.sec);
        wrap = s.wrap;
      }
      renderContent([it]).forEach(function (n) { wrap.appendChild(n); });
    });
    return sections;
  }
  // Vrai cadre d'accordéon FAQ, cloné sur un cadre existant de la page
  function faqCard(question, items, scope) {
    var model = (scope || document).querySelector('.collapse-block');
    if (!model) return null;
    var card = model.cloneNode(true);
    ['data-collapse', 'data-lazy-load', 'data-rl-faq'].forEach(function (a) { card.removeAttribute(a); });
    card.classList.remove('opacity-0');
    card.classList.add('rl-card');
    card.setAttribute('data-rl-clic', '1');
    card.style.opacity = '1';
    var head = card.querySelector('.flex.justify-between.items-center');
    var span = head ? head.querySelector('span') : null;
    if (span) { span.textContent = question; span.classList.add('rl-mark'); }
    var part = card.querySelector('.collapse-part');
    if (!part) return null;
    part.removeAttribute('id');
    part.innerHTML = '';
    renderContent(items).forEach(function (n) { part.appendChild(n); });
    // ouvert par defaut, comme les reponses remplacees : la maquette doit montrer le texte
    part.classList.remove('hidden');
    part.style.display = 'flex';
    var arrow = head ? head.querySelector('svg') : null;
    if (arrow) arrow.style.transform = 'rotate(180deg)';
    if (head) {
      head.style.cursor = 'pointer';
      head.addEventListener('click', function () {
        var closed = part.classList.toggle('hidden');
        part.style.display = closed ? '' : 'flex';
        if (arrow) arrow.style.transform = closed ? '' : 'rotate(180deg)';
      });
    }
    return card;
  }
  // Les accordeons du site ne s'ouvrent pas dans la copie (le chunk JS "Collapse" du
  // site n'est pas fonctionnel hors production) : sans ca, le nouveau contenu insere
  // dans "Consulter le detail des formules et des options" reste invisible en recette.
  // On garde l'etat ferme par defaut, fidele a la page reelle, et on rend le clic actif.
  function enableCollapses() {
    [].slice.call(document.querySelectorAll('.collapse-block')).forEach(function (b) {
      if (b.getAttribute('data-rl-clic')) return;
      var head = b.querySelector('.flex.justify-between.items-center');
      var part = b.querySelector('.collapse-part');
      if (!head || !part) return;
      b.setAttribute('data-rl-clic', '1');
      head.style.cursor = 'pointer';
      var arrow = head.querySelector('svg');
      if (getComputedStyle(part).display !== 'none' && arrow) arrow.style.transform = 'rotate(180deg)';
      head.addEventListener('click', function () {
        var closed = part.classList.toggle('hidden');
        part.style.display = closed ? '' : 'flex';
        if (arrow) arrow.style.transform = closed ? '' : 'rotate(180deg)';
      });
    });
  }
  // Colonne de la FAQ (celle qui porte les cadres de questions) et lien de bas de FAQ
  function faqColumn(section) {
    var blocks = [].slice.call(section.querySelectorAll('.collapse-block'));
    return blocks.length ? blocks[blocks.length - 1].parentNode : null;
  }
  function faqLinkBox(root) {
    return [].slice.call((root || document).querySelectorAll('div.flex.mt-amv40')).find(function (b) {
      return b.querySelector('a[href="/besoin-daide/"]');
    }) || null;
  }
  // Lien "Consulter toutes les questions fréquentes" : centré (règle AMV : avec flèche = centré)
  function centerFaqLink() {
    // le lien "Besoin d'aide ?" existe aussi dans la nav : on cible le bloc sous la FAQ
    var box = [].slice.call(document.querySelectorAll('div.flex.mt-amv40')).find(function (b) {
      return b.querySelector('a[href="/besoin-daide/"]');
    });
    if (!box || box.getAttribute('data-rl-center')) return;
    box.setAttribute('data-rl-center', '1');
    box.classList.remove('md:justify-start');
    box.classList.add('md:justify-center');
  }

  function applyEdit(edit) {
    if (edit.mode === 'prependInside') {
      var blockP = findCollapseScoped(edit.blockMatch, 'data-rl-prep', edit.scope);
      if (!blockP) return false;
      blockP.setAttribute('data-rl-prep', '1');
      var partP = blockP.querySelector('.collapse-part') || blockP;
      insertNodesBefore(renderContent(edit.content), partP.firstChild, partP);
      return true;
    }

    // Paragraphe ajouté DANS le bloc titre existant (aligné sur le titre, pas de titre en plus).
    // S'il y a déjà une phrase d'intro sous le titre, le texte est collé à sa suite, dans le
    // MEME paragraphe (demande du 03/08 : pas de saut de ligne).
    // Intitules repris a l'identique du Word valide (MEP 05/08)
    if (edit.mode === 'renameHeader') {
      var nren = 0;
      (edit.pairs || []).forEach(function (pr) {
        var want = norm(pr[0]);
        var cands = [].slice.call(document.querySelectorAll('.collapse-block .flex.justify-between.items-center span, h2, h3, h4, .text-orange-normal'));
        for (var i = 0; i < cands.length; i++) {
          var e = cands[i];
          if (e.getAttribute('data-rl-ren') || e.closest('.rl-add')) continue;
          if (norm(e.textContent).indexOf(want) < 0) continue;
          e.setAttribute('data-rl-ren', '1');
          e.textContent = pr[1];
          e.classList.add('rl-mark');
          nren++;
          break;
        }
      });
      return nren === (edit.pairs || []).length;
    }

    if (edit.mode === 'appendInTitle') {
      var wrap = titleWrapper(edit.anchorMatch);
      if (!wrap) return false;
      if (wrap.getAttribute('data-rl-title')) return true;
      wrap.setAttribute('data-rl-title', '1');
      // la balise de titre du gabarit est mal fermee dans la copie : la phrase d'intro du
      // site se retrouve DANS le h2, il faut donc chercher le dernier <p> dans tout le bloc
      var ps = [].slice.call(wrap.querySelectorAll('p')).filter(function (x) { return !x.classList.contains('rl-mark'); });
      var lastP = ps.length ? ps[ps.length - 1] : null;
      edit.content.forEach(function (it) {
        if (!it.h3) return;
        var h2e = wrap.querySelector('h2') || wrap.firstElementChild;
        var hn = makeHeading('h3', it.h3);
        hn.style.marginTop = '12px';
        if (h2e && h2e.nextSibling) wrap.insertBefore(hn, h2e.nextSibling); else wrap.appendChild(hn);
      });
      edit.content.forEach(function (it) {
        if (it.h3) return;
        if (lastP && it.p) {
          var sp = el('span', 'rl-mark');
          sp.innerHTML = ' ' + linkify(it.p, it.links);
          lastP.appendChild(sp);
        } else {
          renderContent([it]).forEach(function (n) { n.style.marginTop = '8px'; wrap.appendChild(n); });
        }
      });
      return true;
    }

    // Blocs ajoutés rattachés à la FAQ, en cadres d'accordéon : un cadre par H2,
    // le H2 devient l'intitulé de la question, ses H3 et paragraphes forment la réponse.
    if (edit.mode === 'faqCards') {
      var fq = findH2(edit.faqMatch);
      if (!fq) return false;
      var sec = fq.closest('section') || fq.parentElement;
      var col = faqColumn(sec);
      if (!col) return false;
      if (sec.getAttribute('data-rl-faqcards')) return true;
      sec.setAttribute('data-rl-faqcards', '1');
      var stop = faqLinkBox(col);
      var groups = [];
      edit.content.forEach(function (it) {
        if (it.h2 || !groups.length) groups.push({ q: it.h2 || '', items: [] });
        if (!it.h2) groups[groups.length - 1].items.push(it);
      });
      groups.forEach(function (g) {
        var card = faqCard(g.q, g.items, sec);
        if (!card) return;
        if (stop) col.insertBefore(card, stop); else col.appendChild(card);
      });
      return true;
    }

    // Bloc ajouté en pleine largeur, juste avant une section repère
    if (edit.mode === 'insertSection') {
      var target = null;
      if (edit.beforeSel) target = document.querySelector(edit.beforeSel);
      if (!target && edit.beforeH2) {
        var h = findH2(edit.beforeH2);
        target = h ? h.closest('section') : null;
      }
      if (!target) return false;
      if (target.getAttribute('data-rl-sec')) return true;
      target.setAttribute('data-rl-sec', '1');
      buildTitleSections(edit.content).forEach(function (sec) { target.parentNode.insertBefore(sec, target); });
      return true;
    }

    if (edit.mode === 'appendInside') {
      var block = findCollapse(edit.blockMatch, 'data-rl-app');
      if (!block) return false;
      block.setAttribute('data-rl-app', '1');
      var part = block.querySelector('.collapse-part') || block;
      renderContent(edit.content).forEach(function (n) { part.appendChild(n); });
      return true;
    }

    if (edit.mode === 'editInside') {
      var blk = findCollapse(edit.blockMatch, 'data-rl-edit');
      if (!blk) return false;
      blk.setAttribute('data-rl-edit', '1');
      var prt = blk.querySelector('.collapse-part') || blk;
      var anchor = null;
      (edit.strikeMatch || []).forEach(function (sm) {
        var sre = new RegExp(sm, 'i');
        var p = [].slice.call(prt.children).find(function (c) { return sre.test(c.textContent); });
        if (p) { p.classList.add('rl-del'); anchor = p; }
      });
      var nodes = renderContent(edit.content);
      insertNodesBefore(nodes, anchor ? anchor.nextSibling : prt.firstChild, prt);
      return true;
    }

    if (edit.mode === 'faqEdit') {
      var fre = new RegExp(edit.faqMatch, 'i');
      var fh2 = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return fre.test(x.textContent); });
      if (!fh2) return false;
      var section = fh2.closest('section') || fh2.parentElement;
      if (section.getAttribute('data-rl-faq')) return true;
      section.setAttribute('data-rl-faq', '1');
      var blocks = [].slice.call(section.querySelectorAll('.collapse-block'));
      function qText(b) { var s = b.querySelector('.flex.justify-between.items-center span'); return s ? s.textContent.trim() : b.textContent.trim(); }

      // Remplace UNIQUEMENT la réponse des questions ciblées (le reste intact)
      (edit.replace || []).forEach(function (item) {
        var ere = new RegExp(item.existing, 'i');
        var b = blocks.find(function (x) { return ere.test(qText(x)); });
        if (!b) return;
        var part = b.querySelector('.collapse-part');
        if (!part) return;
        // intitule de question aligne sur le Word valide (MEP 05/08)
        if (item.newQ) {
          var sp = b.querySelector('.flex.justify-between.items-center span');
          if (sp && sp.textContent.trim() !== item.newQ) { sp.textContent = item.newQ; sp.classList.add('rl-mark'); }
        }
        part.classList.remove('hidden'); part.style.display = 'flex';
        [].slice.call(part.children).forEach(function (c) { c.classList.add('rl-del'); });
        renderContent(item.content).forEach(function (n) { part.appendChild(n); });
      });

      // Questions ajoutées : vrais cadres d'accordéon, dans la colonne de la FAQ,
      // avant le lien "Consulter toutes les questions fréquentes" qui doit rester en bas
      if (edit.add && edit.add.length && blocks.length) {
        var lastB = blocks[blocks.length - 1];
        var col = lastB.parentNode;
        var linkBox = faqLinkBox(col);
        var stop = linkBox && linkBox.parentNode === col ? linkBox : lastB.nextSibling;
        edit.add.forEach(function (it) {
          var card = faqCard(it.q, it.content, section);
          if (card) col.insertBefore(card, stop);
        });
      }
      centerFaqLink();
      return true;
    }

    if (edit.mode === 'insertBlock') {
      var re = new RegExp(edit.anchorMatch, 'i');
      var h = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return re.test(x.textContent) && !x.getAttribute('data-rl-ins'); });
      if (!h) return false;
      h.setAttribute('data-rl-ins', '1');
      var wrapper = h.closest('.c-section-title') || h;
      var nodes = renderContent(edit.content);
      if (edit.position === 'appendSection') {
        // à la fin du contenu de la section (après le contenu existant => texte entre H2 et H3)
        insertNodesBefore(nodes, null, wrapper.parentNode);
      } else if (edit.position === 'after') {
        insertNodesBefore(nodes, wrapper.nextSibling, wrapper.parentNode);
      } else {
        insertNodesBefore(nodes, wrapper, wrapper.parentNode);
      }
      return true;
    }

    // mode clone (titres / H1) + addParas
    var target = findTarget(edit);
    if (!target) return false;
    target.setAttribute('data-rl', '1');
    target.classList.add('rl-del');
    var clone = target.cloneNode(true);
    clone.removeAttribute('data-rl'); clone.removeAttribute('id');
    clone.classList.remove('rl-del'); clone.classList.remove('opacity-0');
    clone.style.opacity = '1'; clone.classList.add('rl-mark');
    clone.textContent = edit.newText;
    prependTag(clone, edit.hlevel);
    target.parentNode.insertBefore(clone, target.nextSibling);
    if (edit.addParas && edit.addParas.length) {
      var last = clone;
      edit.addParas.forEach(function (txt) {
        var p = makePara(txt);
        last.parentNode.insertBefore(p, last.nextSibling);
        last = p;
      });
    }
    return true;
  }

  function applyAll() {
    var allDone = true;
    // les renommages d'intitules passent EN DERNIER : ils detruisent les ancres
    // sur lesquelles les autres edits se reperent (Formule 1..4, titre de la FAQ).
    EDITS.forEach(function (e) {
      if (e.mode === 'renameHeader') return;
      if (!e._done) { e._done = applyEdit(e); if (!e._done) allDone = false; }
    });
    if (allDone) {
      EDITS.forEach(function (e) {
        if (e.mode !== 'renameHeader' || e._done) return;
        e._done = applyEdit(e);
        if (!e._done) allDone = false;
      });
    }
    centerFaqLink();
    enableCollapses();
    return allDone;
  }

  function addControls() {
    if (document.getElementById('rl-toggle')) return;
    var btn = el('button', null, '<span class="dot"></span> Voir les modifications');
    btn.id = 'rl-toggle';
    btn.addEventListener("click", function () {
      var b = document.body, on = b.classList.toggle("rl-on");
      b.classList.toggle("rl-final", !on);
      btn.innerHTML = '<span class="dot"></span> ' + (on ? "Version finale" : "Voir les modifications");
    });
    document.body.appendChild(btn);
    var legend = el('div', null, '<span class="sw sw-del"></span> Contenu supprimé<br><span class="sw sw-add"></span> Nouveau contenu');
    legend.id = 'rl-legend';
    document.body.appendChild(legend);
    document.body.classList.add("rl-final");
  }

  function init() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (applyAll() || tries > 40) { clearInterval(timer); addControls(); }
    }, 250);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
