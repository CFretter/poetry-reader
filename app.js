document
  .getElementById("startRecording")
  .addEventListener("click", initFunction);

var facts = [`this is a poem bout a poetic bird<br>
His father was an elephant<br>
Його батько був слон
`, 
             `Fact 2`, 
             `There once was a cat that didn't like milk
so it drank tea instead`];

!function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
}();

let isRecording = document.getElementById("isRecording");

function initFunction() {
  // Display recording
  async function getUserMedia(constraints) {
    if (window.navigator.mediaDevices) {
      return window.navigator.mediaDevices.getUserMedia(constraints);
    }

    let legacyApi =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    if (legacyApi) {
      return new Promise(function (resolve, reject) {
        legacyApi.bind(window.navigator)(constraints, resolve, reject);
      });
    } else {
      alert("user api not supported");
    }
  }

  isRecording.textContent = "Recording...";
  //

  let audioChunks = [];
  let rec;

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.start();
    rec.ondataavailable = (e) => {
      audioChunks.push(e.data);
      if (rec.state == "inactive") {
        let blob = new Blob(audioChunks, { type: "audio/mp3" });
        console.log(blob);
        document.getElementById("audioElement").src = URL.createObjectURL(blob);
      }
    };
  }

  function startusingBrowserMicrophone(boolean) {
    getUserMedia({ audio: boolean }).then((stream) => {
      handlerFunction(stream);
    });
  }

  startusingBrowserMicrophone(true);

  // Stoping handler
  document.getElementById("stopRecording").addEventListener("click", (e) => {
    rec.stop();
    isRecording.textContent = "Click play to listen to your ukrainian poem";
  });
}
