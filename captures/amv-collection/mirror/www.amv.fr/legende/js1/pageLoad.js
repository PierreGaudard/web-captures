pageLoadCallbacks = [];

//$(document).ready(function() {
function pageLoad(sender, args) {
    //console.log(new Date()); console.log("PAGE LOAD CALLBACKS : " + pageLoadCallbacks.length);
    for (var i = 0; i < pageLoadCallbacks.length; ++i)
        pageLoadCallbacks[i]();
}

pageLoadCallbacks.push(function () {
    var exists = false;
    try {
        exists = window.Page_Validators;
    } catch (exception) { }

    if (!exists)
        return;

    for (var i = 0; i < window.Page_Validators.length; i++) {
        if (window.Page_Validators[i].baseEvaluationFunction == undefined) {
            // Create a new property and assign the original evaluation function to it
            window.Page_Validators[i].baseEvaluationFunction = window.Page_Validators[i].evaluationfunction;

            // Set our own validation function
            window.Page_Validators[i].evaluationfunction = evaluateField;
        }
    }
});


function evaluateField(validator) {
    // Run the original validation function
    var isvalid = validator.baseEvaluationFunction(validator);

    // Handle the result
    if (isvalid) {
        //clearError(validator);
    } else {
        //setError(validator);

        $(validator).parents('.control-group').each(function () {
            if (!$(this).hasClass("nored")) {
                var controlGroup = $(this).addClass('invalide');
            }
        });
    }

    // Return result
    return isvalid;
}

// override ValidatorChange
pageLoadCallbacks.push(function () {
    var origExists = false;
    try {
        origExists = OriginalValidatorOnChange;
    } catch (exception) { }

    var funcExists = false;
    try {
        funcExists = ValidatorOnChange;
    } catch (exception) { }

    if (!origExists && funcExists) {
        OriginalValidatorOnChange = ValidatorOnChange;
        ValidatorOnChange = function (event) {
            if (event) {
                // reset invalid class
                var targetedControl;
                if ((typeof (event.srcElement) != "undefined") && (event.srcElement != null)) {
                    targetedControl = event.srcElement;
                }
                else {
                    targetedControl = event.target;
                }

                $(targetedControl).parents('.control-group').removeClass('invalide');
                OriginalValidatorOnChange(event);
            }
        }
    }
    
});