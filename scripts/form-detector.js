function initFormListener() {

}

function highlightForms() {
    chrome.extension.getBackgroundPage().console.log($("form"));
}

function enableFormDetection() {
    chrome.storage.sync.get('isEnable', function(data) {
        var current = data.isEnable;
        var onOrOff = current ? 'on' : 'off';
        chrome.browserAction.setIcon({path: 'icon-' + onOrOff + '-48.png'});
        chrome.storage.sync.set({isEnable: !current});

        if(current) {
            highlightForms();
        }
    });
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({isEnable: true});
});

chrome.browserAction.onClicked.addListener(enableFormDetection);