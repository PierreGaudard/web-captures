// Redline AMV - page assurance auto et moto de collection (template Legende/ASP.NET).
// Ancien contenu barre (rouge), nouveau contenu optimise (vert). Bouton "Modifications".
(function () {
  // Contenu optimise (score Datafer 88/100, mot-cle "assurance moto de collection").
  var H1 = "Assurance auto et moto de collection";

  var INTRO = [
    { note: "À retenir : l'offre AMV Légende protège vos deux-roues et autos anciens avec des formules au tiers, vol-incendie ou tous risques, des tarifs dégressifs selon l'âge et le nombre de véhicules, et un devis en ligne gratuit en quelques minutes." },
    { p: "Vous cherchez une assurance moto de collection à la hauteur de la valeur de votre deux-roues ancien ? AMV, leader de l'assurance moto en France depuis 1974, a conçu l'offre AMV Légende pour couvrir les autos et motos anciennes. Spécialiste reconnu du deux-roues, AMV met son expertise au service des passionnés : une couverture sur-mesure, des garanties pensées pour les véhicules de collection et une souscription rapide. Construisez votre contrat avec le niveau de protection qui convient à chacun de vos modèles et profitez de tarifs avantageux, dégressifs selon l'âge et le nombre de véhicules à assurer." }
  ];

  var BODY = [
    { h2: "Pourquoi choisir AMV pour votre assurance moto de collection ?" },
    { p: "AMV est l'assureur spécialiste des deux-roues et des véhicules anciens. Plus d'1 million d'assurés lui font confiance, avec une note de 4,7/5 selon les avis clients vérifiés et une distinction du magazine Capital parmi les meilleures assurances 2024-2025. Plus de 300 conseillers en France vous accompagnent par téléphone ou en ligne, et un interlocuteur dédié suit votre dossier en cas de sinistre. Cette expertise change tout : un assureur généraliste connaît mal les besoins d'un motard collectionneur, là où AMV protège votre patrimoine roulant comme il le mérite. Vous pilotez votre contrat en toute autonomie depuis l'espace client Mon Espace AMV, simple et sécurisé." },

    { h2: "Les formules d'assurance moto de collection" },
    { p: "AMV décline plusieurs formules, de la couverture essentielle à la protection tous risques. Vous choisissez le niveau de garanties selon la valeur de votre véhicule, son usage et votre budget. Trois piliers restent toujours présents : la responsabilité civile obligatoire, l'assistance et la protection juridique." },
    { table: {
        head: ["Formule", "Pour qui ?", "Garanties principales"],
        rows: [
          ["Au tiers", "Moto ancienne de faible valeur, usage occasionnel", "Responsabilité civile, défense pénale et protection juridique, assistance"],
          ["Tiers + vol et incendie", "Deux-roues stationné en extérieur ou de valeur", "Garanties du tiers + vol, tentative de vol, incendie"],
          ["Tous risques", "Modèle de valeur, restauré ou récent", "Garanties précédentes + tous accidents, vandalisme, catastrophes naturelles"]
        ]
    } },
    { p: "La formule au tiers vous couvre en responsabilité civile : c'est la garantie minimale obligatoire, qui indemnise les dommages causés à un tiers. Elle convient aux motos anciennes de faible valeur ou utilisées ponctuellement pour le loisir, et reste l'option la moins chère car elle offre une couverture essentielle." },
    { p: "La formule intermédiaire ajoute la prise en charge du vol, de la tentative de vol et de l'incendie. Elle est recommandée si vous garez votre deux-roues en extérieur ou dans un lieu non clos : le risque de vol est réel, en particulier pour les modèles anciens recherchés." },
    { p: "La formule tous risques indemnise les dommages subis par votre véhicule assuré, même lors d'un sinistre responsable, et couvre le vandalisme. C'est la protection la plus complète, conseillée pour un modèle de valeur, restauré ou financé à crédit. À ces formules s'ajoutent l'assistance (dépannage, remorquage, rapatriement) et la protection juridique, qui défend vos intérêts en cas de litige." },
    { p: "En cas de sinistre, l'indemnisation tient compte de la nature du véhicule : une moto ancienne se répare avec des pièces parfois rares, et son estimation relève d'une expertise spécifique. Selon la formule et l'option choisies, une franchise peut s'appliquer. C'est pourquoi le choix des garanties mérite réflexion, en lien avec la cote du modèle, son état et la fréquence de vos sorties." },

    { h2: "Les garanties spécifiques aux véhicules de collection" },
    { p: "Un véhicule de collection ne se couvre pas comme un modèle classique. Son usage est généralement limité (sorties, rassemblements, balades entre motards), son kilométrage faible et son entretien soigné : autant de spécificités qui justifient des garanties adaptées et des tarifs préférentiels. Avec AMV Légende, vous profitez de cotisations dégressives selon l'ancienneté du véhicule et le nombre de motos ou autos assurées. Si vous possédez plusieurs deux-roues anciens, le contrat flotte de collection les regroupe sous une seule police, pour un suivi simplifié et un coût optimisé. Les garanties se modulent véhicule par véhicule, selon que vous roulez régulièrement sur de courts trajets ou que vous conservez une pièce rare de votre patrimoine." },

    { h2: "La carte grise de collection : conditions et avantages" },
    { p: "Passer votre moto en carte grise de collection ouvre droit à un statut spécifique et à une assurance dédiée. Voici les conditions à remplir :" },
    { ul: [
      "Le véhicule doit avoir au moins 30 ans.",
      "Son type ne doit plus être produit.",
      "Il doit être conservé dans son état d'origine, sans modification majeure des caractéristiques techniques.",
      "Une attestation de datation et de caractéristiques délivrée par la FFVE (Fédération Française des Véhicules d'Époque) est nécessaire pour demander le certificat d'immatriculation auprès de l'ANTS."
    ] },
    { p: "Ce statut présente plusieurs avantages concrets pour le motard :" },
    { ul: [
      "Contrôle technique allégé : pour les deux-roues concernés, il est espacé (tous les 5 ans), et les modèles mis en circulation avant 1960 en sont exemptés.",
      "Circulation sur tout le territoire : la carte grise de collection autorise à rouler partout en France.",
      "Plaques noires autorisées : le format d'époque est admis.",
      "Prime réduite : peu utilisés et bien entretenus, ces véhicules bénéficient souvent d'un tarif avantageux.",
      "Dérogations possibles en ZFE : selon les collectivités, ces véhicules peuvent circuler en zone à faibles émissions."
    ] },
    { p: "Bon à savoir : la valeur patrimoniale d'un deux-roues ancien peut augmenter avec le temps. Une couverture adaptée protège donc à la fois votre passion et votre investissement." },

    { h2: "Comment souscrire une assurance moto de collection en ligne ?" },
    { p: "La souscription chez AMV est rapide et entièrement en ligne. Munissez-vous de votre permis de conduire et de la carte grise du véhicule, renseignez les informations sur votre moto (marque, modèle, cylindrée, année, usage prévu) et sur votre profil de conducteur, puis obtenez votre devis gratuit en quelques minutes. Si le tarif vous convient, finalisez en quelques clics et recevez votre carte verte par e-mail. Sans engagement, vous comparez les formules à l'aide de notre comparateur et choisissez celle qui répond le mieux à vos besoins, avant de prendre la route en toute sérénité." }
  ];

  var FAQ = [
    { h2: "Questions fréquentes sur l'assurance moto de collection" },
    { h3: "Comment bien choisir son assurance moto de collection ?" },
    { p: "Commencez par évaluer la valeur réelle de votre véhicule ancien, pour bénéficier d'une couverture adéquate. Privilégiez un assureur spécialiste comme AMV, qui propose une offre dédiée, et lisez attentivement les garanties au-delà du seul tarif : vol, incendie, tous accidents, assistance, protection juridique. Comparez les offres avec un comparateur d'assurance et tenez compte des spécificités du véhicule de collection, comme l'usage limité ou la possibilité de regrouper plusieurs véhicules dans un contrat flotte." },
    { h3: "Quelle est la meilleure assurance moto de collection au meilleur prix ?" },
    { p: "Il n'existe pas de réponse unique : le prix dépend de l'âge du véhicule, des garanties choisies et du profil de l'assuré. Généralement, la formule au tiers est la moins chère car elle offre une couverture essentielle. Pour trouver la meilleure offre, un devis personnalisé en ligne vous donne le tarif adapté en quelques clics, avec des cotisations dégressives selon l'âge et le nombre de véhicules." },
    { h3: "Combien coûte ce type de contrat ?" },
    { p: "Le coût dépend de la valeur et de la cylindrée du véhicule, de son usage (loisir, rassemblements, courts trajets), de l'âge et de l'expérience du conducteur, de son bonus, de la zone géographique et du niveau de garanties choisi. Les véhicules de collection, peu roulés et bien entretenus, bénéficient souvent de primes réduites par rapport à une moto classique." },
    { h3: "Quel avantage à passer une moto en carte grise de collection ?" },
    { p: "Une moto de 30 ans et plus passée en carte grise de collection donne droit à un contrôle technique espacé, à l'usage des plaques noires d'époque, à la circulation sur tout le territoire et, souvent, à un tarif d'assurance réduit. Cette démarche valorise aussi le caractère patrimonial du véhicule." },
    { h3: "Comment changer ou résilier son assurance ?" },
    { p: "Depuis la loi Hamon, après un an d'engagement vous pouvez procéder à la résiliation à tout moment, sans frais ni justification. Ne résiliez pas avant d'avoir souscrit ailleurs : demandez d'abord votre devis chez AMV Légende, puis mandatez AMV pour effectuer les démarches à votre place." },
    { h3: "Faut-il une carte grise de collection pour assurer une moto ancienne chez AMV ?" },
    { p: "La carte grise de collection n'est pas obligatoire pour assurer une moto ancienne, mais elle ouvre droit à des avantages spécifiques et à l'offre AMV Légende. AMV couvre aussi bien les motos anciennes immatriculées normalement que celles en collection. Un conseiller vous oriente vers la formule la plus adaptée à votre situation." }
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
    // 2. Intro apres le nouveau H1
    var h1box = document.getElementById("rl-h1box");
    if(h1box && !document.getElementById("rl-intro")){ var bi=block(INTRO); bi.id="rl-intro"; insertAfter(bi, h1box); }
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
    // 4. FAQ optimisee avant la 1re question existante ; on barre les questions existantes
    var firstFaq = findByText("h3.accordion","comment bien choisir") || document.querySelector("h3.accordion");
    if(firstFaq && !document.getElementById("rl-faq")){
      var bf=block(FAQ); bf.id="rl-faq"; insertBefore(bf, firstFaq);
      [].slice.call(document.querySelectorAll("h3.accordion")).forEach(function(h){ h.classList.add("rl-del"); });
    }
    if(!h1 || !anchorIntro || !firstFaq) done=false;
    return done;
  }

  function addControls(){
    if(document.getElementById("rl-toggle")) return;
    var btn=el("button",null,'<span class="dot"></span> Modifications'); btn.id="rl-toggle";
    btn.addEventListener("click", function(){ document.body.classList.toggle("rl-on"); });
    document.body.appendChild(btn);
    var lg=el("div",null,'<span class="sw sw-del"></span> Contenu supprimé/remplacé<br><span class="sw sw-add"></span> Nouveau contenu optimisé'); lg.id="rl-legend";
    document.body.appendChild(lg);
    document.body.classList.add("rl-on");
  }
  function init(){ addControls(); var t=0; var timer=setInterval(function(){ t++; if(apply()||t>40){ clearInterval(timer);} }, 250); }
  if(document.readyState==="complete"||document.readyState==="interactive") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
