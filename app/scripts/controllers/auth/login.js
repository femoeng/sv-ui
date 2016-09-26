'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('LoginCtrl', function ($scope, $location, AuthService, cfpLoadingBar) {
    $scope.erroLogin = false;
    console.log("No controladorr");
    $scope.login = function(username, password) {
    	cfpLoadingBar.start();
        $scope.erroLogin = false;
        var credenciais = {
    		username: username, 
    		password: password
    	}
    	AuthService.login(credenciais,function(res){
    		var token = res.token;
            localStorage['sv.token'] = token;
            $location.path('/admin/hr/visitors');
            cfpLoadingBar.complete();
    	}, function(err){
    		console.log(err);
            cfpLoadingBar.complete();
            $scope.erroLogin = true;
    	});
    }
    
  });