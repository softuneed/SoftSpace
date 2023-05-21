const dinoIconLink = document.querySelector(".dino-icon-link");
const dinoWoodPlanks = document.querySelector(".dino-woodPlanks");
const woodCrack = new Audio('../sounds/Wood-Crack-Sound.m4a');
const woodHit = new Audio('../sounds/wood-hit.m4a');

function woodCrackSound() {
   woodCrack.currentTime = 0.2;
   woodCrack.play();
}

function woodHitSound() {
   woodHit.currentTime = 0;
   woodHit.play();
}

dinoWoodPlanks.addEventListener('dblclick', () => {
   dinoIconLink.style.display = 'block';
   dinoWoodPlanks.classList.add('plankDestroy');
   woodCrackSound();
});

dinoWoodPlanks.addEventListener('click', () => {
   woodHitSound();
});