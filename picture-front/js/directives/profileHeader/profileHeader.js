

angular.module('picture.profileHeader', [])
.directive('profileHeader', function() {
  return {
    templateUrl: 'js/directives/profileHeader/profileHeader.html',
    scope:{

    },
    controller: ['$rootScope', '$scope', function($rootScope, $scope){
      $scope.user = $rootScope.user || {};
      $scope.user.mode = $scope.user.mode || 'friends';

    }]
  };
});
