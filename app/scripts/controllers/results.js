'use strict';
app.controller('ResultsController', ['$scope', '$location', '$rootScope', '$resource', function ($scope, $location, $rootScope, $resource) {


  if(!angular.isUndefined($rootScope.scores)) {
    var scores = {};
   
    //let's see how I am...
    var personalitySet = '';

    if($rootScope.scores.attacking > $rootScope.scores.positional) {
      personalitySet += 'attacking,';
    } else {
      personalitySet += 'positional,';
    }

    if($rootScope.scores.aggressive > $rootScope.scores.solid) {
      personalitySet += ' aggressive,';
    } else {
      personalitySet += ' solid,';
    }

    if($rootScope.scores.intuitive > $rootScope.scores.calculating) {
      personalitySet += ' intuitive,';
    } else {
      personalitySet += ' calculating,';
    }

    if($rootScope.scores.emotional > $rootScope.scores.calm) {
      personalitySet += ' emotional';
    } else {
      personalitySet += ' calm';
    }

    //...and who I am
    //by searching in personalities list
    var personality = $resource('/scripts/personalities.json', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });

    personality.query(function(res){

      var personalities = res.personalities;

      for(var i = 0; i < personalities.length; i++) {
        var tmpPersonality = personalities[i];

        if(tmpPersonality.stats === personalitySet) {
          // I am $scope.personality!
          $scope.personality = tmpPersonality;
        }
      }
    });

    //calculate score % for stats bars
    for(var s in $rootScope.scores) {
      $rootScope.scores[s] = ($rootScope.scores[s]/5)*100;
    }

  } else {
    //there is no answers so user didn't takes test
    $location.path('/').replace();
  }

  function calculateStats(a, b) {
    return (res/5)*100;
  }

}]);
