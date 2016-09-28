'use strict';

/**
 * @ngdoc service
 * @name svUiApp.admin/statistics
 * @description
 * # admin/statistics
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('AdminStatistics', function ($http) {
   var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };

  this.getVotos = function(query,sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/votos'+query).success(sucesso).error(erro);  
  }

  });
  