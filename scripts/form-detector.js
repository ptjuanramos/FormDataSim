//TODO - this doesnt work :( yet...
chrome.runtime.onMessage.addListener(function(msg, _, _) {
    if(msg.text && msg.text == MessageDetectForm) {
        console.log($("form"));
    }
});