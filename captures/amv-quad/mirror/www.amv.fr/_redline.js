// Redline AMV (page quad) : marque l'ancien contenu supprimé (rouge barré)
// et insère le nouveau contenu rédigé (vert). Bouton pour afficher/masquer.
(function () {
  // Nouvelle FAQ proposée (rédaction Pierre)
  var NEW_FAQ = [
    { q: "Quelle est la meilleure assurance pour un quad ?",
      a: ["La meilleure assurance quad dépend de votre usage, de la valeur de votre véhicule et de votre budget. Pour un quad ancien ou utilisé occasionnellement, la formule Responsabilité civile suffit. Pour un quad neuf ou financé à crédit, la formule Tous risques offre la meilleure protection. AMV, spécialiste de l'assurance quad depuis plus de 50 ans, propose des formules adaptées à chaque profil de conducteur."] },
    { q: "Combien coûte une assurance quad ?",
      a: ["Le prix d'une assurance quad dépend de plusieurs critères :"],
      ul: ["le modèle du quad ou du SSV, sa cylindrée et sa puissance", "l'usage prévu (loisir, route, agricole)", "l'âge et l'expérience du conducteur", "la zone géographique et le lieu de stationnement", "le niveau de couverture choisi"],
      a2: ["Chez AMV, un devis personnalisé en ligne vous donne un tarif adapté en quelques clics. Le tarif varie selon la formule choisie et les options ajoutées à votre contrat d'assurance."] },
    { q: "Est-il obligatoire d'assurer un quad ?",
      a: ["Oui. Tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile, même s'il n'est pas homologué et ne circule pas sur la voie publique. Un quad stationné dans un garage sans rouler doit également être assuré. Le défaut d'assurance est passible d'une amende pouvant aller jusqu'à 3 750 euros. Cette obligation légale s'applique à tous les quads et SSV, qu'ils soient homologués ou non."] },
    { q: "Comment assurer un quad non homologué ?",
      a: ["Pour assurer un quad non homologué, la démarche est la même que pour un quad homologué. Vous avez besoin du numéro de série ou d'identification du véhicule et de vos informations personnelles. Chez AMV, le devis est gratuit et la souscription se fait en ligne en quelques minutes, que votre quad soit homologué ou non."] },
    { q: "Quel permis faut-il pour conduire un quad ?",
      a: ["Le permis nécessaire dépend du type de quad et de sa puissance. Pour un quad léger (cylindrée inférieure ou égale à 50 cm3), le permis AM (ex-BSR) suffit dès 14 ans. Pour un quad de plus de 50 cm3 homologué route, le permis B est le plus courant. Pour les modèles les plus puissants, le permis A2 ou A peut être requis. AMV assure les conducteurs quel que soit leur permis."] },
    { q: "Quels équipements sont couverts par l'assurance quad AMV ?",
      a: ["Dès la première formule : casque (jusqu'à 250 euros), gants (jusqu'à 70 euros) et gilet airbag (jusqu'à 500 euros) en cas de sinistre. Avec l'Option plus, couverture étendue à l'ensemble de l'équipement vestimentaire (blouson, bottes, combinaison) et aux accessoires hors-série montés sur votre quad, jusqu'à 5 000 euros."] },
    { q: "Les jeunes conducteurs sont-ils acceptés ?",
      a: ["Oui. AMV assure tous les profils, y compris les jeunes conducteurs et les conducteurs novices. AMV peut répondre à chaque besoin grâce à une tarification personnalisée en fonction de votre expérience et de votre bonus-malus. Les conditions de souscription AMV sont parmi les plus larges du marché. Que vous preniez la route pour la première fois ou que vous rouliez depuis des années, AMV a une formule pour vous."] },
    { q: "Peut-on résilier son assurance quad à tout moment ?",
      a: ["Les démarches de résiliation dépendent de la date de votre contrat. Après la première année, vous pouvez résilier à tout moment grâce à la loi Hamon, sans frais ni pénalité. Avant la première échéance, la résiliation est possible dans certains cas (vente du véhicule, changement de situation). Contactez un conseiller AMV pour connaître les modalités applicables à votre contrat."] },
    { q: "Comment déclarer un sinistre quad ?",
      a: ["Déclaration directement depuis Mon Espace AMV sur amv.fr, 24h/24. Suite à votre déclaration, un gestionnaire dédié prend en charge votre dossier et vous accompagne dans toutes les démarches d'indemnisation."] }
  ];

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function buildNewFaq() {
    var box = el('div', 'rl-add');
    box.appendChild(el('span', 'rl-badge', 'Nouveau contenu proposé'));
    NEW_FAQ.forEach(function (item) {
      box.appendChild(el('span', 'rl-q', item.q));
      (item.a || []).forEach(function (p) { box.appendChild(el('p', null, p)); });
      if (item.ul) { var ul = el('ul'); item.ul.forEach(function (li) { ul.appendChild(el('li', null, li)); }); box.appendChild(ul); }
      (item.a2 || []).forEach(function (p) { box.appendChild(el('p', null, p)); });
    });
    return box;
  }

  function apply() {
    var h2 = [].slice.call(document.querySelectorAll('h2')).find(function (h) { return /Des questions sur votre assurance/i.test(h.textContent); });
    if (!h2) return false;
    var section = h2.closest('section') || h2.parentElement;
    if (section.getAttribute('data-rl')) return true;
    section.setAttribute('data-rl', '1');

    // Marque l'ancienne FAQ comme supprimée et force l'affichage des réponses
    var blocks = [].slice.call(section.querySelectorAll('.collapse-block'));
    blocks.forEach(function (b) {
      b.classList.add('rl-del');
      var part = b.querySelector('.collapse-part');
      if (part) { part.classList.remove('hidden'); part.style.display = 'flex'; }
    });

    // Insère la nouvelle FAQ après le dernier ancien bloc
    var newFaq = buildNewFaq();
    var last = blocks[blocks.length - 1];
    if (last && last.parentElement) { last.parentElement.appendChild(newFaq); }
    else { h2.parentElement.appendChild(newFaq); }
    return true;
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

    document.body.classList.add('rl-on'); // affiché par défaut
  }

  function init() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (apply() || tries > 40) { clearInterval(timer); addControls(); }
    }, 250);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
