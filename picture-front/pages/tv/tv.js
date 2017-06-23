'use strict';

angular.module('picture.tvController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tv', {
          templateUrl: 'pages/tv/tv.html',
            controller: 'TvCtrl',
            authorized: false
        });
    }])

    .controller('TvCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
      $rootScope.teamMood = localStorage.getItem('teamMood') || 'green';
      $scope.date = new Date();
    }]);
