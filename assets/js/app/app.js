(function(window, angular, undefined){
	'use strict';

	var goPromise = null;
	angular.module('App',["ui.router"])
			.config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", routeConfig])
            .run(["$rootScope", "$state", "$timeout", runApp]);

	function routeConfig($stateProvider, $urlRouterProvider, $httpProvider){
		$stateProvider.state( "list", {
            url : "/list/{list_id}?page_id",
            templateUrl : "/templates/list.html",
            controller : "App.appCtrl",
            controllerAs : "AppCtrl",
            resolve : {
                auth:['App.commonService', function(commonService){
                    console.log('list resolve::::::::::');
                    return commonService.getAuth();
                }]
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

    function runApp($rootScope, $state, $timeout){

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            console.log('\n/////////////////////////////////: ');
            console.log('stateChangeStart: ');
            console.log('event: ',event);
            console.log('toState: ',toState);
            console.log('toParams: ',toParams);
            console.log('fromState: ',fromState);
            console.log('fromParams: ',fromParams);
            console.log('/////////////////////////////////\n: ');

        });
    }

})(window, window.angular);