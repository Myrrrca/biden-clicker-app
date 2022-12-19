const bidenImg = document.querySelector("#biden");
const scoreText = document.querySelector("#score-counter");

let score = 0;

const updateScoreCounter = () => {
  scoreText.innerHTML = `${score}`;
};

const changeBidenFace = () => {
  bidenImg.src = "pics/biden-bonk-tears.png";
  setTimeout(() => {
    bidenImg.src = "pics/biden-based.png";
  }, 200);
};

const changeCursorBonk = (event) => {
  event.target.classList.add("bonk_cursor");
  setTimeout(() => {
    event.target.classList.remove("bonk_cursor");
  }, 200);
};

const clickOnBiden = (event) => {
  ++score;
  updateScoreCounter();
  changeBidenFace();
  changeCursorBonk(event);
};

bidenImg.addEventListener("click", clickOnBiden);
