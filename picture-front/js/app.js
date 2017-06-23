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
  'picture.mood',
  'picture.annonce',
  'picture.actionButtons',
  'picture.newsFeed',
  'picture.userService',
  'picture.fileReader',
  'picture.fileSelect',
  'picture.ideaFeedbackService',
  'picture.ideaService',
  'picture.moodService',
  'picture.newsFeedbackService',
  'picture.newsService',
  'picture.pollFeedbackService',
  'picture.pollService',
  'picture.homeController',
  'picture.welcomeController',
  'picture.registerController',
  'picture.loginController',
  'picture.logoutController'
])
.constant("BACKEND_CONF", {
    "url": "http://localhost",
    "port": "8080"
});

angular.module('picture')
    .config(['$httpProvider', '$routeProvider', 'BACKEND_CONF', function($httpProvider, $routeProvider, BACKEND_CONF) {
      $routeProvider.otherwise({
        redirectTo: '/home'
      });

      $httpProvider.interceptors.push(function ($q) {
          return {
              'request': function (config) {
                  if (config.url.startsWith('api/')) {
                      var rootUrl = BACKEND_CONF.url + ':' + BACKEND_CONF.port + '/';
                      config.url = rootUrl + config.url;
                  }
                  return $q.when(config);
              }
          }
      });

    }])
    .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService){
        $rootScope.isNavCollapsed = true;
        $rootScope.user = $rootScope.user || {
          avatar: 'img/profile/ivan.jpg',
          nom: 'ROPITEAUX',
          prenom: 'Ivan',
          email: 'ivan.ropiteaux@gmail.com'
        };

        $rootScope.teamMood = localStorage.getItem('teamMood') || 'green';

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
