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
  	$scope.createVisitor = function(visitor){
  		console.log(visitor);
  		console.log("Aqui ");
  		AdminService.createVisitante(visitor,function(res){console.log(res)},function(err){console.log(err)});
  	}
  });