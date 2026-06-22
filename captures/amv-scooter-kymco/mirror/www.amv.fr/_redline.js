// Redline AMV - page assurance scooter Kymco (template SPA).
// Ancien contenu barre (rouge), nouveau contenu optimise (vert). Bouton "Modifications".
(function () {
  // Contenu optimise (style valide AMV moto/A2, mot-cle "assurance scooter Kymco").
  var H1 = "Assurance scooter KYMCO en ligne";

  var INTRO = [
    { note: "À retenir : AMV, assureur spécialiste du deux-roues depuis 1974, assure toute la gamme Kymco (50 cm³ urbains, 125 cm³ GT, maxi-scooters) avec quatre formules (au tiers, vol-incendie, dommages collision, tous risques), une assistance 0 km 24h/24 et un devis en ligne gratuit en quelques minutes." },
    { p: "Vous roulez en scooter Kymco et recherchez un contrat assurance adapté à votre modèle et à votre budget ? AMV, assureur spécialiste du deux-roues depuis plus de 50 ans, propose des formules sur mesure pour assurer votre scooter Kymco. Réalisez votre devis gratuit en ligne, comparez les formules et bénéficiez d'une couverture immédiate, sous réserve de certaines conditions." }
  ];

  var BODY = [
    { h2: "Nos formules d'assurance scooter Kymco" },
    { p: "AMV propose quatre formules pour couvrir votre Kymco selon votre profil, votre budget et la valeur de votre scooter. Chaque formule peut être complétée par des options à la carte." },
    { h3: "Formule Responsabilité civile (au tiers)" },
    { p: "La formule de base couvre la responsabilité civile (dommages matériels et corporels causés à autrui), l'assistance juridique et la protection de vos équipements essentiels : casque jusqu'à 250 euros, gants jusqu'à 70 euros et gilet airbag jusqu'à 500 euros. C'est la formule au tiers la plus accessible pour rouler en toute légalité, idéale pour réaliser des économies sur un Kymco ancien ou de faible valeur." },
    { h3: "Formule Vol / Incendie" },
    { p: "En complément du socle de la première formule, cette couverture prend en charge les dommages de votre Kymco en cas de vol, de tentative de vol ou d'incendie. Une protection particulièrement utile pour un scooter récent stationné en extérieur, le vol étant fréquent en milieu urbain." },
    { h3: "Formule Dommages collision" },
    { p: "Cette formule assure la prise en charge des dommages subis par votre Kymco lors d'une collision avec un tiers identifié, remboursés à la valeur de remplacement. Elle convient aux scooters de valeur intermédiaire." },
    { h3: "Formule Tous risques" },
    { p: "La formule Tous risques offre une couverture complète des dommages subis par votre Kymco, avec ou sans tiers identifié, y compris en cas de sinistre responsable. C'est la solution recommandée pour un Kymco neuf, récent ou de forte valeur comme un maxi-scooter." },

    { h2: "Les options pour personnaliser votre contrat" },
    { p: "Chaque formule se complète par des options pour ajuster votre couverture à votre pratique et à votre véhicule." },
    { h3: "Individuelle pilote" },
    { p: "L'option Individuelle pilote verse un capital en cas de décès ou d'invalidité permanente consécutifs à un accident, même responsable. Elle protège le conducteur, là où l'assurance de base couvre les tiers." },
    { h3: "Assistance 0 km" },
    { p: "L'assistance 0 km intervient sans franchise kilométrique, 24h/24 et 7j/7, même devant chez vous, en cas de panne, d'accident, de vol, de crevaison, de perte de clés ou d'enlèvement par la fourrière. Dépannage, remorquage et rapatriement sont pris en charge pour vous, votre Kymco et votre passager, en France métropolitaine et dans la plupart des pays d'Europe." },
    { h3: "Option plus" },
    { p: "L'Option plus étend la couverture à l'équipement vestimentaire de protection et aux accessoires hors-série montés sur votre Kymco (top case, pare-brise…), à concurrence de 5 000 euros, et prolonge la garantie valeur à neuf jusqu'à 18 mois." },

    { h2: "Découvrez l'assurance pour les modèles Kymco" },
    { p: "Marque taïwanaise reconnue, Kymco propose une gamme de scooters complète : modèles urbains et 50 cm³ (Agility, Like), scooters GT et 125 cm³ (People, X-Town), maxi-scooters de forte cylindrée (Downtown, AK 550, CV3). AMV assure l'ensemble de la gamme Kymco, du modèle accessible dès le permis AM (ex-BSR) aux scooters puissants nécessitant un permis A1 ou A2. Si vous roulez aussi en moto ou possédez plusieurs deux-roues, AMV peut regrouper vos contrats pour en simplifier la gestion." },

    { h2: "Pourquoi choisir AMV pour assurer votre Kymco ?" },
    { p: "Leader et assureur spécialiste de l'assurance moto et scooter en France depuis plus de 50 ans, AMV assure plus d'un million de motards et scootéristes, et affiche une note de satisfaction de 4,7/5 selon Avis Vérifiés. Fondée en 1974 par un passionné, l'entreprise connaît les spécificités de chaque marque et de chaque modèle, du scooter urbain au maxi-scooter. Cette expertise deux-roues couvre des situations que les assureurs généralistes ignorent : vol de casque, équipement endommagé, panne en pleine circulation. Plus de 350 conseillers basés à Bordeaux vous accompagnent par téléphone, par e-mail ou via votre Espace Client, avec un interlocuteur dédié en cas de sinistre." },

    { h2: "Comment obtenir votre devis d'assurance scooter Kymco ?" },
    { p: "Obtenir votre devis d'assurance scooter Kymco en ligne se fait en quelques étapes. Renseignez les informations sur votre Kymco (modèle, cylindrée, année) et votre profil (expérience, bonus-malus, région) pour recevoir un tarif personnalisé en quelques minutes. Si le prix vous convient, vous souscrivez en quelques clics et recevez votre attestation par mail. Vous gérez ensuite votre contrat, vos garanties et vos sinistres depuis Mon Espace AMV, à tout moment." }
  ];

  var FAQ = [
    { h2: "Questions fréquentes sur l'assurance scooter Kymco" },
    { h3: "Quelle assurance choisir pour un scooter Kymco ?" },
    { p: "Le choix dépend de la valeur de votre Kymco, de votre usage et de votre budget. Une formule Responsabilité civile peut suffire pour un Kymco ancien ou un 50 cm³ d'occasion. Pour un scooter récent ou un maxi-scooter de valeur, la formule Tous risques offre la meilleure protection. En ville, la formule Vol / Incendie mérite d'être envisagée." },
    { h3: "Combien coûte l'assurance d'un scooter Kymco ?" },
    { p: "Le prix dépend du modèle et de la cylindrée, de votre profil de conducteur, de la zone de stationnement et du niveau de couverture choisi. Un 50 cm³ au tiers coûte moins cher qu'un maxi-scooter en Tous risques. Un devis en ligne AMV, gratuit et sans engagement, vous donne un tarif adapté en quelques minutes et vous permet de comparer les garanties." },
    { h3: "AMV assure-t-il tous les modèles Kymco ?" },
    { p: "Oui. AMV assure l'ensemble de la gamme Kymco : scooters 50 cm³, 125 cm³ et maxi-scooters de forte cylindrée, du modèle urbain au GT. Chaque deux-roues Kymco bénéficie d'une formule adaptée à ses caractéristiques et à votre profil de conducteur." },
    { h3: "Peut-on assurer un Kymco 50 cm³ avec le permis AM (ex-BSR) ?" },
    { p: "Oui. Les scooters Kymco 50 cm³ sont accessibles dès 14 ans avec le permis AM (ex-BSR). AMV assure les jeunes conducteurs et propose des formules adaptées, avec les garanties essentielles pour une première assurance deux-roues." }
  ];

  // Anciennes sections de marque a barrer (histoire + conclusion, hors sujet assurance)
  var STRIKE_SECTIONS = [
    "histoire, la gamme",
    "conclusion : kymco"
  ];

  // ----- moteur de rendu (identique au redline kawasaki/collection) -----
  function norm(s){return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
  function el(tag, cls, html){var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e;}
  function badge(t){return el("span","rl-hntag",t);}
  function heading(level, txt){var d=el("div","rl-q"); d.appendChild(badge(level)); d.appendChild(document.createTextNode(" "+txt)); return d;}
  function renderItems(items){
    var frag=document.createDocumentFragment();
    items.forEach(function(it){
      if(it.h2) frag.appendChild(heading("H2", it.h2));
      else if(it.h3) frag.appendChild(heading("H3", it.h3));
      else if(it.p) frag.appendChild(el("p", null, it.p));
      else if(it.note){var p=el("p",null,null); p.appendChild(el("em",null,it.note)); frag.appendChild(p);}
      else if(it.ul){var ul=el("ul",null,null); it.ul.forEach(function(li){ul.appendChild(el("li",null,li));}); frag.appendChild(ul);}
    });
    return frag;
  }
  function block(items){var box=el("div","rl-add",null); box.appendChild(badge("Nouveau contenu optimisé")); box.appendChild(renderItems(items)); return box;}
  function findByText(sel, text){var n=norm(text); var list=[].slice.call(document.querySelectorAll(sel)); for(var i=0;i<list.length;i++){ if(norm(list[i].textContent).indexOf(n)>=0) return list[i]; } return null;}
  function insertAfter(node, ref){ ref.parentNode.insertBefore(node, ref.nextSibling); }
  function insertBefore(node, ref){ ref.parentNode.insertBefore(node, ref); }

  function apply(){
    var h1 = document.querySelector("h1");
    if(h1 && !h1.getAttribute("data-rl")){
      h1.setAttribute("data-rl","1"); h1.classList.add("rl-del");
      var nh = el("div","rl-add rl-inline",null); nh.id="rl-h1box"; nh.appendChild(badge("H1"));
      nh.appendChild(el("span","rl-h1", H1)); insertAfter(nh, h1);
    }
    var h1box = document.getElementById("rl-h1box");
    if(h1box && !document.getElementById("rl-intro")){ var bi=block(INTRO); bi.id="rl-intro"; insertAfter(bi, h1box); }

    // Barrer les anciennes sections de marque (histoire + conclusion)
    if(!window.__rlSecStruck){
      var struck=0;
      STRIKE_SECTIONS.forEach(function(t){
        var h=findByText("h2", t);
        if(h){ var sec=h.closest("section")||h; if(!sec.classList.contains("rl-del")){ sec.classList.add("rl-del"); struck++; } }
      });
      if(struck) window.__rlSecStruck=true;
    }

    var anchorBody = findByText("h2","comment assurer son scooter");
    if(anchorBody && !document.getElementById("rl-body")){
      var bb=block(BODY); bb.id="rl-body";
      var sec = anchorBody.closest("section") || anchorBody;
      insertAfter(bb, sec);
    }

    var anchorFaq = findByText("h2","questions fr");
    if(anchorFaq && !document.getElementById("rl-faq")){
      var bf=block(FAQ); bf.id="rl-faq";
      var fsec = anchorFaq.closest("section") || anchorFaq;
      insertBefore(bf, fsec);
    }

    return !!(h1 && anchorBody && anchorFaq);
  }

  function addControls(){
    if(document.getElementById("rl-toggle")) return;
    var btn=el("button",null,'<span class="dot"></span> Modifications'); btn.id="rl-toggle";
    btn.addEventListener("click", function(){ document.body.classList.toggle("rl-on"); });
    document.body.appendChild(btn);
    var lg=el("div",null,'<span class="sw sw-del"></span> Contenu remplacé<br><span class="sw sw-add"></span> Nouveau contenu optimisé'); lg.id="rl-legend";
    document.body.appendChild(lg);
    document.body.classList.add("rl-on");
  }
  function init(){ addControls(); var t=0; var timer=setInterval(function(){ t++; if(apply()||t>40){ clearInterval(timer);} }, 250); }
  if(document.readyState==="complete"||document.readyState==="interactive") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
