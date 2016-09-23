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
  	$scope.btnSelecionar = function(id){
  		console.log(id);
  		$(".btn-selecionado").removeClass("btn-selecionar");
  		$("#" + id).addClass("btn-selecionar");
  	} 

  });