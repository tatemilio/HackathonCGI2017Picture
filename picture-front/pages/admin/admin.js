'use strict';

angular.module('radar.adminController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'pages/admin/admin.html',
            controller: 'AdminCtrl',
            authorized: true
        });
    }])

    .controller('AdminCtrl', ['$scope', '$uibModal', 'ngToast', 'Item', 'Article', function($scope, $uibModal, ngToast, Item, Article) {

        $scope.items = Item.query(function(data){
            angular.forEach(data, function(value){
                value.deleted = false;
            });
        });
        $scope.lastCreatedItem = null;

        $scope.article = new Article({functionnalKey: 'homepage'});
        $scope.article.$byFk(function(article){
            $scope.article = article;
        })

        $scope.options = {
            container: 'timeline',
            stop: function(e, item, elem, dragged){
                if(dragged){
                    var container = document.getElementById('timeline').getBoundingClientRect();
                    var x = parseInt(elem.css('left'), 10);
                    var y = parseInt(elem.css('top'), 10);
                    item.x = 100 * x / container.width;
                    item.y = 100 * y / container.height;
                    console.log("updated");
                }
            }
        }

        $scope.addItem = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/admin/addItem.html',
                controller: function($uibModalInstance, $scope){
                    $scope.verb = 'Add';
                    $scope.edit = false;
                    $scope.item = {
                        newItem: true,
                        name: null,
                        description: null,
                        link: null,
                        x: 50,
                        y: 50
                    };

                    $scope.save = function(){
                        $uibModalInstance.close($scope.item);
                    };

                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            });

            modalInstance.result.then(function(item){
                Item.save(item, function(data){
                    $scope.items.push(data);
                    $scope.lastCreatedItem = data;
                    ngToast.create("Item <b>" + data.name + "</b> created");
                });
            },
            function(){

            });
        };

        $scope.editItem = function(item){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/admin/addItem.html',
                controller: function($uibModalInstance, $scope){
                    $scope.verb = 'Edit';
                    $scope.edit = true;
                    $scope.item = angular.copy(item);

                    $scope.save = function(){
                        $uibModalInstance.close({item: $scope.item, action: 'save'});
                    };

                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };

                    $scope.delete = function(){
                        $uibModalInstance.close({item: $scope.item, action: 'delete'});
                    };
                }
            });

            modalInstance.result.then(function(obj) {
                var copyItem = obj.item;
                if (obj.action == 'save') {
                    item.newItem = copyItem.newItem;
                    item.name = copyItem.name;
                    item.description = copyItem.description;
                    item.link = copyItem.link;
                }
                else if(obj.action == 'delete'){
                    item.deleted = true;
                }
            },
            function(){

            });
        }

        $scope.save = function(){
            angular.forEach($scope.items, function(value){
                if(value.deleted == true){
                    value.$remove();
                }
                else{
                    Item.update(value);
                }
            });

            console.dir($scope.article);
            console.log($scope.article.id);
            console.log(Boolean($scope.article.id));
            if($scope.article.id){
                $scope.article.$update();
            }
            else{
                $scope.article.$save();
            }
            ngToast.create("Save successfull");
        }

    }]);