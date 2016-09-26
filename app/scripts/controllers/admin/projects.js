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
    $scope.selectedProject = {};
    $scope.selectedProjectKey = "";
    $scope.projectSelected = false;
    $scope.checkbox = {};
    $scope.editingProjecto = {};
    $scope.numberOfPages = 0;
    $scope.currentPage = 0;
    $scope.pageSize = 4;
    
    
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

    $scope.createProject = function(project){
    	project.cursos = [project.cursos];
    	AdminService.createProject(project, function(res){
    		$scope.projectos.push(res);
    		console.log($scope.projectos);
    	}, function(err){

    	});
    }
    $scope.enableProjectEdit = function(project,key){
    	$scope.projectSelected = true;
    	$scope.selectedProject = project;
    	$scope.selectedProjectKey = key;
    	$scope.editingProjecto = project;
    	console.log($scope.checkbox.projecto);
    	if ($scope.checkbox.projecto == 0){
    		$scope.projectSelected = false;
    	}
    	
    }
    $scope.removeProject = function(){
    	AdminService.removeProject($scope.selectedProject.id, function(res){
    		$scope.projectos.splice($scope.selectedProjectKey,1);
    	}, function(err){

    	})
    } 
  });
