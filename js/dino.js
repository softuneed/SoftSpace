const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.querySelector(".start--button");
const game = document.querySelector(".game");
const clouds = document.getElementById("clouds");
let score = document.querySelector("#score");
const audioJump = new Audio('../sounds/Chrome-Dino-Game-jump-sound-effect.mp3');
const audioDeath = new Audio('../sounds/Chrome-Dino-Game-death-sound-effect.mp3');
const audioCoin = new Audio('../sounds/sound-effect-coin.mp3');

// функция для проигрывания звука прыжка
function playSoundJump() {
   audioJump.currentTime = 0;
   audioJump.play();
}
// функция для проигрывания звука проигрыша
function playSoundDeath() {
   audioDeath.currentTime = 0;
   audioDeath.play();
}
// функция для проигрывания звука 100 очков
function playSoundScore() {
   audioCoin.currentTime = 0;
   audioCoin.play();
}
// проигрывание звука прыжка при нажатии Space
document.addEventListener('keydown', function (event) {
   if (event.code === 'Space') {
      playSoundJump();
   }
});
// счетчик очков
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
   playerScore++;
   score.innerHTML = `Score <b>${playerScore}</b>`;
   if (playerScore % 100 === 0) {
      playSoundScore();
   }
}
// запуск игры
startButton.addEventListener('click', () => {
   cactus.classList.add('cactusMove');
   game.classList.add('gameSlide');
   clouds.classList.add('cloudsMove');
   dino.classList.add('run');
   interval = setInterval(scoreCounter, 200)
});

document.addEventListener("keydown", function (event) {
   if (event.code === 'Space') {
      jump();
   }
});
// прыжок
function jump() {
   if (dino.classList != "jump") {
      dino.classList.add("jump")
   }
   setTimeout(function () {
      dino.classList.remove("jump")
   }, 300)
}
// проверка на столкновения
let isAlive = setInterval(function () {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

   if (cactusLeft < 55 && cactusLeft > 0 && dinoTop >= 268) {
      cactus.classList.remove('cactusMove');
      game.classList.remove('gameSlide');
      clouds.classList.remove('cloudsMove');
      dino.classList.remove('run');
      clearInterval(interval);
      playerScore = 0;
      playSoundDeath();
      alert("GAME OVER!!");
   }
}, 10);