'use strict';

describe('Controller: AdminHrUsersCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AdminHrUsersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminHrUsersCtrl = $controller('AdminHrUsersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
