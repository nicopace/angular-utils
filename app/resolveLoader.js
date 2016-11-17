'use strict';

window.angular.module('angular-utils')
.directive('resolveLoader', [function resolveLoader() {

  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="alert-overlay ng-hide"><div class="alert-overlay-inner"><ng-transclude></ng-transclude></div></div>',
    controllerAs: 'vm',
    controller: ['$scope', '$timeout', '$element', function($scope, $timeout, $element) {

      $scope.$on('$stateChangeStart', function onStateChangeStart() {
        $timeout(function onStateChangeStartTimeout() {
          $element.removeClass('ng-hide');
        }, 0);
      });

      $scope.$on('screenloaded', function onScreenLoaded() {
        $timeout(function onScreenLoadedTimeout() {
          $element.addClass('ng-hide');
        }, 0);
      });
    }]
  };
}]);
