'use strict';

/**
 * @ngdoc function
 * @name kochApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the kochApp
 */
angular.module('kochApp')
  .controller('LoginCtrl', function ($scope,$location, Userservice) {

    $scope.accounts = Userservice.getAllAccounts();
    $scope.loginFail = false;
    $scope.passwordFail = false;

    $scope.login = function (credentials) {
      for (var i = 0; i < $scope.accounts.length; i++) {
        if (credentials.username === $scope.accounts[i].username &&
              credentials.password === $scope.accounts[i].password) {

          $location.path('main');
          return null;

        } else if (credentials.username === $scope.accounts[i].username &&
                credentials.password != $scope.accounts[i].password) {
                  $scope.passwordFail = true;
                  return null;
                }else{
                  $scope.loginFail = true;
                  return null;
                }
      }
      // fail

    }

    $scope.goTo = function (input) {
      $location.path(input);
  }
});
