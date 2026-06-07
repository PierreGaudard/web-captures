// Redline AMV (page assurance moto) : ancien contenu barré rouge, nouveau contenu vert.
// Liste d'édits, facile à compléter au fil des validations de Pierre.
(function () {
  var EDITS = [
    // 1. H1
    { mode: 'clone', sel: 'h1', match: 'Bienvenue chez le leader',
      newText: 'Assurance moto avec le leader du deux-roues' },

    // 2. Section formules : libellé + intro
    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des formules$',
      newText: "Nos 4 formules d'assurance moto",
      addParas: ["AMV, assureur spécialiste de l'assurance moto et scooter, propose 4 formules pour couvrir chaque motard selon son profil, son budget et ses besoins. Dès la première formule, vous bénéficiez de la responsabilité civile, de l'assistance juridique et de la prise en charge de vos équipements (casque, gants, gilet airbag) en cas de sinistre. La cotisation varie selon le niveau de protection et les garanties choisies. Vous pouvez comparer les formules et obtenir votre devis assurance moto en ligne en quelques clics, sans engagement."] },

    // 3. Formules : reprend l'existant, ajoute la version rédigée (vert) en tête de chaque accordéon
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 1',
      content: [
        { p: "La formule de base vous couvre en responsabilité civile (dommages corporels illimités, dommages matériels jusqu'à 100 millions d'euros), en assistance juridique et en protection de vos équipements essentiels :" },
        { ul: ["casque couvert jusqu'à 250 euros", "gants couverts jusqu'à 70 euros", "gilet airbag couvert jusqu'à 500 euros"] },
        { p: "Le choix le moins cher pour prendre la route en toute légalité. Cette formule est adaptée aux motos anciennes ou de faible valeur marchande, pour lesquelles une couverture étendue ne serait pas rentable." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 2',
      content: [
        { p: "En complément du socle de la première formule, cette couverture prend en charge les dommages en cas de vol, tentative de vol ou incendie. Remboursement à hauteur de la valeur de remplacement à dire d'expert, ou à la valeur à neuf pendant les 6 premiers mois suivant l'achat. Idéale si vous stationnez votre véhicule en extérieur ou en zone urbaine." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 3',
      content: [
        { p: "Prise en charge des dommages subis par votre moto lors d'une collision avec un tiers identifié. Remboursement à la valeur de remplacement ou à la valeur à neuf, déduction faite de la franchise. Adaptée aux motards qui circulent quotidiennement, notamment en ville, où le risque de collision est statistiquement plus élevé." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Formule 4',
      content: [
        { p: "Couverture complète de l'ensemble des dommages subis par votre moto, avec ou sans tiers identifié, y compris en cas de sinistre responsable ou de vandalisme. Recommandée pour les motos neuves ou récentes et les véhicules financés à crédit. Si vous venez d'acquérir une nouvelle moto, cette formule vous garantit une indemnisation dans la grande majorité des situations, quel que soit le modèle ou la puissance." }
      ] },

    // 4. Section options : libellé + intro
    { mode: 'clone', sel: '.text-orange-normal', match: '^Détails des options$',
      newText: 'Les options pour personnaliser votre contrat',
      addParas: ["Chaque formule peut être complétée par des options à la carte pour renforcer votre protection selon votre pratique et votre véhicule. Ces options ajustent vos garanties au plus près de vos besoins, que vous rouliez en moto, en scooter ou en deux-roues au quotidien."] },

    // 5. Options : reprend l'existant, ajoute la version rédigée (vert) en tête de chaque accordéon
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Individuelle pilote',
      content: [
        { p: "Couverture de vos propres blessures en cas d'accident, même responsable. Versement d'un capital en cas de décès ou d'invalidité permanente, prise en charge des frais médicaux et d'hospitalisation. Cette protection intervient dans les situations où l'assurance du tiers adverse ne vous couvre pas, notamment lors d'un accident seul ou responsable." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Assistance',
      content: [
        { p: "Intervention sans franchise kilométrique, 24h/24 et 7j/7, en cas de :" },
        { ul: ["panne ou accident", "vol ou tentative de vol", "crevaison", "perte, vol ou casse de clés", "enlèvement par la fourrière"] },
        { p: "Dépannage, remorquage et rapatriement pris en charge pour vous, votre véhicule et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." }
      ] },
    { mode: 'prependInside', scope: 'Consulter le détail', blockMatch: 'Option plus',
      content: [
        { p: "Extension de la couverture aux accessoires hors-série montés sur votre moto et à l'équipement vestimentaire de protection, à concurrence de 5 000 euros. Prolongation de la garantie valeur à neuf jusqu'à 18 mois après l'achat, au lieu de 6 mois. Particulièrement intéressante pour les motos équipées d'accessoires (top case, GPS, intercom, sacoches)." }
      ] },

    // 6a. "Pourquoi choisir AMV" -> avant la section avis "AMV c'est 1 million d'assurés"
    { mode: 'insertBlock', anchorMatch: 'million d', position: 'before',
      content: [
        { h2: "Pourquoi choisir AMV pour assurer votre moto ?" },
        { p: "AMV, leader et assureur spécialiste de l'assurance moto scooter en France, assure plus d'1 million de motards et fait référence pour les deux-roues. Avec une note de satisfaction de 4,7/5 selon les avis clients vérifiés, AMV inspire confiance et est recommandé par ses assurés. Que vous rouliez en sportive, en routière, en trail, en scooter ou même en quad, AMV propose un contrat assurance moto adapté à vos besoins. Parmi les avantages : des formules proposées exclusivement pour les deux-roues, un devis assurance moto en ligne sans engagement, des tarifs à comparer librement et une sécurité renforcée par des garanties conçues par des spécialistes." }
      ] },

    // 6b. "Plus de 50 ans d'expertise" -> dans la section "AMV assure toutes les marques de moto"
    { mode: 'insertBlock', anchorMatch: 'AMV assure toutes les marques de moto', position: 'appendSection',
      content: [
        { h3: "Plus de 50 ans d'expertise deux-roues" },
        { p: "AMV a été fondé par des passionnés de moto, pour des motards. Cette expertise deux-roues couvre les situations que les assureurs généralistes ignorent : vol de casque, équipement endommagé lors d'un accident, panne en pleine balade. AMV connaît les spécificités de chaque type de véhicule et de chaque modèle, de la moto sportive à la routière, du scooter urbain au trail d'aventure, du quad au trois-roues. AMV assure aussi les professionnels du deux-roues : coursiers, livreurs et flottes d'entreprise. Cette connaissance fine des risques permet une prise en charge rapide en cas de sinistre." }
      ] },

    // 6c. "Un accompagnement de motard à motard" -> dans la section "Un contrat spécial moto pensé pour vous"
    { mode: 'insertBlock', anchorMatch: 'Un contrat spécial moto pensé pour vous', position: 'appendSection',
      content: [
        { h3: "Un accompagnement de motard à motard" },
        { p: "Plus de 300 conseillers basés à Bordeaux, tous formés aux spécificités de l'assurance moto scooter, vous apportent des conseils personnalisés par téléphone ou en ligne. En cas de sinistre, un interlocuteur dédié suit votre dossier et accélère votre indemnisation. Vous gérez votre contrat moto en toute autonomie depuis votre espace client Mon Espace AMV, simple et sécurisé : modification des garanties, suivi des remboursements et déclaration en quelques clics." }
      ] },

    // 6d. "Comment obtenir votre devis" -> juste avant la FAQ
    { mode: 'insertBlock', anchorMatch: 'Des questions sur votre assurance', position: 'before',
      content: [
        { h2: "Comment obtenir votre devis assurance moto ?" },
        { p: "Obtenir votre devis assurance moto en ligne se fait en quelques étapes simples. Renseignez les informations sur votre véhicule (modèle, puissance, année) et votre profil (expérience, bonus-malus, région) via le formulaire pour recevoir votre tarif en quelques minutes. Si le prix vous convient, vous pouvez souscrire en quelques clics et recevez votre carte verte par mail. Sans engagement, vous gardez la liberté de comparer plusieurs devis avant de choisir. Que vous cherchiez l'assurance moto la moins chère ou la couverture la plus complète, nos conseillers vous accompagnent aussi par téléphone à chaque étape." }
      ] },

    // 7. FAQ : on ne touche QUE les questions remplacées (les autres restent intactes)
    { mode: 'faqEdit', faqMatch: 'Des questions sur votre assurance',
      replace: [
        { existing: '^Quelle assurance moto choisir', content: [
          { p: "Le choix dépend de la valeur de votre véhicule, de votre usage et de votre budget. Une formule Responsabilité civile suffit pour une moto ancienne ou de faible valeur. Pour une moto récente ou financée à crédit, la formule Tous risques avec dommages tous accidents offre la meilleure protection. Si vous stationnez en extérieur en zone urbaine, la formule Vol / Incendie mérite d'être envisagée. Comparez les garanties, les franchises et les plafonds proposés avant de vous décider." }
        ] },
        { existing: "prix d'une assurance moto", content: [
          { p: "Le prix varie fortement d'un profil à l'autre. Il dépend de plusieurs critères :" },
          { ul: ["le type de moto, sa cylindrée et sa puissance", "l'âge et l'expérience du conducteur", "la zone géographique et le lieu de stationnement", "le niveau de couverture choisi"] },
          { p: "Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics." }
        ] },
        { existing: 'Quels équipements sont couverts', content: [
          { p: "Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option plus, couverture étendue à l'ensemble de l'équipement vestimentaire et aux accessoires hors-série montés sur votre moto, jusqu'à 5 000 euros." }
        ] },
        { existing: 'Comment déclarer un sinistre moto', content: [
          { p: "Déclaration directement depuis Mon Espace AMV sur amv.fr, 24h/24. Un gestionnaire dédié prend en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation." }
        ] }
      ],
      add: [
        { q: "Est-il obligatoire d'assurer une moto qui ne roule pas ?", content: [
          { p: "Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même s'il est stationné dans un garage et ne circule pas. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à toutes les motos, scooters et autres deux-roues motorisés, quelle que soit leur puissance ou leur cylindrée." }
        ] },
        { q: "Quels documents faut-il pour assurer une moto ?", content: [
          { p: "Pour souscrire une assurance moto :" },
          { ul: ["votre permis de conduire", "la carte grise du véhicule", "un relevé d'informations de votre précédent assureur", "un justificatif de domicile (dans certains cas)"] },
          { p: "Toutes les démarches se font en ligne, réponse immédiate." }
        ] }
      ] }
  ];

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  // Clone un élément de référence pour hériter de sa typo, puis remplace le texte.
  function cloneAs(ref, txt) {
    var c = ref.cloneNode(true);
    ['id', 'data-rl', 'data-rl-app', 'data-rl-edit', 'data-collapse', 'data-lazy-load'].forEach(function (a) { c.removeAttribute(a); });
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
  function makeUL(items) {
    var rli = refLI();
    var ul = el('ul', 'rl-mark');
    ul.style.listStyle = 'disc'; ul.style.marginLeft = '18px'; ul.style.marginTop = '6px';
    items.forEach(function (txt) {
      var li = rli ? cloneAs(rli, txt) : el('li', null, txt);
      li.style.display = 'list-item';
      ul.appendChild(li);
    });
    return ul;
  }
  function makeHeading(tag, txt) {
    var r = refHeading(tag);
    var node = r ? cloneAs(r, txt) : el(tag, 'rl-mark', txt);
    node.style.marginTop = '20px';
    return node;
  }
  function makeQuestion(txt) {
    var r = refQuestion();
    var node = r ? cloneAs(r, txt) : el('p', 'rl-mark', txt);
    node.style.display = 'block';
    node.style.marginTop = '18px';
    node.style.marginBottom = '4px';
    return node;
  }
  function renderContent(items) {
    var nodes = [];
    items.forEach(function (it) {
      if (it.h2) nodes.push(makeHeading('h2', it.h2));
      else if (it.h3) nodes.push(makeHeading('h3', it.h3));
      else if (it.p) nodes.push(makePara(it.p));
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

  function applyEdit(edit) {
    if (edit.mode === 'prependInside') {
      var blockP = findCollapseScoped(edit.blockMatch, 'data-rl-prep', edit.scope);
      if (!blockP) return false;
      blockP.setAttribute('data-rl-prep', '1');
      var partP = blockP.querySelector('.collapse-part') || blockP;
      insertNodesBefore(renderContent(edit.content), partP.firstChild, partP);
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

      // Ajoute les nouvelles questions (vert) à la fin de la FAQ
      if (edit.add && edit.add.length && blocks.length) {
        var nodes = [];
        edit.add.forEach(function (it) {
          nodes.push(makeQuestion(it.q));
          renderContent(it.content).forEach(function (n) { nodes.push(n); });
        });
        var lastB = blocks[blocks.length - 1];
        insertNodesBefore(nodes, lastB.nextSibling, lastB.parentNode);
      }
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
    return allDone;
  }

  function addControls() {
    if (document.getElementById('rl-toggle')) return;
    var btn = el('button', null, '<span class="dot"></span> Modifications');
    btn.id = 'rl-toggle';
    btn.addEventListener('click', function () { document.body.classList.toggle('rl-on'); });
    document.body.appendChild(btn);
    var legend = el('div', null, '<span class="sw sw-del"></span> Contenu supprimé<br><span class="sw sw-add"></span> Nouveau contenu');
    legend.id = 'rl-legend';
    document.body.appendChild(legend);
    document.body.classList.add('rl-on');
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
