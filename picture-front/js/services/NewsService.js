'use strict';

angular.module('picture.newsService', [])
    .factory('News', ['$resource', function($resource){

        return $resource('api/news/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
