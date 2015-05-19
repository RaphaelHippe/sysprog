'use strict';

/**
 * @ngdoc service
 * @name kochApp.userservice
 * @description
 * # userservice
 * Service in the kochApp.
 */
angular.module('kochApp')
  .service('Userservice', function Userservice() {
    var user = {};

    user.accounts = [
      {
        username: 'clemens',
        password: '1234'
      },
      {
        username: 'admin',
        password: 'admin'
      }
    ];
    // API USAGE
    user.getAllAcounts = function () {
      return user.accounts;
    };

    user.register = function (credentials) {
      console.log("service", credentials);
      user.accounts.push(credentials);
      return null;
    };

    // PUBLICK API

    return {
      getAllAccounts: function () {
        return user.getAllAcounts();
      },
      register: function (credentials) {
        return user.register(credentials);
      }
    }

  });
