'use strict';
app.controller('HomeController', ['$scope', '$rootScope', 'analytics', function ($scope, $rootScope, analytics) {
  $rootScope.$emit('changeMeta', 'defaults');
}]);
