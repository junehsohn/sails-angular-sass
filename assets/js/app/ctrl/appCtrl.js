(function(window, angular, undefined){
	'use strict';


	angular.module('App').controller('App.appCtrl', ['$scope', '$timeout', "$stateParams", appCtrl]);

	function appCtrl( $scope, $timeout, $stateParams ){
		var vm = this;
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

		var say = function(){
			alert(vm.name);
		};

	}


})(window, window.angular);