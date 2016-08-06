'use strict';

describe('Controller: AdminEstatisticasCtrl', function () {

  // load the controller's module
  beforeEach(module('svUiApp'));

  var AdminEstatisticasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminEstatisticasCtrl = $controller('AdminEstatisticasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
