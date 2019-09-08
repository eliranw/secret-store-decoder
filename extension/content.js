var title = document.getElementsByClassName("tb-main-title")[0].innerText;

var letters = /\w{2}\d{4}/gim;

var found = false;
title = title.split("-")[1];
var titleArr = title.match(letters);

console.log("Number of items found on page:" + titleArr.length);

titleArr.forEach(element => {
    imageExists("https://www.adidas.com/us/" + element + ".html", element);
    imageExists("https://www.adidas.co.nz/" + element + ".html", element);
  //  imageExists("https://www.adidas.com.cn/item/" + element + "?locale=en_GB", element);
});

function imageExists(image_url, item){
    console.log("Checking: " + image_url);
    chrome.runtime.sendMessage(
        {contentScriptQuery: "checkUrl", image_url: image_url},
        function (response) {
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(response, 'text/xml');
            var docTitle = htmlDoc.title;
            if(!docTitle.includes("Page Not Found") &&  !docTitle.includes("adidas NZ") &&  !docTitle.includes("adidas Online Shop")) {
                console.log("Title:" + docTitle);   
                window.open(image_url);
            } else {
                console.log("None Found on " + image_url);
            }
        })
}