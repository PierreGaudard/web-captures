// Redline AMV (page assurance moto permis A2) : ancien contenu barré rouge, nouveau vert.
(function () {
  var EDITS = [
    // 1. H1
    { mode: 'clone', sel: 'h1', match: 'Permis A2', hlevel: 'H1',
      newText: 'Assurance moto permis A2' },

    // 2. Tout le contenu nouveau, inséré juste avant la FAQ
    { mode: 'insertBlock', anchorMatch: 'Questions fréquentes', position: 'before',
      content: [
        { h2: "Qu'est-ce que le permis moto A2 ?" },
        { p: "Le permis A2 est accessible dès 18 ans. Il autorise la conduite de motos dont la puissance ne dépasse pas 35 kW (soit 47,5 chevaux) et de trois-roues limités à 15 kW. Après deux ans de pratique et une formation complémentaire de 7 heures, vous pouvez obtenir le permis A, qui donne accès à toutes les motos sans restriction de puissance. Pour un jeune permis de moins de 25 ans, le permis A2 représente la première étape avant de prendre la route sur des véhicules plus puissants." },
        { h3: "Les conditions d'accès au permis A2" },
        { p: "Pour obtenir le permis A2 : avoir au moins 18 ans, réussir l'examen du code de la route, puis passer deux épreuves pratiques (plateau et circulation). La formation en moto-école comprend un minimum de 20 heures de conduite, dont 8 heures en plateau et 12 heures en circulation. Le coût total varie entre 700 et 1 200 euros selon les régions." },
        { h3: "Quelles motos peut-on conduire avec un permis A2 ?" },
        { p: "Le permis A2 autorise les motos dont la puissance ne dépasse pas 35 kW et dont le rapport puissance/poids reste inférieur à 0,2 kW par kilogramme. De nombreux modèles populaires sont compatibles :" },
        { ul: ["Yamaha MT-07", "Kawasaki Z650", "Honda CB500F", "KTM 390 Duke", "Suzuki SV 650"] },
        { p: "Certaines motos plus puissantes existent en version bridée A2, ce qui permet de les débrider une fois le permis A obtenu. Les deux-roues et trois-roues motorisés de moins de 35 kW sont également concernés par cette réglementation." },
        { h3: "Permis A2, permis A : quelle différence ?" },
        { p: "Le permis A2 limite la puissance du véhicule à 35 kW. Le permis A, obtenu après deux ans de pratique sous permis A2 et une formation de 7 heures, donne accès à toutes les motos sans restriction. Pour la majorité des trajets quotidiens, un deux-roues de moins de 35 kW suffit largement." },

        { h2: "Combien coûte une assurance moto avec un permis A2 ?" },
        { p: "Le prix d'une assurance moto A2 dépend du modèle de la moto, de la zone géographique, du niveau de couverture et de l'expérience du conducteur. Les jeunes conducteurs paient plus cher en raison de la surprime jeune conducteur. Le tarif peut varier du simple au triple selon les compagnies et les offres proposées. Pour un jeune motard, comparer les contrats est important : c'est le meilleur moyen de trouver la meilleure assurance moto A2 au tarif le moins cher." },
        { h3: "La surprime jeune conducteur" },
        { p: "Tout conducteur débutant se voit appliquer une surprime. La première année, cette majoration est de 100 % : la cotisation de base est doublée. La deuxième année sans sinistre responsable, elle passe à 50 %, puis à 25 % la troisième année. À partir de la quatrième année sans sinistre, la surprime disparaît et le système de bonus-malus continue de diminuer votre cotisation." },
        { h3: "Quel est le prix moyen d'une assurance moto A2 ?" },
        { p: "Pour un jeune conducteur de moins de 25 ans avec une moto A2 de moyenne cylindrée, comptez entre 400 et 900 euros par an pour une formule au tiers, et jusqu'à 1 200 euros ou plus en tous risques. Le prix assurance moto A2 diminue chaque année grâce au bonus-malus, à condition de ne pas déclarer de sinistre responsable." },
        { h3: "Comment réduire le prix de votre assurance moto A2" },
        { p: "Plusieurs leviers permettent de diminuer votre cotisation en permis A2 :" },
        { ul: ["choisir une formule au tiers pour une première moto d'occasion de faible valeur", "privilégier un stationnement en garage fermé plutôt qu'en extérieur", "suivre un stage de conduite post-permis", "faire valoir votre bonus automobile si vous possédez déjà une voiture", "utiliser un comparateur en ligne pour trouver les meilleures offres"] },

        { h2: "Nos formules d'assurance pour les permis A2" },
        { p: "AMV propose des formules adaptées aux détenteurs du permis A2. Chaque contrat assurance moto peut être complété par des options pour ajuster votre couverture selon votre budget et votre usage. Notre comparateur en ligne vous aide à trouver la meilleure formule en quelques clics." },
        { accordion: { level: 'H3', items: [
          { title: "Formule au tiers", content: [{ p: "L'assurance au tiers couvre la responsabilité civile obligatoire et la défense pénale. C'est le choix le plus fréquent pour un jeune conducteur avec une première moto d'occasion de faible valeur marchande. Son tarif est le moins cher de nos formules, ce qui répond au besoin des jeunes motards soucieux de leur budget." }] },
          { title: "Formule vol et incendie", content: [{ p: "En complément du tiers, cette formule ajoute la prise en charge en cas de vol, tentative de vol ou incendie. Si vous stationnez votre moto en extérieur ou en zone urbaine, cette couverture complémentaire est recommandée." }] },
          { title: "Formule tous risques", content: [{ p: "La formule tous risques couvre l'ensemble des dommages subis par votre moto, y compris en cas d'accident responsable. Elle est recommandée pour une moto neuve ou récente, ou un véhicule financé à crédit. Un conducteur novice, plus exposé aux risques de chute, bénéficie avec cette formule d'une indemnisation dans la grande majorité des situations." }] }
        ] } },

        { h2: "Les garanties essentielles pour un jeune motard" },
        { p: "Les accidents de moto provoquent des blessures corporelles plus fréquentes et plus graves que les accidents auto. Certaines garanties méritent une attention particulière pour un conducteur novice en permis A2. Nos conseils pour bien vous protéger dès le départ." },
        { h3: "Protection corporelle du conducteur" },
        { p: "Cette garantie couvre vos propres blessures en cas d'accident, même responsable : prise en charge des frais médicaux, indemnisation en cas d'invalidité, capital en cas de décès. Elle intervient dans les situations où l'assurance du tiers adverse ne vous couvre pas : accident seul, accident responsable." },
        { h3: "Équipement et accessoires moto" },
        { p: "Casque, gants, blouson, bottes : l'équipement d'un motard représente un budget de 500 à 1 500 euros. Cette garantie couvre le remplacement de vos équipements en cas de sinistre. Elle s'étend aux accessoires installés sur votre véhicule (top case, GPS, intercom)." },
        { h3: "Assistance 24h/24" },
        { p: "Le service d'assistance AMV intervient 24h/24 et 7j/7 en cas de panne, d'accident ou de vol :" },
        { ul: ["remorquage jusqu'au garage le plus proche", "véhicule de remplacement", "rapatriement à domicile"] },
        { p: "Ce service couvre la France métropolitaine et la plupart des pays d'Europe." },

        { h2: "Le détail des garanties de votre assurance moto A2" },
        { p: "Quelle que soit la formule choisie en permis A2, votre contrat AMV repose sur un socle de garanties précises. Dépliez chaque garantie pour voir le détail des montants et des prises en charge." },
        { accordion: { level: 'H3', items: [
          { title: "Responsabilité civile", content: [{ p: "La Compagnie vous garantit contre les conséquences pécuniaires de la responsabilité civile que vous pouvez encourir en raison des dommages matériels et corporels causés à autrui, y compris à votre passager. Dommages corporels illimités, dommages matériels limités à 100 000 000 € en cas d'accident et 1 300 000 € en cas d'incendie." }] },
          { title: "Assistance juridique", content: [{ p: "Défense pénale et recours suite à accident, à concurrence de 2 300 €. Protection juridique en cas de conflit relatif au véhicule assuré (achat, entretien, réparation, vente ou financement) et pour les conséquences d'une infraction aux règles de la circulation." }] },
          { title: "Casque, gants et gilet airbag", content: [{ p: "Remboursement, déduction faite de la vétusté, du casque à concurrence de 250 €, des gants à concurrence de 70 € et du gilet airbag à concurrence de 500 €, lorsqu'ils sont détériorés à la suite d'un événement couvert au titre des garanties Responsabilité civile, Dommages collision ou Dommages tous accidents." }] },
          { title: "Vol et incendie", content: [{ p: "Remboursement des dommages résultant d'un vol, d'un incendie ou d'une tentative de vol matérialisée par des traces d'effraction, à concurrence de la valeur de remplacement à dire d'expert au jour du sinistre, ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Dommages collision", content: [{ p: "Remboursement des dommages subis par votre moto lors d'une collision avec un tiers identifié, à concurrence de la valeur de remplacement à dire d'expert au jour du sinistre, ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Dommages tous accidents (Tous risques)", content: [{ p: "Remboursement des dommages subis par votre moto à la suite d'un accident, véhicule en mouvement ou à l'arrêt, avec ou sans collision, avec ou sans tiers identifié, à concurrence de la valeur de remplacement ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Individuelle pilote", content: [{ p: "Garantie personnelle du conducteur en cas d'accident corporel, même responsable. En cas de décès, indemnisation plafonnée à 5 000 € au titre des frais d'obsèques, 15 000 € pour le conjoint ou concubin et 5 000 € par enfant à charge dans la limite de 20 000 €. En cas d'invalidité permanente supérieure à 15 %, versement d'un capital proportionnel plafonné à 800 000 €. Frais médicaux, pharmaceutiques et d'hospitalisation pris en charge dans la limite de 1 000 €." }] },
          { title: "Assistance 0 km", content: [{ p: "Assistance sans franchise kilométrique, 24h/24 et 7j/7, en cas de panne, d'accident, de vol ou de tentative de vol, de crevaison, de perte ou de casse de clés, ou d'enlèvement par la fourrière. Dépannage, remorquage et rapatriement pris en charge pour vous, votre moto et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }, { p: "Valeur à neuf : prix d'achat d'un véhicule acquis neuf, pendant les 6 premiers mois, ou 18 mois au titre de l'Option plus, suivant la date d'achat." }] }
        ] } },

        { h2: "Pourquoi choisir AMV pour votre assurance moto A2 ?" },
        { p: "AMV est spécialiste de l'assurance deux-roues depuis plus de 50 ans. Plus de 300 conseillers basés à Bordeaux, dédiés à l'assurance moto, accompagnent les motards débutants comme les plus expérimentés." },
        { p: "Les avantages AMV pour un permis A2 :" },
        { ul: ["tarifs adaptés aux jeunes conducteurs", "formules évolutives qui suivent votre progression vers le permis A", "souscription 100 % en ligne, devis assurance en quelques minutes", "accompagnement personnalisé par des conseillers spécialistes"] },
        { p: "Avec une note de satisfaction de 4,7 sur 5, AMV assure plus de 750 000 contrats en cours. Que vous rouliez en sportive, en roadster ou en scooter, AMV dispose d'une formule adaptée à votre profil." }
      ] },

    // 3. FAQ : on remplace les questions correspondantes, on ajoute les nouvelles, on garde le reste
    { mode: 'faqEdit', faqMatch: 'Questions fréquentes',
      replace: [
        { existing: "prix d'une assurance moto", content: [
          { p: "Le prix assurance moto A2 varie selon le modèle de moto, la zone géographique et le niveau de couverture choisi. En permis A2, une surprime jeune conducteur s'applique les premières années : 100 % la première année, 50 % la deuxième, 25 % la troisième. Chez AMV, un devis assurance en ligne vous donne un tarif personnalisé en quelques minutes. Comparer les offres des différentes compagnies est le meilleur moyen de trouver le contrat le moins cher." }
        ] },
        { existing: "Quelle formule", content: [
          { p: "Pour une moto neuve ou récente, la formule tous risques protège contre les dommages en cas d'accident responsable. Pour une moto d'occasion de faible valeur, une formule au tiers ou vol et incendie suffit : c'est la solution la moins chère pour un jeune motard. Le choix dépend de la valeur de votre véhicule, de votre budget et de votre usage quotidien." }
        ] }
      ],
      add: [
        { q: "Quelles motos peut-on assurer avec un permis A2 ?", content: [
          { p: "Toutes les motos dont la puissance ne dépasse pas 35 kW (47,5 ch), y compris les versions bridées. AMV assure les modèles les plus courants : Yamaha MT-07, Kawasaki Z650, Honda CB500F, KTM 390 Duke, Suzuki SV 650. Les deux-roues et trois-roues de moins de 35 kW sont couverts par nos formules." }
        ] },
        { q: "Comment payer moins cher son assurance moto en permis A2 ?", content: [
          { p: "Plusieurs leviers permettent de réduire votre cotisation :" },
          { ul: ["choisir une formule au tiers pour une première moto de faible valeur", "opter pour un stationnement en garage fermé", "suivre un stage de conduite post-permis", "faire valoir un bonus auto existant auprès de votre assureur"] }
        ] },
        { q: "Est-il obligatoire d'assurer une moto même si elle ne roule pas ?", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même stationné dans un garage. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros." }
        ] }
      ] }
  ];

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function prependTag(node, label) { if (!label) return node; var b = document.createElement('span'); b.className = 'rl-hntag'; b.textContent = label; node.insertBefore(b, node.firstChild); return node; }
  function cloneAs(ref, txt) {
    var c = ref.cloneNode(true);
    ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-collapse', 'data-lazy-load'].forEach(function (a) { c.removeAttribute(a); });
    c.classList.remove('opacity-0', 'rl-del'); c.classList.add('rl-mark'); c.style.opacity = '1'; c.textContent = txt; return c;
  }
  function refHeading(tag) { return document.querySelector('section ' + tag) || document.querySelector(tag); }
  function refPara() { var c = [].slice.call(document.querySelectorAll('.collapse-part p, .umb-rte p, section p')); c.sort(function (a, b) { return b.textContent.trim().length - a.textContent.trim().length; }); return c[0] || null; }
  function refQuestion() { return document.querySelector('.collapse-block .flex.justify-between.items-center span'); }
  function refLI() { return document.querySelector('.collapse-part li, .umb-rte li, section li'); }
  function makePara(txt) { var r = refPara(); var p = r ? cloneAs(r, txt) : el('p', 'rl-mark', null); if (!r) p.textContent = txt; p.style.marginTop = '10px'; return p; }
  function makeUL(items) { var rli = refLI(); var ul = el('ul', 'rl-mark'); ul.style.listStyle = 'disc'; ul.style.marginLeft = '18px'; ul.style.marginTop = '6px'; items.forEach(function (t) { var li = rli ? cloneAs(rli, t) : el('li', null, t); li.style.display = 'list-item'; ul.appendChild(li); }); return ul; }
  function makeHeading(tag, txt) { var r = refHeading(tag); var node = r ? cloneAs(r, txt) : el(tag, 'rl-mark', txt); node.style.marginTop = '20px'; prependTag(node, tag.toUpperCase()); return node; }
  function makeQuestion(txt) { var r = refQuestion(); var node = r ? cloneAs(r, txt) : el('p', 'rl-mark', txt); node.style.display = 'block'; node.style.marginTop = '18px'; node.style.marginBottom = '4px'; prependTag(node, 'H3'); return node; }
  function makeAccPara(txt) { var r = refPara(); var p; if (r) { p = r.cloneNode(true); ['id', 'data-rl', 'data-collapse', 'data-lazy-load'].forEach(function (a) { p.removeAttribute(a); }); p.classList.remove('opacity-0', 'rl-mark', 'rl-del'); p.style.opacity = '1'; p.textContent = txt; } else { p = el('p', null, txt); } return p; }
  function makeAccUL(items) { var ul = el('ul'); items.forEach(function (t) { ul.appendChild(el('li', null, t)); }); return ul; }
  function makeAccordion(spec) {
    var box = el('div', 'rl-acc');
    (spec.items || []).forEach(function (item) {
      var it = el('div', 'rl-acc-item');
      var head = el('div', 'rl-acc-head');
      var title = el('span'); title.textContent = item.title; if (spec.level) prependTag(title, spec.level);
      head.appendChild(title); head.appendChild(el('span', 'rl-chev', '&#9662;'));
      var body = el('div', 'rl-acc-body');
      (item.content || []).forEach(function (c) { if (c.p) body.appendChild(makeAccPara(c.p)); else if (c.ul) body.appendChild(makeAccUL(c.ul)); });
      head.addEventListener('click', function () { it.classList.toggle('rl-open'); });
      it.appendChild(head); it.appendChild(body); box.appendChild(it);
    });
    return box;
  }
  function renderContent(items) { var n = []; items.forEach(function (it) { if (it.h2) n.push(makeHeading('h2', it.h2)); else if (it.h3) n.push(makeHeading('h3', it.h3)); else if (it.p) n.push(makePara(it.p)); else if (it.ul) n.push(makeUL(it.ul)); else if (it.accordion) n.push(makeAccordion(it.accordion)); }); return n; }
  function insertNodesBefore(nodes, ref, parent) { var f = document.createDocumentFragment(); nodes.forEach(function (n) { f.appendChild(n); }); parent.insertBefore(f, ref); }
  function findTarget(edit) { var re = new RegExp(edit.match, 'i'); var n = [].slice.call(document.querySelectorAll(edit.sel)).filter(function (x) { return !x.getAttribute('data-rl') && re.test(x.textContent.trim()); }); if (!n.length) return null; n.sort(function (a, b) { return a.textContent.trim().length - b.textContent.trim().length; }); return n[0]; }

  function applyEdit(edit) {
    if (edit.mode === 'insertBlock') {
      var re = new RegExp(edit.anchorMatch, 'i');
      var h = [].slice.call(document.querySelectorAll('h2')).find(function (x) { return re.test(x.textContent) && !x.getAttribute('data-rl-ins'); });
      if (!h) return false;
      h.setAttribute('data-rl-ins', '1');
      var wrapper = h.closest('.c-section-title') || h;
      insertNodesBefore(renderContent(edit.content), wrapper, wrapper.parentNode);
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
    // clone
    var target = findTarget(edit);
    if (!target) return false;
    target.setAttribute('data-rl', '1'); target.classList.add('rl-del');
    var clone = target.cloneNode(true);
    clone.removeAttribute('data-rl'); clone.removeAttribute('id'); clone.classList.remove('rl-del', 'opacity-0'); clone.style.opacity = '1'; clone.classList.add('rl-mark');
    clone.textContent = edit.newText; prependTag(clone, edit.hlevel);
    target.parentNode.insertBefore(clone, target.nextSibling);
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
