'use strict';
app.controller('ResultsController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {


  if(!angular.isUndefined($rootScope.score)) {
    var scores = {};
   
    //change answers to score %
    //for stats bars   
    for(prop in $rootScope.score) {
      var score = $rootScope.score[prop];
      scores[prop] = (score < 0) ? 0:(score/5)*100;
    }

    $scope.scores = scores;

  } else {
    $location.path('/').replace();
  }

}]);
