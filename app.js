const bidenImg = document.querySelector("#biden");
const scoreText = document.querySelector("#score-counter");
const buttonTrump = document.querySelector(".button-tramp");
const trumpsSpace = document.querySelector(".trumps");
const trumpCost = document.querySelector(".trump-cost");
const trumpButtonText = document.querySelector("#trump-button-text");
const trumpButtonTextBottom = document.querySelector(
  "#trump-botton-text-buttom"
);
const resetButton = document.querySelector("#reset-button");

let score = 0;
let trumpCounter = 0;
let trumpCostCounter = 50;

//updating functions
const updateScoreCounter = () => {
  scoreText.innerHTML = `${score}`;
  setScoreToLocalStorage();
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
  if (score >= trumpCostCounter) {
    buttonTrump.classList.add("active-button");
  } else {
    buttonTrump.classList.remove("active-button");
  }
};

const updateTrumpCost = () => {
  if (trumpCounter === 1) {
    trumpCostCounter += 15;
    return (trumpCost.innerHTML = `${65}`);
  } else if (trumpCounter >= 6) {
    trumpButtonText.classList.add("hidden-button-text");
    trumpButtonTextBottom.classList.add("hidden-button-text");
    trumpCost.innerHTML = "No more Trumps, sorry :(";
  } else {
    trumpCostCounter = trumpCostCounter + 15 * trumpCounter;
    console.log(trumpCostCounter);
    trumpCost.innerHTML = `${trumpCostCounter}`;
  }
};

//click functions
//biden click
const clickOnBiden = (event) => {
  ++score;
  updateScoreCounter();
  changeBidenFace();
  changeCursorBonk(event);
  updateTrumpButton();
};

//trump click
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

const trumpClicking = () => {
  if (trumpCounter > 0) {
    setTimeout(() => {
      ++score;
      updateScoreCounter();
      trumpClicking();
      updateTrumpButton();
    }, 1000);
  }
};

const clickOnTrumpButton = (event) => {
  if (
    buttonTrump.classList.contains("active-button") &&
    !(trumpCounter > 6) &&
    score >= trumpCostCounter
  ) {
    score -= trumpCostCounter;
    updateScoreCounter();
    addTrump();
    buttonTrump.classList.remove("active-button");
    updateTrumpButton();
    trumpClicking();
    updateTrumpCost();
    if (trumpCounter >= 6) {
      score += trumpCostCounter;
    }
  }
  updateTrumpButton();
};

const clickOnNewGameButton = () => {
  window.localStorage.clear();
  window.location.reload();
};

const reloadPage = (event) => {};

//eventListeners
bidenImg.addEventListener("click", clickOnBiden);
buttonTrump.addEventListener("click", clickOnTrumpButton);
resetButton.addEventListener("click", clickOnNewGameButton);
//window.addEventListener("load", reloadPage);

//localStorage
const setAllLocalStorage = () => {
  localStorage.setItem("score", `${score}`);
};

const setScoreToLocalStorage = () => {
  localStorage.setItem("score", `${score}`);
  console.log(localStorage.getItem("score"));
};

const getScoreFromLocalStorage = () => {
  return localStorage.getItem("score");
};

//preparing game
const preapareGame = () => {
  score = 4558;
  updateScoreCounter();
  updateTrumpButton();
  setAllLocalStorage();
};

preapareGame();
