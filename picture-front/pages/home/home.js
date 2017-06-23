'use strict';

angular.module('picture.homeController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
          templateUrl: 'pages/home/home.html',
            controller: 'HomeCtrl',
            authorized: false
        });
    }])

    .controller('HomeCtrl', ['$rootScope', '$scope', '$uibModal', function($rootScope, $scope, $uibModal) {
    }]);
