function isMessageEquals(msg, expectedMessage) {
    return msg.text && msg.text == expectedMessage;
}

chrome.runtime.onMessage.addListener(function(msg, _, _) {
    if(isMessageEquals(msg, MessageDetectForm)) {
        onEachFormApplyAction($("form"), addFormClickListener);
    } else if(isMessageEquals(msg, MessageDetachForm)) {
        onEachFormApplyAction($("form"), removeFormClickListener);
    }
});

function onEachFormApplyAction(forms, functionToApply) {
    forms.each((_, form) => {
        functionToApply($(form));    
    });
}

function toggleHighlightForm(form) {
    form.toggleClass(FormHighlightClass);
}

function addFormClickListener(form) {
    toggleHighlightForm(form);    

    form.bind("click.formDetection", () =>  {
        var formAsJson = serializeFormInformation(form);
        sendFormInformationToBackground(formAsJson);
        removeFormClickListener(form);
    });
}

function serializeFormInformation(form) {
    //TODO
    getFormElements(form);
    return "{'JSON test'}";
}

function sendFormInformationToBackground(formAsJson) {
    chrome.runtime.sendMessage({type: NotificationFormDetected, options: { 
        message: formAsJson
    }});
}

function removeFormClickListener(form) {
    toggleHighlightForm(form);

    form.unbind("click.formDetection");
}