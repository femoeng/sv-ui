'use strict';

/**
 * @ngdoc service
 * @name svUiApp.AdminService
 * @description
 * # AdminService
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('AdminService', function ($http) {
  var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };
  this.createDepartament = function(departamento, sucesso, erro){
  	var token = localStorage['sv.token'];
  	var post = JSON.stringify(departamento);
  	$http.defaults.headers.common['Authorization'] = 'Token '+token;
  	$http.post(apiUrl+'/departamentos', post, configuracoes).success(sucesso).error(erro);
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

  this.getCursos = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/departamentos/cursos').success(sucesso).error(erro);  
  }

  this.createCurso = function(curso, sucesso, erro){
    var token = localStorage['sv.token'];
    var post = JSON.stringify(curso);
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.post(apiUrl+'/departamentos/cursos', post, configuracoes).success(sucesso).error(erro);
  }

  this.removeCurso = function(id, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.delete(apiUrl+'/departamentos/cursos'+id).success(sucesso).error(erro);  
  }

  this.updateCurso = function(curso, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    var post = {
      nome: curso.nome
    }
    post = JSON.stringify(post);
    $http.put(apiUrl+'/departamentos/cursos/'+curso.id, post, configuracoes).success(sucesso).error(erro);
  }
  this.getDepartamentos = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/departamentos').success(sucesso).error(erro);  
  }

  this.createVisitante = function(visitante, sucesso, erro){
    var token = localStorage['sv.token'];
    var post = JSON.stringify(visitante);
    console.log(post);
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.post(apiUrl+'/visitantes', post, configuracoes).success(sucesso).error(erro);
  }

  this.getVisitantes = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/visitantes').success(sucesso).error(erro);  
  }
  this.removeVisitante = function(id, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.delete(apiUrl+'/visitantes/'+id).success(sucesso).error(erro);  
  }
  
  this.createProjectista = function(projectista, sucesso, erro){
    var token = localStorage['sv.token'];
    var post = JSON.stringify(projectista);
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.post(apiUrl+'/projectistas', post, configuracoes).success(sucesso).error(erro);
  }
  
  this.removeProjectista = function(id, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.delete(apiUrl+'/projectistas/'+id).success(sucesso).error(erro);
  }
  this.getProjectistas = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/projectistas').success(sucesso).error(erro);  
  }

  this.getProjectos = function(sucesso,erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.get(apiUrl+'/projectos').success(sucesso).error(erro);  
  }

  this.createProject= function(project, sucesso, erro){
    var token = localStorage['sv.token'];
    var post = JSON.stringify(project);
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.post(apiUrl+'/projectos', post, configuracoes).success(sucesso).error(erro);
  }

    this.removeProject = function(id, sucesso, erro){
    var token = localStorage['sv.token'];
    $http.defaults.headers.common['Authorization'] = 'Token '+token;
    $http.delete(apiUrl+'/projectos/'+id).success(sucesso).error(erro);  
  }
});