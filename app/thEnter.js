'use strict';

var angular = require('angular');

angular.module('angular-utils')
.directive('thEnter', function() {
  return function(scope, element, attrs) {
    element.bind('keydown keypress', function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.thEnter);
        });

        event.preventDefault();
      }
    });
  };
});
