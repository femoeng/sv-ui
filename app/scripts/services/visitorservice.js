'use strict';

/**
 * @ngdoc service
 * @name svUiApp.VisitorService
 * @description
 * # VisitorService
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('VisitorService', function () {
  var apiUrl = 'https://sv-api.herokuapp.com';
  var configuracoes = { 
  	headers: {'Content-Type':'application/json'}
  };
  this.vote = function(){
  	
  }
});

