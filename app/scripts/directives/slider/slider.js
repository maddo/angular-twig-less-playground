app.directive('personalitiesSlider', ['$location', '$routeParams', function(location, routeParams) {
  return {
    restrict: 'E',
    scope: {
      slides: '='
    },
    templateUrl: '/scripts/directives/slider/slider.html',
    link: function(scope, element, attrs) {
      
      var slidesList = [[]];

      scope.slidesList = slidesList;
      scope.currentSlide = 0;

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

      scope.$watch('slides', function(oldSlides, newSlides){

        if(scope.slides.length > 0) {
          
          slidesList = [[]];

          for(var i = 0; i < scope.slides.length; i++) {
            var tmpSlide = scope.slides[i],
                j = 0;

            do {
              
              var tmpSlideList = slidesList[j];

              if(tmpSlideList.length < 5) {
                slidesList[j].push(tmpSlide);
              } else {

                if(j == slidesList.length - 1) {
                  slidesList.push([]);
                }
                
              }

              if(tmpSlide.url === routeParams.type) {
                scope.currentSlide = j;
              }
              
              j++;
            } while(j < slidesList.length);
          }
        }

        scope.slidesList = slidesList;
        scope.maxSlide = slidesList.length - 1;
      });

      scope.location = location;

      scope.$watch('location.path()', function(newPath){
        scope.currentUrl = routeParams.type;
      });

    }
  };
}]);
