(function(window, angular, undefined){
	'use strict';


	angular.module('App').controller('App.detailCtrl', ['$scope', '$timeout', "$stateParams", detailCtrl]);

	function detailCtrl( $scope, $timeout, $stateParams ){
		var vm = this;
		vm.sessionId = $stateParams.session_id;
		vm.name = 'List Theme02';
		vm.say = say;
		vm.memberList = [
			{name:'a01', id:'d01'},
			{name:'a02', id:'d02'},
			{name:'a03', id:'d03'}
		];

		$scope.$on( "$destroy", function(){
			console.log('destroy detail');
        });

		var say = function(){
			alert(vm.name);
		};

	}


})(window, window.angular);