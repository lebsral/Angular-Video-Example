'use strict';

/**
 * @ngdoc function
 * @name vidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vidApp
 */
angular.module('vidApp')
  .controller('MainCtrl', ['$scope','$sce', function ($scope, $sce) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.config = {
				sources: [
					{src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4'), type: 'video/mp4'},
					],
				tracks: [
					{
						src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
						kind: 'subtitles',
						srclang: 'en',
						label: 'English',
						default: ''
					}
				],
				theme: 'bower_components/videogular-themes-default/videogular.css',
				plugins: {
					poster: 'http://www.videogular.com/assets/images/videogular.png'
				}
			};
  }]);
