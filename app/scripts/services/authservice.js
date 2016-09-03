'use strict';

/**
 * @ngdoc service
 * @name svUiApp.AuthService
 * @description
 * # AuthService
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('AuthService', function ($http, $base64) {
  var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };
  this.login = function (credenciais, sucesso, erro){
  	var cred = $base64.encode(credenciais.username+':'+credenciais.password);
  	$http.defaults.headers.common['Authorization'] = 'Basic '+cred;
  	$http.defaults.headers.common['X-Requested-With'];
  	$http.defaults.userXDomain = true;
  	$http.post(apiUrl+'/login', cred, configuracoes).success(sucesso).error(erro);
  }
  this.logout = function (sucesso, erro){
  	var token = localStorage['sv.token'];
  	$http.defaults.headers.common['Authorization'] = 'Token '+token;
  	$http.delete(apiUrl+'/logout/'+token).success(sucesso).error(erro);
  }
  this.primeiroRegisto = function(utilizador, sucesso, erro){
  	var post = JSON.stringify(utilizador);
  	$http.post(apiUrl+'/registo', configuracoes).success(sucesso).error(erro);
  }
});
