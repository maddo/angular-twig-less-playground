'use strict';

var app = angular.module('ChessPersonality', ['ngResource', 'ngRoute', 'angular-carousel'])

  .config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
      templateUrl: '/views/home.html'
    })

    .when('/test', {
      templateUrl: '/views/test.html',
      controller: 'TestController'
    })

    .when('/type/:type', {
      templateUrl: '/views/personalities.html',
      controller: 'PersonalitiesController'
    })

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });