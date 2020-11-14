function detectForms(tab) {
    chrome.tabs.sendMessage(tab.id, { text: MessageDetectForm });
}

function detachForms(tab) {
    chrome.tabs.sendMessage(tab.id, { text: MessageDetachForm });
}

function enableFormDetection(tab) {
    chrome.storage.sync.get('isEnable', function(data) {
        var current = data.isEnable;
        var onOrOff = current ? 'on' : 'off';
        chrome.browserAction.setIcon({path: 'icon-' + onOrOff + '-48.png'});
        chrome.storage.sync.set({isEnable: !current});

        if(current) {
            detectForms(tab);
        } else {
            detachForms(tab);
        }
    });
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({isEnable: true});
});

chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.type == NotificationFormDetected) {
        console.log(request.options.message);
    }
});

chrome.browserAction.onClicked.addListener(enableFormDetection);