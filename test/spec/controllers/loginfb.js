'use strict';

describe('Controller: LoginfbCtrl', function () {

  // load the controller's module
  beforeEach(module('kochApp'));

  var LoginfbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginfbCtrl = $controller('LoginfbCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
