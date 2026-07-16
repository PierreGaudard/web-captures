// Redline AMV (page assurance scooter) : ancien contenu barré rouge, nouveau vert.
// Contenu = version validée AMV (retours du 08/07/2026 intégrés). Aucune mention 50cc dans le nouveau contenu.
(function () {
  var EDITS = [
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader', hlevel: 'H1',
      newText: 'Assurance scooter, du 125cc au maxi-scooter' },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$', hlevel: 'H2',
      newText: "Nos 4 formules d'assurance scooter",
      addParas: ["AMV, spécialiste de l'assurance moto et scooter, propose quatre formules adaptées à chaque scooter, selon sa valeur, son usage et votre budget. Choisissez la formule la mieux adaptée à votre utilisation : dès le premier niveau de couverture, vous bénéficiez de la responsabilité civile, d'une assistance juridique et d'une protection de vos équipements (casque, gants, gilet airbag) en cas de sinistre. Comparez les différentes formules et options et obtenez votre devis d'assurance scooter en ligne en quelques clics, sans engagement."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base, l'assurance scooter au tiers, couvre les dommages causés aux tiers lors d'un sinistre responsable (dommages corporels illimités et dommages matériels jusqu'à 100 millions d'euros), inclut une assistance juridique et garantit vos équipements de protection : casque jusqu'à 250 euros, gants jusqu'à 70 euros et gilet airbag jusqu'à 500 euros. Il s'agit de la solution la plus économique pour circuler en toute légalité, particulièrement adaptée aux scooters de faible valeur marchande, pour lesquels une couverture étendue pourrait ne pas être rentable." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément, cette formule couvre le vol, la tentative de vol et l'incendie de votre scooter, avec une indemnisation à la valeur de remplacement à dire d'expert ou à la valeur à neuf durant les 6 premiers mois. Elle est particulièrement adaptée si vous stationnez majoritairement votre scooter en extérieur ou sur la voie publique, où le risque de vol est plus élevé : votre scooter représente un poste de dépense important, que cette garantie protège." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "En cas de collision avec un tiers identifié, les dommages causés à votre scooter sont pris en charge et indemnisés à la valeur de remplacement à dire d'expert ou à la valeur à neuf, sous déduction, en cas de sinistre responsable, de la franchise prévue au contrat. Cette formule est adaptée au scootériste qui circule quotidiennement en ville, où le risque de collision avec une voiture ou un autre deux-roues est le plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "La formule la plus complète pour protéger votre scooter. Elle couvre les dommages subis par votre véhicule, quelles que soient les circonstances, y compris en cas de sinistre responsable ou de vandalisme. L'indemnisation est effectuée selon les conditions prévues au contrat, après déduction de la franchise applicable. Cette formule est particulièrement recommandée pour les scooters neufs, récents ou financés à crédit." }
      ] },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$', hlevel: 'H2',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options afin d'adapter votre couverture à vos besoins, à votre usage et aux caractéristiques de votre scooter."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "Cette option vous verse un capital pouvant atteindre 800 000 euros en cas d'invalidité permanente, ou à vos ayants droit en cas de décès, même lors d'un accident responsable. Une option précieuse pour le scootériste urbain, plus exposé aux chutes." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "Assistance sans franchise kilométrique, 24h/24 et 7j/7 : panne, accident, vol ou tentative de vol, crevaison, perte ou casse de clés, fourrière. Votre scooter est dépanné ou remorqué, et vous êtes rapatrié avec votre passager, en France et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "Étend la couverture aux accessoires hors-série et à l'équipement vestimentaire de protection, à concurrence de 5 000 euros, et prolonge la valeur à neuf jusqu'à 18 mois. Intéressante pour les scooters équipés (top case, tablier, pare-brise), accessoires fréquents sur un deux-roues du quotidien." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'million d', position: 'before',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre scooter ?" },
        { p: "AMV, leader de l'assurance deux-roues en France, a plus d'1 million d'assurés. Avec une note de 4,7/5 via Avis Vérifiés, AMV est recommandé par ses assurés (9 sur 10). Que vous rouliez en 125cc, en maxi-scooter ou en trois-roues, votre assurance scooter est sur mesure. Découvrez les avantages : des formules pensées pour les deux-roues, un devis d'assurance scooter en ligne sans engagement et un conseiller dédié en cas de sinistre." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'AMV assure toutes les marques de scooter', position: 'appendSection',
      content: [
        { h3: "Plus de 50 ans d'expertise deux-roues" },
        { p: "Depuis 1974, AMV assure les passions des scootéristes et des motards. Une expertise qui couvre ce que les assureurs généralistes connaissent moins : vol de casque, équipement endommagé lors d'une chute, panne en pleine circulation. AMV connaît chaque type de scooter, du 125cc urbain au maxi-scooter, et assure toutes les marques : Yamaha, Honda, Piaggio, Kymco, BMW, Peugeot, Vespa, Suzuki et bien d'autres." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Un contrat spécial scooter pensé pour vous', position: 'appendSection',
      content: [
        { h3: "Un accompagnement personnalisé" },
        { p: "Plus de 350 conseillers basés à Bordeaux vous conseillent par téléphone ou en ligne. En cas de sinistre, un conseiller dédié suit votre dossier d'indemnisation de bout en bout. Vous gérez votre contrat en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Des questions sur votre assurance', position: 'before',
      content: [
        { h2: "Quel scooter peut-on assurer chez AMV ?" },
        { p: "AMV, assureur spécialiste de l'assurance deux-roues, assure les scooters 125cc, les maxi-scooters et les trois-roues, quelle que soit la marque ou la motorisation. Découvrez l'assurance scooter qui correspond à votre véhicule et à votre usage, du trajet urbain quotidien aux plus longues distances." },
        { h3: "Scooter 125cc" },
        { p: "Le scooter 125cc est privilégié pour les trajets domicile-travail et périurbains. Très prisé des automobilistes qui passent au deux-roues pour gagner du temps, il se conduit avec le permis A1, A2 ou A, ou avec le permis B détenu depuis au moins 2 ans, après une formation de 7 heures. AMV assure tous les scooters 125cc, comme le Honda Forza 125, le Yamaha XMAX 125 ou le Piaggio Medley.",
          links: [{ t: "scooters 125cc", href: "https://www.amv.fr/assurance-scooter/assurance-scooter-125cm3/" }] },
        { h3: "Maxi-scooter et trois-roues" },
        { p: "Pour le scootériste qui recherche confort et puissance sur de longs trajets, le maxi-scooter est la solution : Yamaha TMAX (560cc), Honda Forza 350 et les autres modèles de 300cc et plus. AMV assure également les scooters trois-roues, comme le Piaggio MP3, du 125cc aux plus grosses cylindrées ; leur stabilité rassure en ville." },
        { h3: "Scooter électrique" },
        { p: "Silencieux, avec un entretien mécanique réduit et souvent exempté de certaines restrictions dans les zones à faibles émissions, le scooter électrique séduit de plus en plus de citadins. AMV l'assure, batterie comprise. Que votre scooter électrique soit un équivalent 125cc ou de puissance supérieure, votre assurance s'adapte à votre modèle et à votre usage.",
          links: [{ t: "scooter électrique", href: "https://www.amv.fr/assurance-scooter/assurance-scooter-electrique/" }] },
        { h2: "Le vol de scooter : pourquoi bien se protéger" },
        { p: "Le scooter est souvent stationné dans la rue, où le risque de vol est plus élevé, plutôt qu'au garage. Pour un usage urbain, la formule Vol / Incendie ou une formule plus complète peut être vivement conseillée. En cas de vol, votre assurance scooter AMV vous indemnise à la valeur de remplacement, ou à la valeur à neuf les premiers mois suivant l'achat. Pour limiter le risque, privilégiez un antivol homologué (U, chaîne ou bloque-disque), idéalement combiné à une alarme, et attachez votre scooter à un point fixe. Le marquage du véhicule et le stationnement dans un parking fermé ou une zone surveillée sont également dissuasifs. En cas de vol, déclarez-le rapidement aux forces de l'ordre, puis à AMV depuis Mon Espace AMV, pour accélérer la prise en charge." },
        { h2: "L'assurance scooter pour vos trajets du quotidien" },
        { p: "Le scooter est avant tout un véhicule urbain et périurbain : trajets domicile-travail, circulation dense, stationnement facile. AMV adapte votre assurance scooter à cet usage. Du 125cc au maxi-scooter, votre couverture suit votre rythme. Pour rouler l'esprit serein, l'option Individuelle pilote garantit le versement d'un capital en cas d'invalidité permanente, ou à vos ayants droit en cas de décès, et l'option Assistance 0 km vous dépanne même à proximité immédiate de votre domicile. Si vous utilisez votre scooter toute l'année, pensez à la garantie de vos équipements et accessoires, sollicités à chaque trajet." },
        { h2: "Comment souscrire une assurance scooter ?" },
        { p: "Souscrire une assurance scooter chez AMV est rapide. Munissez-vous de votre permis de conduire et de votre relevé d'information, renseignez les informations sur votre scooter (modèle, cylindrée, année) et votre profil pour recevoir votre devis en ligne en quelques minutes. Vous pouvez alors comparer les formules et choisir celle qui vous correspond. Si le prix vous convient, finalisez la souscription en quelques clics et recevez votre attestation d'assurance par e-mail. Les garanties prennent effet immédiatement ou à la date de votre choix." }
      ] },

    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: 'meilleure assurance pour un scooter', content: [
          { p: "La meilleure assurance scooter dépend de la valeur de votre scooter, de votre usage et de votre budget. Pour un scooter de faible valeur, la formule Responsabilité civile peut suffire. Pour un scooter neuf ou financé à crédit, la formule Tous risques offre la meilleure protection. AMV, assureur spécialiste de l'assurance deux-roues depuis plus de 50 ans, propose des formules sur mesure, adaptées à chaque scootériste." }
        ] },
        { existing: 'Combien coûte une assurance scooter', content: [
          { p: "Le prix d'une assurance scooter dépend du modèle et de la cylindrée du scooter, de la sinistralité déclarée du conducteur, de l'adresse du domicile ou du lieu de stationnement, et du niveau de couverture choisi. Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: "obligatoire d'assurer un scooter", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même stationné dans un garage et même s'il ne circule pas. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à tous les scooters, quelle que soit leur cylindrée." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option plus, couverture étendue à l'ensemble de l'équipement vestimentaire de protection et aux accessoires hors-série montés sur votre scooter, jusqu'à 5 000 euros." }
        ] },
        { existing: 'jeunes conducteurs', content: [
          { p: "Oui, dès lors que vous avez 18 ans : la souscription n'est pas possible avant la majorité. AMV assure les jeunes scootéristes et les conducteurs novices. Une surprime jeune conducteur peut atteindre jusqu'à 100 % la première année ; en l'absence de sinistre responsable, elle est limitée à 50 % la deuxième année, puis 25 % la troisième." }
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
          { p: "Pour un scooter d'occasion de faible valeur, la formule Responsabilité civile ou Vol / Incendie peut suffire. Pour un scooter d'occasion récent et de valeur, une formule Dommages collision ou Tous risques reste pertinente. AMV vous aide à choisir la formule qui correspond à la valeur réelle de votre véhicule assuré." }
        ] },
        { q: "Comment résilier son assurance scooter ?", content: [
          { p: "Après la première année, vous pouvez résilier votre assurance scooter à tout moment grâce à la loi Hamon, sans frais ni pénalité. Avant la première échéance, la résiliation est possible dans certains cas (vente du scooter, changement de situation). Un conseiller AMV vous accompagne dans la démarche." }
        ] },
        { q: "Peut-on modifier ses garanties d'assurance scooter en cours de contrat ?", content: [
          { p: "Oui. Vous pouvez faire évoluer vos garanties et vos options en fonction de votre usage, en contactant un conseiller AMV ou depuis votre espace client Mon Espace AMV. La modification prend effet selon les conditions de votre contrat." }
        ] },
        { q: "Le scooter électrique est-il plus cher à assurer ?", content: [
          { p: "Pas nécessairement. Comme pour un scooter thermique, la cotisation d'un scooter électrique dépend du modèle et de la cylindrée équivalente, de la sinistralité déclarée du conducteur, de l'adresse du domicile ou du lieu de stationnement, et du niveau de couverture choisi. Demandez un devis en ligne pour connaître le tarif correspondant à votre scooter électrique." }
        ] },
        { q: "L'assurance scooter couvre-t-elle les trajets domicile-travail ?", content: [
          { p: "Oui. Les trajets domicile-travail font partie de l'usage couvert par votre assurance scooter AMV, comme l'ensemble de vos déplacements urbains et périurbains du quotidien. Avec l'option Assistance 0 km, vous êtes dépanné sur ces trajets, même à proximité immédiate de votre domicile." }
        ] }
      ] }
  ];

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function prependTag(node, label) { if (!label) return node; var b = document.createElement('span'); b.className = 'rl-hntag'; b.textContent = label; node.insertBefore(b, node.firstChild); return node; }
  function cloneAs(ref, txt) { var c = ref.cloneNode(true); ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-rl-prep', 'data-collapse', 'data-lazy-load'].forEach(function (a) { c.removeAttribute(a); }); c.classList.remove('opacity-0', 'rl-del'); c.classList.add('rl-mark'); c.style.opacity = '1'; c.textContent = txt; return c; }
  function refHeading(tag) { return document.querySelector('section ' + tag) || document.querySelector(tag); }
  function refPara() { var c = [].slice.call(document.querySelectorAll('.collapse-part p, .umb-rte p, section p')); c.sort(function (a, b) { return b.textContent.trim().length - a.textContent.trim().length; }); return c[0] || null; }
  function refQuestion() { return document.querySelector('.collapse-block .flex.justify-between.items-center span'); }
  function refLI() { return document.querySelector('.collapse-part li, .umb-rte li, section li'); }
  function makePara(txt) { var r = refPara(); var p = r ? cloneAs(r, txt) : el('p', 'rl-mark', null); if (!r) p.textContent = txt; p.style.marginTop = '10px'; return p; }
  var RL_LINK_STYLE = 'color:inherit;text-decoration:underline;font-weight:600';
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function anchorHtml(label, href) { return '<a href="' + href + '" target="_blank" rel="noopener" class="rl-link" style="' + RL_LINK_STYLE + '">' + escapeHtml(label) + '</a>'; }
  function linkify(txt, links) { var h = escapeHtml(txt); (links || []).forEach(function (l) { h = h.replace(escapeHtml(l.t), anchorHtml(l.t, l.href)); }); return h; }
  function makeParaLinked(txt, links) { var r = refPara(); var p = r ? r.cloneNode(true) : el('p', 'rl-mark', null); ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-rl-prep', 'data-collapse', 'data-lazy-load'].forEach(function (a) { p.removeAttribute(a); }); p.classList.remove('opacity-0', 'rl-del'); p.classList.add('rl-mark'); p.style.opacity = '1'; p.innerHTML = linkify(txt, links); p.style.marginTop = '10px'; return p; }
  function makeUL(items) { var rli = refLI(); var ul = el('ul', 'rl-mark'); ul.style.listStyle = 'disc'; ul.style.marginLeft = '18px'; ul.style.marginTop = '6px'; items.forEach(function (t) { var isObj = t && typeof t === 'object'; var label = isObj ? t.t : t; var li = rli ? cloneAs(rli, label) : el('li', null, label); if (isObj) li.innerHTML = anchorHtml(label, t.href); li.style.display = 'list-item'; ul.appendChild(li); }); return ul; }
  function makeHeading(tag, txt) { var r = refHeading(tag); var node = r ? cloneAs(r, txt) : el(tag, 'rl-mark', txt); node.style.marginTop = '20px'; prependTag(node, tag.toUpperCase()); return node; }
  function makeQuestion(txt) { var r = refQuestion(); var node = r ? cloneAs(r, txt) : el('p', 'rl-mark', txt); node.style.display = 'block'; node.style.marginTop = '18px'; node.style.marginBottom = '4px'; prependTag(node, 'H3'); return node; }
  function renderContent(items) { var n = []; items.forEach(function (it) { if (it.h2) n.push(makeHeading('h2', it.h2)); else if (it.h3) n.push(makeHeading('h3', it.h3)); else if (it.p) n.push(it.links ? makeParaLinked(it.p, it.links) : makePara(it.p)); else if (it.ul) n.push(makeUL(it.ul)); }); return n; }
  function insertNodesBefore(nodes, ref, parent) { var f = document.createDocumentFragment(); nodes.forEach(function (n) { f.appendChild(n); }); parent.insertBefore(f, ref); }
  function headerText(b) { var s = b.querySelector('.flex.justify-between.items-center span') || b.querySelector('.flex.justify-between.items-center'); return (s ? s.textContent : b.textContent).trim(); }
  function findCollapseScoped(blockMatch, attr, scope) { var re = new RegExp(blockMatch, 'i'); var root = document; if (scope) { var sh = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return new RegExp(scope, 'i').test(x.textContent); }); if (sh) root = sh.closest('section') || document; } return [].slice.call(root.querySelectorAll('.collapse-block')).find(function (b) { return re.test(headerText(b)) && !b.getAttribute(attr); }); }
  function findTarget(edit) { var re = new RegExp(edit.match, 'i'); var n = [].slice.call(document.querySelectorAll(edit.sel)).filter(function (x) { return !x.getAttribute('data-rl') && re.test(x.textContent.trim()); }); if (!n.length) return null; n.sort(function (a, b) { return a.textContent.trim().length - b.textContent.trim().length; }); return n[0]; }

  function applyEdit(edit) {
    if (edit.mode === 'prependInside') {
      var blockP = findCollapseScoped(edit.blockMatch, 'data-rl-prep', edit.scope);
      if (!blockP) return false;
      blockP.setAttribute('data-rl-prep', '1');
      var partP = blockP.querySelector('.collapse-part') || blockP;
      insertNodesBefore(renderContent(edit.content), partP.firstChild, partP);
      return true;
    }
    if (edit.mode === 'insertBlock') {
      var re = new RegExp(edit.anchorMatch, 'i');
      var h = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return re.test(x.textContent) && !x.getAttribute('data-rl-ins'); });
      if (!h) return false;
      h.setAttribute('data-rl-ins', '1');
      var wrapper = h.closest('.c-section-title') || h;
      var nodes = renderContent(edit.content);
      if (edit.position === 'appendSection') insertNodesBefore(nodes, null, wrapper.parentNode);
      else insertNodesBefore(nodes, wrapper, wrapper.parentNode);
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
      (edit.replace || []).forEach(function (item) {
        var ere = new RegExp(item.existing, 'i');
        var b = blocks.find(function (x) { return ere.test(qText(x)); });
        if (!b) return;
        var part = b.querySelector('.collapse-part'); if (!part) return;
        part.classList.remove('hidden'); part.style.display = 'flex';
        [].slice.call(part.children).forEach(function (c) { c.classList.add('rl-del'); });
        renderContent(item.content).forEach(function (n) { part.appendChild(n); });
      });
      if (edit.add && edit.add.length && blocks.length) {
        var nodes = [];
        edit.add.forEach(function (it) { nodes.push(makeQuestion(it.q)); renderContent(it.content).forEach(function (n) { nodes.push(n); }); });
        var lastB = blocks[blocks.length - 1];
        insertNodesBefore(nodes, lastB.nextSibling, lastB.parentNode);
      }
      return true;
    }
    var target = findTarget(edit);
    if (!target) return false;
    target.setAttribute('data-rl', '1'); target.classList.add('rl-del');
    var clone = target.cloneNode(true);
    clone.removeAttribute('data-rl'); clone.removeAttribute('id'); clone.classList.remove('rl-del', 'opacity-0'); clone.style.opacity = '1'; clone.classList.add('rl-mark');
    clone.textContent = edit.newText; prependTag(clone, edit.hlevel);
    target.parentNode.insertBefore(clone, target.nextSibling);
    if (edit.addParas && edit.addParas.length) { var last = clone; edit.addParas.forEach(function (txt) { var p = makePara(txt); last.parentNode.insertBefore(p, last.nextSibling); last = p; }); }
    return true;
  }

  function applyAll() { var ok = true; EDITS.forEach(function (e) { if (!e._done) { e._done = applyEdit(e); if (!e._done) ok = false; } }); return ok; }
  function addControls() {
    if (document.getElementById('rl-toggle')) return;
    var btn = el('button', null, '<span class="dot"></span> Modifications'); btn.id = 'rl-toggle';
    btn.addEventListener('click', function () { document.body.classList.toggle('rl-on'); });
    document.body.appendChild(btn);
    var lg = el('div', null, '<span class="sw sw-del"></span> Contenu supprimé<br><span class="sw sw-add"></span> Nouveau contenu'); lg.id = 'rl-legend';
    document.body.appendChild(lg);
    document.body.classList.add('rl-on');
  }
  function init() { var t = 0; var timer = setInterval(function () { t++; if (applyAll() || t > 40) { clearInterval(timer); addControls(); } }, 250); }
  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
