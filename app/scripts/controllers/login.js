'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('LoginCtrl', function ($scope, login, $location) {
    $scope.erroLogin = false;

    $scope.login = function(username, password) {
    	var res = login.validarCredenciais(username, password);
    	if(res) {
    		$location.path("/inicio");
    	} else {
    		$scope.erroLogin = true;
    	}
    }
  });
