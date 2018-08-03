
'use strict';

(function() {

     futureTv.controller('dashboardController', ['$scope', '$sce', '$location', '$document', '$localStorage', 'dataService', function(scope, sce, loc, doc, localStorage, dataService) {

          var numberOfTiles = 5;
          var bodyRef = angular.element(doc[0].body);
          var speechSynthesisUtterance = new SpeechSynthesisUtterance();
          var voices = window.speechSynthesis.getVoices();
          var voiceCommands = [
               "Action",
               "Drama",
               "Horror",
               "Mystery",
               "Science fiction"
          ];
          scope.voiceCommands = voiceCommands;
          scope.messages = [];
          scope.message = '';

          scope.config = {
               preload: "none",
               sources: [
               ],
               tracks: [{
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
               }],
               theme: {
                    url: "http://localhost:/#/assets/css/videogular.css"
               }
          };

          scope.isPopup = false;
          scope.isVoiceLayer = false;
          scope.data = {};

          scope.goToMovieDetails = function(movie) {
               dataService.setData(movie, movies.selectedMovie);
               localStorage.userData = movie;
               loc.path('/movieDetails');
          }

          scope.goToLogin = function() {
               scope.searchData = [];
               loc.path('/');
          }

          scope.showVoiceLayer = function() {
              debugger;
               scope.isVoiceLayer = true;
               bodyRef.addClass('hide-scroll');
               voice.isContinues = true;
               voice.setCommands([{
                    voices: voiceCommands,
                    action: function(command) {
                         scope.searchMovies(command);
                    }
               }]);

               voice.start();
          }

          scope.closeVoiceLayer = function() {
               scope.isVoiceLayer = false;
               bodyRef.removeClass('hide-scroll');
               voice.stop();
          }

          scope.closePopup = function() {
               scope.isPopup = false;
          };

          scope.sendMessage = function() {
               scope.voiceFilteredData(scope.message.toLowerCase());
               scope.closeVoiceLayer();

               window.speechSynthesis.speak(speechSynthesisUtterance);
               scope.message = '';
          };

          scope.searchMovies = function(command) {
               scope.message = command;
               scope.sendMessage();
               scope.$apply();
          };

          scope.leftClick = function() {
               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');

               var popularVideosLength = scope.completeData[0].groups[2].movies.length;
               var scrollLength = (popularVideosLength * 248);

               view.scrollLeft -= 248;

               numberOfTiles--;

               if (numberOfTiles <= 5) {
                    left.style.display = "none";
               } else {
                    left.style.display = "block";
               }

               if (numberOfTiles >= popularVideosLength) {
                    right.style.display = "none";
               } else {
                    right.style.display = "block";
               }

          }

          scope.rightClick = function() {

               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');
               var popularVideosLength = scope.completeData[0].groups[2].movies.length;
               var scrollLength = (popularVideosLength * 248);

               view.scrollLeft += 248;

               numberOfTiles++;

               if (view.scrollLeft < 1) {
                    left.style.display = "none";
               } else {
                    left.style.display = "block";
               }

               if (numberOfTiles >= popularVideosLength) {
                    right.style.display = "none";
               } else {
                    right.style.display = "block";
               }
          }

          scope.init = function() {
               var view = document.getElementById('tslshow');
               var left = document.getElementById('left');
               var right = document.getElementById('right');

               if (view !== null && view.scrollLeft < 1) {
                    left.style.display = "none";
               }
          }

     }]);

})();
