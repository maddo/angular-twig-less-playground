'use strict';
app.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $scope.page = {
    title: 'What is your Chess Personality!? Take the 20 question quiz to find out!'
  };

  $rootScope.$on('changeTitle', function(event, data){
    $scope.page.title = data;
  });

}]);
