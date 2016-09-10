'use strict';

describe('Controller: AdminHrCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AdminHrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminHrCtrl = $controller('AdminHrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminHrCtrl.awesomeThings.length).toBe(3);
  });
});
