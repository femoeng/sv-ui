'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminHrProjectistasCtrl
 * @description
 * # AdminHrProjectistasCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('AdminHrProjectistasCtrl', function ($scope, AdminService) {
    

    $scope.createProjectista = function(projectista){
    	alert("dddd");
    	AdminService.createProjectista(projectista, function(res){
    		console.log(res);
    	}, function(err){

    	});
    }
  });
