'use strict';

angular.module('picture.roleService', [])
    .factory('Role', ['$resource', function($resource){

        return $resource('api/role/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
