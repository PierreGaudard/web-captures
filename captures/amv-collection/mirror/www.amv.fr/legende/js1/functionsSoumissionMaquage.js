function SoumettreSmartTagATInternet(data) {
    try
    {
        tag.click.send(data);
    }
    catch (e)
    {
        console.error(e);
    }
}

function SoumettreSmartTagATInternetAutoPromotion(data) {
    try {
        tag.selfPromotion.send(data);
    }
    catch (e) {
        console.error(e);
    }
}

function SoumettreMarquageCommanderAct(controlHtml, data) {
    try {
        tC.event.click(controlHtml, data);
    }
    catch (e) {
        console.error(e);
    }
}

function SoumettreMarquageCommanderActPage(controlHtml, data) {
    try {
        tC.event.page(controlHtml, data);
    }
    catch (e) {
        console.error(e);
    }
}

function SoumettreMarquageCommanderActAutoPromotion(controlHtml, data) {
    try {
        tC.event.click_autopromotion(controlHtml, data);
    }
    catch (e) {
        console.error(e);
    }
}

function SoumettreMarquageAutoPromotion(controlHtml, data) {
    if (typeof (activeMarquageCommanderAct) == "undefined") {

    }
    else if (activeMarquageCommanderAct) {
        SoumettreMarquageCommanderActAutoPromotion(controlHtml, data);
    }

    if (typeof (activeMarquageAtInternet) == "undefined") {

    }
    else if (activeMarquageAtInternet) {
        SoumettreSmartTagATInternetAutoPromotion(data);
    }
}

function SoumettreMarquage(controlHtml, data) {
    if (typeof(activeMarquageCommanderAct) == "undefined") {
        
    }
    else if (activeMarquageCommanderAct)
    {
        SoumettreMarquageCommanderAct(controlHtml, data);
    }

    if (typeof(activeMarquageAtInternet) == "undefined") {
        
    }
    else if (activeMarquageAtInternet)
    {
        SoumettreSmartTagATInternet(data);
    }
}

function SoumettreMarquagePage(controlHtml, data) {
    if (typeof (activeMarquageCommanderAct) == "undefined") {

    }
    else if (activeMarquageCommanderAct) {
        SoumettreMarquageCommanderActPage(controlHtml, data);
    }

    if (typeof (activeMarquageAtInternet) == "undefined") {

    }
    else if (activeMarquageAtInternet) {
        SoumettreSmartTagATInternet(data);
    }
}