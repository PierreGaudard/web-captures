// Redline AMV (page assurance scooter) : ancien contenu barré rouge, nouveau vert.
(function () {
  var EDITS = [
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader', hlevel: 'H1',
      newText: 'Assurance scooter, du 50 cm3 au maxi-scooter' },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$', hlevel: 'H2',
      newText: "Nos 4 formules d'assurance scooter",
      addParas: ["AMV, assureur spécialiste de l'assurance moto et scooter, propose 4 formules sur-mesure pour couvrir chaque scootériste en fonction de son profil, de son budget et de ses besoins. Choisissez la formule qui correspond à votre usage : dès la première, vous bénéficiez des garanties indispensables, à savoir la responsabilité civile, l'assistance juridique et la prise en charge de vos équipements (casque, gants, gilet airbag). Comparez les formules et obtenez votre devis assurance scooter en ligne en quelques clics, sans engagement."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base vous couvre en responsabilité civile (dommages matériels et corporels), en assistance juridique et en protection de vos équipements essentiels : casque jusqu'à 250 euros, gants jusqu'à 70 euros, gilet airbag jusqu'à 500 euros. C'est le tarif le plus accessible pour conduire en toute légalité. Cette formule est adaptée aux scooters anciens ou de faible valeur marchande, notamment les 50 cm3 d'occasion." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément du socle de la première formule, cette couverture prend en charge les dommages en cas de vol, de tentative de vol ou d'incendie, avec un remboursement à la valeur de remplacement à dire d'expert ou à la valeur à neuf les 6 premiers mois, déduction faite de la franchise. Si vous stationnez votre scooter en extérieur ou en zone urbaine, cette formule est recommandée : le risque de vol de scooter est statistiquement plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "Prise en charge des dommages subis par votre véhicule lors d'une collision avec un tiers identifié, remboursés à la valeur de remplacement ou à la valeur à neuf, déduction faite de la franchise. Adaptée aux conducteurs qui circulent quotidiennement en ville, où le risque de collision est le plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "Couverture complète de l'ensemble des dommages subis par votre véhicule, avec ou sans tiers identifié, y compris en cas de sinistre responsable ou de vandalisme, déduction faite de la franchise. Recommandée pour les scooters neufs ou récents et les véhicules financés à crédit. Quel que soit le modèle ou la cylindrée, cette formule vous garantit une indemnisation dans la grande majorité des situations." }
      ] },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$', hlevel: 'H2',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options à la carte pour renforcer votre protection selon votre usage et votre scooter. Ces options ajustent vos garanties au plus près de vos besoins, en ville comme sur route."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "L'option Individuelle pilote verse un capital en cas de décès ou d'invalidité permanente consécutifs à un accident, même responsable. Elle intervient quand l'assurance du tiers adverse ne vous couvre pas, notamment lors d'un accident seul ou responsable." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "L'assistance 0 km intervient sans franchise kilométrique, 24h/24 et 7j/7, en cas de panne, d'accident, de vol ou de tentative de vol, de crevaison, de perte ou de casse de clés, ou d'enlèvement par la fourrière. Dépannage, remorquage et rapatriement pris en charge pour vous, votre véhicule et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "L'Option plus étend la couverture aux accessoires hors-série montés sur votre scooter et à l'équipement vestimentaire de protection, à concurrence de 5 000 euros, et prolonge la garantie valeur à neuf jusqu'à 18 mois. Particulièrement intéressante pour les scooters équipés d'accessoires (top case, tablier, pare-brise)." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'million d', position: 'before',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre scooter ?" },
        { p: "AMV, leader et assureur spécialiste de l'assurance moto et scooter en France depuis plus de 50 ans, assure plus d'1 million de conducteurs. Avec une note de 4,7/5 selon Avis Vérifiés, tiers de confiance, AMV est recommandé par ses assurés (9 sur 10). Que vous rouliez en 50cc, en 125 ou en maxi-scooter, votre assurance scooter est sur-mesure. Découvrez les avantages : des formules pensées pour les deux-roues, un devis assurance scooter en ligne sans engagement et un conseiller dédié en cas de sinistre." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'AMV assure toutes les marques de scooter', position: 'appendSection',
      content: [
        { h3: "Plus de 50 ans d'expertise deux-roues" },
        { p: "AMV a été fondée en 1974, par un passionné de moto, pour les motards. Cette expertise couvre les situations que les assureurs généralistes ignorent : vol de casque, équipement endommagé lors d'une chute, panne en pleine circulation. AMV connaît les spécificités de chaque type de scooter, du 50 cm3 urbain au maxi-scooter, du scooter électrique au trois-roues. AMV assure toutes les marques : Yamaha, Honda, Piaggio, Kymco, BMW, Peugeot, Vespa, Suzuki et bien d'autres." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Un contrat spécial scooter pensé pour vous', position: 'appendSection',
      content: [
        { h3: "Un accompagnement personnalisé" },
        { p: "Plus de 350 conseillers basés à Bordeaux vous apportent des conseils personnalisés par téléphone, par e-mail ou via votre Espace Client. En cas de sinistre, un interlocuteur dédié suit votre dossier d'indemnisation. Vous gérez votre contrat en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Des questions sur votre assurance', position: 'before',
      content: [
        { h2: "Quel scooter peut-on assurer chez AMV ?" },
        { p: "AMV, spécialiste de l'assurance deux-roues, assure tous les types de scooters, quelle que soit la cylindrée ou la motorisation. Que vous utilisiez votre deux-roues en ville ou sur route, AMV a un contrat adapté à votre profil." },
        { h3: "Scooter 50 cm3" },
        { p: "Le scooter 50 cm3 est idéal pour les trajets urbains courts. Accessible dès 14 ans avec le permis AM (ex-BSR), il ne nécessite pas le permis de conduire classique. AMV propose des formules adaptées aux conducteurs de 50 cm3, y compris les jeunes qui prennent la route pour la première fois. Parmi les modèles courants : Piaggio Zip, Peugeot Kisbee, Yamaha Neos, MBK Booster." },
        { h3: "Scooter 125 cm3" },
        { p: "Le scooter 125 est le choix privilégié pour les déplacements domicile-travail et les trajets périurbains. Accessible avec le permis B et une formation de 7 heures, ou avec le permis A1, il offre un bon compromis entre performance et coût d'assurance. AMV assure tous les scooters 125, comme le Honda Forza 125, le Yamaha XMAX 125 ou le Piaggio Medley." },
        { h3: "Maxi-scooter et trois-roues" },
        { p: "Pour les conducteurs qui recherchent confort et puissance sur de longs trajets, le maxi-scooter est la solution. AMV assure les maxi-scooters de toutes cylindrées (300, 400, 530 cm3 et plus) ainsi que les scooters trois-roues. Que vous rouliez en Yamaha TMAX, Honda Forza 350 ou Piaggio MP3, votre contrat couvre l'ensemble de vos besoins." },
        { h3: "Scooter électrique" },
        { p: "Le scooter électrique se développe rapidement en ville. AMV assure tous les modèles de scooters électriques dans les mêmes conditions que les scooters thermiques. Les garanties et les options sont identiques, et la cotisation tient compte des spécificités de la motorisation électrique." },
        { h2: "Le vol de scooter : pourquoi bien se protéger" },
        { p: "Le scooter, souvent stationné dans la rue, est particulièrement exposé au vol. Pour un usage urbain quotidien, la formule Vol / Incendie ou une formule plus complète est vivement conseillée. Au-delà de l'assurance, un bon antivol (U ou chaîne) et un stationnement dans un lieu fermé ou surveillé réduisent fortement le risque. En cas de vol, AMV vous indemnise à la valeur de remplacement à dire d'expert, ou à la valeur à neuf pendant les premiers mois suivant l'achat." },
        { h2: "L'assurance scooter pour vos trajets du quotidien" },
        { p: "Le scooter est avant tout un véhicule urbain et périurbain : trajets domicile-travail, circulation dense, stationnement facile. AMV adapte votre contrat à cet usage quotidien, avec l'assistance 0 km qui intervient dès le domicile en cas de panne, et des garanties pensées pour la ville. Que vous rouliez en 50 cm3 pour de courts trajets ou en maxi-scooter pour des distances plus longues, votre couverture suit votre rythme." },
        { h2: "Comment souscrire une assurance scooter ?" },
        { p: "Pour souscrire une assurance scooter chez AMV, la démarche est rapide. Renseignez les informations sur votre scooter (modèle, cylindrée, année) et votre profil (expérience, bonus-malus, zone géographique) pour recevoir votre devis en ligne en quelques minutes. Si le prix vous convient, finalisez la souscription en quelques clics et recevez votre attestation d'assurance par mail. Les garanties prennent effet immédiatement ou à la date de votre choix. Vous pouvez aussi contacter un conseiller par téléphone." }
      ] },

    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: 'meilleure assurance pour un scooter', content: [
          { p: "La meilleure assurance scooter dépend de votre usage, de la valeur de votre véhicule et de votre budget. Pour un scooter ancien ou de faible valeur, la formule Responsabilité civile pourrait suffire. Pour un scooter neuf ou financé à crédit, la formule Tous risques offre la meilleure protection. AMV, spécialiste de l'assurance deux-roues depuis plus de 50 ans, propose des formules adaptées à chaque profil." }
        ] },
        { existing: 'Combien coûte une assurance scooter', content: [
          { p: "Le prix d'une assurance scooter dépend de plusieurs critères :" },
          { ul: ["le modèle du scooter, sa cylindrée et sa puissance", "l'âge et l'expérience du conducteur", "la zone géographique et le lieu de stationnement", "le niveau de couverture choisi"] },
          { p: "Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: "obligatoire d'assurer un scooter", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même stationné dans un garage et même s'il ne circule pas. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation s'applique à tous les scooters, quelle que soit leur cylindrée." }
        ] },
        { existing: 'assurer un scooter de 50', content: [
          { p: "Pour assurer un scooter 50 cm3, vous avez besoin de votre BSR ou permis AM (pour les conducteurs nés après le 1er janvier 1988), de la carte grise du véhicule et d'un relevé d'informations si vous étiez déjà assuré. Chez AMV, le devis est gratuit et la souscription se fait en ligne en quelques minutes." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option plus, couverture étendue à l'ensemble de l'équipement vestimentaire et aux accessoires hors-série montés sur votre scooter, jusqu'à 5 000 euros." }
        ] },
        { existing: 'jeunes conducteurs', content: [
          { p: "Oui. AMV assure tous les profils, y compris les jeunes conducteurs et les novices. Une surprime jeune conducteur s'applique les premières années puis diminue progressivement sans sinistre responsable. La tarification tient compte de votre expérience et de votre bonus-malus. Que vous preniez la route pour la première fois ou rouliez depuis des années, AMV a une formule pour vous." }
        ] },
        { existing: 'déclarer un sinistre scooter', content: [
          { p: "Déclaration directement depuis Mon Espace AMV sur amv.fr, 24h/24. Suite à votre déclaration, un gestionnaire dédié prend en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation." }
        ] }
      ],
      add: [
        { q: "Comment assurer un scooter 125 cm3 ?", content: [
          { p: "Pour assurer un scooter 125, vous devez être titulaire du permis A1 ou du permis B avec une formation complémentaire de 7 heures. Munissez-vous de votre permis de conduire, de la carte grise et de votre relevé d'informations. AMV assure tous les scooters 125 cm3, du Honda PCX au Yamaha NMAX, avec des formules adaptées à votre usage." }
        ] },
        { q: "L'assurance scooter couvre-t-elle le passager ?", content: [
          { p: "Oui. La responsabilité civile couvre les dommages causés à votre passager, et l'option Individuelle pilote peut être étendue pour le protéger en cas d'accident. L'assistance 0 km prend également en charge le passager lors d'un dépannage ou d'un rapatriement." }
        ] },
        { q: "Quelle assurance pour un scooter d'occasion ?", content: [
          { p: "Pour un scooter d'occasion de faible valeur, la formule Responsabilité civile ou Vol / Incendie peut généralement suffire. Pour un scooter d'occasion récent et de valeur, une formule Dommages collision ou Tous risques reste pertinente. AMV vous aide à choisir la formule qui correspond à la valeur réelle de votre véhicule assuré." }
        ] },
        { q: "Comment résilier son assurance scooter ?", content: [
          { p: "Après la première année, vous pouvez résilier votre assurance scooter à tout moment grâce à la loi Hamon, sans frais ni pénalité. Avant la première échéance, la résiliation est possible dans certains cas (vente du scooter, changement de situation). Un conseiller AMV vous accompagne dans la démarche." }
        ] },
        { q: "Peut-on modifier ses garanties d'assurance scooter en cours de contrat ?", content: [
          { p: "Oui. Vous pouvez faire évoluer vos garanties et vos options à tout moment depuis votre espace client Mon Espace AMV, en fonction de votre usage et de la saison. La modification prend effet selon les conditions de votre contrat." }
        ] },
        { q: "Le scooter électrique est-il plus cher à assurer ?", content: [
          { p: "Pas nécessairement. Chez AMV, le scooter électrique s'assure dans les mêmes conditions qu'un scooter thermique, avec les mêmes formules et garanties. La cotisation dépend surtout de la valeur du véhicule, de votre profil et du niveau de couverture choisi, pas du type de motorisation." }
        ] },
        { q: "L'assurance scooter couvre-t-elle les trajets domicile-travail ?", content: [
          { p: "Oui. Les trajets domicile-travail font partie de l'usage couvert par votre assurance scooter AMV, comme l'ensemble de vos déplacements urbains et périurbains du quotidien. L'assistance 0 km vous dépanne sur ces trajets, dès le bas de chez vous." }
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
  function makeUL(items) { var rli = refLI(); var ul = el('ul', 'rl-mark'); ul.style.listStyle = 'disc'; ul.style.marginLeft = '18px'; ul.style.marginTop = '6px'; items.forEach(function (t) { var li = rli ? cloneAs(rli, t) : el('li', null, t); li.style.display = 'list-item'; ul.appendChild(li); }); return ul; }
  function makeHeading(tag, txt) { var r = refHeading(tag); var node = r ? cloneAs(r, txt) : el(tag, 'rl-mark', txt); node.style.marginTop = '20px'; prependTag(node, tag.toUpperCase()); return node; }
  function makeQuestion(txt) { var r = refQuestion(); var node = r ? cloneAs(r, txt) : el('p', 'rl-mark', txt); node.style.display = 'block'; node.style.marginTop = '18px'; node.style.marginBottom = '4px'; prependTag(node, 'H3'); return node; }
  function renderContent(items) { var n = []; items.forEach(function (it) { if (it.h2) n.push(makeHeading('h2', it.h2)); else if (it.h3) n.push(makeHeading('h3', it.h3)); else if (it.p) n.push(makePara(it.p)); else if (it.ul) n.push(makeUL(it.ul)); }); return n; }
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
