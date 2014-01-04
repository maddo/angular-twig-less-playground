'use strict';
app.controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.$emit('changeMeta', 'defaults');
}]);
