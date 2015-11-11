angular.module('review').controller('mainCtrl', function($scope, birdService) {

  $scope.changeFocusBird = function(bird) {
    $scope.focusBird = bird;
  };

  birdService.getBirds().then(function(res) {
    $scope.birds = res.data;
  });
});
