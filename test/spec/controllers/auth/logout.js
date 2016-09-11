'use strict';

describe('Controller: AuthLogoutCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AuthLogoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthLogoutCtrl = $controller('AuthLogoutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthLogoutCtrl.awesomeThings.length).toBe(3);
  });
});
