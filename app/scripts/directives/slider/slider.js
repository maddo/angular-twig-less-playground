app.directive('personalitiesSlider', [function() {
  return {
    restrict: 'E',
    scope: {
      slides: '='
    },
    templateUrl: '/scripts/directives/slider/slider.html',
    link: function(scope, element, attrs) {

      scope.currentSlide = 0;
      scope.maxSlide = scope.slides.length - 1;

      console.log(scope.slides);

      //changing slides
      scope.changeSlide = function(direction){

        if(direction === 'next') {

          if(scope.currentSlide < scope.maxSlide) {
            scope.currentSlide++;
          }
        }

        if(direction === 'prev') {

          if(scope.currentSlide > 0) {
            scope.currentSlide--;
          }
        }
      };
    }
  };
}]);
