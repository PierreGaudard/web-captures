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
        { p: "Le permis A2 est accessible dès 18 ans. Il autorise la conduite de motos dont la puissance ne dépasse pas 35 kW (soit 47,5 chevaux) et de trois-roues limités à 15 kW. Après deux ans de pratique et une formation complémentaire de 7 heures, vous pouvez obtenir le permis A, qui donne accès à toutes les motos sans restriction de puissance. Le permis A2 s'adresse à tous les profils, quel que soit l'âge : il représente la première étape avant de prendre la route sur des véhicules plus puissants.",
          links: [{ t: "le permis A", href: "https://www.amv.fr/assurance-moto/assurance-moto-permis-a/" }] },
        { h3: "Les conditions d'accès au permis A2" },
        { p: "Pour obtenir le permis A2 : avoir au moins 18 ans, réussir l'examen du code de la route, puis passer deux épreuves pratiques (plateau et circulation). La formation en moto-école comprend un minimum de 20 heures de conduite, dont 8 heures en plateau et 12 heures en circulation. Le coût total varie selon les régions et les moto-écoles." },
        { h3: "Quelles motos peut-on conduire avec un permis A2 ?" },
        { p: "Le permis A2 autorise les motos dont la puissance ne dépasse pas 35 kW et dont le rapport puissance/poids reste inférieur à 0,2 kW par kilogramme. De nombreux modèles populaires sont compatibles :" },
        { ul: [
          { t: "Yamaha MT-07", href: "https://www.amv.fr/assurance-moto/assurance-moto-yamaha/" },
          { t: "Kawasaki Z650", href: "https://www.amv.fr/assurance-moto/assurance-moto-kawasaki/" },
          { t: "Honda CB500F", href: "https://www.amv.fr/assurance-moto/assurance-moto-honda/" },
          { t: "KTM 390 Duke", href: "https://www.amv.fr/assurance-moto/assurance-moto-ktm/" },
          { t: "Suzuki SV 650", href: "https://www.amv.fr/assurance-moto/assurance-moto-suzuki/" }
        ] },
        { p: "Certaines motos plus puissantes existent en version bridée A2, ce qui permet de les débrider une fois le permis A obtenu. Les trois-roues motorisés sont, quant à eux, limités à 15 kW en permis A2." },
        { h3: "Permis A2, permis A : quelle différence ?" },
        { p: "Le permis A2 limite la puissance du deux-roues à 35 kW. Le permis A, obtenu après deux ans de pratique sous permis A2 et une formation de 7 heures, donne accès à toutes les motos sans restriction. Pour la majorité des trajets quotidiens, un deux-roues de moins de 35 kW peut suffire." },

        { h2: "Combien coûte une assurance moto avec un permis A2 ?" },
        { p: "Le prix d'une assurance moto A2 dépend du modèle de la moto, de la zone géographique, du niveau de couverture et de l'expérience du conducteur. Les jeunes conducteurs paient plus cher en raison de la surprime jeune conducteur. Le tarif peut varier du simple au triple selon les compagnies d'assurance et les offres proposées. Pour un jeune motard, comparer les contrats est important : c'est le meilleur moyen de trouver la meilleure assurance moto A2 au tarif le moins cher." },
        { h3: "La surprime jeune conducteur" },
        { p: "Tout conducteur débutant se voit appliquer une surprime. La première année, cette majoration peut atteindre jusqu'à 100 %. La deuxième année, en l'absence de sinistre responsable, elle est limitée à 50 %, puis à 25 % la troisième année. Après trois ans sans sinistre, la surprime disparaît. Le coefficient bonus-malus continue ensuite de baisser en l'absence de sinistre responsable, même si la cotisation finale dépend aussi de l'évolution tarifaire décidée par l'assureur." },
        { h3: "Quel est le prix moyen d'une assurance moto A2 ?" },
        { p: "Le prix d'une assurance moto A2 dépend du profil du conducteur, du modèle de la moto et de la formule choisie. La formule au tiers reste la moins chère, la formule tous risques la plus protectrice. Le prix diminue chaque année grâce au bonus-malus, à condition de ne pas déclarer de sinistre responsable. Seul un devis personnalisé en ligne donne le tarif exact pour votre situation." },
        { h3: "Comment réduire le prix de votre assurance moto A2" },
        { p: "Plusieurs leviers permettent de diminuer votre cotisation en permis A2 :" },
        { ul: ["choisir une formule au tiers pour une première moto d'occasion de faible valeur", { t: "faire valoir votre bonus automobile si vous possédez déjà une voiture", href: "https://www.amv.fr/auto/assurance-auto/assurance-auto-en-ligne.aspx" }] },

        { h2: "Nos formules d'assurance pour les permis A2" },
        { p: "AMV propose des formules adaptées aux détenteurs du permis A2. Chaque contrat assurance moto peut être complété par des options pour ajuster votre couverture selon votre budget et votre usage. Un devis en ligne vous aide à trouver la formule adaptée en quelques clics.",
          links: [{ t: "contrat assurance moto", href: "https://www.amv.fr/assurance/moto/" }] },
        { accordion: { level: 'H3', items: [
          { title: "Formule au tiers", content: [{ p: "L'assurance au tiers couvre la responsabilité civile obligatoire et la défense pénale. C'est le choix le plus fréquent pour un jeune conducteur avec une première moto d'occasion de faible valeur marchande. Son tarif est le moins cher de nos formules, ce qui répond au besoin des jeunes motards soucieux de leur budget." }] },
          { title: "Formule vol et incendie", content: [{ p: "En complément du tiers, cette formule ajoute la prise en charge en cas de vol, tentative de vol ou incendie. Si vous stationnez votre moto en extérieur ou en zone urbaine, cette couverture complémentaire est recommandée." }] },
          { title: "Formule tous risques", content: [{ p: "La formule tous risques couvre l'ensemble des dommages subis par votre moto, y compris en cas d'accident responsable. Elle est recommandée pour une moto neuve ou récente, ou un véhicule financé à crédit. Un conducteur novice, plus exposé aux risques de chute, bénéficie avec cette formule d'une indemnisation dans la grande majorité des situations." }] }
        ] } },

        { h2: "Les garanties essentielles pour un jeune motard" },
        { p: "Les accidents de moto provoquent des blessures corporelles plus fréquentes et plus graves que les accidents auto. Certaines garanties méritent une attention particulière pour un conducteur novice en permis A2. Nos conseils pour bien vous protéger dès le départ." },
        { h3: "Protection corporelle du conducteur" },
        { p: "Cette garantie indemnise le conducteur en cas d'accident corporel, même responsable : capital en cas de décès, indemnisation en cas d'invalidité permanente. Elle intervient dans les situations où l'assurance du tiers adverse ne vous couvre pas : accident seul, accident responsable." },
        { h3: "Équipement et accessoires moto" },
        { p: "Casque, gants, blouson, bottes : l'équipement d'un motard représente un budget conséquent. Cette garantie couvre le remplacement de vos équipements en cas de sinistre, à hauteur de 5 000 €. Elle s'étend aux accessoires installés sur votre véhicule (top case, sacoches, échappement…)." },
        { h3: "Assistance 24h/24" },
        { p: "Le service d'assistance AMV intervient 24h/24 et 7j/7 en cas de panne, d'accident ou de vol :" },
        { ul: ["remorquage jusqu'à la concession la plus proche", "rapatriement à domicile"] },
        { p: "Ce service couvre la France métropolitaine et la plupart des pays d'Europe." },

        { h2: "Le détail des garanties de votre assurance moto A2" },
        { p: "Quelle que soit la formule choisie en permis A2, votre contrat AMV repose sur un socle de garanties précises. Dépliez chaque garantie pour voir le détail des montants et des prises en charge." },
        { accordion: { level: 'H3', items: [
          { title: "Responsabilité civile", content: [{ p: "Prise en charge des conséquences pécuniaires de la responsabilité civile que vous pouvez encourir en raison des dommages matériels et corporels causés à autrui, y compris à votre passager. Dommages corporels illimités, dommages matériels jusqu'à 100 000 000 € en cas d'accident et 1 300 000 € en cas d'incendie." }] },
          { title: "Assistance juridique", content: [{ p: "Défense pénale et recours suite à accident, à concurrence de 2 300 €. Protection juridique en cas de conflit relatif au véhicule assuré (achat, entretien, réparation, vente ou financement) et pour les conséquences d'une infraction aux règles de la circulation." }] },
          { title: "Casque, gants et gilet airbag", content: [{ p: "Remboursement, déduction faite de la vétusté, du casque à concurrence de 250 €, des gants à concurrence de 70 € et du gilet airbag à concurrence de 500 €, lorsqu'ils sont détériorés à la suite d'un événement couvert au titre des garanties Responsabilité civile, Dommages collision ou Dommages tous accidents." }] },
          { title: "Vol et incendie", content: [{ p: "Remboursement des dommages résultant d'un vol, d'un incendie ou d'une tentative de vol matérialisée par des traces d'effraction, à concurrence de la valeur de remplacement à dire d'expert au jour du sinistre, ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Dommages collision", content: [{ p: "Remboursement des dommages subis par votre moto lors d'une collision avec un tiers identifié, à concurrence de la valeur de remplacement à dire d'expert au jour du sinistre, ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Dommages tous accidents (Tous risques)", content: [{ p: "Remboursement des dommages subis par votre moto à la suite d'un accident, véhicule en mouvement ou à l'arrêt, avec ou sans collision, avec ou sans tiers identifié, à concurrence de la valeur de remplacement ou de la valeur à neuf, déduction faite d'une franchise variable selon le véhicule." }] },
          { title: "Individuelle pilote", content: [{ p: "Garantie personnelle du conducteur en cas d'accident corporel, même responsable. En cas de décès, indemnisation plafonnée à 5 000 € au titre des frais d'obsèques, 15 000 € pour le conjoint ou concubin et 5 000 € par enfant à charge dans la limite de 20 000 €. En cas d'invalidité permanente supérieure à 15 %, versement d'un capital proportionnel plafonné à 800 000 €." }] },
          { title: "Assistance 0 km", content: [{ p: "Assistance sans franchise kilométrique, 24h/24 et 7j/7, en cas de panne, d'accident, de vol ou de tentative de vol, de crevaison, de perte ou de casse de clés, ou d'enlèvement par la fourrière. Dépannage, remorquage et rapatriement pris en charge pour vous, votre moto et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }, { p: "Valeur à neuf : prix d'achat d'un véhicule acquis neuf, pendant les 6 premiers mois, ou 18 mois au titre de l'Option plus, suivant la date d'achat." }] }
        ] } },

        { h2: "Pourquoi choisir AMV pour votre assurance moto A2 ?" },
        { p: "AMV est spécialiste de l'assurance deux-roues depuis plus de 50 ans. Plus de 350 conseillers basés à Bordeaux accompagnent les motards débutants comme les plus expérimentés.",
          links: [{ t: "AMV", href: "https://www.amv.fr/" }] },
        { p: "Les avantages AMV pour un permis A2 :" },
        { ul: ["tarifs adaptés aux jeunes conducteurs", "formules évolutives qui suivent votre progression vers le permis A", "souscription 100 % en ligne, devis assurance en quelques minutes", "accompagnement personnalisé par des conseillers spécialistes"] },
        { p: "AMV a plus d'1 million d'assurés et une note de satisfaction de 4,7 sur 5. Que vous rouliez en sportive, en roadster ou en scooter, AMV dispose d'une formule adaptée à votre profil." }
      ] },

    // 3. FAQ : on remplace les questions correspondantes, on ajoute les nouvelles, on garde le reste
    { mode: 'faqEdit', faqMatch: 'Questions fréquentes',
      replace: [
        { existing: "prix d'une assurance moto", content: [
          { p: "Le prix assurance moto A2 varie selon le modèle de moto, la zone géographique et le niveau de couverture choisi. En permis A2, une surprime jeune conducteur s'applique les premières années : elle peut atteindre jusqu'à 100 % la première année, puis est limitée à 50 % la deuxième année et à 25 % la troisième, en l'absence de sinistre responsable, avant de disparaître. Chez AMV, un devis assurance en ligne vous donne un tarif personnalisé en quelques minutes.",
          links: [{ t: "devis assurance en ligne", href: "https://www.amv.fr/moto/assurance-moto/devis-assurance-moto.aspx" }] }
        ] },
        { existing: "Quelle formule", content: [
          { p: "Pour une moto neuve ou récente, la formule tous risques protège contre les dommages en cas d'accident responsable. Pour une moto d'occasion de faible valeur, une formule au tiers ou vol et incendie suffit : c'est la solution la moins chère pour un jeune motard. Le choix dépend de la valeur de votre véhicule, de votre budget et de votre usage quotidien." }
        ] }
      ],
      add: [
        { q: "Quelles motos peut-on assurer avec un permis A2 ?", content: [
          { p: "Toutes les motos dont la puissance ne dépasse pas 35 kW (47,5 ch), y compris les versions bridées. AMV assure les modèles les plus courants : Yamaha MT-07, Kawasaki Z650, Honda CB500F, KTM 390 Duke, Suzuki SV 650. Les trois-roues motorisés, limités à 15 kW en permis A2, sont également couverts par nos formules." }
        ] },
        { q: "Comment payer moins cher son assurance moto en permis A2 ?", content: [
          { p: "Plusieurs leviers permettent de réduire votre cotisation :" },
          { ul: ["choisir une formule au tiers pour une première moto de faible valeur", "faire valoir un bonus auto existant auprès de votre assureur"] }
        ] },
        { q: "Est-il obligatoire d'assurer une moto même si elle ne roule pas ?", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même stationné dans un garage. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros." }
        ] }
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
    EDITS.forEach(function (e) { if (!e._done) { e._done = applyEdit(e); if (!e._done) allDone = false; } });
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
