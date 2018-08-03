futureTv.directive('appLogin', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    };
});
