'use strict';

/**
 * @ngdoc overview
 * @name svUiApp
 * @description
 * # svUiApp
 *
 * Main module of the application.
 */
angular
  .module('svUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'MainCtrl'
      })
      .when('/auth/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/auth/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'LoginCtrl'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })
      .when('/visitor', {
        templateUrl: 'views/visitor.html',
        controller: 'VisitorCtrl',
        controllerAs: 'visitor'
      })
      .when('/visitor/vote', {
        templateUrl: 'views/visitor/vote.html',
        controller: 'VisitorVoteCtrl',
        controllerAs: 'visitor/vote'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/admin/hr', {
        templateUrl: 'views/admin/hr.html',
        controller: 'AdminHrCtrl',
        controllerAs: 'admin/hr'
      })
      .when('/admin/projects', {
        templateUrl: 'views/admin/projects.html',
        controller: 'AdminProjectsCtrl',
        controllerAs: 'admin/projects'
      })
      .when('/admin/statistics', {
        templateUrl: 'views/admin/statistics.html',
        controller: 'AdminStatisticsCtrl',
        controllerAs: 'admin/statistics'
      })
      .when('/admin/hr/projectistas', {
        templateUrl: 'views/admin/hr/projectistas.html',
        controller: 'AdminHrProjectistasCtrl'
      })
      .when('/admin/hr/visitors', {
        templateUrl: 'views/admin/hr/visitors.html',
        controller: 'AdminHrVisitorsCtrl'
      })
      .when('/admin/hr/users', {
        templateUrl: 'views/admin/hr/users.html',
        controller: 'AdminHrUsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
