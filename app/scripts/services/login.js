'use strict';

/**
 * @ngdoc service
 * @name svUiApp.login
 * @description
 * # login
 * Service in the svUiApp.
 */
angular.module('svUiApp')
  .service('login', function () {
    
    this.validarCredenciais = function(email, password) {
    	if(email == "densquejamal@gmail.com" && password == "senha123") {
    		return true;
    	}
    	return false;
    }
  });
