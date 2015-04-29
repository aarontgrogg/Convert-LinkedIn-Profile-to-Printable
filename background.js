/**
 *
 * Name: Convert LinkedIn Profile to Printable
 * Description: Converts a LinkedIn Profile page into a printable format
 * Author: Aaron T. Grogg
 *
 * Only loads on Profle pages, adds the icons and a click listener to that icon.
 * The listener appends a JS file, and injects CSS, into tha page,
 * to make it something printable.
 *
 */

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function(details) {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([ 
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostSuffix: "www.linkedin.com", pathContains: "profile/preview" },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

// Called when the user clicks on the browser action.
chrome.pageAction.onClicked.addListener( function(tab) {
    chrome.tabs.executeScript( tab.id, { file: "convertToPrintable.js" } );
    chrome.tabs.insertCSS( tab.id, { file: "convertToPrintable.css" } );
});