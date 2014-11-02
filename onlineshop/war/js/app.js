/// <reference path="appConfig.js" />
var app = (function (config, gapi) {
    var init = function () {
		$(window).on('load', function() {
	        gapi.client.setApiKey(config.serverApiKey);
//	        gapi.client.setApiKey(config.browserApiKey);
	        gapi.auth.authorize({client_id: config.clientId, scope: config.gScope[0], immediate: true}, handleAuthResult);
		});
    };
    var handleAuthResult= function (authResult) {
    	if (authResult && !authResult.error) {
    		alert("hi")
    		initializeApi();
    	} else {
    		alert("error")
    	}
  };
  var initializeApi =function () {
      gapi.client.load('datastore', config.gAPIVersion);
    };
  init();
    return{init:init}
})(config, gapi);