// Redline AMV (page assurance moto) : ancien contenu barré rouge, nouveau contenu vert.
// Liste d'édits facile à compléter au fil des validations de Pierre.
(function () {
  // Modes :
  //  - 'clone'  : clone l'élément d'origine (même taille/style), remplace le texte, surligne en vert.
  //               { sel, match, mode:'clone', newText }
  //  - 'block'  : insère un bloc vert multi-lignes (FAQ, nouvelles sections).
  //               { sel, match, mode:'block', badge, newHTML, inline }
  var EDITS = [
    {
      sel: 'h1',
      match: 'Bienvenue chez le leader',
      mode: 'clone',
      newText: 'Assurance moto avec le leader du deux-roues'
    }
  ];

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function applyEdit(edit) {
    var re = new RegExp(edit.match, 'i');
    var nodes = [].slice.call(document.querySelectorAll(edit.sel));
    var target = nodes.find(function (n) { return re.test(n.textContent) && !n.getAttribute('data-rl'); });
    if (!target) return false;
    target.setAttribute('data-rl', '1');
    target.classList.add('rl-del');

    if (edit.mode === 'block') {
      var box = el('div', 'rl-add' + (edit.inline ? ' rl-inline' : ''));
      if (edit.badge) box.appendChild(el('span', 'rl-badge', edit.badge));
      box.insertAdjacentHTML('beforeend', edit.newHTML);
      target.parentNode.insertBefore(box, target.nextSibling);
    } else {
      // clone : même balise/classes que l'original => même taille
      var clone = target.cloneNode(true);
      clone.removeAttribute('data-rl');
      clone.removeAttribute('id');
      clone.classList.remove('rl-del');
      // retire d'éventuelles classes qui masquent (animations)
      clone.classList.remove('opacity-0');
      clone.style.opacity = '1';
      clone.classList.add('rl-mark');
      clone.textContent = edit.newText;
      target.parentNode.insertBefore(clone, target.nextSibling);
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
