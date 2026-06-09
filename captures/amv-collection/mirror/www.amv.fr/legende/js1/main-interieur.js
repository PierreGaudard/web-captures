function parseDateFromData(data) {
    var split = data.split(' ');
    var y = parseInt(split[0]);
    var m = parseInt(split[1]);
    var d = parseInt(split[2]);
    return new Date(y, m-1, d); //-1 : convention C# vs convention JS
}
/*
 * Classe listButtonObj
 * permet à des boutons d'afficher des sous-menus
 **/
var listButtonObj = function (options) {

    this.display = false; // status du menu
    var jQelm = null; //conteneur du bouton
    var jQelmBtn = null;  //le bouton
    var jQelmSubMenu = null; // le sous-menu
    var thisClass = this;

    /*
     * Constructeur
     */
    this.construct = function (options) {
        if (options && options.hasOwnProperty('elmName') && options.elmName != '') {
            jQelm = $(options.elmName);
            jQelmBtn = $(options.elmName + " >a");
            jQelmSubMenu = $(options.elmName + " .sous-menu");
        }
    };

    /*
     * methodes
     */
    this.init = function () {
        jQelm.on("mouseenter", function (evt) {
            open();
        });
        jQelm.on("mouseleave", function (evt) {
            close();
        });
        jQelmBtn.on("touchend", function (evt) {
            evt.preventDefault();
            touch();
        });
    };
    var touch = function () {
        thisClass.display = !thisClass.display;
        if (thisClass.display) {
            open();
        } else {
            close();
        }
    };
    var open = function () {
        thisClass.display = true;
        jQelmSubMenu.show();
    };
    var close = function () {
        thisClass.display = false;
        jQelmSubMenu.hide();
    };

    this.construct(options);

};

pageLoadCallbacks.push(function () {

    // Modifie les éléments de formulaire par Jquery UI sauf pour les versions mobiles

    if ($(window).width() > 800) {

        $('.ui-selectmenu-open').removeClass('ui-selectmenu-open');

        // transformation des select seulement s'ils n'ont pas l'attribute "data-select-hidden"
        $("select").each(function (i, elt) {
            if ($(elt).attr('data-select-native') == undefined && $(elt).attr('data-select-hidden') == undefined) {
                $(elt).selectmenu({
                    change: function (event, ui) {
                        $(event.target).trigger('change', event);
                    }
                });
            }
        });
        
        $(".date-input").each(function() {

            if ($(this).attr("disabled") == "disabled")
                return;

            var minDate = parseDateFromData($(this).attr('data-minDate'));
            var maxDate = parseDateFromData($(this).attr('data-maxDate'));
            var defaultDate = parseDateFromData($(this).attr('data-defaultDate'));
            /*
            console.log('minDate : ' + minDate);
            console.log('maxDate : ' + maxDate);
            console.log('defaultDate : ' + defaultDate);
            console.log('range : ' + '' + minDate.getFullYear() + ':' + maxDate.getFullYear());
            */
            var $this = $(this);
            $(this).datepicker({
                showOn: "button",
                buttonImage: "../images/calendar.png",
                buttonImageOnly: true,
                buttonText: "Sélectionnez une date",
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                defaultDate : defaultDate,
                minDate: minDate,
                maxDate: maxDate,
                yearRange: '' + minDate.getFullYear() + ':' + maxDate.getFullYear(),
                onClose: function(dateText, inst) 
                { 
                    $(this).attr("disabled", false);
                },
                beforeShow: function () {
                    $(this).attr("disabled", true);
                    $(".ui-datepicker").css('font-size', '1.4em');
                }
            });

            if ($this.inputmask != null)
                $this.inputmask({ alias: "datetime", inputFormat: "dd/mm/yyyy", placeholder: "-" });

        });
    }


    $(".telephone").each(function () {
        if ($(this).attr("disabled") == "disabled")
            return;
        var $this = $(this);
        if ($this.inputmask != null)
            $this.inputmask({ mask: "99 99 99 99 99", placeholder: " " });
    });

    // Modifie l'affichage des boutons radio
    $(".radioset").buttonset();
    $(".radioset-marker").buttonset(); // radioset-marker est juste un marqueur pour être transformé mais ne doit pas être utilisé en CSS

    // Modifie l'affichage des cases à cocher
    $('.aspCheckSmall > input').addClass("check").addClass("small");
    $('.aspCheck > input').addClass("check");
    $('.check-marker > input').addClass("check");

    if ($(".check, .check2").length !== 0) {
        var inputs = $('input.check:not(#TestDisabled)').each(function() {
            $(this).prettyCheckable({
                labelPosition: 'right'
            });
        });
    }

    // Utilise mobiscroll uniquement pour les mobiles
    if ($(window).width() <= 800) {
        $(".time-input").each(function () {
            $(this).mobiscroll().time({
                theme: 'default',
                display: 'bottom',
                timeformat:'H:i',
                lang: 'fr'
            });  
        });

        $(".date-input").each(function () {

            // pas de transformation mobiscroll en "disabled"
            if ($(this).attr("disabled") == "disabled")
                return;

            var minDate = parseDateFromData($(this).attr('data-minDate'));
            var maxDate = parseDateFromData($(this).attr('data-maxDate'));
            var defaultDate = parseDateFromData($(this).attr('data-defaultDate'));
            
            $(this).mobiscroll().date({
                theme: 'default',
                display: 'bottom',
                mode: 'clickpick',
                lang: 'fr',
                dateFormat: 'dd/mm/yy',
                max: maxDate,
                min: minDate,
                defaultValue: defaultDate,
                buttons: [
                    {
                        text: 'OK',
                        handler: 'set'
                    },
                    'cancel',
                ]
            });
        });

        var selects = document.querySelectorAll("select");
        for (var i = 0; i < selects.length; i++) {
            selects[i].appendChild(document.createElement("optgroup"));
        }
    }

    // Boite de dialog
    $(".dialog").dialog({
        autoOpen: false,
        modal: true,
        maxWidth: 408,
        closeText: "",
        width: 'auto',
        height: 'auto',
        fluid: true,
        show: {
            effect: "fadeIn",
            duration: 300
        },
        hide: {
            effect: "fadeOut",
            duration: 300
        }
    });

    // Placeholdes
    $("input[placeholder]").on("focus", function () { $(this).attr("placeholder", "")});
});

// on window resize run function
$(window).resize(function() {
    fluidDialog();
});


// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function(event, ui) {
    fluidDialog();
});

function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function() {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50)) {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    });

}

$.fn.fixIETableCells = function() {
    var $el;
    return this.each(function() {
        $el = $(this);
        var newDiv = $("<div />", {
            "class": "innerWrapper",
            "css": {
                "height": $el.height(),
                "width": "100%",
                "position": "relative",
                "padding-top": (($el.height() - 26) / 2) - 4
            }
        });
        $el.wrapInner(newDiv);
    });
};

/***************** Mon Espace ************************************/

function hideButtonMenu() {
    $(".sous-menu").hide();
}

var submenuButtonTimeTO = 500;
var submenuButtonTO;

pageLoadCallbacks.push(function () {

    /*
     * Ouverture d'un sous menu au survol du bouton sur desktop
     * Pour chaque élément de la classe .bouton-liste
     * on affecte un comportement de la classe listButtonObj
     * */
    $(".bouton-liste").each(function (index) {
        new listButtonObj({ elmName: '#' + $(this).attr('id') }).init();
    });

    // à décommenter si application du bug 324
    //$("a[data-menu='toggle'], .sous-menu").on("mouseenter", function () {
    //    var targetMenu = $(this).attr("target-menu");
    //    console.log(targetMenu);
    //    $(this).parent().find(targetMenu).toggle();
    //});


    $(".choix-contrat").click(function () {
        var options = {

            minWidth: 530,
            maxWidth: 760
        };

        $("#dialog-choix-contrat").dialog('option', options);
        $("#dialog-choix-contrat").dialog("open");
    });
});

/******************** Fin Mon Espace ********************************/

/* Boite de dialogue ucModalPopupBasic2 */

pageLoadCallbacks.push(function () {
    $('.modal-popup').each(function () {

        var maxWidth = 408;

        // voir si la popup ne redéfinit pas maxWidth
        var modalPopupElt = $(this);
        if ($(modalPopupElt).attr("data-maxWidth")) {
            maxWidth = parseInt($(modalPopupElt).attr("data-maxWidth"));
        }

        // Configuration de base du dialog
        var dialogOptions = {
            autoOpen: true,
            modal: true,
            maxWidth: maxWidth,
            closeText: "",
            width: 'auto',
            height: 'auto',
            fluid: true,
            show: {
                effect: "fadeIn",
                duration: 300
            },
            hide: {
                effect: "fadeOut",
                duration: 300
            },
            resizable: false,
            draggable: false,
            beforeClose: function (event, ui) {
                var btnClose = $(this).parent().find('.modal-popup-button-close');
                btnClose[0].click();
                return false;
            }
        };

        // Si la popup a aussi la classe "popupFormulaire", forcer à rester dans le form
        if ($(this).hasClass('popupFormulaire')) {
            dialogOptions.appendTo = "form";
        }

        $(this).dialog(dialogOptions);
    });

    $('.ui-dialog').each(function () {
       
        var lblTitre;
        var jquerytitleElement = $(this).find('.ui-dialog-title');
        if ($('.modal-popup-titre-gris').length) {
            lblTitre = $(this).find('.modal-popup-titre-gris');
            jquerytitleElement.addClass('titre-gris');
            jquerytitleElement.addClass('fa fa-check');
        }
        else {
             lblTitre = $(this).find('.modal-popup-titre');
        }        
        lblTitre.appendTo(jquerytitleElement);

        // cas où on ne veut pas montrer le titre
        if ($(this).find('.modal-popup-hidShowTitle').text() == "False")
            $(this).addClass('no-title');

        //cas où on ne veut pas montrer la croix
        if ($(this).find('.modal-popup-hidShowCross').text() == "False")
            $(this).addClass('no-cross');

        
    });
    
});