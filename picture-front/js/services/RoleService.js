'use strict';

angular.module('radar.roleService', [])
    .factory('Role', ['$resource', function($resource){

        return $resource('api/role/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
            }
        );

    }]);