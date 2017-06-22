'use strict';

angular.module('picture.logoutController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/logout', {
            controller: 'LogoutCtrl',
            template: ''
        });
    }])

    .controller('LogoutCtrl', ['$rootScope', '$scope', '$location', 'ngToast', 'UserService',
        function($rootScope, $scope, $location, ngToast, UserService) {
            UserService.logout().then(function(response){
                ngToast.create('Logged out.')
                $location.path("home");
            });

        }
    ]);
