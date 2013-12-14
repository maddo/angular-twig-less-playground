app.directive('testProgress', [function() {
  return {
    restrict: 'E',
    scope: {
      steps: '=',
      currentStep: '='
    },
    templateUrl: '/scripts/directives/progress/progress.html',
    link: function(scope, element, attrs) {


      //hack for ng-repeat
      scope.range = function(times){
        var arr = [];

        for(var i = 0; i < times; i++) {
          arr.push(i);
        }

        return arr;
      };

    }
  };
}]);