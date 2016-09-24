'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AuthVisitorCtrl
 * @description
 * # AuthVisitorCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')

  .controller('AuthVisitorCtrl', function ($scope, $location, AuthService, cfpLoadingBar) {
    $scope.erroLogin = false;
    
    //console.log("No controladorr");
    
    $scope.login = function(celular, pin) {
    	cfpLoadingBar.start();
        $scope.erroLogin = false;
        
        var credenciais = {
    		celular: celular, 
    		pin: pin
    	}
    	AuthService.login(credenciais,function(res){
    		
    		var token = res.token;
            localStorage['sv.token'] = token;
            $location.path('/visitor/vote');
            cfpLoadingBar.complete();

    	}, function(err){
    		console.log(err);
            cfpLoadingBar.complete();
            $scope.erroLogin = true;
    	});
    }
    
  });