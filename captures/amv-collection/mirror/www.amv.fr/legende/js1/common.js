var submenuTimeTO = 500;
var submenuTO;

var rightModule = function (options) {

    this.display = false; // status de l'accordéon
    var jQelm = null; //module
    var jQelmBtn = null; // bouton pour activer l'accordéon
    var jQelmContent = null; // contenu à ouvrir/fermer
    var thisClass = this;

    /*
     * Constructeur
     */
    this.construct = function (options) {
        if (options && options.hasOwnProperty('elmName') && options.elmName != '') {
            jQelm = $(options.elmName);
            jQelmBtn = $(options.elmName + " h3 .accordeon-mobile");
            jQelmContent = $(options.elmName + " .content");
            this.display = (jQelmContent.css('display') === "none" ? false : true); // on récupere l'état par défaut du bloc
        }
    };

    /*
     * methodes
     */
    this.init = function () {
        setBtnStatus();
        jQelmBtn.on("touchend", this.touch);
    };
    this.touch = function () {
        thisClass.display = !thisClass.display;
        setBtnStatus();
        if (thisClass.display) {
            open();
        } else {
            close();
        }
    };
    var open = function () {
        jQelmContent.show();
    };
    var close = function () {
        jQelmContent.hide();
    };
    var setBtnStatus = function () {
        jQelmBtn.children("i").toggleClass('fa-chevron-up', thisClass.display);
        jQelmBtn.children("i").toggleClass('fa-chevron-down', !thisClass.display);
    };

    this.construct(options);

};

$(document).ready(function () {

    /* Déroule le bandeau Mon espace */
    $("#encart").on("click", function () {
        $(this).addClass('actif');
        $("section#mon-espace").slideDown();
    });

    /* Ferme le bandeau Mon Espace */
    $(".fermer-mon-espace").on("click", function () {
        $("#encart, #bouton-espace-client-mobile").removeClass('actif');
        $("section#mon-espace").slideUp();
    });

    /* Déroule le bandeau Mon espace mobile */
    $(".bouton-espace-client-mobile").on("click", function () {
        if ($(this).hasClass('actif')) {
            $("section#mon-espace").slideUp();
        } else {
            $("section#mon-espace").slideDown();
        }
        $(this).toggleClass('actif');

    });

    // Fait apparaitre le menu principal sur Desktop menu-button-desktop
    $("#main-menu-espace-client").on("mouseenter", function () {
        $("ul.nav-menu").show();
    });
    $("#main-menu-espace-client").on("mouseleave", function () {
        $("ul.nav-menu").hide();
    });

    //Fait apparaitre les sous-menus avec liens vers produits en mobile
    $("#main-menu .item-101").on
        ("mouseover", function () {
            $("#main-menu .submenu").show();
        });

    //Affiche/cache le sous-menu avec liens vers produits en mobile
    $("#main-menu .item-101").on
        ("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $("#main-menu .submenu").hide();
            }
            else {
                $(this).addClass("active");
                $("#main-menu .submenu").show();
            }
        });
/*
    $("#main-menu .item-101,#main-menu ul.nav-menu").on("mouseleave", function () {
         submenuTO = setTimeout("hideMenu()", submenuTimeTO);
    });


    $("#main-menu .submenu,#main-menu ul.nav-menu").on("mouseover", function () {
        clearTimeout(submenuTO);
    });

    $("#main-menu .submenu").on("mouseleave", function () {
        $("#main-menu .submenu").hide();
    });*/

    //Ouvre/Ferme le menu principal en mobile
    $("#menu-button").on("click", function () {
        
        if ($(this).hasClass("active")) {
            $("ul.nav-menu, #main-menu").hide();
            $("#main-menu-espace-client").hide();
        }
        else {
            $("ul.nav-menu, #main-menu").show();
            $("#main-menu-espace-client").show();
        }
        $(this).toggleClass("active");
        
    });

    // Fait apparaitre le menu principal
    // au survol desktop
    
    $("#main-menu-espace-client").on("mouseenter", function () {
        mainMenu.open();
    });
    /*
    $("#main-menu-espace-client").on("mouseleave", function () {
        mainMenu.close();
    });
    */
    // au touch sur mobile/tablet
    //$("#main-menu-espace-client #menu-button-espace-client").on("touchend", function (evt) {
    //    evt.preventDefault();
    //    evt.stopPropagation();
    //    mainMenu.toggle();
    //});

    var mainMenu = {
        status: false,
        open: function () {
            this.status = true;
            $("#main-menu-espace-client #menu-button-espace-client").addClass('active');
            $("#main-menu-espace-client .item-101")
                .on("mouseenter", function () {
                    $("#main-menu-espace-client .submenu").show();
                })
                .on("mouseleave", function () {
                    $("#main-menu-espace-client .submenu").hide();
                });
            $("#main-menu-espace-client .item-101>a").on("touchend", function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                $("#main-menu-espace-client .submenu").toggle();
            });
            $("#main-menu-espace-client ul.nav").show();
            if ($("a.bouton-espace-client-mobile").hasClass('actif')) {
                $("a.bouton-espace-client-mobile").removeClass('visible-mobile');
                $("a.bouton-espace-client-mobile").hide();
            }


        },
        close: function () {
            this.status = false;
            $("#main-menu-espace-client #menu-button-espace-client").removeClass('active');
            $("#main-menu-espace-client .item-101")
                .off("mouseenter")
                .off("mouseleave")
            $("#main-menu-espace-client .item-101>a").off("touchend");
            $("#main-menu-espace-client ul.nav").hide();
            if ($("a.bouton-espace-client-mobile").hasClass('actif')) {
                $("a.bouton-espace-client-mobile").addClass('visible-mobile');
                $("a.bouton-espace-client-mobile").show();
            }
        },
        toggle: function () {
            if (!this.status) {
                this.open();
            } else {
                this.close();
            }
        }
    }

    // Déplace le menu scooter dans le menu principal pour les téléphones
    if ($(window).width() <= 800) {
        $('.submenu .item-207').insertAfter('.submenu .item-201');
    }


    // Fermeture bandeau cookies

    $("#bandeau-cookies a").on("click", function () {
        $("#bandeau-cookies").fadeOut();
    });



    // Roll over sur des images
    var image_over;
    var image_src;
    $(".submenu .level-2, #lightbox .content .item, .content-choix-contrat .level-2").on("mouseenter", function () {
        image_src = $(this).find("img").attr("src");
        var over_string = "-over";
        var ext_position = image_src.indexOf(".png");
        var doubleOver = image_src.indexOf("-over-over");
        var myString = image_src;
        if (doubleOver === -1) {
            image_over = myString.insertAt(ext_position, "-over");
            $(this).find("img").attr("src", image_over);
        }

    });

    $(".submenu .level-2, #lightbox .content, .content-choix-contrat .level-2").mouseleave(function () {
        $(this).find("img").attr("src", image_src);
    });

    /*
     * Pour chaque module de la colonne de droite
     * on affecte un comportement accordéon (classe rightModule)
     * */
    $("#espace-modules-droite").children(".module-espace").each(function (index) {
        new rightModule({ elmName: '#' + $(this).attr('id') }).init();
    });
    $("a").each(function () {
        var lien = $(this);
        var contenuOnClick = lien.attr("onclick");
        if (contenuOnClick && contenuOnClick.indexOf("tag") !== -1) {
            fonctionPostBack = lien.attr("href").split("javascript:")[1];
            if (fonctionPostBack) {
                contenuOnClick = contenuOnClick.split("return true")[0];
                fonctionPostBack = "javascript:" + contenuOnClick + fonctionPostBack;
                lien.attr("href", fonctionPostBack);
                lien.attr("onclick", "");
            }
        }
    });
});
function showWait(element) {
    if (document.getElementById("ctl00_Contenu_BtnValiderEnvoieFichier") != null){
        document.getElementById("ctl00_Contenu_BtnValiderEnvoieFichier").style.opacity = "0.5";
        document.getElementById("ctl00_Contenu_BtnValiderEnvoieFichier").style.pointerEvents = "none";
        document.getElementById("ctl00_Contenu_BtnValiderEnvoieFichier").disabled = "true";
    }   
    $(element).closest('.panel-espace-contrat').find('.wait-panel').slideDown();
    $(element).closest('.panel-espace-contrat').find('.wait-image').fadeIn(3000);
}
function hideMenu() {
    $("#main-menu .submenu").hide();

    $("#main-menu .item-101").removeClass("active");
}

function validateTextInput(event) {
    const key = event.key;
    const input = event.target;

    // Vérifie si le caractère est une lettre, chiffre, accent, ou espace autorisé
    const isValidCharacter = /^[a-zA-Z0-9À-ÖØ-öø-ÿ]$/.test(key) ||
        key === "Backspace" ||
        key === "Delete" ||
        key === "ArrowLeft" ||
        key === "ArrowRight";

    // Autorise un espace seulement si le dernier caractère n'est pas déjà un espace
    const isSingleSpaceAllowed = key === " " && input.value.slice(-1) !== " ";

    return isValidCharacter || isSingleSpaceAllowed;
}


function validateNumberInput(event) {
    const key = event.key;
    const input = event.target;

    // Autorise uniquement les chiffres et les touches spéciales de suppression ou navigation
    const isDigitAllowed = /[0-9]/.test(key);
    const isSpecialKeyAllowed = key === "Backspace" || key === "Delete" || key === "ArrowLeft" || key === "ArrowRight";

    // Retourne true si c'est un chiffre avec moins de 6 caractères ou une touche spéciale
    return isDigitAllowed || isSpecialKeyAllowed;
}


String.prototype.insertAt = function (index, string) {
    return this.substr(0, index) + string + this.substr(index);
};

function validateTextInput(event) {
    const key = event.key;
    const input = event.target;
    // Vérifie si le caractère est une lettre, chiffre, accent, ou espace autorisé
    const isValidCharacter = /^[a-zA-Z0-9À-ÖØ-öø-ÿ]$/.test(key) ||
        key === "Backspace" ||
        key === "Delete" ||
        key === "ArrowLeft" ||
        key === "ArrowRight";
    // Autorise un espace seulement si le dernier caractère n'est pas déjà un espace
    const isSingleSpaceAllowed = key === " " && input.value.slice(-1) !== " ";
    return isValidCharacter || isSingleSpaceAllowed;
}

function validateAdresseInput(event) {
    const input = event.target; // Champ concerné
    const value = input.value; // Valeur actuelle du champ
    const key = event.key; // Touche pressée

    // Règles pour le premier caractère
    const isValidFirstChar = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9]$/.test(key);

    // Règles pour les caractères suivants
    const isValidOtherChar = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9'\/\\-]$/.test(key);

    // Autorisation des touches de contrôle (Backspace, Delete, flèches)
    const isControlKey = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(key);

    // Vérification des espaces : autorisés uniquement entre deux caractères
    const isSingleSpaceAllowed = key === " " && value.length > 0 && value.slice(-1) !== " ";

    console.log(`Key: ${key}, Value: ${value}`);
    console.log(`isValidFirstChar: ${isValidFirstChar}, isValidOtherChar: ${isValidOtherChar}, isControlKey: ${isControlKey}, isSingleSpaceAllowed: ${isSingleSpaceAllowed}`);

    // Si la touche est de contrôle (ex: Backspace, Delete), elle est toujours autorisée
    if (isControlKey) {
        return true;
    }
    // Vérification de la validité
    if (value.length === 0) {
        // Vérifie le premier caractère
        if (!isValidFirstChar) {
            event.preventDefault();
            return false;
        }
    } else {
        // Vérifie les autres caractères
        if (!isValidOtherChar && !isSingleSpaceAllowed && !isControlKey) {
            event.preventDefault();
            return false;
        }
    }
    return true;
    
}

function validateNumberInput(event) {
    const key = event.key;
    const input = event.target;

    // Autorise uniquement les chiffres et les touches spéciales de suppression ou navigation
    const isDigitAllowed = /[0-9]/.test(key);
    const isSpecialKeyAllowed = key === "Backspace" || key === "Delete" || key === "ArrowLeft" || key === "ArrowRight";
    // Retourne true si c'est un chiffre avec moins de 6 caractères ou une touche spéciale
    return isDigitAllowed || isSpecialKeyAllowed;
}

