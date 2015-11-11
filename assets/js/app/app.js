(function(window, angular, undefined){
	'use strict';

	var goPromise = null;
	angular.module('App',["ui.router"])
			.config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", routeConfig]);

	function routeConfig($stateProvider, $urlRouterProvider, $httpProvider){
		$stateProvider.state( "list", {
            url : "/list/{list_id}?page_id",
            templateUrl : "/templates/list.html",
            controller : "App.appCtrl",
            controllerAs : "AppCtrl",
            resolve : {
                go : function()
                {
                    return goPromise;
                }
            }
        });

        $stateProvider.state( "detail", {
            url : "/detail/{session_id}",
            templateUrl : "/templates/detail.html",
            controller : "App.detailCtrl",
            controllerAs : "DetailCtrl",
            resolve : {
                go : function()
                {
                    return goPromise;
                }
            }
        });

        $urlRouterProvider.otherwise( "/list/test01?page_id=01" );

        $httpProvider.defaults.headers.common["ajax-request"] = "true";
	}

})(window, window.angular);