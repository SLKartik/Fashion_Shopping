'use strict';

var futureTv = angular.module('futureTv', ['ui.bootstrap',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngStorage',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay"
])

.config(function($routeProvider) {

    $routeProvider

         .when('/', {
            templateUrl: '../views/login.html',
            controller: 'loginController'
       })

        .when('/dashboard', {
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardController'
       })

       .when('/movieDetails', {
          templateUrl: '../views/movieDetails.html',
          controller: 'movieDetailsController'
       })

       .when('/playMovie', {
          templateUrl: '../views/playMovie.html',
          controller: 'playMovieController'
       })

    ;

});

this.movies = {
     selectedMovie: { }
};

futureTv.service('dataService', function() {
    var s = {};

    return {
            setData: function (data, key) {
                s[key] = data;
            },
            getData: function (key) {
                return s[key];
            }
        };
});
