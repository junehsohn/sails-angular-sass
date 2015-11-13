(function(window, angular, undefined){
	'use strict';


	angular.module('App').controller('App.appCtrl', ['$rootScope', '$scope', '$timeout', "$stateParams", "App.commonService", "auth", appCtrl]);

	function appCtrl( $rootScope, $scope, $timeout, $stateParams, commonService, auth ){
		/*
			logic
				provider
				- biz

				controller or (directive controller)
				- presentation
				- UI

			state
				provider
				- biz

				controller or (directive controller)
				- presentation
				- UI

		*/

		var vm = this;
		vm.commonService = commonService;
		vm.auth = auth;

		vm.listId = $stateParams.list_id;
		vm.pageId = $stateParams.page_id;
		vm.name = 'List Theme01';
		vm.say = say;
		vm.memberList = [
			{name:'john', id:'m01'},
			{name:'steve', id:'m02'},
			{name:'jack', id:'m03'},
			{name:'john', id:'m04'}
		];

		$scope.$on( "$destroy", function(){
			console.log('destroy list');
        });
		_init();


		function _init(){
			console.log('appCtrl.auth: ', vm.auth);
			console.log('appCtrl init: ', vm.commonService.name);
			/*vm.auth.then(function(__suc){
				console.log('App.appCtrl init: ', __suc);
			});*/
		}

		function say(){
			alert(vm.name);
		};


		
	}


})(window, window.angular);