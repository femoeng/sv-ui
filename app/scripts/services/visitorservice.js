'use strict';

/**
 * @ngdoc service
 * @name svUiApp.VisitorService
 * @description
 * # VisitorService
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('VisitorService', function ($http) {
  var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };
  this.vote = function(){
  	
  }
  this.getProjectos = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/projectos').success(sucesso).error(erro);  
  }
});

