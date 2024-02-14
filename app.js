document
  .getElementById("startRecording")
  .addEventListener("click", initFunction);
document
  .getElementById("newFactB")
  .addEventListener("click", newFact);

var facts = [[
`— Так багато на світі горя,<br>
люди, будьте взаємно красивими! "<br>     
Ліна Костенко<br>`,
`The author Lina Kostenko encourages people<br>
to be mutually respectful as there is already  <br>
too much grief in this world`,
`— Tak bahato na sviti horia,<br>
liudy, budte vzaiemno krasyvymy!`]
, 
[`"Кожне слово пахне,<br>
Мов листочок м’яти."<br>`,
`The author Dmytro Pavlychko compares <br>
the smell of the word to the smell of a mint leaf`,
`"Kozhne slovo pakhne,<br>
Mov lystochok miaty."`]];

function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay0').innerHTML = facts[randomFact][0];
document.getElementById('factDisplay1').innerHTML = facts[randomFact][1];
document.getElementById('factDisplay2').innerHTML = facts[randomFact][2];
}

!function newFactI() {
newFact()
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
    navigator.mediaDevices.getUserMedia({ audio: boolean }).then((stream) => {
      handlerFunction(stream);
    });
  }

  startusingBrowserMicrophone(true);

  // Stoping handler
  document.getElementById("stopRecording").addEventListener("click", (e) => {
    rec.stop();
    isRecording.textContent = "Click PLAY to listen to the way you sound in Ukrainian";
  });
}
