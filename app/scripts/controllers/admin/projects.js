'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminProjectsCtrl
 * @description
 * # AdminProjectsCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp') 
  .controller('AdminProjectsCtrl', function ($scope, AdminService) {
    $scope.projectos = [];
    $scope.numberOfPages = 0;
    
    AdminService.getProjectos(function(res){ 
  		$scope.projectos = res.projectos; 
  		console.log($scope.projectos);
    
    //  console.log($scope.numberOfPages);
  	
  	}, function(err){ 
  		console.log(err);
  	});

    $scope.logout = function(){
        alert("clicar"); 
    }

  });
