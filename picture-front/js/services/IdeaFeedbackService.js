'use strict';

angular.module('picture.ideaFeedbackService', [])
    .factory('IdeaFeedback', ['$resource', function($resource){

        return $resource('api/ideaFeedback/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
                //  'byFk': {method: 'GET', url: 'api/article/byFk/:fk'}
            }
        );

    }]);
