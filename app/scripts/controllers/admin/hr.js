'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminHrCtrl
 * @description
 * # AdminHrCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('AdminHrCtrl', function ($scope, AdminService) {
  	$scope.visitantes = [];
  	$scope.projectistas = [];

  	AdminService.getVisitantes(function(res){ 
  		$scope.visitantes = res.visitante; 
  		console.log($scope.visitantes);
  	}, function(err){ 
  		console.log(err);
  	} );
  	
  	AdminService.getProjectistas(function(res){ 
  		$scope.projectistas = res.projectista; 
  		console.log($scope.projectistas);
  	}, function(err){ 
  		console.log(err);
  	} );

  	$scope.createVisitor = function(visitor){
  		console.log(visitor);
  		console.log("Aqui ");
  		AdminService.createVisitante(visitor,function(res){console.log(res)},function(err){console.log(err)});
  	}
  	
  	$scope.btnSelecionar = function(id){
  		console.log(id);
  		$(".btn-selecionado").removeClass("btn-selecionar");
  		$("#" + id).addClass("btn-selecionar");
  	} 

  });