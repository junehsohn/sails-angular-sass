(function(window, angular, undefined){
	'use strict';


	angular.module('App').controller('App.appCtrl', ['$scope', '$timeout', appCtrl]);

	function appCtrl( $scope, $timeout ){
		var vm = this;
		$scope.name = 'List Titme';
		$scope.changeName = changeName;
		$scope.say = say;
		$scope.memberList = [
			{name:'john', id:'m01'},
			{name:'steve', id:'m02'},
			{name:'jack', id:'m03'},
			{name:'john', id:'m04'}
		];

		var changeName = function(__name){
			$scope.name = __name;
		};

		var say = function(){
			alert($scope.name);
		};

	}


})(window, window.angular);