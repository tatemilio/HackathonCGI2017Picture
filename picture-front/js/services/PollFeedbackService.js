'use strict';

angular.module('picture.pollFeedbackService', [])
    .factory('PollFeedback', ['$resource', function($resource){

        return $resource('api/pollFeedback/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
