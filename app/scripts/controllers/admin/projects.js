'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminProjectsCtrl
 * @description
 * # AdminProjectsCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp') 
  .controller('AdminProjectsCtrl', function ($scope) {
    $scope.logout = function(){
        alert("clicar"); 
    }
  });
