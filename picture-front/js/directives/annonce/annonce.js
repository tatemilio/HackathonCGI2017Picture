

angular.module('picture.annonce', [])
.directive('annonce', function() {
  return {
    templateUrl: 'js/directives/annonce/annonce.html',
    scope:{
      data: '=data'
    }
  };
});
