'use strict';

angular.module('picture.userService', [])
    .service('UserService', ['$http', '$q', '$rootScope', '$httpParamSerializerJQLike',
        function UserService($http, $q, $rootScope, $httpParamSerializerJQLike) {

            var loginWithCredentials = function(url, credentials){
                var deferredObject = $q.defer();
                var headers = {
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                };
                $http.post(url, $httpParamSerializerJQLike(credentials),{headers: headers})
                    .success(function(data){
                        getUser().then(function(user){
                            deferredObject.resolve(user);
                        },
                        function(response){
                            deferredObject.reject(response);
                        });
                    }).error(function(response){
                        deferredObject.reject(response);
                    });
                return deferredObject.promise;
            };

            var getUser = function(){
                var deferredObject = $q.defer();
                $http.get('api/user').success(function(user){
                        if(user.name){
                            $rootScope.user = user;
                            deferredObject.resolve(user);
                        }
                        else{
                            deferredObject.reject(user);
                        }
                    }).error(function(response){
                        deferredObject.reject(response);
                    });
                return deferredObject.promise;
            };

            return {
                login: function(credentials){
                    return loginWithCredentials('login', credentials);
                },
                logout: function(){
                    var deferredObject = $q.defer();
                    $http.post('logout', {}).success(function() {
                        $rootScope.user = null;
                        deferredObject.resolve();
                    }).error(function(data) {

                        $rootScope.user = null;
                        deferredObject.reject();
                    });
                    return deferredObject.promise;
                },
                isConnected: function(){
                    var deferredObject = $q.defer();
                    if($rootScope.user != null){
                        deferredObject.resolve(true);
                    }
                    else{
                        getUser()
                        .then(function(response){
                            deferredObject.resolve(true);
                        },
                        function(response){
                            deferredObject.reject(false);
                        });
                    }
                    return deferredObject.promise;
                }
            }
        }]);
