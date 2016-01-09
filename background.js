chrome.runtime.onInstalled.addListener(function() {
	  // Replace all rules ...
	  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	    // With a new rule ...
	    chrome.declarativeContent.onPageChanged.addRules([
	      {
	        // That fires when a page's URL contains a 'g' ...
	        conditions: [
	          new chrome.declarativeContent.PageStateMatcher({
	            pageUrl: { urlContains: 'localhost' },
	          })
	        ],
	        // And shows the extension's page action.
	        actions: [ new chrome.declarativeContent.ShowPageAction() ]
	      }
	    ]);
	  });
	});
chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({
		'url': "http://localhost/www/atm/backend/web/site/login"
	},function(tab){
	});
});