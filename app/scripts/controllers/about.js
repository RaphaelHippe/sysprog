'use strict';

/**
 * @ngdoc function
 * @name kochApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kochApp
 */
angular.module('kochApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
