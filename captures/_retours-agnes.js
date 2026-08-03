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
