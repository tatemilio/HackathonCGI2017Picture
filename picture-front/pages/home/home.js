'use strict';

angular.module('picture.homeController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
          templateUrl: 'pages/home/home.html',
            controller: 'HomeCtrl',
            authorized: true
        });
    }])

    .controller('HomeCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

    }]);
