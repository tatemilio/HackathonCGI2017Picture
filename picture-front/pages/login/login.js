'use strict';

angular.module('picture.loginController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'pages/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'ngToast', 'UserService',
        function($rootScope, $scope, $location, ngToast, UserService) {
            UserService.isConnected().then(function(response){
                $location.path('home');
            });

            $scope.credentials = {}

            $scope.submit = function(){
                UserService.login($scope.credentials).then(function(){
                    ngToast.create('Login successfull')

                    if($rootScope.redirectAfterLogin){
                        console.log("redirecting to ", $rootScope.redirectAfterLogin);
                        $location.path($rootScope.redirectAfterLogin);
                        return;
                    }

                    console.log("redirecting to home");
                    $location.path('home');
                }, function(response){
                    if(response.status == 403){
                        ngToast.create({
                            className: 'danger',
                            content: 'Your user is not allowed to acces admin page'
                        })
                    }
                    else{
                        ngToast.create({
                            className: 'danger',
                            content: 'Wrong username/password'
                        })
                    }
                });
            }

        }
    ]);
