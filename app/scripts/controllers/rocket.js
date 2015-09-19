'use strict';

/**
 * @ngdoc function
 * @name temperatureSpeedAltitudeApp.controller:RocketCtrl
 * @description
 * # RocketCtrl
 * Controller of the temperatureSpeedAltitudeApp
 */
angular.module('temperatureSpeedAltitudeApp')
  .controller('RocketCtrl',['$scope', function (scope) {
    scope.rocket1Info = {
        "temperature" : "-10",
        "altitude" : "1000",
        "speed" : "100"
    };
    scope.rocket2Info = {
        "temperature" : "-20",
        "altitude" : "2000",
        "speed" : "200"
    };
  }]);
