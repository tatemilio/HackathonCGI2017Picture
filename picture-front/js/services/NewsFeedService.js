'use strict';

angular.module('picture.newsFeedService', [])
    .factory('NewsFeed', ['$resource', function($resource){

        return $resource('api/newsFeed/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
