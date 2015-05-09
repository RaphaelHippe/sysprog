'use strict';

describe('Controller: KochprofilCtrl', function () {

  // load the controller's module
  beforeEach(module('kochApp'));

  var KochprofilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KochprofilCtrl = $controller('KochprofilCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
