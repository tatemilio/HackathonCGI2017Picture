

angular.module('picture.actionButtons', [])
.directive('actionButtons', function() {
  return {
    templateUrl: 'js/directives/actionButtons/actionButtons.html',
    scope:{
      data: '=data'
    }
  };
});
