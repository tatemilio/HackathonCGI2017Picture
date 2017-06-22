'use strict';

angular.module('picture.registerController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'pages/register/register.html',
            controller: 'RegisterCtrl'
        });
    }])

    .controller('RegisterCtrl', ['$rootScope', '$scope', '$location', 'ngToast', 'UserService',
        function($rootScope, $scope, $location, ngToast, UserService) {
            
        }
    ]);
