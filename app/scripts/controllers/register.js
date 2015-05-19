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

     $scope.nameFail = false;
     $scope.emailFail = false;
     $scope.passwordFail = false;
     $scope.passwordConfirmFail = false;
     $scope.loginFail = true;
    // $scope.

     $scope.register = function (user) {

       $scope.loginFail = true;
       console.log("test");


       for (var i = 0; i < $scope.accounts.length; i++) {
       if (user.username === $scope.accounts[i].username || user.username === "") {
         $scope.nameFail = true;
       }

      if(user.email === ""){
        $scope.emailFail = true;
      }

      if(user.password === ""){
        $scope.passwordFail = true;
      }

      if(user.passwordConfirm === "" || user.passwordConfirm != user.password){
        $scope.passwordConfirmFail = true;
      }

}

$scope.loginFail = ($scope.nameFail & $scope.emailFail & $scope.passwordFail & $scope.passwordConfirmFail);

                 console.log("test", user);
                 Userservice.register(user);
                 console.log(Userservice.getAllAccounts());
                 console.log(user.passwordConfirm, "huhu");
                 console.log($scope.loginFail);
          //       $scope.nameFail = false;
            //     $scope.emailFail = false;
              //   $scope.passwordFail = false;
              //   $scope.passwordRepeatFail = false;

                 if($scope.loginFail = false){
                 $location.path('registerSuccess');
                }
                 return null;
     };

  });
