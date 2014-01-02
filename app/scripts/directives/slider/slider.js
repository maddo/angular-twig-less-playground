app.directive('personalitiesSlider', ['$location', '$routeParams', function(location, routeParams) {
  return {
    restrict: 'E',
    scope: {
      personalities: '=',
      currentIndex: '='
    },
    templateUrl: '/scripts/directives/slider/slider.html',
    link: function(scope, element, attrs) {

      scope.$watch('personalities', function(){
        
        var slidesNumber = scope.personalities.length,
            index = scope.currentIndex + slidesNumber,
            slides = [];
        
        for(var i = index - 2; i < index + 3; i++) {
          slides.push(scope.personalities[i%slidesNumber]);
        }

        scope.slides = slides;
      });

    }
  };

}]);
