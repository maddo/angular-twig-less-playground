'use strict';
app.controller('ResultsController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {


  if(!angular.isUndefined($rootScope.answers)) {
    // here should some smart actions
    // to calculate personality
    delete $rootScope.answers;
  } else {
    $location.path('/').replace();
  }

}]);
