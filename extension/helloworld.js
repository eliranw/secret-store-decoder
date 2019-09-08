$(document).ready(function() {
    $("#computebutton").click(function(){
        alert($('.tb-main-title').text());
    });
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });