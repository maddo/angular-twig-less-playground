app.directive('scoreStats', [function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/views/_stats.html',
    link: function(scope, element, attrs) {
      scope.labelLeft = attrs.labelLeft;
      scope.labelRight = attrs.labelRight;

      $(element).find('.pointer').css('left', attrs.score + '%');
    }
  };
}]);