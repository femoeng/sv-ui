'use strict';

describe('Controller: AuthVisitorCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AuthVisitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthVisitorCtrl = $controller('AuthVisitorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthVisitorCtrl.awesomeThings.length).toBe(3);
  });
});
