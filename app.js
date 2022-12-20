const bidenImg = document.querySelector("#biden");
const scoreText = document.querySelector("#score-counter");
const buttonTrump = document.querySelector(".button-tramp");
const trumpsSpace = document.querySelector(".trumps");

let score = 0;
let trumpCounter = 0;

const updateScoreCounter = () => {
  scoreText.innerHTML = `${score}`;
};

const changeBidenFace = () => {
  bidenImg.src = "./pics/biden-bonk-tears.png";
  setTimeout(() => {
    bidenImg.src = "./pics/biden-based.png";
  }, 200);
};

const changeCursorBonk = (event) => {
  event.target.classList.add("bonk_cursor");
  setTimeout(() => {
    event.target.classList.remove("bonk_cursor");
  }, 200);
};

const updateTrumpButton = () => {
  if (score >= 50) {
    buttonTrump.classList.add("active-button");
  }
};

const clickOnBiden = (event) => {
  ++score;
  updateScoreCounter();
  changeBidenFace();
  changeCursorBonk(event);
  updateTrumpButton();
};

const addTrump = () => {
  if (trumpCounter >= 6 && buttonTrump.classList.contains("active-button")) {
    updateTrumpButton();
    return alert("There is max amount of Trumps");
  }
  if (buttonTrump.classList.contains("active-button")) {
    let img = document.createElement("img");
    img.src = "./pics/trump.jpg";
    img.style.display = "flex";
    img.style.justifyContent = "center";
    img.style.alignItems = "center";
    trumpsSpace.append(img);
    updateTrumpButton();
    ++trumpCounter;
    console.log(trumpCounter);
  }
};

const clickOnTrumpButton = (event) => {
  if (buttonTrump.classList.contains("active-button") && !(trumpCounter > 6)) {
    updateScoreCounter();
    addTrump();
    buttonTrump.classList.remove("active-button");
    updateTrumpButton();
    if (!(trumpCounter > 5)) {
      score -= 50;
    }
  }
};

bidenImg.addEventListener("click", clickOnBiden);
buttonTrump.addEventListener("click", clickOnTrumpButton);

const preapareGame = () => {
  score = 0;
  updateScoreCounter();
  updateTrumpButton();
};

preapareGame();
