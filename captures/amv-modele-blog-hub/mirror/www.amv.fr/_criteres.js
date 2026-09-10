/* Couche d'annotation "Criteres SEO & GEO" des modeles de blog AMV.
   Lit les attributs data-crit (numero) et data-crit-titre / data-crit-txt
   poses sur les blocs du gabarit, construit le panneau et gere la bascule.
   Aucune dependance : ni jQuery ni framework. */
(function () {
  "use strict";

  function build() {
    var blocs = [].slice.call(document.querySelectorAll("[data-crit]"));
    blocs.sort(function (a, b) {
      return parseInt(a.getAttribute("data-crit"), 10) - parseInt(b.getAttribute("data-crit"), 10);
    });

    var btn = document.createElement("button");
    btn.id = "crit-toggle";
    btn.type = "button";
    btn.textContent = "Critères SEO & GEO";

    var panel = document.createElement("div");
    panel.id = "crit-panel";

    var html = '<div class="crit-head"><strong>Critères SEO &amp; GEO</strong></div>' +
      '<p class="crit-intro">' + blocs.length + ' éléments de la structure cible. ' +
      'Cliquez sur une ligne pour la situer dans la page.</p><ol>';
    blocs.forEach(function (el) {
      html += '<li data-goto="' + el.getAttribute("data-crit") + '">' +
        '<span class="n">' + el.getAttribute("data-crit") + "</span>" +
        '<span class="t"><b>' + (el.getAttribute("data-crit-titre") || "") + "</b>" +
        (el.getAttribute("data-crit-txt") || "") + "</span></li>";
    });
    html += "</ol>";
    panel.innerHTML = html;

    document.body.appendChild(panel);
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
      document.body.classList.toggle("crit-on");
      btn.textContent = document.body.classList.contains("crit-on")
        ? "Masquer les critères"
        : "Critères SEO & GEO";
    });

    panel.addEventListener("click", function (e) {
      var li = e.target.closest ? e.target.closest("li[data-goto]") : null;
      if (!li) return;
      var cible = document.querySelector('[data-crit="' + li.getAttribute("data-goto") + '"]');
      if (!cible) return;
      blocs.forEach(function (b) { b.classList.remove("crit-focus"); });
      cible.classList.add("crit-focus");
      cible.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
