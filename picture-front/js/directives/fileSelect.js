angular.module('picture.fileSelect', [])
      .directive('ngFileSelect', ngFileSelect);

  function ngFileSelect() {
    return {
      scope: false,
      link: function ($scope, el) {
        el.bind('change', function (e) {
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        })
      }
    }
  }
