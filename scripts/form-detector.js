function isMessageEquals(msg, expectedMessage) {
    return msg.text && msg.text == expectedMessage;
}

chrome.runtime.onMessage.addListener(function(msg, _, _) {
    if(isMessageEquals(msg, MessageDetectForm)) {
        $("form").each((_, element) => {
            addFormClickListener(element);
        });
    } else if(isMessageEquals(msg, MessageDetachForm)) {
        //TODO
    }
});

function highlightForm(form) {
    form.addClass("highlight-form");
}

function addFormClickListener(form) {
    
}