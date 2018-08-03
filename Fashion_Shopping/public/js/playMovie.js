
'use strict';

(function() {

     futureTv.controller('playMovieController', ['$scope', '$sce', '$location', '$window', '$document', '$sessionStorage', function(scope, sce, loc, window, document, sessionStorage) {

          var bodyRef = angular.element(document[0].body);
          scope.movie = {};
          scope.stretchModes = [{
                    label: "None",
                    value: "none"
               },
               {
                    label: "Fit",
                    value: "fit"
               },
               {
                    label: "Fill",
                    value: "fill"
               }
          ];
          scope.config = {
               width: 1100,
               height: 380,
               autoHide: false,
               autoPlay: false,
               responsive: true,
               stretch: scope.stretchModes[1],
               transclude: true,
               preload: "none",
               sources: [
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    // {src: sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
               ],
               tracks: [{
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
               }],
               theme: {
                    url: "http://localhost:3000/#/assets/css/videogular.css"
               }
          };

          scope.init = function(data) {
               var movie = JSON.parse(data);
               scope.movie = movie;
               if (movie !== undefined) {
                    var movieSrc = movie.movieUrl;
                    scope.config.sources = [{
                         src: sce.trustAsResourceUrl(movieSrc),
                         type: 'video/mp4'
                    }, ];
               }
          }

          scope.goToMovieDetails = function() {
               loc.path('/movieDetails');
          }

          scope.init(window.localStorage.getItem("ngStorage-userData"));
          window.scrollTo(0, 0);

     }]);

})();
