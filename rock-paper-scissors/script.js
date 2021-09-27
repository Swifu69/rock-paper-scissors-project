import { Choice } from "class.js";

const choices = document.querySelectorAll("img");
const timerEl = document.getElementById("countdown-field");
const rock = new Choice("rock", "paper");
const scissors = new Choice("scissors", "rock");
const paper = new Chhoice("paper", "scissors");
const allChoices = [rock, scissors, paper];
let humanChoice;

const score = {
  humanScore: 0,
  botScore: 0,
};

let timer = 3;
let timerId;

function startTimer() {
  if (timerId) clearInterval(timerId);
  timer = 3;
  timerId = setInterval(() => {
    timerEl.innerHTML = timer--;
    if (timer == -1) clearInterval(timerId);
  }, 1000);
}
startTimer();

const scoreBoard = document.getElementById("score-field");
let updateScore = () => {
  scoreBoard.innerHTML = `Human: ${score.humanScore} Bot: ${score.botScore}`;
};
updateScore();

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    humanChoice = allChoices.find(
      (item) => e.target.getAttribute("value") === item.name
    );

    let botChoice = allChoices[Math.floor(Math.random() * allChoices.length)];

    if (humanChoice.beaten == botChoice.name) {
      score.botScore++;
    }
    if (humanChoice.name == botChoice.beaten) {
      score.humanScore++;
    }
    if (humanChoice.name == botChoice.name) {
    }

    if (score.botScore == 3 || score.humanScore == 3) {
      score.botScore = 0;
      score.humanScore = 0;
    }

    updateScore();
    startTimer();

    humanChoice = null;
  });
});

const images = [
  "sources/Papir.png",
  "sources/scissors.png",
  "sources/Rock.png",
];
const botImage = document.getElementById("bot");
function roulette() {
  let index = images.length - 1;
  setInterval(() => {
    botImage.src = images[index--];
  });
}
