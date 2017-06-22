'use strict';

angular.module('radar.usersController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'pages/users/users.html',
            controller: 'UsersCtrl',
            authorized: true
        });
    }])

    .controller('UsersCtrl', ['$scope', '$q', '$uibModal', 'ngToast', 'Role', function($scope, $q, $uibModal, ngToast, Role) {

        $scope.users = Role.query();
        $scope.usersToDelete = [];

        $scope.roles = ['ADMIN', 'BLOCKED'];

        $scope.addUser = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/users/addUser.html',
                controller: function($uibModalInstance, $scope){
                    $scope.user = {username: null};
                    $scope.add = function(){
                        $uibModalInstance.close($scope.user);
                    };

                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            });

            modalInstance.result.then(function(newUser){
                    var user = {username: new String(newUser.username).toLowerCase()};
                    $scope.users.push(user);
                },
                function(){

                });
        }

        $scope.delete = function(user){
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
            $scope.usersToDelete.push(user);
        }

        $scope.save = function(){
            var promises = [];
            angular.forEach($scope.users, function(u){
                if(u.id){
                    promises.push(Role.update(u).$promise);
                }
                else{
                    promises.push(Role.save(u).$promise);
                }

            });

            angular.forEach($scope.usersToDelete, function(u){
                promises.push(Role.delete(u).$promise);
            });

            $q.all(promises).then(function(){
                $scope.users = Role.query();
                $scope.usersToDelete = [];
                ngToast.create("Save successfull");
            })
        }

    }]);