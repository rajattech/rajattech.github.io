'use strict';

angular.module('app.board', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/board', {
    templateUrl: 'views/board.html'
  , controller: 'BoardController'
  })
}])

.controller('BoardController', function(
	$scope,
	$location,
	$timeout,
	$routeParams,
	networkData
) {
	$scope.networkData = networkData
	$scope.attributeListDetailLevel = 3
	$scope.selectedAttId = undefined
	$scope.networkNodeClick = function(nid) {
    console.log('Click on', nid)
  }
})
