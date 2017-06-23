'use strict';

angular.module('picture.welcomeController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'pages/welcome/welcome.html',
            controller: 'WelcomeCtrl'
            //TODO: authorized: true
        });
    }])

    .controller('WelcomeCtrl', ['$rootScope', '$scope', '$location', 'ngToast', 'UserService', 'fileReader',
        function($rootScope, $scope, $location, ngToast, UserService, fileReader) {

          $scope.step = 1;

          $scope.user = $rootScope.user || {};

          $scope.user.avatar = $scope.user.avatar || 'img/no-photo.png';

          $scope.uploadPhoto = function(){
            var fileInput = document.getElementById('photo');
            fileInput.click();
          }


          $scope.getFile = function(){
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function (result) {
                    $scope.user.avatar = result;
                });
          }

          $scope.submit = function(){
            if($scope.step == 1){
              $scope.step = 2;
            }
            else if($scope.step == 2){
              $scope.step = 3;
            }
            else if($scope.step == 3){
              $rootScope.user = $scope.user;
              $location.path('home');
            }
          }

        }
    ]);
