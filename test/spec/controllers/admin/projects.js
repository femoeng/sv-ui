'use strict';

describe('Controller: AdminProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AdminProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProjectsCtrl = $controller('AdminProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminProjectsCtrl.awesomeThings.length).toBe(3);
  });
});
