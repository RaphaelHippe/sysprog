'use strict';

/**
 * @ngdoc function
 * @name kochApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the kochApp
 */
angular.module('kochApp')
  .controller('WelcomeCtrl', function ($scope, $location) {
    $scope.goTo = function (input) {
      $location.path(input);
    };
  });
