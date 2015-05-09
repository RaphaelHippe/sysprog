'use strict';

/**
 * @ngdoc overview
 * @name kochApp
 * @description
 * # kochApp
 *
 * Main module of the application.
 */
angular
  .module('kochApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-rangeSlider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/loginFb', {
        templateUrl: 'views/loginFb.html',
        controller: 'LoginfbCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/registerSuccess', {
        templateUrl: 'views/registerSuccess.html',
        controller: 'RegisterCtrl'
      })
      .when('/kochprofil', {
        templateUrl: 'views/kochprofil.html',
        controller: 'KochprofilCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
