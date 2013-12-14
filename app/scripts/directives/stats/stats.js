app.directive('scoreStats', [function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/scripts/directives/stats/stats.html',
    link: function(scope, element, attrs) {
      scope.labelLeft = attrs.labelLeft;
      scope.labelRight = attrs.labelRight;

      var score = attrs.score,
          pointer = $(element).find('.pointer'),
          containerWidth = $(element).find('.stats-container').outerWidth(),
          left;

      if(score < 0) {
        score = 0;
      }

      if(score > 100) {
        score = 100;
      }
      
      left = (score/100)*containerWidth;

      if(score == 0) {
        pointer.addClass('min');
      }

      if(score == 100) {
        left = left - 4;
        pointer.addClass('max');
      }

      pointer.css('left', left + 'px');
    }
  };
}]);