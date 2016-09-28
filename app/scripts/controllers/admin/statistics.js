'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AdminStatisticsCtrl
 * @description
 * # AdminStatisticsCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('AdminStatisticsCtrl', function ($scope,AdminStatistics) {
    var canvasPieBar = $("#chart");
    var canvasBar = $("#chart2");
    $scope.projectos = [];
    $scope.barsData = [];	  
    $scope.dataLabels = [];
    $scope.barLabel = "";
    $scope.data = false;
    $scope.query = "";
    $scope.criterio = {};
    $scope.criterio.maior_impacto_social = "maior-impacto-social";
    $scope.criterio.melhor_apresentacao = "melhor-apresentacao";
    $scope.criterio.mais_criativo = "mais-criativo";
    $scope.criterio.todos = "todos";

    var initiData = function(projectos){
      $scope.dataLabels = [];
      $scope.barsData = [];
    	for (var i = 0; i < projectos.length; i++){

    		$scope.dataLabels.push(projectos[i].projecto.titulo);
    		$scope.barsData.push(projectos[i].total_de_votos); 
    	}
    }

    var initiDataCriterios = function(votos){
    	$scope.barsData = [];
      $scope.dataLabels = [];
    	for (var i = 0; i < votos.length; i++){
    		$scope.barsData.push(votos[i].quantidade); 
        $scope.dataLabels.push(votos[i].projecto.titulo);
    	}
    }


    var graficoDestroy = function(){
    	$scope.graficoBolo.destroy();
    	$scope.graficoBarra.destroy();
    }    

    var graficoUpdate = function(){
    	$scope.graficoBolo.update();
    	$scope.graficoBarra.update();
    }
	
	$scope.updateBars = function(query, criterio){
		$scope.query = query;
		if (query == ""){
			//graficoDestroy();
      getVotos();
			graficoUpdate();
		}
		else{
			getVotosCriterios(criterio);
		}
	}
	
	var getVotosCriterios = function(criterio){
		AdminStatistics.getVotos($scope.query, function(res){
			for (var i = 0; i < res.length; i++){
				if (res[i].criterio.id == criterio){
					console.log(res[i].votos);
					//
					graficoDestroy();
          initiDataCriterios(res[i].votos);
					initBar($scope.dataLabels,"votos",$scope.barsData,["red","gray","black","green","brown","blue","yellow"]);
          //graficoUpdate();
					console.log($scope.barsData);
				}
			}
		}, function(err){

		})
	}

	var getVotos = function(){
	    AdminStatistics.getVotos($scope.query,function(res){
	    	console.log($scope.data);
        console.log($scope.dataLabels);
	    	if ($scope.data){
          graficoDestroy();
        }
        $scope.projectos = res;
	    	initiData($scope.projectos);
	    	initBar($scope.dataLabels,"votos",$scope.barsData,["red","gray","black","green","brown","blue","yellow"]);
	      $scope.data = true;
      },function(err){

	    });
	}

    var initBar = function(dataLabels, barLabel, barsData, cors){
    	$scope.graficoBolo = new Chart(canvasPieBar, {
          type: 'pie',
          data: {
            labels: dataLabels,
            datasets: [{
              label: barLabel,
              data: barsData,
              backgroundColor: cors  
            }]  
          },
        });

        $scope.graficoBarra = new Chart(canvasBar, {
          type: 'bar',
          data: {
            labels: dataLabels,
            datasets: [{
              label: barLabel,
              data: barsData,
              backgroundColor: cors  
            }]  
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }

        });
    }

  if (!$scope.data){
  	getVotos();
  }
    //initBar("","","");

  });

