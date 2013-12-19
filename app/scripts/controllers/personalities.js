'use strict';
app.controller('PersonalitiesController', ['$scope', '$location', '$rootScope', '$resource', '$routeParams', function ($scope, $location, $rootScope, $resource, $routeParams) {

  var personality = $resource('/scripts/personalities.json', {}, {
    query: {method: 'GET', params: {}, isArray: false}
  });

  //get personality and set scores
  personality.query(function(res){

    for(var i = 0; i < res.personalities.length; i++) {
      var tmpPersonality = res.personalities[i];

      if(tmpPersonality.type.toLowerCase() === $routeParams.type) {
        tmpPersonality.lastName = tmpPersonality.player.split(" ")[1];
        $scope.personality = tmpPersonality;

        //set user's score to view
        //if user toke test
        //or use personality extremes
        var scores = {
          'positional': 0,
          'solid': 0,
          'calculating': 0,
          'calm': 0
        };

        if(!angular.isUndefined($rootScope.scores)) {

          for(var s in $rootScope.scores) {
            scores[s] = ($rootScope.scores[s]/5)*100;
          }

          $scope.afterTest = true;

        } else {
          var personalityStats = tmpPersonality.stats.replace(/,/g, '').split(' ');

          for(var j = 0; j < personalityStats.length; j++) {
            var tmpStat = personalityStats[j];

            if(!angular.isUndefined(scores[tmpStat])) {
              scores[tmpStat] = 100;
            }
          }

          $scope.afterTest = false;
        }

        $scope.scores = scores;
      }
    }
  });

  
  // $scope.currentSlide = 0;

  // $scope.maxSlide = $scope.personalities.length - 1;

  // $scope.changeSlide = function(direction){

  //   if(direction === 'next') {

  //     if($scope.currentSlide < $scope.maxSlide) {
  //       $scope.currentSlide++;
  //     }
  //   }

  //   if(direction === 'prev') {

  //     if($scope.currentSlide > 0) {
  //       $scope.currentSlide--;
  //     }
  //   }
  // };

}]);
