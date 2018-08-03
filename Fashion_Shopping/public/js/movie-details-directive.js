futureTv.directive('appMovieDetails', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/movieDetails.html',
        controller: 'movieDetailsController'
    };
});
