futureTv.directive('appDashboard', function() {

    'use strict';

    return {
        restrict: 'EAC',
        transclude: true,
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardController'
    };
});
