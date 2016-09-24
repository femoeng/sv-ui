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
    
    $scope.login = function(visitor) {
    	cfpLoadingBar.start();
        $scope.erroLogin = false;
        
        var credenciais = {
    		numero_celular: visitor.contacto, 
    		pin: visitor.pin
    	}
    	AuthService.loginVisitor(credenciais,function(res){
            sessionStorage['sv.visitor.code'] = res.codigo;
            $location.path('/visitor/vote');
            cfpLoadingBar.complete();
            console.log(res.codigo);
    	}, function(err){
    		console.log(err);
            cfpLoadingBar.complete();
            $scope.erroLogin = true;
    	});
    }
    
  });