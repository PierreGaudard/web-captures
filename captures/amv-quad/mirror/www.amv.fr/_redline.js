// Redline AMV (page assurance quad/SSV) : ancien contenu barré rouge, nouveau vert.
(function () {
  var EDITS = [
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader', hlevel: 'H1',
      newText: 'Assurance quad et SSV pour tous les terrains' },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$', hlevel: 'H2',
      newText: "Nos 4 formules d'assurance quad",
      addParas: ["AMV, assureur spécialiste de l'assurance deux-roues, propose 4 formules sur-mesure pour couvrir chaque conducteur de quad et de SSV selon son profil, son usage et son budget. Choisissez la formule qui correspond à votre usage : dès la première, vous êtes couvert en responsabilité civile, en assistance juridique et pour vos équipements (casque, gants, gilet airbag) en cas de sinistre. Comparez les formules et obtenez votre devis assurance quad en ligne en quelques clics, sans engagement."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base, au tiers, vous couvre en responsabilité civile (dommages matériels et corporels), en assistance juridique et pour vos équipements : casque jusqu'à 250 euros, gants jusqu'à 70 euros, gilet airbag jusqu'à 500 euros. C'est le tarif le plus accessible pour conduire en toute légalité, adapté aux quads anciens, de faible valeur ou utilisés occasionnellement pour le loisir." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément, cette couverture prend en charge le vol, la tentative de vol et l'incendie, avec un remboursement à la valeur de remplacement à dire d'expert ou à la valeur à neuf les 6 premiers mois, déduction faite de la franchise. Recommandée si vous stationnez votre quad en extérieur ou dans un lieu non clos : le risque de vol est réel, notamment pour les modèles de forte cylindrée." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "Prise en charge des dommages subis par votre véhicule assuré lors d'une collision avec un tiers identifié, remboursés à la valeur de remplacement ou à la valeur à neuf, déduction faite de la franchise. Adaptée aux conducteurs qui utilisent leur quad sur route, où le risque de collision avec un autre véhicule est le plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "Couverture complète des dommages subis par votre véhicule assuré, avec ou sans tiers identifié, y compris en cas de sinistre responsable ou de vandalisme, déduction faite de la franchise. Recommandée pour un quad neuf ou récent, ou financé à crédit, quelle que soit la marque, la cylindrée ou la puissance. Vos sorties sur route comme hors piste sont couvertes en toute sérénité." }
      ] },

    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$', hlevel: 'H2',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options à la carte pour renforcer votre protection selon votre usage et votre quad."] },

    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "L'option Individuelle pilote verse un capital en cas de décès ou d'invalidité permanente consécutifs à un accident, même responsable. Sur un quad, le risque de chute ou de retournement rend cette option particulièrement pertinente." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "L'assistance 0 km intervient 24h/24 et 7j/7, sans franchise kilométrique, sur voie ouverte à la circulation : panne, accident, vol ou tentative de vol, crevaison, perte ou casse de clés, fourrière. Dépannage, remorquage et rapatriement pris en charge pour vous, votre véhicule et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "L'Option plus étend la couverture aux accessoires hors-série montés sur votre quad et à l'équipement vestimentaire de protection, à concurrence de 5 000 euros, et prolonge la garantie valeur à neuf jusqu'à 18 mois. Intéressante pour les quads équipés (treuil, pare-buffle, coffre de rangement, protège-mains)." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'million d', position: 'before',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre quad ?" },
        { p: "AMV, leader de l'assurance moto en France, assure aussi le quad et le SSV et compte plus d'1 million d'assurés. Avec une note de 4,7/5 selon Avis Vérifiés, tiers de confiance, AMV est recommandé par plus de 9 assurés sur 10. Que vous rouliez en quad sportif, en quad utilitaire ou en SSV, votre assurance quad est sur-mesure. Découvrez les avantages : des formules pensées pour le terrain comme pour la route, un devis assurance quad en ligne sans engagement et un conseiller dédié en cas de sinistre.",
          links: [{ t: "l'assurance moto", href: "https://www.amv.fr/assurance/moto/" }] }
      ] },

    { mode: 'insertBlock', anchorMatch: 'AMV assure toutes les marques de quad', position: 'appendSection',
      content: [
        { h3: "Plus de 50 ans d'expertise" },
        { p: "AMV a été fondée en 1974, par un passionné de moto, pour les motards. Une expertise qui couvre ce que les assureurs généralistes ignorent : vol d'équipement, dommages lors d'une sortie hors route, panne en pleine randonnée. AMV connaît chaque type de quad, du sportif au SSV utilitaire, du quad électrique au quad agricole, et assure toutes les marques : Can-Am, Polaris, CFMOTO, Yamaha, Kymco, TGB, Segway, Kubota, Hytrack, Arctic Cat et bien d'autres." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Un contrat spécial quad', position: 'appendSection',
      content: [
        { h3: "Un accompagnement personnalisé" },
        { p: "Plus de 350 conseillers basés à Bordeaux vous conseillent par téléphone, par e-mail ou via votre Espace Client. En cas de sinistre, un conseiller dédié suit votre dossier d'indemnisation. Vous gérez votre contrat en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé." }
      ] },

    { mode: 'insertBlock', anchorMatch: 'Des questions sur votre assurance', position: 'before',
      content: [
        { h2: "Quel quad peut-on assurer chez AMV ?" },
        { p: "AMV, spécialiste de l'assurance deux-roues, assure tous les types de quads et SSV, quelle que soit la cylindrée, la marque ou la motorisation. Découvrez le contrat qui correspond à votre véhicule et à votre usage, du loisir à la route, de la randonnée à l'usage agricole." },
        { h3: "Quad homologué route" },
        { p: "Le quad homologué route est immatriculé et autorisé à circuler sur la voie publique. Il nécessite une carte grise et un permis de conduire adapté : le permis B1 (quadricycle lourd) ou le permis B. AMV couvre vos déplacements sur route et en agglomération. Parmi les modèles courants : Can-Am Outlander, Polaris Sportsman, CFMOTO CForce, Yamaha Grizzly." },
        { h3: "Quad non homologué" },
        { p: "Le quad non homologué est destiné à un usage hors route : loisir, randonnée sur terrain privé ou exploitation agricole. Même s'il ne circule pas sur la voie publique, il doit être assuré au minimum en responsabilité civile. AMV assure les quads non homologués avec des formules adaptées à leur usage." },
        { h3: "SSV et buggy (side-by-side)" },
        { p: "Le SSV, aussi appelé buggy ou side-by-side, se distingue du quad par son habitacle, son volant et ses sièges pour transporter un ou plusieurs passagers. AMV assure tous les SSV, homologués ou non, quelle que soit la marque ou la cylindrée. Parmi les modèles courants : Polaris RZR, Can-Am Maverick, CFMOTO ZForce, Segway Villain." },
        { h3: "Quad électrique" },
        { p: "Le quad électrique se développe pour le loisir et les usages utilitaires. AMV l'assure dans les mêmes conditions que les quads thermiques, avec des garanties et des options identiques, la cotisation tenant compte des spécificités de la motorisation électrique.",
          links: [{ t: "quad électrique", href: "https://www.amv.fr/assurance-quad/assurance-quad-electrique/" }] },
        { h2: "Comment souscrire une assurance quad ?" },
        { p: "Pour souscrire une assurance quad chez AMV, la démarche est rapide. Munissez-vous de votre permis de conduire et de la carte grise (ou du numéro d'identification pour un quad non homologué), renseignez les informations sur votre quad (modèle, cylindrée, usage prévu) et votre profil pour obtenir votre devis en ligne en quelques minutes. Si le prix vous convient, finalisez la souscription en quelques clics et recevez votre attestation d'assurance par mail." }
      ] },

    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: "Quel type d'assurance dois-je prendre", content: [
          { p: "La meilleure assurance quad dépend de votre usage, de la valeur de votre véhicule et de votre budget. Pour un quad ancien ou utilisé occasionnellement, la formule Responsabilité civile pourrait suffire. Pour un quad neuf ou financé à crédit, la formule Tous risques offre la meilleure protection. AMV, spécialiste de l'assurance quad depuis plus de 50 ans, propose des formules adaptées à chaque profil." }
        ] },
        { existing: 'Combien cou', content: [
          { p: "Le prix d'une assurance quad dépend du modèle et de la cylindrée du quad ou du SSV, de l'usage prévu (loisir, route, agricole), de l'âge et de l'expérience du conducteur, de la zone géographique et du niveau de couverture choisi. Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: "obligatoire d'assurer un quad", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même s'il n'est pas homologué et ne circule pas sur la voie publique, et même stationné dans un garage. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à tous les quads et SSV, homologués ou non." }
        ] },
        { existing: 'jeunes conducteurs', content: [
          { p: "Oui. AMV assure tous les profils, y compris les jeunes conducteurs et les conducteurs novices. La tarification est personnalisée en fonction de votre expérience et de votre bonus-malus. Que vous preniez la route pour la première fois ou que vous rouliez depuis des années, AMV a une formule pour vous." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option plus, couverture étendue à l'ensemble de l'équipement vestimentaire et aux accessoires hors-série montés sur votre quad, jusqu'à 5 000 euros." }
        ] },
        { existing: 'déclarer un sinistre quad', content: [
          { p: "Déclaration directement depuis Mon Espace AMV sur amv.fr, 24h/24. Suite à votre déclaration, un conseiller dédié prend en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation." }
        ] }
      ],
      add: [
        { q: "Comment assurer un quad non homologué ?", content: [
          { p: "Pour assurer un quad non homologué, la démarche est la même que pour un quad homologué : il vous faut le numéro de série ou d'identification du véhicule et vos informations personnelles. Chez AMV, le devis est gratuit et la souscription se fait en ligne en quelques minutes." }
        ] },
        { q: "Quel permis faut-il pour conduire un quad ?", content: [
          { p: "Le permis dépend de la catégorie du quad. Pour un quad léger (quadricycle léger, 50 cm3 maximum), le permis AM (ex-BSR) suffit dès 14 ans. Pour un quad lourd homologué route (quadricycle lourd), le permis B1 (dès 16 ans) ou le permis B est nécessaire. AMV assure les conducteurs quel que soit leur permis de conduire.",
          links: [{ t: "permis AM", href: "https://www.amv.fr/assurance-moto/assurance-moto-permis-am/" }] }
        ] },
        { q: "Comment assurer un buggy ou un SSV ?", content: [
          { p: "Pour assurer un buggy (ou SSV), la démarche est identique à celle d'un quad. AMV permet de couvrir votre buggy homologué ou non homologué, qu'il serve au loisir, à la randonnée sur terrain ou à un usage utilitaire. Un buggy de forte cylindrée comme un buggy plus modeste est couvert par nos 4 formules. Munissez-vous de la carte grise ou du numéro d'identification du buggy pour obtenir votre devis en ligne." }
        ] },
        { q: "Peut-on résilier son assurance quad à tout moment ?", content: [
          { p: "Après la première année, vous pouvez résilier votre assurance quad à tout moment grâce à la loi Hamon, sans frais ni pénalité. Avant la première échéance, la résiliation est possible dans certains cas (vente du véhicule, changement de situation). Un conseiller AMV vous accompagne dans les démarches." }
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
