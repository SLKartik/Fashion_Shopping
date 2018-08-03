var voice = (function () {
    var isContinues = false,
    voiceRecorded = [],
    voicePatterns = [];

    var commands = function (commands) {
        if(commands.constructor === Array){
            for(var i in commands) {
                if(voicePatterns.indexOf(commands[i])==-1){
                    voicePatterns.push(commands[i]);
                }

            }
        }else {
            if(voicePatterns.indexOf(commands)==-1)
                voicePatterns.push(commands);
        }
    };

    var startVoiceRecognition = function () {
        var recognition = new webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = function(event) {

          var last = event.results.length - 1;
          var color = event.results[last][0].transcript;

            voiceRecorded = [];
            voiceRecorded = Object.keys(event.results).map(function(key) {
              var diagnostic = document.querySelector('.output');
                //diagnostic.textContent = 'Voice Message: ' + color.toUpperCase();
                diagnostic.textContent = color.toUpperCase();
                return event.results[key][0].transcript.trim();
            });
            __patternMatch();
        }
        recognition.start();
    };

    var stopVoiceRecognition = function () {
        var recognition = new webkitSpeechRecognition();
        recognition.abort();
        recognition.stop();
    };

    var getRecordedData = function () {
        // console.log(voiceRecorded);
    };

    return {
        setCommands: commands,
        start:startVoiceRecognition,
        stop:stopVoiceRecognition
    }

    function __patternMatch() {
        if(voicePatterns.length>0){

            for(var i in voicePatterns) {
                //console.log(voicePatterns[i])
                var voices = voicePatterns[i].voices.sort();
                var voiceData = voiceRecorded[voiceRecorded.length-1].toLowerCase();

                for(var j in voices) {
                    if(voices[j].toLowerCase() == voiceData) {
                        voicePatterns[i].action(voices[j]);
                    }
                }
            }
        }

    }
})();
