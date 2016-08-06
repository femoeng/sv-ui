'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('InicioCtrl', function ($scope, $location) {
    
  	$scope.username = "densquejamal@gmail.com";
  	
    $scope.redireccionar = function() {
    	$location.path("/admin/estatisticas");
    }


  });
