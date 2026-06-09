function MasqueDebug() {
    $(".debug-info").children('p').hide();
    $(".debug-info")
        .children('h3').off('click');
    $(".debug-info")
        .children('h3')
        .on('click', function () {
            $(this).next("p").toggle(200);
            $(this).toggleClass('active');
        });
}

function AfficheAppelSQ(temps, reponse, raison) {
    $(document).ready(function () {
        var content = $('<p>').html('temps appel : ' + temps).append('<br />');
        content.append('reponse : ' + reponse).append('<br />');
        if (raison) {
            content.append('raison : ' + raison).append('<br/>');
        }
        $('#DivSmartTag').after($('<div>', {
            class: 'smart-tag-display debug-info',
            style: 'clear:both; word-wrap: break-word;'
        }).append($('<h3>',
            {
                text: 'Shield Square'
            }
        )).append(content)
        );
        MasqueDebug();
    });
}

function AfficheTagAwe() {
    $(document).ready(function () {
        var content = $('<p>').html('Event snippet for Audience Espace client - 2020 remarketing page').append('<br />');
        $('#DivSmartTag').after($('<div>', {
            class: 'smart-tag-display debug-info',
            style: 'clear:both; word-wrap: break-word;'
        }).append($('<h3>',
            {
                text: 'Tag AWE'
            }
        )).append(content)
        );
        MasqueDebug();
    });
}
function AfficheInfoDebug(titre,message) {
    $(document).ready(function () {
        var content = $('<p>').html(message).append('<br />');
        $('#DivSmartTag').after($('<div>', {
            class: 'smart-tag-display debug-info',
            style: 'clear:both; word-wrap: break-word;'
        }).append($('<h3>',
            {
                text: titre
            }
        )).append(content)
        );
        MasqueDebug();
    });
}
