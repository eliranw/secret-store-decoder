

//* For testing, open the Browser Console
try {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if (request.contentScriptQuery == "checkUrl") {
            var url = request.image_url;
            fetch(url,{ method: 'GET', redirect: 'follow'} )
            .then(response => response.text())
            .then(response => sendResponse(response))
                .catch(error => alert("Error Loading fetch from " + request.image_url))
            return true;  // Will respond asynchronously.
          }
        });
} catch(e) {
    //alert() throws an error in Firefox versions below 49.
    console.log('alert() threw an error. Probably Firefox version < 49.');
}