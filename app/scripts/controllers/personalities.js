'use strict';
app.controller('PersonalitiesController', ['$scope', '$location', '$rootScope', '$resource', '$routeParams', function ($scope, $location, $rootScope, $resource, $routeParams) {

  var personality = $resource('/scripts/data/personalities.json', {}, {
    query: {method: 'GET', params: {}, isArray: false}
  });

  $scope.personalities = [];

  //get personality and set scores
  personality.query(function(res){

    for(var i = 0; i < res.personalities.length; i++) {
      var tmpPersonality = res.personalities[i];
      
      if(tmpPersonality.url === $routeParams.type) {
        tmpPersonality.lastName = tmpPersonality.player.split(" ")[1];
        
        $scope.personality = tmpPersonality;
        $scope.currentPersonalityIndex = i;

          //page title change
          $rootScope.$emit('changeTitle', "I am a chess " + tmpPersonality.type.toLowerCase() + "! What is your chess personality? Take the quiz to find out?");

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

    delete $rootScope.scores;

    //set all personalities for slider
    $scope.personalities = res.personalities;
  });

}]);
