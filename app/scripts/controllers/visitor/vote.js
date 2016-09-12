'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:VisitorVoteCtrl
 * @description
 * # VisitorVoteCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('VisitorVoteCtrl', function ($scope) {
    var defaultCriteriaStyle = {
    	'background-color': 'white', 
	  	'padding': '15px 32px',
	  	'text-align': 'center',
	  	'text-decoration': 'none',
	  	'display': 'inline-block',
	  	'font-size': '16px',
	  	'margin': '4px 2px',
	  	'cursor': 'pointer',
	  	'color': 'black',
	  	'border': '2px solid black', 
	  	'height': '112px',
    }

    var selectedCriteriaStyle = {
    	'background-color': 'white', 
	  	'padding': '15px 32px',
	  	'text-align': 'center',
	  	'text-decoration': 'none',
	  	'display': 'inline-block',
	  	'font-size': '16px',
	  	'margin': '4px 2px',
	  	'cursor': 'pointer',
	  	'color': 'black',
	  	'border': '6px solid green', 
	  	'height': '112px',
    }

    $scope.firstCriteriaStyle = defaultCriteriaStyle;
    $scope.secondCriteriaStyle = defaultCriteriaStyle;
    $scope.thirdCriteriaStyle = defaultCriteriaStyle;

    $scope.firstCriteriaSelected = function() {
    	$scope.firstCriteriaStyle = selectedCriteriaStyle;
    	$scope.secondCriteriaStyle = defaultCriteriaStyle;
    	$scope.thirdCriteriaStyle = defaultCriteriaStyle;
    }

    $scope.secondCriteriaSelected = function() {
    	$scope.secondCriteriaStyle = selectedCriteriaStyle;
    	$scope.firstCriteriaStyle = defaultCriteriaStyle;
    	$scope.thirdCriteriaStyle = defaultCriteriaStyle;
    }

    $scope.thirdCriteriaSelected = function() { 
    	$scope.thirdCriteriaStyle = selectedCriteriaStyle;
    	$scope.firstCriteriaStyle = defaultCriteriaStyle;
    	$scope.secondCriteriaStyle = defaultCriteriaStyle;
    }
  });
