'use strict';

var app = angular.module('ChessPersonality', ['ngResource', 'ngRoute', 'angular-carousel'])

  .config(function($routeProvider){

    $routeProvider

    .when('/', {
      templateUrl: '/views/home.html'
    })

    .when('/test', {
      templateUrl: '/views/test.html',
      controller: 'TestController'
    })

    .when('/results', {
      templateUrl: '/views/results.html',
      controller: 'ResultsController'
    })

    .when('/personalities', {
      templateUrl: '/views/personalities.html',
      controller: 'PersonalitiesController'
    })

    .otherwise({
      redirectTo: '/'
    });
  });