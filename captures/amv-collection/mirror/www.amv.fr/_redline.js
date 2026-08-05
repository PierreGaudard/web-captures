// Redline AMV - page assurance auto et moto de collection (template Legende/ASP.NET).
// Ancien contenu barre (rouge), nouveau contenu optimise (vert). Bouton "Modifications".
(function () {
  // Contenu optimise (score Datafer 88/100, mot-cle "assurance moto de collection").
  var H1 = "Assurance auto et moto anciennes ou de collection";

  // Recette AMV du 05/08/2026 : Heliaq a integre sur qualif2 l'encart "A retenir" PUIS
  // l'intro complete AU-DESSUS de "Obtenir un tarif". L'apercu reprend ce meme ordre.
  // (Avant le 05/08 l'intro etait coupee en deux, la suite passant sous les boutons.)
  var INTRO_TOP = [
    { note: "À retenir : l'offre AMV Légende assure vos autos et deux-roues anciens (de plus de 15 ans) ou de collection. Formules au tiers, vol-incendie ou tous risques, tarifs dégressifs selon l'âge des véhicules et leur nombre, devis en ligne gratuit en quelques minutes." },
    { p: "Vous cherchez une assurance dédiée à votre moto ancienne ou de collection ? AMV, spécialiste de <a href='https://www.amv.fr/assurance/moto/' target='_blank' rel='noopener' class='rl-link' style='color:inherit;text-decoration:underline;font-weight:600'>l'assurance moto</a> et scooter depuis 1974, a conçu l'offre AMV Légende pour couvrir les autos et motos anciennes (de plus de 15 ans) ou de collection. Couverture sur mesure, garanties adaptées, souscription rapide : vous construisez votre contrat selon chaque modèle et profitez de tarifs dégressifs selon l'âge des véhicules et leur nombre." }
  ];

  var INTRO_BAS = [];

  var BODY = [
    { h2: "Pourquoi choisir AMV Légende pour votre assurance moto ancienne ou de collection ?" },
    { p: "AMV Légende est l'offre dédiée aux véhicules anciens ou de collection d'AMV, le spécialiste de l'assurance deux-roues. Nos conseillers basés à Bordeaux vous accompagnent, et un interlocuteur dédié suit votre dossier en cas de sinistre. Seul un assureur spécialiste, fort de plus de 50 ans d'expérience, connaît les besoins d'un motard collectionneur : AMV Légende protège votre patrimoine roulant comme il le mérite, avec des conseillers disponibles et experts pour vous accompagner dans toutes vos démarches." },

    { h2: "Les formules d'assurance moto ancienne ou de collection" },
    { p: "AMV Légende propose plusieurs formules, du minimum obligatoire à la protection tous risques. Vous choisissez le niveau de garanties selon la valeur de votre véhicule et votre budget. Chaque formule inclut la responsabilité civile obligatoire, une garantie du conducteur et la garantie Défense Pénale et Recours Suite à Accident (DPRSA)." },
    { p: "La formule au tiers couvre votre responsabilité civile : c'est la garantie minimum obligatoire, qui indemnise les dommages causés à un tiers en cas de sinistre responsable. Elle peut convenir aux motos anciennes de faible valeur ou utilisées ponctuellement pour le loisir, et reste la formule la moins chère." },
    { p: "La formule vol-incendie ajoute la prise en charge du vol, de la tentative de vol et de l'incendie. Elle est recommandée si vous garez votre deux-roues en extérieur ou dans un lieu non clos, où le risque de vol est plus élevé." },
    { p: "La formule tous risques indemnise les dommages subis par votre véhicule assuré, même lors d'un sinistre responsable, et couvre le vandalisme. C'est la protection la plus complète, conseillée pour un modèle de valeur, restauré ou financé à crédit. À ces formules peut s'ajouter, en option, l'assistance (dépannage, remorquage, rapatriement)." },
    { p: "En cas de sinistre, l'indemnisation tient compte de la nature du véhicule : une moto ancienne se répare avec des pièces parfois rares, et son estimation relève d'une expertise spécifique. En dehors de la formule au tiers, une franchise peut s'appliquer, sauf lorsque votre responsabilité n'est pas engagée. C'est pourquoi le choix des garanties mérite réflexion, en lien avec la cote du modèle, son état et la fréquence de vos sorties." },

    { h2: "Les garanties spécifiques aux véhicules anciens ou de collection" },
    { p: "Un véhicule ancien ou de collection ne s'assure pas comme un modèle plus récent ou un véhicule à usage quotidien. Usage secondaire (sorties, rassemblements, balades) : cette spécificité justifie des garanties adaptées. Avec AMV Légende, les cotisations sont dégressives selon l'ancienneté et le nombre de véhicules assurés. Plusieurs deux-roues anciens ? Le contrat flotte de collection les regroupe sous une seule police, et les garanties se modulent véhicule par véhicule, selon la valeur de chaque modèle. Bon à savoir : les trajets domicile-travail restent possibles de façon occasionnelle, dans la limite de 12 fois par an, à condition de le mentionner lors du devis." },

    { h2: "La carte grise de collection : conditions et avantages" },
    { p: "Passer votre moto en carte grise de collection lui donne un statut administratif spécifique. Voici les conditions à remplir :" },
    { ul: [
      "Le véhicule doit avoir au moins 30 ans.",
      "Son type ne doit plus être produit.",
      "Il doit être conservé dans son état d'origine, sans modification majeure des caractéristiques techniques.",
      "Une attestation de datation et de caractéristiques, délivrée par la FFVE (Fédération Française des Véhicules d'Époque) ou par le constructeur, est nécessaire pour demander le certificat d'immatriculation de collection auprès de l'ANTS."
    ] },
    { p: "Ce statut de carte grise collection présente plusieurs avantages concrets pour le motard :" },
    { ul: [
      "Contrôle technique allégé : pour les deux-roues concernés, il est plus espacé (tous les 5 ans), et les modèles mis en circulation avant 1960 en sont exemptés.",
      "Plaques noires autorisées : le format d'époque est admis.",
      "Dérogations possibles en ZFE : selon les collectivités, ces véhicules peuvent circuler en zone à faibles émissions."
    ] },
    { p: "Côté assurance, chez AMV Légende, les garanties proposées sont les mêmes pour un véhicule en carte grise de collection et pour un véhicule de plus de 15 ans immatriculé normalement. Bon à savoir : la valeur patrimoniale d'un deux-roues ancien peut augmenter avec le temps. Une couverture adaptée protège donc à la fois votre passion et votre investissement." },

    { h2: "Comment souscrire une assurance moto ancienne ou de collection en ligne ?" },
    { p: "Pour assurer votre moto ancienne ou de collection, la souscription chez AMV Légende est rapide et entièrement en ligne. Munissez-vous de votre permis de conduire, renseignez les informations sur votre moto (marque, modèle, année, valeur), puis obtenez votre devis gratuit en quelques minutes. Si le tarif vous convient, finalisez en quelques clics et recevez votre attestation d'assurance par e-mail. Choisissez la formule qui répond le mieux à vos besoins, avant de prendre la route en toute sérénité." }
  ];

  var FAQ = [
    { h2: "Questions fréquentes sur l'assurance moto ancienne ou de collection" },
    { h3: "Comment bien choisir son assurance moto ancienne ou de collection ?" },
    { p: "Commencez par évaluer la valeur réelle de votre véhicule ancien ou de collection, pour bénéficier d'une couverture adéquate. Privilégiez un assureur spécialiste comme AMV Légende, qui propose une offre dédiée, et lisez attentivement les garanties au-delà du seul tarif : vol, incendie, tous accidents, assistance (en option), garantie Défense Pénale et Recours Suite à Accident. Tenez compte des spécificités de votre véhicule ancien ou de collection, comme l'usage secondaire ou la possibilité de regrouper plusieurs véhicules dans un contrat flotte." },
    { h3: "Quelle est la meilleure assurance moto ancienne ou de collection au meilleur prix ?" },
    { p: "Il n'existe pas de réponse unique : le prix dépend de l'âge du véhicule, du nombre de véhicules assurés et des garanties choisies. La formule au tiers est la moins chère, car elle offre moins de garanties. Pour trouver la meilleure offre, un devis personnalisé en ligne sur AMV Légende vous propose un tarif adapté en quelques clics, avec des cotisations dégressives selon l'âge des véhicules et leur nombre." },
    { h3: "Combien coûte ce type de contrat ?" },
    { p: "Chez AMV Légende, la cotisation dépend de trois critères : le nombre de véhicules assurés, la tranche d'âge de chaque véhicule et sa valeur lorsque des garanties dommages (vol, incendie) sont souscrites. Dédié à un véhicule secondaire, un contrat AMV Légende coûte en général moins cher qu'un contrat pour un véhicule à usage quotidien." },
    { h3: "Quel avantage à passer une moto en carte grise de collection ?" },
    { p: "Une moto de 30 ans et plus passée en carte grise de collection donne droit à un contrôle technique plus espacé, à l'usage des plaques noires d'époque et, selon les collectivités, à des dérogations en zone à faibles émissions. Cette démarche peut aussi valoriser le caractère patrimonial du véhicule. Côté assurance, chez AMV Légende, les garanties sont les mêmes avec ou sans carte grise de collection." },
    { h3: "Comment changer ou résilier son assurance ?" },
    { p: "Depuis la loi Hamon, après un an d'engagement, vous pouvez procéder à la résiliation à tout moment, sans frais ni justification. Ne résiliez pas avant d'avoir souscrit ailleurs : demandez d'abord votre devis chez AMV Légende, puis mandatez-la pour effectuer les démarches à votre place." },
    { h3: "Faut-il une carte grise de collection pour assurer une moto ancienne chez AMV Légende ?" },
    { p: "La carte grise de collection n'est pas obligatoire pour assurer une moto ancienne chez AMV Légende. Les garanties proposées sont les mêmes, que votre moto soit en carte grise de collection ou qu'il s'agisse d'une moto de plus de 15 ans immatriculée normalement. Un conseiller peut vous orienter vers la formule la plus adaptée à votre situation." }
  ];

  // ----- moteur de rendu -----
  function norm(s){return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
  function el(tag, cls, html){var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e;}
  function badge(t){var b=el("span","rl-hntag",t); return b;}
  function heading(level, txt){var d=el("div","rl-q"); d.appendChild(badge(level)); d.appendChild(document.createTextNode(" "+txt)); return d;}
  function renderItems(items){
    var frag=document.createDocumentFragment();
    items.forEach(function(it){
      if(it.h2) frag.appendChild(heading("H2", it.h2));
      else if(it.h3) frag.appendChild(heading("H3", it.h3));
      else if(it.p) frag.appendChild(el("p", null, it.p));
      else if(it.note){var p=el("p",null,null); p.appendChild(el("em",null,it.note)); frag.appendChild(p);}
      else if(it.ul){var ul=el("ul",null,null); it.ul.forEach(function(li){ul.appendChild(el("li",null,li));}); frag.appendChild(ul);}
      else if(it.table){
        var t=el("table","rl-table",null);
        var thead=el("thead",null,null), tr=el("tr",null,null);
        it.table.head.forEach(function(h){tr.appendChild(el("th",null,h));}); thead.appendChild(tr); t.appendChild(thead);
        var tb=el("tbody",null,null);
        it.table.rows.forEach(function(r){var row=el("tr",null,null); r.forEach(function(c){row.appendChild(el("td",null,c));}); tb.appendChild(row);}); t.appendChild(tb);
        frag.appendChild(t);
      }
    });
    return frag;
  }
  function block(items){var box=el("div","rl-add",null); box.appendChild(badge("Nouveau contenu optimisé")); box.appendChild(renderItems(items)); return box;}
  function findByText(sel, text){var n=norm(text); var list=[].slice.call(document.querySelectorAll(sel)); for(var i=0;i<list.length;i++){ if(norm(list[i].textContent).indexOf(n)>=0) return list[i]; } return null;}
  function insertAfter(node, ref){ ref.parentNode.insertBefore(node, ref.nextSibling); }
  function insertBefore(node, ref){ ref.parentNode.insertBefore(node, ref); }

  function apply(){
    var done = true;
    // 1. H1
    var h1 = document.querySelector("h1");
    if(h1 && !h1.getAttribute("data-rl")){
      h1.setAttribute("data-rl","1"); h1.classList.add("rl-del");
      var nh = el("div","rl-add rl-inline",null); nh.id="rl-h1box"; nh.appendChild(badge("H1"));
      nh.appendChild(el("span","rl-h1", H1)); insertAfter(nh, h1);
    }
    // 2. Intro haute (3 lignes) apres le nouveau H1, au-dessus de "Obtenir un tarif"
    // L'intro se place en haut de la colonne de contenu, juste AVANT "Obtenir un tarif"
    // (rendu Heliaq sur qualif2). Le .page-header etant en flex, l'y laisser la collerait
    // a cote du H1 au lieu de la passer dessous.
    var cta = document.querySelector(".Transform_h2_div_obtenirTarif");
    if(cta && !document.getElementById("rl-intro")){ var bi=block(INTRO_TOP); bi.id="rl-intro"; insertBefore(bi, cta); }
    // 2 bis. Bloc sous les boutons : desactive depuis le 05/08 (INTRO_BAS vide), garde en place
    //        au cas ou AMV redemanderait de scinder l'intro.
    var btns = document.querySelector(".buttonsEntreeTunnel");
    if(btns && INTRO_BAS.length && !document.getElementById("rl-intro-bas")){ var bb2=block(INTRO_BAS); bb2.id="rl-intro-bas"; insertAfter(bb2, btns); }
    // 3. Corps optimise apres le paragraphe d'intro existant (ancre H2 "chez AMV")
    var anchorIntro = findByText("h2", "chez amv") || findByText("h2", "assurance auto et moto de collection");
    if(anchorIntro && !document.getElementById("rl-body")){
      var bb=block(BODY); bb.id="rl-body";
      // inserer apres le bloc (section) de l'intro : on vise le paragraphe suivant de l'ancre
      var host = anchorIntro;
      var p = anchorIntro.parentNode;
      // chercher le dernier paragraphe de la section d'intro
      var sib = anchorIntro; var last = anchorIntro;
      while(sib && sib.nextElementSibling && !/^H[1-3]$/.test(sib.nextElementSibling.tagName) && !sib.nextElementSibling.classList.contains("accordion")){ last = sib.nextElementSibling; sib = sib.nextElementSibling; }
      insertAfter(bb, last);
    }
    // 4. FAQ : les nouvelles questions sont RATTACHEES a la FAQ du gabarit (h3.accordion + div.panel),
    //    a la suite des questions existantes, elles-memes barrees. Demande Pierre du 03/08.
    var firstFaq = findByText("h3.accordion","comment bien choisir") || document.querySelector("h3.accordion");
    if(firstFaq && !document.getElementById("rl-faq-titre")){
      var host = firstFaq.parentNode;
      var existants = [].slice.call(host.querySelectorAll("h3.accordion"));
      var dernier = existants.length ? existants[existants.length - 1] : firstFaq;
      var apres = dernier.nextElementSibling && dernier.nextElementSibling.classList.contains("panel")
        ? dernier.nextElementSibling : dernier;

      // titre de section, juste avant l'encadre FAQ
      var titre = FAQ.find(function(it){ return it.h2; });
      if(titre){
        var refH2 = document.querySelector("h2.h2-orange") || document.querySelector("h2");
        var h2 = refH2 ? refH2.cloneNode(false) : el("h2", null, null);
        h2.removeAttribute("id");
        h2.className = (refH2 ? refH2.className + " " : "") + "rl-faq-new";
        h2.id = "rl-faq-titre";
        h2.textContent = titre.h2;
        var encadre = host.closest(".encadre-faq") || host;
        encadre.parentNode.insertBefore(h2, encadre);
      }

      // une question = un h3.accordion + un div.panel, au format du gabarit
      var courant = null, ref = apres;
      FAQ.forEach(function(it){
        if(it.h2) return;
        if(it.h3){
          var h3 = el("h3", "accordion active rl-faq-new", '<span class="chevron fa"></span>&nbsp;' + it.h3);
          ref.parentNode.insertBefore(h3, ref.nextSibling); ref = h3;
          courant = el("div", "panel rl-faq-new", null);
          // le gabarit pilote l'ouverture par un max-height inline (JS du site inerte dans la copie)
          courant.style.maxHeight = "none";
          ref.parentNode.insertBefore(courant, ref.nextSibling); ref = courant;
          (function(titre3, panneau){
            titre3.style.cursor = "pointer";
            titre3.addEventListener("click", function(){
              var ferme = panneau.style.maxHeight === "0px";
              panneau.style.maxHeight = ferme ? "none" : "0px";
              titre3.classList.toggle("active", ferme);
            });
          })(h3, courant);
        } else if(courant){
          courant.appendChild(renderItems([it]));
        }
      });

      existants.forEach(function(h){
        h.classList.add("rl-del");
        var pan = h.nextElementSibling;
        if(pan && pan.classList.contains("panel")) pan.classList.add("rl-del");
      });
    }
    if(!h1 || !anchorIntro || !firstFaq) done=false;
    return done;
  }

  function addControls(){
    if(document.getElementById("rl-toggle")) return;
    var btn=el("button",null,'<span class="dot"></span> Voir les modifications'); btn.id="rl-toggle";
    btn.addEventListener("click", function () {
      var b = document.body, on = b.classList.toggle("rl-on");
      b.classList.toggle("rl-final", !on);
      btn.innerHTML = '<span class="dot"></span> ' + (on ? "Version finale" : "Voir les modifications");
    });
    document.body.appendChild(btn);
    var lg=el("div",null,'<span class="sw sw-del"></span> Contenu supprimé/remplacé<br><span class="sw sw-add"></span> Nouveau contenu optimisé'); lg.id="rl-legend";
    document.body.appendChild(lg);
    document.body.classList.add("rl-final");
  }
  function init(){ addControls(); var t=0; var timer=setInterval(function(){ t++; if(apply()||t>40){ clearInterval(timer);} }, 250); }
  if(document.readyState==="complete"||document.readyState==="interactive") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
