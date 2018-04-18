document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.getSelected(null,function(tab) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://dev-chrome-extension.pantheonsite.io/api/news?_format=json&url=" + tab.url, false);
        xhr.send();

        var result = JSON.parse(xhr.responseText);
        console.log(result);
        document.querySelectorAll(".true-news .counter")[0].innerHTML = result[0].field_true_news;
        document.querySelectorAll(".half-true-news .counter")[0].innerHTML = result[0].field_half_true_news ? result[0].field_half_true_news : 0;
        document.querySelectorAll(".fake-news .counter")[0].innerHTML = result[0].field_fake_news;
    });
}, false);