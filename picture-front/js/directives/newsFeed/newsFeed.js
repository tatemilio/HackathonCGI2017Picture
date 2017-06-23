

angular.module('picture.newsFeed', [])
.directive('newsFeed', function() {
  return {
    templateUrl: 'js/directives/newsFeed/newsFeed.html',
    controller: ['$scope', 'News', function($scope, News){
      $scope.news = News.query();
    }]
  };
});
