
function startReadings() {
    console.log("oh yea baby lets get it started");
    document.getElementById("data").rows["seconds"].innerHTML = "reading data. . .";
    index = 0;
    timer = setInterval(updateDisplay,timeInterval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopReadings() {
    console.log("ok no more lets stop it here");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

var BACKGROUND_MUSIC = new Audio('background music.mp3');
BACKGROUND_MUSIC.play();