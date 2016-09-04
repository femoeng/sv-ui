'use strict';

describe('Controller: VisitorCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var VisitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VisitorCtrl = $controller('VisitorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VisitorCtrl.awesomeThings.length).toBe(3);
  });
});
