'use strict';

angular.module('picture.pollController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/poll', {
          templateUrl: 'pages/poll/poll.html',
            controller: 'PollCtrl',
            authorized: false
        });
    }])

    .controller('PollCtrl', ['$rootScope', '$scope', '$uibModal', function($rootScope, $scope, $uibModal) {

      
    }]);
