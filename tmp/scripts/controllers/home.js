'use strict';
app.controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.$emit('changeTitle', 'What is your Chess Personality!? Take the 20 question quiz to find out!');
}]);
