var AGNES_EDITS = [
 {
  "ancre": "Une équipe de plus de 300 conseillers à votre écoute,",
  "old": "Une équipe de plus de 300 conseillers à votre écoute,",
  "new": "Une équipe de plus de 350 conseillers à votre écoute,"
 },
 {
  "ancre": "Plus de 750 000 contrats d'assurance en cours,",
  "old": "Plus de 750 000 contrats d'assurance en cours,",
  "new": "Plus d'1 millions d'assurés ,"
 },
 {
  "ancre": "Le permis A2 autorise les motos dont la puissance ne dépasse pas 35 kW et dont le rapport puissance/poids reste inférieur à 0,2 kW par kilogramme. De nombreux modèles populaires",
  "old": "Le permis A2 autorise les motos dont la puissance ne dépasse pas 35 kW et dont le rapport puissance/poids reste inférieur à 0,2 kW par kilogramme. De nombreux modèles populaires existent parmi ces marques :",
  "new": "Le permis A2 autorise les motos dont la puissance ne dépasse pas 35 kW et dont le rapport puissance/poids reste inférieur ou égal à 0,2 kW par kilogramme. De nombreux modèles populaires existent parmi ces marques :"
 },
 {
  "ancre": "faire valoir votre bonus automobile si vous possédez déjà une voiture",
  "old": "faire valoir votre bonus automobile si vous possédez déjà une voiture",
  "new": "faire valoir votre bonus automobile si vous possédez déjà une voiture avec des antécédents d'assurance"
 },
 {
  "ancre": "Bien assurer votre moto est essentiel pour prendre la route en toute sérénité. Pour cela, pourquoi ne pas opter pour l'assurance en ligne proposée par AMV, un assureur de confiance spécialiste de l'assurance moto depuis 50 ans.",
  "old": "Bien assurer votre moto est essentiel pour prendre la route en toute sérénité. Pour cela, pourquoi ne pas opter pour l'assurance en ligne proposée par AMV, un assureur de confiance spécialiste de l'assurance moto depuis 50 ans.",
  "new": "Bien assurer votre moto est essentiel pour prendre la route en toute sérénité. Pour cela, pourquoi ne pas opter pour l'assurance en ligne proposée par AMV, un assureur de confiance spécialiste de l'assurance moto depuis plus de 50 ans."
 },
 {
  "ancre": "Le coût d'une assurance moto chez AMV intègre plusieurs facteurs tels que le modèle de la moto, l'expérience du conducteur (permis, sinistres, bonus), le lieu de stationnement habituel et le niveau de garanties désiré. Chez AMV, nous offrons des tarifs compétitifs adaptés à chaque profil de conducteur et à chaque type de moto. Nos conseillers spécialisés sont là pour vous aider à choisir la couverture qui répond le mieux à vos besoins et à votre budget. N'hésitez pas à nous contacter pour obtenir un devis personnalisé et découvrez comment nous pouvons protéger au mieux votre moto. Chez AMV, nous sommes fiers d'accompagner les motards depuis près de 50 ans et de leur proposer une assurance sur mesure pour rouler en toute sérénité.",
  "old": "Le coût d'une assurance moto chez AMV intègre plusieurs facteurs tels que le modèle de la moto, l'expérience du conducteur (permis, sinistres, bonus), le lieu de stationnement habituel et le niveau de garanties désiré. Chez AMV, nous offrons des tarifs compétitifs adaptés à chaque profil de conducteur et à chaque type de moto. Nos conseillers spécialisés sont là pour vous aider à choisir la couverture qui répond le mieux à vos besoins et à votre budget. N'hésitez pas à nous contacter pour obtenir un devis personnalisé et découvrez comment nous pouvons protéger au mieux votre moto. Chez AMV, nous sommes fiers d'accompagner les motards depuis près de 50 ans et de leur proposer une assurance sur mesure pour rouler en toute sérénité.",
  "new": "Le coût d'une assurance moto chez AMV intègre plusieurs facteurs tels que le modèle de la moto, l'expérience du conducteur (permis, sinistres, bonus), le lieu de stationnement habituel et le niveau de garanties désiré. Chez AMV, nous offrons des tarifs compétitifs adaptés à chaque profil de conducteur et à chaque type de moto. Nos conseillers spécialisés sont là pour vous aider à choisir la couverture qui répond le mieux à vos besoins et à votre budget. N'hésitez pas à nous contacter pour obtenir un devis personnalisé et découvrez comment nous pouvons protéger au mieux votre moto. Chez AMV, nous sommes fiers d'accompagner les motards depuis plus de 50 ans et de leur proposer une assurance sur mesure pour rouler en toute sérénité."
 },
 {
  "ancre": "Pour obtenir un devis d'assurance moto rapidement, AMV est votre partenaire de confiance. Spécialiste de l'assurance moto depuis 50 ans, AMV propose des solutions adaptées à vos besoins. Rendez-vous sur amv.fr et complétez simplement notre formulaire pour découvrir votre tarif en seulement 3 minutes. Faites confiance à AMV et roulez en toute sérénité avec la protection dont vous avez besoin.",
  "old": "Pour obtenir un devis d'assurance moto rapidement, AMV est votre partenaire de confiance. Spécialiste de l'assurance moto depuis 50 ans, AMV propose des solutions adaptées à vos besoins. Rendez-vous sur amv.fr et complétez simplement notre formulaire pour découvrir votre tarif en seulement 3 minutes. Faites confiance à AMV et roulez en toute sérénité avec la protection dont vous avez besoin.",
  "new": "Pour obtenir un devis d'assurance moto rapidement, AMV est votre partenaire de confiance. Spécialiste de l'assurance moto depuis plus de 50 ans, AMV propose des solutions adaptées à vos besoins. Rendez-vous sur amv.fr et complétez simplement notre formulaire pour découvrir votre tarif en seulement 3 minutes. Faites confiance à AMV et roulez en toute sérénité avec la protection dont vous avez besoin."
 }
];
// Retours d'Agnes Rouviere du 03/08/2026 appliques sur la maquette.
// Le paragraphe d'origine est barre, la version corrigee d'Agnes s'affiche juste apres.
// Cela vaut aussi pour les blocs fixes du gabarit (FAQ produit, blocs de bas de page) que nous
// ne pouvons pas modifier depuis Umbraco : c'est precisement ce qu'Heliaq doit voir.
// AGNES_EDITS est injecte par capture : [{ancre, old, new}]. L'ancre est la plus longue portion
// du paragraphe d'Agnes reellement presente dans la copie (la page live a parfois evolue depuis).
(function () {
  if (typeof AGNES_EDITS === 'undefined') return;

  function norm(s) {
    return (s || '')
      .replace(/[’ʼ‘]/g, "'")
      .replace(/[   ​]/g, ' ')
      .replace(/–|—/g, '-')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function cle(s) {
    return norm(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  // element le plus court contenant l'ancre, en ignorant ce que nous avons deja insere
  function trouve(ancre) {
    var c = cle(ancre);
    if (c.length < 25) return null;
    var cands = document.querySelectorAll('p, li, td, h1, h2, h3, h4, div, span');
    var best = null, n = 0;
    for (var i = 0; i < cands.length; i++) {
      var e = cands[i];
      if (e.getAttribute('data-agnes') || e.closest('.ag-bloc')) continue;
      if (e.querySelector('[data-agnes]')) continue;
      if (cle(e.textContent).indexOf(c) < 0) continue;
      n++;
      if (!best || e.textContent.length < best.textContent.length) best = e;
    }
    return best;
  }
  function versionCorrigee(source, nouveau) {
    var el = source.cloneNode(false);
    ['id', 'data-agnes', 'data-collapse', 'data-lazy-load'].forEach(function (a) { el.removeAttribute(a); });
    el.classList.remove('rl-del', 'ag-del');
    el.classList.add('ag-new', 'ag-bloc');
    el.textContent = norm(nouveau);
    [].slice.call(source.querySelectorAll('a')).forEach(function (a) {
      var libelle = norm(a.textContent);
      if (!libelle || libelle.length < 4) return;
      var texte = el.textContent, i = texte.indexOf(libelle);
      if (i < 0) return;
      el.textContent = '';
      el.appendChild(document.createTextNode(texte.slice(0, i)));
      var lien = a.cloneNode(true);
      lien.textContent = libelle;
      el.appendChild(lien);
      el.appendChild(document.createTextNode(texte.slice(i + libelle.length)));
    });
    return el;
  }

  var faits = 0, rates = [];
  function passe() {
    faits = 0; rates = [];
    AGNES_EDITS.forEach(function (edit, idx) {
      if (edit._ok) { faits++; return; }
      if (norm(edit.old) === norm(edit.new)) { edit._ok = true; faits++; return; }
      var src = trouve(edit.ancre || edit.old);
      if (!src) { rates.push(idx + 1); return; }
      src.setAttribute('data-agnes', '1');
      src.classList.add('ag-del', 'rl-del', 'ag-bloc');
      src.parentNode.insertBefore(versionCorrigee(src, edit.new), src.nextSibling);
      edit._ok = true; faits++;
    });
    return faits === AGNES_EDITS.length;
  }

  function init() {
    var t = 0;
    var timer = setInterval(function () {
      t++;
      if (passe() || t > 40) {
        clearInterval(timer);
        window.AGNES_RAPPORT = { total: AGNES_EDITS.length, appliques: faits, manquants: rates };
      }
    }, 300);
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
