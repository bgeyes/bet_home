// when the extension is first installed
/*chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({be_a_buzzkill: true});
});*/

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){


    if (tab.url.toLowerCase().indexOf("betfair.com") > -1){
        chrome.pageAction.show(tab.id);
    }

});



chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: "betting.js" });
});
