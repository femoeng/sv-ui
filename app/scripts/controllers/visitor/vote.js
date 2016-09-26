'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:VisitorVoteCtrl
 * @description
 * # VisitorVoteCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('VisitorVoteCtrl', function ($scope, VisitorService, $location) {
    $scope.criteria1Selected = false;
    $scope.criteria2Selected = false;
    $scope.criteria3Selected = false;

    var numCriterios = 0;

    $scope.ready2Vote = false;
    $scope.confirmProjects = {};
    $scope.currentPage = 0;
    $scope.pageSize = 4;
    
    $scope.projectos = [];
    $scope.projectosCriterio = [];
    $scope.criterios = [];
    $scope.selectedProjId = "";
    $scope.selectedProjKey = "";
    $scope.voto = {};
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

    $scope.firstCriteriaSelected = function(criterioID) {
    	$scope.criteria1Selected = true;
        $scope.firstCriteriaStyle = defaultCriteriaStyle;
    	$scope.criterios.push({
            criterio: criterioID,
            projecto: $scope.selectedProjId
        });
        console.log($scope.criterios);
    }

    $scope.secondCriteriaSelected = function(criterioID) {
    	$scope.criteria2Selected = true;
        $scope.secondCriteriaStyle = defaultCriteriaStyle;
        $scope.criterios.push({
            criterio: criterioID,
            projecto: $scope.selectedProjId
        });
        console.log($scope.criterios);	
    }

    $scope.thirdCriteriaSelected = function(criterioID) { 
    	$scope.criteria3Selected = true;
        $scope.thirdCriteriaStyle = defaultCriteriaStyle;
    	$scope.criterios.push({
            criterio: criterioID,
            projecto: $scope.selectedProjId
        });
        console.log($scope.criterios);
    }

    $scope.selecionaCriterio = function(criterioID, key) {
        if (numCriterios < 3){
            if ($scope.currentPage == 0){
                if($scope.projectosCriterio[$scope.selectedProjKey].hasCriterios) {
                    $scope.projectosCriterio[$scope.selectedProjKey].criterios.push($scope.criterios[0]); 
                       
                } else {
                    $scope.projectosCriterio[$scope.selectedProjKey].criterios = $scope.criterios;
                    
                }
                numCriterios = numCriterios+1;
                $scope.projectosCriterio[$scope.selectedProjKey].hasCriterios = true;
                $scope.criterios = [];
                $scope.ready2Vote = true;
                //console.log($scope.projectosCriterio[$scope.selectedProjKey].criterios);
            }
            else{
                $scope.selectedProjKey = $scope.currentPage*$scope.pageSize + $scope.selectedProjKey;
                if($scope.projectosCriterio[$scope.selectedProjKey].hasCriterios) {
                    $scope.projectosCriterio[$scope.selectedProjKey].criterios.push($scope.criterios[0]); 
                       
                } else {
                    $scope.projectosCriterio[$scope.selectedProjKey].criterios = $scope.criterios;
                    
                }
                $scope.projectosCriterio[$scope.selectedProjKey].hasCriterios = true;
                $scope.criterios = [];
                $scope.ready2Vote = true;
                //console.log($scope.selectedProjKey);
                numCriterios = numCriterios+1;
            }
        }
        
        console.log(key);
    }

    $scope.votarProjecto = function(projecto, key) {
        $scope.selectedProjId = projecto.projecto.id;
        $scope.selectedProjKey = key;
    }

    $scope.unselectCriterio = function(key) {
        if($scope.criterios[key].criterio.id == "mais-criativo") {
            $scope.criteria1Selected = false;
        } else if($scope.criterios[key].criterio.id == "melhor-apresentacao") {
            $scope.criteria2Selected = false;
        } else if ($scope.criterios[key].criterio.id == "maior-impacto-social") {
            $scope.criteria3Selected = false;
        }
        $scope.criterios.splice(key,1);
        console.log($scope.criterios);
    }

    var makeProjectoCriteriaObj = function(projectos) {
        for(var i = 0; i < projectos.length; i++) {
            $scope.projectosCriterio.push({
                projecto: projectos[i],
                hasCriterios: false,
                criterios: []
            });
        }
        console.log($scope.projectosCriterio);
    }

    $scope.vote = function() {
        console.log($scope.projectosCriterio);
        var pst = {
            votos: []
        };

        for(var i = 0; i < $scope.projectosCriterio.length; i++) {
            console.log($scope.projectosCriterio[i].hasCriterios);
            if($scope.projectosCriterio[i].hasCriterios) {
                for(var k = 0; k < $scope.projectosCriterio[i].criterios.length; k++) {
                    pst.votos.push({
                        criterio: $scope.projectosCriterio[i].criterios[k].criterio.id,
                        projecto: $scope.projectosCriterio[i].criterios[k].projecto
                    });
                }
            }
        }
        $scope.confirmProjects = pst;
        
        console.log(JSON.stringify(pst));

    }

    $scope.confirmarVoto = function() {
        VisitorService.vote($scope.confirmProjects, function(res) {
            console.log(res);
            $location.path("/auth/visitor");
        }, function(err) {
            console.log(err);
        });
    }

    $scope.getProjectName = function(id) {
        for (var i = 0; i < $scope.projectos.length; i++) {
            if($scope.projectos[i].id == id) return $scope.projectos[i].titulo;
        }
    }
    $scope.numberOfPages = function() {
      return Math.ceil($scope.projectos.length/$scope.pageSize);;
    }
    $scope.prev = function(){
        $scope.currentPage = $scope.currentPage - 1;
    }
    $scope.next = function(){
        $scope.currentPage = $scope.currentPage + 1;
        console.log($scope.projectos);
    }
    $scope.showNext = function(){
       // console.log($scope.numberOfPages());
       // console.log($scope.currentPage);
        
        return ($scope.numberOfPages() > 1) && ($scope.currentPage < $scope.numberOfPages() - 1);
    }

    VisitorService.getProjectos(function(res) {
        $scope.projectos = res.projectos;
        makeProjectoCriteriaObj(res.projectos);
        console.log(res);
    }, function(err) {
        console.log(err);
    });
  });

angular.module('svUiApp')
.filter('startFrom', function() {
  return function(input, start) {
    //start = +start;
    //return input.slice(start);
  }
});