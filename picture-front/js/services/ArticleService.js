'use strict';

angular.module('radar.articleService', [])
    .factory('Article', ['$resource', function($resource){

        return $resource('api/article/:id', {id: '@id', fk: '@functionnalKey'},
            {
                'update': {method: 'PUT'},
                'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);