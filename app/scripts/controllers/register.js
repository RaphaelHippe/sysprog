'use strict';

/**
 * @ngdoc function
 * @name kochApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the kochApp
 */
 angular.module('kochApp')
   .controller('RegisterCtrl', function ($scope, $location, Userservice) {
     $scope.accounts = Userservice.getAllAccounts();
     console.log($scope.accounts);

     $scope.register = function (user) {
       console.log("test", user);
       Userservice.register(user);
       console.log(Userservice.getAllAccounts());
       $location.path('registerSuccess');
     };

  });
