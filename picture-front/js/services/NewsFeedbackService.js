'use strict';

angular.module('picture.newsFeedbackService', [])
    .factory('NewsFeedback', ['$resource', function($resource){

        return $resource('api/newsFeedback/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
