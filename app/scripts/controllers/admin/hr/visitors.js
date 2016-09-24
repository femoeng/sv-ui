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
    $scope.checkbox = {};
    $scope.EditboxChecked = false;
    $scope.visitorRemoveKey = "";
    $scope.currentPage = 0;
    $scope.pageSize = 14;
    $scope.numberOfPages = 0;
    $scope.editingVisitor = {};

    $scope.showNomeInput = false;
    $scope.showContactoInput = false;
    $scope.showEmailInput = false;
    $scope.showTipoInput = false;
    $scope.showTipoDocInput = false;
    $scope.showNumDocInput = false;

    $scope.confirmVisitor = false;
    $scope.newVisitor = {};

  	AdminService.getVisitantes(function(res){ 
  		$scope.visitantes = res.visitantes; 
  		console.log($scope.visitantes);
      console.log($scope.numberOfPages);
  	}, function(err){ 
  		console.log(err);
  	});

    $scope.numberOfPages = function() {
      return Math.ceil($scope.visitantes.length/$scope.pageSize);;
    }

  	$scope.createVisitor = function(visitor){
  		AdminService.createVisitante(visitor,function(res){
  			$scope.visitantes.push(visitor);
  			$scope.newVisitor = visitor;
        $("#confirmVisitanteModal").css({"display":"block"});
  		},function(err) {
  			console.log(err)
  		});
  	}
  	
    $scope.enableVisitorEdit = function(visitante, key) {
    	$scope.EditboxChecked = true;
      $scope.visitorRemoveKey = key;
      $scope.editingVisitor = visitante;
      console.log(visitante);
      if($scope.checkbox.visitante == 0) {
        $scope.EditboxChecked = false;
      }
      console.log(key);
    }

    $scope.removeVisitor = function() {
      $scope.EditboxChecked = false;
      $scope.visitantes.splice($scope.visitorRemoveKey,1);
      AdminService.removeVisitante($scope.checkbox.visitante.id, function(res) {
        
      }, function(err) {
        console.log(err);
      });
    }

    $scope.hideNomeInput = function() {
      $scope.showNomeInput = true;
    }

    $scope.hideContactoInput = function() {
      $scope.showContactoInput = true;
    }

    $scope.hideEmailInput = function() {
      $scope.showEmailInput = true;
    }

    $scope.hideTipoDocInput = function() {
      $scope.showTipoDocInput = true;
    }

    $scope.hideNumDocInput = function() {
      $scope.showNumDocInput = true;
    }

    $scope.hideTipoInput = function() {
      $scope.showTipoInput = true;
    }
  });

angular.module('svUiApp')
.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});
