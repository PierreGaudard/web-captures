/* AMV Le Mag : accordeon de FAQ, sommaire actif au defilement, barre de
   progression de lecture. Aucune dependance. Les reponses de FAQ restent dans
   le DOM meme repliees, elles doivent rester lisibles par les moteurs. */
(function () {
  "use strict";

  function faq() {
    var bloc = document.querySelector(".mag-faq");
    if (!bloc) return;
    var qs = [].slice.call(bloc.querySelectorAll(".q"));
    qs.forEach(function (q, i) {
      var b = q.querySelector("button");
      if (!b) return;
      if (i === 0) q.classList.add("open");
      b.setAttribute("aria-expanded", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        var ouvert = q.classList.contains("open");
        qs.forEach(function (a) {
          a.classList.remove("open");
          var ab = a.querySelector("button");
          if (ab) ab.setAttribute("aria-expanded", "false");
        });
        if (!ouvert) {
          q.classList.add("open");
          b.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function sommaire() {
    var toc = document.querySelector(".art-toc");
    var corps = document.querySelector(".art-body");
    if (!toc || !corps) return;

    var liens = [].slice.call(toc.querySelectorAll('a[href^="#"]'));
    liens.forEach(function (a) {
      a.addEventListener("click", function (e) {
        var c = document.getElementById(a.getAttribute("href").slice(1));
        if (!c) return;
        e.preventDefault();
        c.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    var titres = liens
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    if (!titres.length || !("IntersectionObserver" in window)) return;

    var vus = new Set();
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) {
        if (en.isIntersecting) vus.add(en.target.id);
        else vus.delete(en.target.id);
      });
      var actif = titres.filter(function (t) { return vus.has(t.id); })[0];
      if (!actif) return;
      liens.forEach(function (a) {
        a.classList.toggle("actif", a.getAttribute("href") === "#" + actif.id);
      });
    }, { rootMargin: "-10% 0px -70% 0px" });
    titres.forEach(function (t) { obs.observe(t); });
  }

  function progression() {
    var corps = document.querySelector(".art-body");
    if (!corps) return;
    var barre = document.createElement("div");
    barre.id = "mag-progress";
    document.body.appendChild(barre);
    function maj() {
      var r = corps.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      var fait = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      barre.style.width = (fait * 100).toFixed(1) + "%";
    }
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    maj();
  }

  function go() { faq(); sommaire(); progression(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", go);
  } else {
    go();
  }
})();
