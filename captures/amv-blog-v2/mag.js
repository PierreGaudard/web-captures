// AMV Le Mag v2 : barre de progression de lecture et sommaire qui suit la lecture
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
  window.addEventListener('scroll', maj, { passive: true });
  window.addEventListener('resize', maj);
  maj();
})();
