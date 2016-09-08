'use strict';

var angular = require('angular');

angular.module('angular-utils')
.filter('showHTMLComments', function() {
  return function showHTMLComments(input) {
      if (angular.isString(input)) {
        return input.replace(/<!--/, '&lt;!--').replace(/-->/, '--&gt;');
      }
  };
});
