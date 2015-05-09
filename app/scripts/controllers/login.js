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
    $scope.login = function (credentials) {
      for (var i = 0; i < $scope.accounts.length; i++) {
        if (credentials.username === $scope.accounts[i].username &&
            credentials.password === $scope.accounts[i].password) {
          // success
          console.log("success");
          return null;
          // $scope.goTo('kochkalender');
        }
      }
      // fail
      $scope.loginFail = true;
      return null;
    }




    $scope.goTo = function (input) {
      $location.path(input);
    }
  });
