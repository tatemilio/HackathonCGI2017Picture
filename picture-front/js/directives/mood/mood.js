

angular.module('picture.mood', [])
.directive('mood', function() {
  return {
    templateUrl: 'js/directives/mood/mood.html',
    scope:{
    },
    controller: ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout){
      $scope.moodSelected = false;
      $scope.user = $rootScope.user;
      $scope.moodSelected = localStorage.getItem('userMood') != null;

      var map = {
        1: 'red',
        2: 'yellow',
        3: 'green'
      }
      $scope.selectMood = function(val){
        localStorage.setItem('teamMood', map[val]);
        $rootScope.teamMood = map[val];
        $scope.moodJustSelected = true;
        $timeout(function(){
            $scope.moodSelected = true;
        }, 1000);
        localStorage.setItem('userMood', val);
      }
    }]
  };
});
