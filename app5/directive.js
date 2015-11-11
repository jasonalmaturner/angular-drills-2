angular.module('myApp').directive('myDirective', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.edit = true;
      console.log($scope.theBiz);
    },

    scope: {
      theBiz: '=',
      changeBiz: '&',
    },
    templateUrl: 'directiveTmpl.html',
  };
});
