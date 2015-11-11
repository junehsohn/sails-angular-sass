(function(window, angular, undefined){
	'use strict';

	var goPromise = null;
	angular.module('App',["ui.router"])
			.config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", routeConfig]);

	function routeConfig($stateProvider, $urlRouterProvider, $httpProvider){
		$stateProvider.state( "list", {
            url : "/list",
            templateUrl : "/templates/list.html",
            controller : "App.appCtrl",
            // controllerAs : "AppCtrl",
            resolve : {
                go : function()
                {
                    return goPromise;
                }
            }
        });

        /*$stateProvider.state( "detail", {
            url : "/detail/{session_id}",
            templateUrl : "/app/operator/views/insession.html",
            controller : "detailCtrl",
            resolve : {
                go : function()
                {
                    return goPromise;
                }
            }
        });*/

        $urlRouterProvider.otherwise( "/list" );

        $httpProvider.defaults.headers.common["ajax-request"] = "true";
	}

})(window, window.angular);