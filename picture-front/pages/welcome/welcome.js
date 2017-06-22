'use strict';

angular.module('picture.welcomeController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'pages/welcome/welcome.html',
            controller: 'WelcomeCtrl'
            //TODO: authorized: true
        });
    }])

    .controller('WelcomeCtrl', ['$rootScope', '$scope', '$location', 'ngToast', 'UserService',
        function($rootScope, $scope, $location, ngToast, UserService) {

        }
    ]);
