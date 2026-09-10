/* Interactions des blocs ajoutes par les modeles de blog AMV :
   accordeon de FAQ (une seule question ouverte a la fois, la premiere ouverte
   au chargement) et ancrage doux du sommaire.
   Le contenu des reponses reste dans le DOM meme replie : il doit rester
   lisible par les moteurs et par les LLM, l'accordeon ne masque qu'en CSS. */
(function () {
  "use strict";

  function init() {
    var faq = document.querySelector(".amv-faq");
    if (faq) {
      var questions = [].slice.call(faq.querySelectorAll(".q"));
      questions.forEach(function (q, i) {
        if (i === 0) q.classList.add("open");
        var b = q.querySelector("button");
        if (!b) return;
        b.setAttribute("aria-expanded", i === 0 ? "true" : "false");
        b.addEventListener("click", function () {
          var ouvert = q.classList.contains("open");
          questions.forEach(function (autre) {
            autre.classList.remove("open");
            var ab = autre.querySelector("button");
            if (ab) ab.setAttribute("aria-expanded", "false");
          });
          if (!ouvert) {
            q.classList.add("open");
            b.setAttribute("aria-expanded", "true");
          }
        });
      });
    }

    [].slice.call(document.querySelectorAll('.amv-sommaire a[href^="#"]')).forEach(function (a) {
      a.addEventListener("click", function (e) {
        var cible = document.getElementById(a.getAttribute("href").slice(1));
        if (!cible) return;
        e.preventDefault();
        cible.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
