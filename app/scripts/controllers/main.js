'use strict';

/**
 * @ngdoc function
 * @name kochApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kochApp
 */
angular.module('kochApp')
  .filter('slice', function() {
     return function(arr, start, end) {
       return (arr || []).slice(start, end);
     };
   })
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.contents = [
      {
        name: 'Suche',
        class: 'sucheExpanded',
        template: 'views/suche.html',
        position: 1
      },
      {
        name: 'Kalender',
        class: 'kalenderExpanded',
        template: 'views/kochkalender.html',
        position: 2
      },
      {
        name: 'EK',
        class: 'ekExpanded',
        template: 'views/einkaufszettel.html',
        position: 3
      },
      {
        name: 'Favoriten',
        class: 'favoritenExpanded',
        template: 'views/favoriten.html',
        position: 4
      },
      {
        name: 'Settings',
        class: 'settingsExpanded',
        template: 'views/settings.html',
        position: 5
      }
    ];

    $scope.testMenuStart = 1;
    $scope.testMenuEnd = 2;
    $scope.noMoreLeft = false;
    $scope.noMoreRigh = false;

    $scope.swipeLeft = function () {
      var start = $scope.testMenuStart,
          end = $scope.testMenuEnd;
          console.log(end);
      if (!(end === 5)) {
        console.log("test");
        start++;
        end++;
      } else {
          $scope.noMoreRight = true;
        $timeout(function () {
          $scope.noMoreRight = false;
        }, 2000);
      }
      $scope.testMenuStart = start;
      $scope.testMenuEnd = end;
    };

    $scope.swipeRight = function () {
      var start = $scope.testMenuStart,
          end = $scope.testMenuEnd;
      if (!(start === 0)) {
        start--;
        end--;
      } else {
          $scope.noMoreLeft = true;
        $timeout(function () {
          $scope.noMoreLeft = false;
        }, 2000);
      }
      $scope.testMenuStart = start;
      $scope.testMenuEnd = end;
    };

    $scope.getActive = function () {
      return $scope.testMenuStart;
    }

    $scope.setValues = function (start, end) {
      $scope.testMenuStart = start;
      $scope.testMenuEnd = end;
    };


    $scope.favoriten = [
      {
        name: 'Pommes',
        preis: 2.99,
        dauer: '25 Minuten',
        picture: 'images/pommes.png'
      },
      {
        name: 'Ofenkartoffeln',
        preis: 1.32,
        dauer: '50 Minuten'
      },
      {
        name: 'Putensteak',
        preis: 4.51,
        dauer: '15 pommes'
      },
    ];

  });
