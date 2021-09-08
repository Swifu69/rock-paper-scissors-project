const choices = document.querySelectorAll("img");
const timerEl = document.getElementById("countdown-field");
const rock = {
  name: "rock",
  beaten: "paper",
};
const scissors = {
  name: "scissors",
  beaten: "rock",
};
const paper = {
  name: "paper",
  beaten: "scissors",
};
const allChoices = [rock, scissors, paper];
let humanChoice;

const score = {
  humanScore: 0,
  botScore: 0,
};

let timer = 3;



let timerId = setInterval(() => {
    timerEl.innerHTML = timer--;
    if (timer < 0) clearInterval(timerId);
  }, 1000)

const scoreBoard = document.getElementById("score-field");
let updateScore = () =>
  (scoreBoard.innerHTML = `Human: ${score.humanScore} Bot: ${score.botScore}`);
updateScore();
console.log(score);

choices.forEach((choice) => {
  //allChoices.push(choice.getAttribute("value"));
  choice.addEventListener("click", (e) => {
    humanChoice = allChoices.find(
      (item) => e.target.getAttribute("value") === item.name
    );
    let botChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    //console.log(allChoices);
    console.log(botChoice);
    console.log([humanChoice]);

    if (humanChoice.beaten == botChoice.name) {
      console.log("Taper");
      score.botScore++;
      console.log(score);
    }
    if (humanChoice.name == botChoice.beaten) {
      console.log("Vinner");
      score.humanScore++;
    }
    if (humanChoice.name == botChoice.name) {
      console.log("Uagjort");
    }

    if (score.botScore == 3 || score.humanScore == 3) {
      score.botScore = 0;
      score.humanScore = 0;
    }
    updateScore();
    humanChoice = null;
  });
});
