const typeSound = new Audio('./sounds/typing.mp3');
const typeSoundEnter = new Audio('./sounds/typing-Enter.mp3');
const typeSoundBackspace = new Audio('./sounds/typing-Backspace.mp3');
const inputFocus = document.querySelector(".bar");
let isSoundPlaying = false;

function playSoundType() {
   typeSound.currentTime = 0.01;
   typeSound.play();
   isSoundPlaying = true;
}

function playSoundEnter() {
   typeSoundEnter.currentTime = 0;
   typeSoundEnter.play();
   isSoundPlaying = true;
}

function playSoundBackspace() {
   typeSoundBackspace.currentTime = 0.02;
   typeSoundBackspace.play();
   isSoundPlaying = true;
}

function stopSoundType() {
   typeSound.pause();
   typeSound.currentTime = 0;
   isSoundPlaying = false;
}

inputFocus.addEventListener("focus", function () {
   document.addEventListener("keydown", keydownHandler);
});

inputFocus.addEventListener("blur", function () {
   document.removeEventListener("keydown", keydownHandler);
   if (isSoundPlaying) {
      stopSoundType();
   }
});

function keydownHandler(event) {
   if ((event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 65 && event.keyCode <= 90)) {
      playSoundType();
   } else if (event.key === " ") {
      playSoundEnter();
   } else if (event.key === "Backspace") {
      playSoundBackspace();
   }
}
