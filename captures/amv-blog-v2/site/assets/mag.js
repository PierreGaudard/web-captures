// AMV Le Mag v2 : barre de progression, sommaire qui suit la lecture, onglets de la sidebar
(function () {
  var bar = document.querySelector('.progress span');
  var body = document.querySelector('.art-body');
  var liens = [].slice.call(document.querySelectorAll('.toc a'));
  var cibles = liens.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function maj() {
    if (bar && body) {
      var r = body.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
      bar.style.width = (p * 100) + '%';
    }
    var courant = -1;
    cibles.forEach(function (c, i) { if (c && c.getBoundingClientRect().top < 180) courant = i; });
    liens.forEach(function (a, i) { a.classList.toggle('on', i === courant); });
  }
  // barre de tarif mobile : apparait une fois l'en-tete passe, s'efface sur le pied de page
  var tarif = document.querySelector('.bar-tarif');
  var pied = document.querySelector('.site-foot');
  function barre() {
    if (!tarif) return;
    var bas = pied ? pied.getBoundingClientRect().top < window.innerHeight : false;
    tarif.classList.toggle('on', window.scrollY > 500 && !bas);
  }
  window.addEventListener('scroll', barre, { passive: true });
  barre();
  window.addEventListener('scroll', maj, { passive: true });
  window.addEventListener('resize', maj);
  maj();

  [].forEach.call(document.querySelectorAll('.tabs button'), function (b) {
    b.addEventListener('click', function () {
      var box = b.closest('.side-tabs');
      [].forEach.call(box.querySelectorAll('.tabs button'), function (x) { x.classList.toggle('on', x === b); });
      [].forEach.call(box.querySelectorAll('[data-pane]'), function (p) { p.hidden = p.getAttribute('data-pane') !== b.getAttribute('data-tab'); });
    });
  });
  // etiquettes : lien masque aux robots, comme sur le blog actuel
  [].forEach.call(document.querySelectorAll('.tag[data-src]'), function (t) {
    t.addEventListener('click', function () { window.location.href = t.getAttribute('data-src'); });
  });
})();
