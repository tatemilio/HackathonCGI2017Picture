'use strict';

angular.module('radar.mainController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$scope', '$uibModal', 'Item', 'Article', function($scope, $uibModal, Item, Article) {
        console.log('in controller');

        $scope.items = Item.query();

        $scope.article = new Article({functionnalKey: 'homepage'});
        $scope.article.$byFk(function(article){
            $scope.article = article;
        })

        $scope.showInfo = function(item){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/main/itemDetails.html',
                controller: function($uibModalInstance, $scope){
                    $scope.item = item;
                    $scope.close = function(){
                        $uibModalInstance.dismiss('cancel');
                    }
                }
            });

        }

    }]);