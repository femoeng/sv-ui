'use strict';

describe('Controller: AdminHrVisitorsCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AdminHrVisitorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminHrVisitorsCtrl = $controller('AdminHrVisitorsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
