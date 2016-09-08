'use strict';

window.angular.module('angular-utils')
.filter('showHTMLComments', function() {
  return function showHTMLComments(input) {
      if (window.angular.isString(input)) {
        return input.replace(/<!--/, '&lt;!--').replace(/-->/, '--&gt;');
      }
  };
});
