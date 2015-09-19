'use strict';

/**
 * @ngdoc overview
 * @name temperatureSpeedAltitudeApp
 * @description
 * # temperatureSpeedAltitudeApp
 *
 * Main module of the application.
 */
angular
  .module('temperatureSpeedAltitudeApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/rocket1', {
        templateUrl: 'views/rocket1.html',
        controller: 'RocketCtrl',
        controllerAs: 'rocketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
