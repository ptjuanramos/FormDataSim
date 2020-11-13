function isValidUrl(url) {
    return UrlRegex.test(url);
}   

function highlightForms(tab) {
    if(isValidUrl(tab.url)) {
        chrome.tabs.sendMessage(tab.id, { text: MessageDetectForm });
    }
}

function enableFormDetection(tab) {
    chrome.storage.sync.get('isEnable', function(data) {
        var current = data.isEnable;
        var onOrOff = current ? 'on' : 'off';
        chrome.browserAction.setIcon({path: 'icon-' + onOrOff + '-48.png'});
        chrome.storage.sync.set({isEnable: !current});

        if(current) {
            highlightForms(tab);
        }
    });
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({isEnable: true});
});

/* chrome.tabs.onActivated(enableFormDetection); */
chrome.browserAction.onClicked.addListener(enableFormDetection);