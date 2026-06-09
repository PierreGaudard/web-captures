$(document).ready(function() {

    /* Slider home */
    if ($('.slider-assurances-mobile').length != 0) {
        $('.slider-assurances-mobile').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: false,
            dots: true,
            arrows: false,
            initialSlide: 4,
            centerMode: true,
            swipeToSlide: true
        });
    }


    /* Fleche home */

    $("#scroll-down").on("click", function() {
        if ( !$(this).hasClass("up") ) {
            $("body").scrollTo("+=" + window.innerHeight, 500, {
                onAfter:function() {
                    if($(window).scrollTop() + $(window).height() == $(document).height()) {
                        $("#scroll-down").addClass("up");
                    }
                }
            });
        } else {
            $("body").scrollTo(0, 500);
            $("#scroll-down").removeClass("up");
        }

    })

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#scroll-down").addClass("up");
        }
    });

    

    /* Simulation de la page Choix type véhicule */
    $('input:radio[name="votre-vehicule"]').change(function(){
        if ($(this).next().text() == 'Autre') {
            $("#encadre-autre").slideDown();
            $("#form-auto").slideUp();
        }
        else {
            $("#encadre-autre").slideUp();
            $("#form-auto").slideDown();
        }
    });

    $( "#modele" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-modele").text(ui.item.label);
        }
    });
    $( "#sous-modele" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-sous-modele").text(ui.item.label);
        }
    });
    $( "#marque" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-marque").text(ui.item.label);
        }
    });

    $( "#modele2" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-modele2").text(ui.item.label);
        }
    });
    $( "#sous-modele2" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-sous-modele2").text(ui.item.label);
        }
    });
    $( "#marque2" ).selectmenu({
        change: function( event, ui ) {
            $("#titre-marque2").text(ui.item.label);
        }
    });

    $("#simulation-nouveau-vehicule-btn").on("click", function() {
        $("#simulation-nouveau-vehicule").show();
    })
    /* Fin Simulation de la page Choix type véhicule */

    /* Ouverture Lightbox choix type vehicule */
    $( ".dialog-contact" ).click(function() {
        $( "#dialog-contact" ).dialog( "open" );
    });
    /* Fin Ouverture Lightbox choix type vehicule */

    /* Ouverture Lightbox choix type vehicule */
    $( ".suppr" ).click(function() {
        $( "#dialog-suppr" ).dialog( "open" );
    });
    /* Fin Ouverture Lightbox choix type vehicule */



    /* Gestion du set de boutons sur la page tarifs */
    $(".buttons-set li").on("click", function() {
        $(this).parent().parent().find("li").removeClass('active');
        $(this).addClass('active');
    })
    /* Gestion du set de boutons sur la page tarifs */

    /* Gestion du clic sur la selction de tarifs */
    $(".tableau-tarif .tarif").on("click", function() {
        if ($(this).hasClass("selected")) {
            $(this).parent().parent().find(".tarif").removeClass("selected").removeClass("opacity");
            $("#bottom-mobile-tarif #step1").slideDown(800);
            $("#bottom-mobile-tarif #step2").hide();
        } else {
            $(this).parent().parent().find(".tarif").removeClass("selected").addClass("opacity");
            $(this).addClass("selected").removeClass("opacity");

            $("#bottom-mobile-tarif #step1").hide();
            $("#bottom-mobile-tarif #step2").slideDown(800);
        }
    })

    /* Ouverture Lightbox tarifs formules */
    $( ".dialog-formules" ).click(function() {
        $( "#dialog-formules" ).dialog( "open" );
    });
    /* Fin Ouverture Lightbox tarifs formules */

    /* Ouverture Lightbox tarifs formules */
    $( ".dialog-options" ).click(function() {
        $( "#dialog-options" ).dialog( "open" );
    });
    /* Fin Ouverture Lightbox tarifs formules */





})

///* Gestion des accordéons */
//$("#accordion .accordion-header .toggle, #accordion-panier .accordion-header .toggle").on("click", function () {
//    console.log($(this));
//    if ($(this).parent().parent().hasClass("active")) {
//        $(this).parent().parent().removeClass("active");
//        $(this).parent().next().slideUp();
//    } else {
//        $(this).parent().parent().addClass("active");
//        $(this).parent().next().slideDown();
//    }
//})