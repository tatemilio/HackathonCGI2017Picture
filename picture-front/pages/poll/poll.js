'use strict';

angular.module('picture.pollController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/poll', {
          templateUrl: 'pages/poll/poll.html',
            controller: 'PollCtrl',
            authorized: false
        });
    }])

    .controller('PollCtrl', ['$rootScope', '$scope', '$uibModal', function($rootScope, $scope, $uibModal) {

      
    }]);

	
	
function createAudioMeter(audioContext,clipLevel,averaging,clipLag) {
	var processor = audioContext.createScriptProcessor(512);
	processor.onaudioprocess = volumeAudioProcess;
	processor.clipping = false;
	processor.lastClip = 0;
	processor.volume = 0;
	processor.clipLevel = clipLevel || 0.98;
	processor.averaging = averaging || 0.95;
	processor.clipLag = clipLag || 750;

	// this will have no effect, since we don't copy the input to the output,
	// but works around a current Chrome bug.
	processor.connect(audioContext.destination);

	processor.checkClipping =
		function(){
			if (!this.clipping)
				return false;
			if ((this.lastClip + this.clipLag) < window.performance.now())
				this.clipping = false;
			return this.clipping;
		};

	processor.shutdown =
		function(){
			this.disconnect();
			this.onaudioprocess = null;
		};

	return processor;
}

function volumeAudioProcess( event ) {
	var buf = event.inputBuffer.getChannelData(0);
    var bufLength = buf.length;
	var sum = 0;
    var x;

	// Do a root-mean-square on the samples: sum up the squares...
    for (var i=0; i<bufLength; i++) {
    	x = buf[i];
    	if (Math.abs(x)>=this.clipLevel) {
    		this.clipping = true;
    		this.lastClip = window.performance.now();
    	}
    	sum += x * x;
    }

    // ... then take the square root of the sum.
    var rms =  Math.sqrt(sum / bufLength);

    // Now smooth this out with the averaging factor applied
    // to the previous sample - take the max here because we
    // want "fast attack, slow release."
    this.volume = Math.max(rms, this.volume*this.averaging);
}

var audioContext = null;
var meter = null;
var canvasContext1 = null;
var canvasContext2 = null;
var canvasContext3 = null;
var canvasContext4 = null;
var canvasContext5 = null;
var canvasContext6 = null;
var canvasContext7 = null;
var max = 0;
var somme = 0;
var count = 0;
var average = 0;
var maxObject = null;
var averageObject = null;
var WIDTH=15;
var HEIGHT=200;
var rafID = null;
var startTime = null;


function recording() {
    // grab our canvas
	canvasContext1 = document.getElementById( "meter1" ).getContext("2d");
	canvasContext2 = document.getElementById( "meter2" ).getContext("2d");
	canvasContext3 = document.getElementById( "meter3" ).getContext("2d");
	canvasContext4 = document.getElementById( "meter4" ).getContext("2d");
	canvasContext5 = document.getElementById( "meter5" ).getContext("2d");
	canvasContext6 = document.getElementById( "meter6" ).getContext("2d");
	canvasContext7 = document.getElementById( "meter7" ).getContext("2d");

	max = 0;
	somme = 0;
	count = 0;
	average = 0;

	
	//maxObject = document.getElementById( "max" )
	//averageObject = document.getElementById( "average" )
	
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, gotStream, didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

}


function didntGetStream() {
    alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a new volume meter and connect it.
    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);
	
    drawLoop();
}

function drawLoop( time ) {
    // clear the background
    canvasContext1.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext2.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext3.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext4.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext5.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext6.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext7.clearRect(0,0,WIDTH,HEIGHT);

    
        canvasContext1.fillStyle = "green";
        canvasContext2.fillStyle = "green";
        canvasContext3.fillStyle = "green";
        canvasContext4.fillStyle = "green";
        canvasContext5.fillStyle = "green";
        canvasContext6.fillStyle = "green";
        canvasContext7.fillStyle = "green";

    // draw a bar based on the current volume
    canvasContext1.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1);
    canvasContext2.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1.1);
    canvasContext3.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1.2);
    canvasContext4.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1.3);
    canvasContext5.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1.2);
    canvasContext6.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1.1);
    canvasContext7.fillRect(0, HEIGHT, WIDTH, -20 -meter.volume*HEIGHT*1);
	
	somme=somme+meter.volume;
	count++;
	average=somme/count;
	
	//averageObject.innerHTML  = average.toString();
	
	if (startTime == null) {
		startTime = Date.now();
	}
	
	if (meter.volume > max) {
		max = meter.volume;
		console.log(max);
		//maxObject.innerHTML  = max.toString();
	}

    // set up the next visual callback
	if ((Date.now() - startTime) < 300000) {
		rafID = window.requestAnimationFrame( drawLoop );
	} else {
		startTime = null;
    canvasContext1.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext2.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext3.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext4.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext5.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext6.clearRect(0,0,WIDTH,HEIGHT);
    canvasContext7.clearRect(0,0,WIDTH,HEIGHT);
        canvasContext1.fillStyle = "green";
        canvasContext2.fillStyle = "green";
        canvasContext3.fillStyle = "green";
        canvasContext4.fillStyle = "green";
        canvasContext5.fillStyle = "green";
        canvasContext6.fillStyle = "green";
        canvasContext7.fillStyle = "green";
    canvasContext1.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext2.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext3.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext4.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext5.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext6.fillRect(0, HEIGHT, WIDTH, 0 );
    canvasContext7.fillRect(0, HEIGHT, WIDTH, 0 );
		rafID = window.requestAnimationFrame();
	}

}
