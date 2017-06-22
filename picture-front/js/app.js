'use strict';

// Declare app level module which depends on views, and components
angular.module('radar', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ui.bootstrap',
  'uiSwitch',
  'ngToast',
  'radar.userService',
  'radar.itemService',
  'radar.articleService',
  'radar.roleService',
  'radar.draggable',
  'radar.mainController',
  'radar.adminController',
  'radar.usersController',
  'radar.loginController',
  'radar.logoutController'
])
    .config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }])
    .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService){
        UserService.isConnected();
        $rootScope.$on('$routeChangeStart', function(e, next, current){
            if (next.$$route.authorized){
                UserService.isConnected().then(function(response){
                        //Do nothing, continue to next page
                    },
                    function(response){
                        console.log("Storing into rootscope: ", next.$$route.originalPath);
                        $rootScope.redirectAfterLogin = next.$$route.originalPath;
                        $location.path('login');
                    });
            }
        });
    }]);