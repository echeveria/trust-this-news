function showH1Text(){
    var content = document.querySelector('h1').textContent;
    document.querySelector('h1').textContent = `${content} бе майна!`;
}
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.executeScript(activeInfo.tabId, {code: '(' + showH1Text + ')();'}, function(response) {

    });
});