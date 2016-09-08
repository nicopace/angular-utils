'use strict';

var angular = require('angular');
var angularUtils = require('./angular-utils');

describe('Geoutils', function() {
  it('exists', function() {
    expect(angularUtils).not.toBe(undefined);
  });

  it('gets injected into angular deps', function() {
    expect(angular.module('angular-utils')).toBe(angularUtils);
  });

});
