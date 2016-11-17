'use strict';

var angularUtils = require('./angular-utils');

describe('Geoutils', function() {
  it('exists', function() {
    expect(angularUtils).not.toBe(undefined);
  });

  it('gets injected into angular deps', function() {
    expect(window.angular.module('angular-utils')).toBe(angularUtils);
  });

});
