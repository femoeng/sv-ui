'use strict';

describe('Service: admin/statistics', function () {

  // load the service's module
  beforeEach(module('svUiApp'));

  // instantiate service
  var admin/statistics;
  beforeEach(inject(function (_admin/statistics_) {
    admin/statistics = _admin/statistics_;
  }));

  it('should do something', function () {
    expect(!!admin/statistics).toBe(true);
  });

});
