// Redline AMV (page assurance moto) : ancien contenu barré rouge, nouveau contenu vert.
// Liste d'édits, facile à compléter au fil des validations de Pierre.
(function () {
  var EDITS = [
    // 1. H1
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader', hlevel: 'H1',
      newText: "Assurance moto avec le leader de l'assurance deux-roues" },

    // 2. Section formules : libellé + intro
    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$', hlevel: 'H2',
      newText: "Nos 4 formules d'assurance moto",
      addParas: ["AMV, assureur spécialiste de l'assurance moto et scooter, propose jusqu'à 4 formules pour couvrir chaque motard selon son profil, son budget et ses besoins. Dès la première formule, vous bénéficiez de la responsabilité civile, de l'assistance juridique et de la prise en charge de vos équipements (casque, gants, gilet airbag) en cas de sinistre. La cotisation varie selon le niveau de protection, donc des garanties et options choisies. Vous pouvez comparer les formules et obtenir votre devis assurance moto en ligne en quelques clics, sans engagement."] },

    // 3. Formules : reprend l'existant, ajoute la version rédigée (vert) en tête de chaque accordéon
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base vous couvre en responsabilité civile (dommages matériels et corporels), en assistance juridique et en protection de vos équipements essentiels :" },
        { ul: ["casque jusqu'à 250 euros", "gants jusqu'à 70 euros", "gilet airbag jusqu'à 500 euros."] },
        { p: "C'est le tarif le plus accessible pour prendre la route en toute légalité. Cette formule peut être adaptée aux motos d'occasion ou récentes, de faible valeur.",
          links: [{ t: "motos anciennes", href: "https://www.amv.fr/legende/vehicule-collection/assurance-voiture-moto-collection.aspx" }] }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément du socle de la première formule, cette couverture prend en charge les dommages en cas de vol, de tentative de vol ou d'incendie, avec un remboursement à la valeur de remplacement à dire d'expert ou à la valeur à neuf les 6 premiers mois, déduction faite de la franchise. Idéale si vous stationnez votre véhicule en extérieur ou en zone urbaine." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "Cette formule assure la prise en charge des dommages subis par votre moto lors d'une collision avec un tiers identifié, remboursés à la valeur de remplacement à dire d'expert ou à la valeur à neuf les 6 premiers mois, déduction faite de la franchise. Adaptée aux motards qui circulent quotidiennement, notamment en ville, où le risque de collision est plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "La formule Tous risques offre une couverture complète des dommages subis par votre moto, avec ou sans tiers identifié, y compris en cas de sinistre responsable ou de vandalisme, déduction faite de la franchise. Recommandée pour les motos neuves ou récentes et les véhicules financés à crédit." }
      ] },

    // 4. Section options : libellé + intro
    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$', hlevel: 'H2',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options à la carte pour renforcer votre protection et personnaliser votre assurance moto selon votre pratique, votre véhicule et votre budget. Ces options ajustent vos garanties au plus près de vos besoins, que vous rouliez en moto ou en scooter au quotidien."] },

    // 5. Options : reprend l'existant, ajoute la version rédigée (vert) en tête de chaque accordéon
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "L'option Individuelle Pilote permet le versement d'un capital à l'assuré en cas de déficit fonctionnel permanent ou à ses ayants droit en cas de décès, consécutifs à un accident, même responsable. C'est une garantie dédiée au pilote" }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "L'assistance 0 km intervient sans franchise kilométrique, 24h/24 et 7j/7, en cas de :" },
        { ul: ["panne, d'accident,", "vol ou de tentative de vol", "crevaison", "perte ou de casse de clés", "enlèvement par la fourrière."] },
        { p: "Dépannage, remorquage et rapatriement pris en charge pour vous, votre véhicule et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "L'Option Plus étend la couverture aux accessoires hors-série et à l'équipement vestimentaire moto de protection, à concurrence de 5 000 euros, et prolonge la garantie valeur à neuf jusqu'à 18 mois. Particulièrement intéressante pour les motos équipées d'accessoires (top case, sacoches, échappement…) : votre assurance moto couvre alors l'ensemble de votre équipement." }
      ] },

    // 6a. "Pourquoi choisir AMV" -> avant la section avis "AMV c'est 1 million d'assurés"
    { mode: 'insertSection', beforeSel: 'section.c-avis-section',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre moto ?" },
        { p: "AMV, leader et assureur spécialiste de l'assurance moto scooter en France depuis plus de 50 ans, compte plus d'1 million d'assurés. Avec une note de satisfaction de 4,7/5 selon Avis Vérifiés, tiers de confiance, AMV est largement recommandé par ses assurés. Que vous rouliez en roadster, en routière, en trail, ou même en sportive, AMV propose un contrat assurance moto adapté à vos besoins. Parmi les avantages : des formules proposées exclusivement pour les deux-roues, un devis assurance moto en ligne sans engagement et des garanties conçues par des spécialistes des deux-roues.",
        links: [{ t: "en scooter", href: "https://www.amv.fr/assurance/scooter/" }, { t: "en quad", href: "https://www.amv.fr/assurance/quad/" }] }
      ] },

    // 6b. "Plus de 50 ans d'expertise" -> dans la section "AMV assure toutes les marques de moto"
    { mode: 'appendInTitle', anchorMatch: 'AMV assure toutes les marques de moto',
      content: [
        { h3: "Plus de 50 ans d'expertise deux-roues" },
        { p: "AMV a été fondée en 1974, par un passionné de moto, pour les motards. Son expertise deux-roues lui donne un avantage et des connaissances, par rapport aux assureurs généralistes, au service des passionnés moto : vol de casque, équipement endommagé lors d'un accident, panne en pleine balade. AMV connaît les spécificités de chaque marque et de chaque modèle, de la moto sportive à la routière, du scooter urbain au trail d'aventure, du quad au trois-roues. Cette connaissance des deux-roues permet une prise en charge adaptée en cas de sinistre.",
          links: [{ t: "chaque marque", href: "https://www.amv.fr/assurance-moto/assurance-moto-par-constructeur/" }] }
      ] },

    // 6c. "Un accompagnement de motard à motard" -> dans la section "Un contrat spécial moto pensé pour vous"
    { mode: 'appendInTitle', anchorMatch: 'Un contrat spécial moto pensé pour vous',
      content: [
        { h3: "Un accompagnement de motard à motard" },
        { p: "Plus de 350 conseillers basés à Bordeaux vous apportent des conseils personnalisés par téléphone, par e-mail ou via votre Espace Client. En cas de sinistre, un interlocuteur dédié suit votre dossier d'indemnisation. Vous gérez votre contrat moto en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé : modification des garanties, paiement de votre prime d'assurance, et declaration de sinistre et suivi de votre dossier en quelques clics." }
      ] },

    // 6d. "Comment obtenir votre devis" -> juste avant la FAQ
    { mode: 'faqCards', faqMatch: 'Des questions sur votre assurance',
      content: [
        { h2: "Comment obtenir votre devis d'assurance moto ?" },
        { p: "Obtenir votre devis d'assurance moto en ligne se fait en quelques étapes simples. Renseignez les informations sur votre véhicule (modèle, puissance, dates de mise en circulation et d'achat) et votre profil (expérience, bonus-malus, lieu de stationnement habituel) via le formulaire pour obtenir votre tarif en quelques minutes. Si le prix vous convient, vous pouvez souscrire en quelques clics et recevrez votre attestation d'assurance moto par mail. Que vous cherchiez l'assurance moto la moins chère ou la couverture la plus complète, nos conseillers vous accompagnent aussi par téléphone à chaque étape.",
          links: [{ t: "devis assurance moto en ligne", href: "https://www.amv.fr/moto/assurance-moto/assurance-moto.aspx" }] }
      ] },

    // 7. FAQ : on ne touche QUE les questions remplacées (les autres restent intactes)
    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: '^Quelle assurance moto choisir', content: [
          { p: "Le choix de votre assurance moto dépend, entre autres, de la valeur de votre véhicule, de la fréquence d'utilisation et de votre budget. Une formule Responsabilité civile pourrait suffire pour une moto d'occasion ou récente de faible valeur. Pour une moto neuve ou financée à crédit, la formule Tous risques avec dommages tous accidents offre la meilleure protection. Si vous stationnez en extérieur en zone urbaine, la formule Vol / Incendie mérite d'être envisagée. Comparez les garanties, les franchises et les plafonds avant de vous décider." }
        ] },
        { existing: "prix d'une assurance moto", newQ: "Combien coûte une assurance moto ?", content: [
          { p: "Le prix d'une assurance moto varie fortement d'un profil à l'autre. Il dépend de plusieurs critères :" },
          { ul: ["le type de moto et sa cylindrée", "l'âge et l'expérience du conducteur", "le lieu de stationnement", "le niveau de couverture choisi."] },
          { p: "Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule, le casque (jusqu'à 250 euros), les gants (jusqu'à 70 euros) et le gilet airbag (jusqu'à 500 euros) sont pris en charge en cas de sinistre. Avec l'Option Plus, la couverture est étendue à l'ensemble de l'équipement vestimentaire moto et aux accessoires hors-série montés sur votre moto, jusqu'à 5 000 euros." }
        ] },
        { existing: 'Comment déclarer un sinistre moto', content: [
          { p: "La déclaration se fait directement depuis votre espace client Mon Espace AMV sur amv.fr, 24h/24. Un gestionnaire dédié prend ensuite en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation, en cas d'accident comme en cas de vol." }
        ] }
      ],
      add: [
        { q: "Est-il obligatoire d'assurer une moto qui ne roule pas ?", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même s'il est stationné dans un garage et ne circule pas. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à toutes les motos, scooters et autres deux-roues motorisés, quelle que soit leur puissance ou leur cylindrée." }
        ] },
        { q: "Quels documents faut-il pour assurer une moto ?", content: [
          { p: "Chez AMV, la souscription est simplifiée : dans la grande majorité des cas, seul votre relevé d'informations (délivré par votre précédent assureur) est nécessaire, là où d'autres assureurs réclament davantage de pièces, telles que le permis de conduire, la carte grise du véhicule et un justificatif de domicile. Toutes les démarches se font en ligne, avec une réponse immédiate." }
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
      ["Des questions sur votre assurance", "Questions fréquentes sur l'assurance moto"],
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
