'use strict';

/**
 * @ngdoc service
 * @name svUiApp.AdminService
 * @description
 * # AdminService
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('AdminService', function () {
  var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };
  this.createDepartament = function(departamento, sucesso, erro){
  	var token = localStorage['sv.token'];
  	var post = JSON.stringify(departamento);
  	$http.defaults.headers.common['Authorization'] = 'Token '+token;
  	$http.post(apiUrl+'/departamentos'+token, post, configuracoes).success(sucesso).error(erro);
  }
  this.removeDepartment = function(id, sucesso, erro){
  	var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
  	$http.delete(apiUrl+'/departamentos'+id).success(sucesso).error(erro);	
  }
  this.updateDepartment = function(departamento, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    var post = {
    	nome: departamento.nome
    }
    post = JSON.stringify(post);
    $http.put(apiUrl+'/departamentos/'+departamento.id, post, configuracoes).success(sucesso).error(erro);
  }
});
