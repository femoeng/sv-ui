'use strict';

/**
 * @ngdoc function
 * @name svUiApp.controller:AuthLogoutCtrl
 * @description
 * # AuthLogoutCtrl
 * Controller of the svUiApp
 */
angular.module('svUiApp')
  .controller('LogoutCtrl', function (AuthService, $location) {
    AuthService.logout(function(res) {

    }, function(err) {

    });
    $location.path("/auth/login");
  });
