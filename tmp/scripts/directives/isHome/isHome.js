app.directive('isHome', ['$location', function(location) {
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {

      scope.location = location;

      scope.$watch('location.path()', function(newPath){
        if(scope.location.path() == '/') {
          $(element).addClass('home-page');
        } else {
          $(element).removeClass('home-page');
        }
      });
    }
  };
}]);