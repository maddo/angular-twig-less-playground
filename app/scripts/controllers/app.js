'use strict';
app.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {

  var defaults = {
    title: 'What is your Chess Personality!? Take the 20 question quiz to find out!',
    image: 'sharing-image.png'
  };

  $scope.page = {
    title: defaults.title,
    image: defaults.image
  };

  $rootScope.$on('changeMeta', function(event, data){
    
    if(data === 'defaults') {
      $scope.page = defaults;
    } else {

      $scope.page = {
        title: 'I am a chess ' + data.type + '! What is your chess personality? Take the quiz to find out?',
        image: 'personalities/' + data.url + '.jpg'
      };

    }

  });

}]);
