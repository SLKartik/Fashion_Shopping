
'use strict';

(function() {

     futureTv.controller('loginController', ['$scope', '$location', '$document', '$timeout', function(scope, loc, document, timeout) {

          var bodyRef = angular.element(document[0].body);
          scope.data = {};
          scope.isCameraLayer = false;
          scope.isRegister = false;
          scope.isError = true;

          scope.closeError = function() {
               scope.isError = false;
          }

          scope.registerUser = function() {
               timeout(function () {
                    captureImage(scope.data.name);
               }, 1000);
          }

          scope.openCamera = function() {
               scope.isCameraLayer = true;
               scope.isRegister = true;
               startWebcamForRegister(true, scope.userName);
          }

          scope.showCamera = function() {
               scope.isCameraLayer = true;
               scope.isRegister = false;
               scope.verifyFaceCredentials();
          }

          scope.closeCamera = function() {
               scope.isCameraLayer = false;
               videoOff();
          }

          scope.verifyFaceCredentials = function() {
               var permisionDeniedMessage = 'You are not a registered user';
               scope.userName = 'Test';
               scope.userName = 'Authenticating the USER';
               scope.isWatchable = startWebcam(false);
          }

     }]);

})();
