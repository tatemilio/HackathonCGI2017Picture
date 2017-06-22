'use strict';

angular.module('picture.ideaService', [])
    .factory('Idea', ['$resource', function($resource){

        return $resource('api/role/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
