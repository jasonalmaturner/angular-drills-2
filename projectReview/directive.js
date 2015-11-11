angular.module('review').directive('birdDir', function() {
  return {
    restrict: 'E',
    scope: {
      bird: '=',
      changeBird: '&',
    },
    templateUrl: 'bird.html',
    controller: function($scope) {
      $scope.clicked = function() {
        $scope.changeBird({bird: $scope.bird});
      };
    },
  };
});
