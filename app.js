const bidenImg = document.querySelector("#biden");
const scoreText = document.querySelector("#score-counter");

let score = 0;

const clickOnBiden = () => {
  ++score;
  updateScoreCounter();
  changeBidenFace();
};

const updateScoreCounter = () => {
  scoreText.innerHTML = `${score}`;
};

const changeBidenFace = () => {
  bidenImg.src = "pics/biden-bonk.png";
  setTimeout(() => {
    bidenImg.src = "pics/biden-based.png";
  }, 200);
};

bidenImg.addEventListener("click", clickOnBiden);
