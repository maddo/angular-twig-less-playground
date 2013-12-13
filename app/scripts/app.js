'use strict';

var app = angular.module('ChessPersonality', ['ngResource', 'ngRoute'])

  .config(function($routeProvider){

    $routeProvider

    .when('/', {
      templateUrl: '/views/home.html',
    })

    .when('/test', {
      templateUrl: '/views/test.html',
      controller: 'TestController'
    })

    .when('/personalities', {
      templateUrl: '/views/personalities.html',
    })

    .otherwise({
      redirectTo: '/'
    });
  });