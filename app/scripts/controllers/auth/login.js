'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('LoginCtrl', function ($scope, $location, AuthService) {
    $scope.erroLogin = false;
    console.log("No controladorr");
    $scope.login = function(username, password) {
    	alert("Clicado");
    	var credenciais = {
    		username: username, 
    		password: password
    	}
    	AuthService.login(credenciais,function(res){
    		console.log(res);
    	}, function(err){
    		console.log(err);
    	}); 
    }
  });
