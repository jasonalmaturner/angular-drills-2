angular.module('review').service('birdService', function($http) {
  this.getBirds = function() {
    return $http({
      method: 'GET',
      url: 'http://bird-api.com/api/birds',
    })
  }
})
