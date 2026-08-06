// Rattachement de la FAQ au gabarit du site (demande AMV du 30/07, etendue a tous les
// contenus le 03/08). Ces maquettes affichent le nouveau contenu dans un bloc vert
// "Nouveau contenu optimise" : ce script en extrait la partie FAQ et la rend dans la
// vraie FAQ de la page, en cadres d'accordeon, sans modifier un seul mot.
(function () {
  function norm(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').toLowerCase();
  }
  // La FAQ = la section a accordeons dont le titre parle de questions ; sinon la derniere
  function faqSection() {
    var secs = [].slice.call(document.querySelectorAll('section')).filter(function (s) {
      return s.querySelector('.collapse-block') && !s.querySelector('.rl-add');
    });
    if (!secs.length) return null;
    var avecTitre = secs.filter(function (s) { return /question/.test(norm(s.textContent.slice(0, 600))); });
    return avecTitre.length ? avecTitre[avecTitre.length - 1] : secs[secs.length - 1];
  }
  function column(sec) {
    var b = sec.querySelectorAll('.collapse-block');
    return b.length ? b[b.length - 1].parentNode : null;
  }
  function linkBox(col) {
    return [].slice.call(col.querySelectorAll('div.flex.mt-amv40')).find(function (b) {
      return b.querySelector('a[href="/besoin-daide/"]');
    }) || null;
  }
  // Un cadre d'accordeon au gabarit du site, dont la reponse reprend les noeuds deja rendus
  function makeCard(model, question, nodes) {
    var card = model.cloneNode(true);
    ['data-collapse', 'data-lazy-load', 'data-rl-clic', 'id'].forEach(function (a) { card.removeAttribute(a); });
    // le modele peut porter des marques de redline (barre, hors sujet) : on nettoie le clone
    [card].concat([].slice.call(card.querySelectorAll('*'))).forEach(function (e) {
      e.classList.remove('rl-del', 'rl-mark', 'rl-offtopic', 'rl-add', 'rl-card');
    });
    card.classList.remove('opacity-0');
    card.classList.add('rl-card', 'rl-faq-new');
    card.style.opacity = '1';
    var head = card.querySelector('.flex.justify-between.items-center');
    var span = head ? head.querySelector('span') : null;
    if (span) span.textContent = question;
    var part = card.querySelector('.collapse-part');
    if (!part) return null;
    part.removeAttribute('id');
    part.innerHTML = '';
    nodes.forEach(function (n) { part.appendChild(n); });
    part.classList.remove('hidden');
    part.style.display = 'flex';
    var arrow = head ? head.querySelector('svg') : null;
    if (arrow) arrow.style.transform = 'rotate(180deg)';
    if (head) {
      head.style.cursor = 'pointer';
      head.addEventListener('click', function () {
        var ferme = part.classList.toggle('hidden');
        part.style.display = ferme ? '' : 'flex';
        if (arrow) arrow.style.transform = ferme ? '' : 'rotate(180deg)';
      });
    }
    return card;
  }
  // Les accordeons du site ne s'ouvrent pas dans la copie : on rend le clic actif
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
        var ferme = part.classList.toggle('hidden');
        part.style.display = ferme ? '' : 'flex';
        if (arrow) arrow.style.transform = ferme ? '' : 'rotate(180deg)';
      });
    });
  }

  // niveau d'un titre : balise h2/h3 reelle, ou div.rl-q avec un badge H2/H3 (ancien moteur)
  function niveau(e) {
    if (!e) return null;
    if (e.tagName === 'H2') return 'H2';
    if (e.tagName === 'H3') return 'H3';
    if (e.classList && e.classList.contains('rl-q')) {
      var b = e.querySelector('.rl-hntag, .rl-badge');
      var t = b ? norm(b.textContent).toUpperCase() : '';
      if (t.indexOf('H2') === 0) return 'H2';
      if (t.indexOf('H3') === 0) return 'H3';
    }
    return null;
  }
  // Le libelle AFFICHE doit garder ses accents et sa casse : norm() ne sert qu'a comparer,
  // jamais a produire du texte visible (sinon « bridee en a2 » au lieu de « bridée en A2 »).
  function texteTitre(e) {
    var b = e.querySelector ? e.querySelector('.rl-hntag, .rl-badge') : null;
    var t = (e.textContent || '').replace(/\s+/g, ' ').trim();
    if (b) {
      var bt = (b.textContent || '').replace(/\s+/g, ' ').trim();
      if (bt) t = t.replace(bt, '').replace(/\s+/g, ' ').trim();
    }
    return t;
  }

  function run() {
    var h2 = [].slice.call(document.querySelectorAll('.rl-add h2, .rl-add .rl-q')).find(function (x) {
      return niveau(x) === 'H2' && /questions fr/.test(norm(x.textContent));
    });
    if (!h2) return false;
    var sec = faqSection();
    if (!sec) return false;
    var col = column(sec);
    var model = sec.querySelector('.collapse-block');
    if (!col || !model) return false;
    var stop = linkBox(col);

    // Certaines maquettes barrent TOUTE la section FAQ d'origine (zontes, kove) : nos cadres
    // inseres dedans heriteraient du display:none en version finale. On deplace donc le barre
    // des conteneurs vers les seules questions d'origine, le chemin jusqu'a nos cadres reste visible.
    (function () {
      var chemin = col, e = col;
      while (e && e !== document.body) {
        if (e.classList.contains('rl-del')) {
          e.classList.remove('rl-del');
          [].slice.call(e.children).forEach(function (enfant) {
            if (enfant !== chemin) enfant.classList.add('rl-del');
          });
        }
        chemin = e;
        e = e.parentElement;
      }
      [].slice.call(col.querySelectorAll('.collapse-block')).forEach(function (b) {
        if (!b.classList.contains('rl-faq-new')) b.classList.add('rl-del');
      });
    })();

    // Un H3 ouvre une question, ses paragraphes / listes / tableaux forment la reponse
    var groupes = [], courant = null, n = h2.nextElementSibling, aRetirer = [h2];
    while (n) {
      var suivant = n.nextElementSibling;
      var niv = niveau(n);
      if (niv === 'H2') break;
      if (niv === 'H3') {
        courant = { q: texteTitre(n), nodes: [] };
        groupes.push(courant);
        aRetirer.push(n);
      } else if (courant) {
        courant.nodes.push(n);
      } else {
        break;
      }
      n = suivant;
    }
    if (!groupes.length) return false;

    groupes.forEach(function (g) {
      var card = makeCard(model, g.q, g.nodes);
      if (!card) return;
      if (stop) col.insertBefore(card, stop); else col.appendChild(card);
    });
    aRetirer.forEach(function (x) { if (x.parentNode) x.parentNode.removeChild(x); });

    // bloc vert devenu vide (plus que son badge) : on le masque
    [].slice.call(document.querySelectorAll('.rl-add')).forEach(function (b) {
      var reste = [].slice.call(b.children).filter(function (c) { return !c.classList.contains('rl-badge'); });
      if (!reste.length) b.style.display = 'none';
    });
    enableCollapses();
    return true;
  }

  function init() {
    var t = 0;
    var timer = setInterval(function () {
      t++;
      if (run() || t > 60) { clearInterval(timer); enableCollapses(); }
    }, 250);
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
