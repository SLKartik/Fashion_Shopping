futureTv.directive('appPlayMovie', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/playMovie.html',
        controller: 'playMovieController'
    };
});
