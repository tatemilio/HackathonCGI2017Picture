'use strict';

angular.module('picture.moodService', [])
    .factory('Mood', ['$resource', function($resource){

        return $resource('api/mood/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
