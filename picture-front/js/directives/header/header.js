

angular.module('picture.header', [])
.directive('pictureHeader', function() {
  return {
    templateUrl: 'js/directives/header/header.html',
    controller: ['$rootScope', '$scope', function($rootScope, $scope){
      // $scope.teamMood = $rootScope.teamMood;
    }]
  };
});
