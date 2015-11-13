(function(window, angular, undefined){
	'use strict';


	angular.module('App').service('App.commonService', ['$rootScope', '$timeout', '$http', '$q', '$cacheFactory', '$state', commonService]);

	function commonService( $rootScope, $timeout, $http, $q, $cacheFactory ){
		var vm = this;
		vm.name = 'service01';
		vm.id = '';
		vm.cache = $cacheFactory('myApp');

		vm.getAuth = function(__opt){
			var deferred = $q.defer();

			/*if( vm.cache.get('auth') ){
				console.log("App.commonService vm.cache.get('auth'): ", vm.cache.get('auth') );
				deferred.resolve(vm.cache.get('auth'));

			}else{
				$http({method:'GET',url:'/name'})
					.then(function(__suc){
						vm.cache.put('auth', __suc);
						console.log("App.commonService vm.cache.get('auth') async: ", vm.cache.get('auth') );
						deferred.resolve(vm.cache.get('auth'));

					}, function(__err){
						deferred.reject(__err);
						if(__opt && __opt.fail && __opt.fail.redirect===true){
							$state.go('/list');
						}
					});
			}*/
			
			deferred.reject('err');
			return deferred.promise;
		};

	}


})(window, window.angular);