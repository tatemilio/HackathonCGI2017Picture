'use strict';

angular.module('picture.pollService', [])
    .factory('Poll', ['$resource', function($resource){

        return $resource('api/poll/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
