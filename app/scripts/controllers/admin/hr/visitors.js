'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminHrVisitorsCtrl
 * @description
 * # AdminHrVisitorsCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('AdminHrVisitorsCtrl', function ($scope, AdminService) {
    $scope.visitantes = [];
    $scope.EditboxChecked = false;
  	AdminService.getVisitantes(function(res){ 
  		$scope.visitantes = res.visitante; 
  		console.log($scope.visitantes);
  	}, function(err){ 
  		console.log(err);
  	} );

  	$scope.createVisitor = function(visitor){
  		AdminService.createVisitante(visitor,function(res){
  			$scope.visitantes.push(visitor);
  			console.log(res)
  		},function(err) {
  			console.log(err)
  		});
  	}
  	
    $scope.enableVisitorEdit = function() {
    	$scope.EditboxChecked = true;
    }

  });
