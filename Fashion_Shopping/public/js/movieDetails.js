
'use strict';

(function() {

     futureTv.controller('movieDetailsController', ['$scope', '$location', '$timeout', '$window', '$document', '$localStorage', '$sessionStorage', '$route', 'dataService', function(scope, loc, timeout, window, document, localStorage, sessionStorage, route, dataService) {

          var bodyRef = angular.element(document[0].body);
          scope.isWatchable = false;
          scope.isCameraLayer = false;
          scope.movie = localStorage.userData;

          scope.userName = 'Test';

          scope.goToDashboard = function() {
               loc.path('/dashboard');
          }

          scope.goToMovieDetails = function(movie) {
               dataService.setData(movie, movies.selectedMovie);
               localStorage.userData = movie;
               loc.path('/movieDetails');
               route.reload();
          }

          scope.goToShoppingVideo = function() {
               window.location = 'http://localhost:3000/shopping.html';
          }

          scope.goToLogin = function() {
               loc.path('/');
          }

          scope.goToPlayMovie = function() {
               loc.path('/playMovie');
          }

          scope.verifyFaceCredentials = function() {

               var permisionDeniedMessage = 'You do not have permission to watch this video';
               scope.userName = 'Test';
               scope.isWatchable = false;
               scope.userName = 'Authenticating the USER';

               if(scope.movie.genre === 'Shopping') {
                    scope.goToShoppingVideo();
               }
          }

          scope.showCamera = function() {
               window.scrollTo(0, 0);
               scope.isCameraLayer = true;

               if(scope.movie.genre !== 'Shopping') {
                    startWebcamForMoviePermission(false);
                    scope.verifyFaceCredentials();
               }
               else {
                    scope.goToShoppingVideo();
               }

          }

          scope.closeCamera = function() {
               scope.isCameraLayer = false;
          }

          window.scrollTo(0, 0);

     }]);

})();
