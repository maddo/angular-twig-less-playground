app.directive('personalitiesSlider', ['$location', '$routeParams', function(location, routeParams) {
  return {
    restrict: 'E',
    scope: {
      slides: '='
    },
    templateUrl: '/scripts/directives/slider/slider.html',
    link: function(scope, element, attrs) {

      var slider = element.find('.slider-list');
      
      scope.currentSlide = 0;

      scope.$watch('slides', function(){

        for(var i = 0; i < scope.slides.length; i++) {
          var currentSlide =  scope.slides[i];

          if(currentSlide.url == routeParams.type){

            var tmpSlide = scope.slides[2];
            scope.slides[2] = currentSlide;
            scope.slides[i] = tmpSlide;
          }
        }

        scope.maxSlide = scope.slides.length - 1 - 4;
      });

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

        var left = -1 * scope.currentSlide * 156;

        if(scope.currentSlide > 2) {
          left = left - 20;
        }

        slider.css('margin-left', left +'px');
      };

    }
  };

}]);
