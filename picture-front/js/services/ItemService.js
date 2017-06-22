'use strict';

angular.module('radar.itemService', [])
    .factory('Item', ['$resource', function($resource){

        return $resource('api/item/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
            }
        );

    }]);