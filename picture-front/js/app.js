'use strict';

// Declare app level module which depends on views, and components
angular.module('picture', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ui.bootstrap',
  'uiSwitch',
  'ngToast',
  'picture.header',
  'picture.profileHeader',
  'picture.userService',
  'picture.fileReader',
  'picture.fileSelect',
  'picture.ideaFeedbackService',
  'picture.ideaService',
  'picture.moodService',
  'picture.newsFeedbackService',
  'picture.newsFeedService',
  'picture.pollFeedbackService',
  'picture.pollService',
  'picture.homeController',
  'picture.welcomeController',
  'picture.registerController',
  'picture.loginController',
  'picture.logoutController'
])
    .config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }])
    .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService){
        $rootScope.isNavCollapsed = true;
        $rootScope.user = $rootScope.user || {
          avatar: 'img/profile-pic.jpg',
          nom: 'ROPITEAUX',
          prenom: 'Ivan',
          email: 'ivan.ropiteaux@gmail.com'
        };

        UserService.isConnected();
        $rootScope.$on('$routeChangeStart', function(e, next, current){
            if (next.$$route.authorized){
                UserService.isConnected().then(function(response){
                        //Do nothing, continue to next page
                    },
                    function(response){
                        $rootScope.redirectAfterLogin = next.$$route.originalPath;
                        $location.path('login');
                    });
            }
        });
    }]);
