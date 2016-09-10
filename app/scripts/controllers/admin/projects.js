'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminProjectsCtrl
 * @description
 * # AdminProjectsCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
<<<<<<< HEAD
  .controller('AdminProjectsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
=======
  .controller('AdminProjectsCtrl', function ($scope) {
    $scope.logout = function(){
        alert("clicar"); 
    }
>>>>>>> fdc3c29114e37e9b65ba689e620fa04f604d1962
  });
