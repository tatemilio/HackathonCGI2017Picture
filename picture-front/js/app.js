'use strict';

// Declare app level module which depends on views, and components
angular.module('picture', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ui.bootstrap',
  'uiSwitch',
  'ngToast',
  'picture.userService',
  'picture.ideaFeedbackService',
  'picture.ideaService',
  'picture.moodService',
  'picture.newsFeedbackService',
  'picture.newsFeedService',
  'picture.pollFeedbackService',
  'picture.pollService',
  'picture.homeController',
  'picture.loginController',
  'picture.logoutController'
])
    .config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }])
    .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService){
        UserService.isConnected();
        $rootScope.$on('$routeChangeStart', function(e, next, current){
          console.log(typeof next.$$route);
            if (typeof next.$$route == "undefined" || next.$$route.authorized){
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
