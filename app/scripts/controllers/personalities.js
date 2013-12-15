'use strict';
app.controller('PersonalitiesController', ['$scope', function ($scope) {

  $scope.personalities = [
    ['Grinder', 'Grinder2', 'Grinder3', 'Grinder4', 'Grinder5'],
    ['Grinder', 'Grinder2', 'Grinder3', 'Grinder4', 'Grinder5'],
    ['Grinder', 'Grinder2', 'Grinder3', 'Grinder4', 'Grinder5'],
    ['Grinder', 'Grinder2', 'Grinder3', 'Grinder4', 'Grinder5'],
  ];

  $scope.currentSlide = 0;

  $scope.maxSlide = $scope.personalities.length - 1;

  $scope.changeSlide = function(direction){

    if(direction === 'next') {

      if($scope.currentSlide < $scope.maxSlide) {
        $scope.currentSlide++;
      }
    }

    if(direction === 'prev') {

      if($scope.currentSlide > 0) {
        $scope.currentSlide--;
      }
    }
  };

}]);
