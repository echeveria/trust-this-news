document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.getSelected(null,function(tab) {

        const TrueNewsEle = document.querySelectorAll(".true-news")[0];
        const HalfTrueNewsEle = document.querySelectorAll(".half-true-news")[0];
        const FakeNewsEle = document.querySelectorAll(".fake-news")[0];

        TrueNewsEle.querySelectorAll(".tooltiptext")[0].innerHTML = chrome.i18n.getMessage('trueTooltip');
        HalfTrueNewsEle.querySelectorAll(".tooltiptext")[0].innerHTML = chrome.i18n.getMessage('halfTrueTooltip');
        FakeNewsEle.querySelectorAll(".tooltiptext")[0].innerHTML = chrome.i18n.getMessage('fakeTooltip');

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://dev-chrome-extension.pantheonsite.io/api/news?_format=json&url=" + tab.url, true);

        xhr.onreadystatechange = function() {

            if (xhr.readyState == 4) {
                let result = JSON.parse(xhr.responseText);
                if(result.length > 0) {
                        TrueNewsEle.querySelectorAll(".counter")[0].innerHTML = result[0].field_true_news || 0;
                        HalfTrueNewsEle.querySelectorAll(".counter")[0].innerHTML = result[0].field_half_true_news || 0;
                        FakeNewsEle.querySelectorAll(".counter")[0].innerHTML = result[0].field_fake_news || 0;
                }
            }
        }
        xhr.send();
    });
}, false);