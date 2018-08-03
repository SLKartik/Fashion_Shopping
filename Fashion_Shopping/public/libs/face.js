//--------------------
// GET USER MEDIA CODE
//--------------------
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

var video;
var webcamStream;
var isFaceValid = false;
var verifiedUserName = '';

function closeErrorWindow() {
     $('#errorWindow').removeClass('voice-overlay');
     $('#errorWindow').addClass('popup-hide');
}

function showErrorWindow() {
     $('#cameraLayer').removeClass('voice-overlay');
     $('#cameraLayer').addClass('popup-hide');
     $('#errorWindow').removeClass('popup-hide');
     $('#errorWindow').addClass('voice-overlay');
}

function closeCameraWindow() {
     $('#cameraLayer').removeClass('voice-overlay');
     $('#cameraLayer').addClass('popup-hide');
     videoOff();
}

function showCameraWindow() {
     $('#cameraLayer').removeClass('popup-hide');
     $('#cameraLayer').addClass('voice-overlay');

     $('#register').removeClass('register');
     $('#register').addClass('webcam');

     videoOff();
     registerSectionClose();
}

function registerSection() {
     $('#registerUser').css("display", "block");

     $('#register').removeClass('webcam');
     $('#register').addClass('register');
}

function registerSectionClose() {
     $('#registerUser').css("display", "none");
}

function startWebcam(isRegister, userName) {
     showCameraWindow();

     if (navigator.getUserMedia) {
          navigator.getUserMedia(

               {
                    video: true,
                    audio: false
               },

               function(localMediaStream) {

                    video = document.querySelector('video');
                    video.src = window.URL.createObjectURL(localMediaStream);
                    webcamStream = localMediaStream;

                    // after 5 seconds take a snapshot
                    var result = false;
                    if (isRegister) {
                         result = setTimeout(function() {
                              captureImage(userName)
                         }, 5000);
                    } else {

                         result = setTimeout(snapshot, 1000);
                    }

                    return result;

               },
               function(err) {
                    console.log("The following error occured: " + err);
               }

          );
     } else {
          console.log("getUserMedia not supported");
     }

}

function startWebcamForMoviePermission(isRegister, userName) {

     if (navigator.getUserMedia) {
          navigator.getUserMedia(

               {
                    video: true,
                    audio: false
               },

               function(localMediaStream) {

                    video = document.querySelector('video');
                    video.src = window.URL.createObjectURL(localMediaStream);
                    webcamStream = localMediaStream;

                    // after 5 seconds take a snapshot
                    var result = false;
                    if (isRegister) {
                         result = setTimeout(function() {
                              captureImage(userName)
                         }, 5000);
                    } else {
                         result = setTimeout(checkMoviePermission, 1000);
                    }

                    return result;

               },
               function(err) {
                    console.log("The following error occured: " + err);
               }

          );
     } else {
          console.log("getUserMedia not supported");
     }

}

function startWebcamForRegister(isRegister, name) {
     var userName = '';
     if(name !== null)
          userName = name.value;

     showCameraWindow();
     registerSection();

     if (navigator.getUserMedia) {
          navigator.getUserMedia(

               {
                    video: true,
                    audio: false
               },

               function(localMediaStream) {

                    video = document.querySelector('video');
                    video.src = window.URL.createObjectURL(localMediaStream);
                    webcamStream = localMediaStream;

               },
               function(err) {
                    console.log("The following error occured: " + err);
               }

          );
     } else {
          console.log("getUserMedia not supported");
     }

}

function videoOff() {
     if(video !== undefined) {
          video.pause();
          video.src = "";
          webcamStream.getTracks()[0].stop();
     }
}

function captureImage(userName) {
     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext('2d');
     canvas = document.getElementById("myCanvas");
     ctx = canvas.getContext('2d');

     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
     var faceImage = new Image();
     faceImage.src = canvas.toDataURL();
     datad = "{\r\n    \"image\":\"" + faceImage.src + "\",\r\n    \"subject_id\":\"" + userName + "\",\r\n    \"gallery_name\":\"FutureTv\"\r\n}";
     var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.kairos.com/enroll",
          "method": "POST",
          "headers": {
               "content-type": "application/json",
               "app_id": "6bd454af",
               "app_key": "d9ff09fa30513a50a34c49f87909c6b0",
               "cache-control": "no-cache"
          },
          "processData": false,
          "data": datad
     }

     $.ajax(settings).done(function(response) {
          if ((response.images[0].transaction.status) == "success") {
               window.location.assign("http://localhost:3000/#/dashboard");
               videoOff();
               return true;
          } else {

               videoOff();
               return false;
          }
     });

}

//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
function snapshot() {
     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext('2d');

     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
     var faceImage = new Image();
     faceImage.src = canvas.toDataURL();
     datad = "{\r\n    \"image\":\"" + faceImage.src + "\",\r\n    \"gallery_name\":\"FutureTv\"\r\n}"
     var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.kairos.com/recognize",
          "method": "POST",
          "headers": {
               "content-type": "application/json",
               "app_id": "6bd454af",
               "app_key": "d9ff09fa30513a50a34c49f87909c6b0",
               "cache-control": "no-cache"
          },
          "processData": false,
          "data": datad
     }

     $.ajax(settings).done(function(response) {
          var m = response;
          //var printUserName = document.getElementById('loggedInUserName')
          if (JSON.stringify(m).indexOf("success") > -1) {
               isFaceValid = true;
               verifiedUserName = m.images[0].candidates[0].subject_id;
               console.log(verifiedUserName);
               localStorage.setItem("userData", JSON.stringify(m));

               videoOff();
               window.location.assign("http://localhost:3000/#/dashboard");
               return true;
          } else {
               isFaceValid = false;
               verifiedUserName = '';
               console.log("User does not have credentials-awdhlasldjasl");
               showErrorWindow();
               videoOff();
               return false;
          }
     });
}

function checkMoviePermission() {
     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext('2d');

     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
     var faceImage = new Image();
     faceImage.src = canvas.toDataURL();
     datad = "{\r\n    \"image\":\"" + faceImage.src + "\",\r\n    \"gallery_name\":\"FutureTv\"\r\n}"
     var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.kairos.com/recognize",
          "method": "POST",
          "headers": {
               "content-type": "application/json",
               "app_id": "6bd454af",
               "app_key": "d9ff09fa30513a50a34c49f87909c6b0",
               "cache-control": "no-cache"
          },
          "processData": false,
          "data": datad
     }

     $.ajax(settings).done(function(response) {
          var m = response;
          //var printUserName = document.getElementById('loggedInUserName')
          if (JSON.stringify(m).indexOf("success") > -1) {
               isFaceValid = true;
               verifiedUserName = m.images[0].candidates[0].subject_id;
               console.log(verifiedUserName);
               localStorage.setItem("userData", JSON.stringify(m));

               videoOff();
               window.location.assign("http://localhost:3000/#/playMovie")
               return true;
          } else {
               isFaceValid = false;
               verifiedUserName = '';
               console.log("User does not have credentials");
               videoOff();
               return false;
          }
     });
}
