const blocklistedWebsite = "";

chrome.runtime.onMessageExternal.addListener(
    (request, sender, sendResponse) => {
        if (sender.url === blocklistedWebsite)
            return;  // don't allow this web page access
        console.log("search history");
        chrome.history.search({ text: '', maxResults: 10 }, function (results) {
            console.log(`data: ${results}`);
            sendResponse({ history: results });
        });
        return true;
    });