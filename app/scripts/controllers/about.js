'use strict';

/**
 * @ngdoc function
 * @name vidApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vidApp
 */
angular.module('vidApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
