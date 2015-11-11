angular.module('weatherBird', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/homeTmpl.html',
      controller: 'homeCtrl',
    })
    .state('weather', {
      url: '/weather',
      templateUrl: 'weather/weatherTmpl.html',
      controller: 'weatherCtrl',
      resolve: {
        weatherData: function(mainService) {
          return mainService.getWeather();
        },
      },
    });
  $urlRouterProvider.otherwise('/home');
});
