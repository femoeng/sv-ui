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
    var initiData = function(projectos){
    	for (var i = 0; i < projectos.length; i++){

    		$scope.dataLabels.push(projectos[i].projecto.titulo);
    		$scope.barsData.push(projectos[i].total_de_votos); 
    	}
    }


    AdminStatistics.getVotos(function(res){
    	console.log(res);
    	$scope.projectos = res;
    	initiData($scope.projectos);
    	initBar($scope.dataLabels,"votos",$scope.barsData,["red","gray","black","green","brown","blue","yellow"]);
    },function(err){

    });

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

    //initBar("","","");

  });
