'use strict';

var angular = require('angular');

(function() {
  angular.module('angular-utils')
  .factory('Utils', function Utils() {
    var _this = {};
    _this.guid = function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    };
    return _this;
  });
})();
