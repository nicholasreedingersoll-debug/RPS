document.getElementById("reset-btn").addEventListener("click", resetGame);
document.getElementById("rock-btn").addEventListener("click", chosenItem);
document.getElementById("paper-btn").addEventListener("click", chosenItem);
document.getElementById("scissors-btn").addEventListener("click", chosenItem);
document.getElementById("bst1").addEventListener("click");
document.getElementById("bst3").addEventListener("click");
document.getElementById("bst5").addEventListener("click");

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let targetScore = 3;

function chosenItem(event) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  let buttonId = event.target.id;
  let playerChoice = buttonId.replace("-btn", "");
  let result = getWinner(playerChoice, computerChoice);
  
  updateDisplay(playerChoice, computerChoice, result);
  updateScore(result);
}

function getWinner(player, computer) {
  if (player == computer) return "tie";
  if ((player == "rock" && computer == "scissors") ||
      (player == "paper" && computer == "rock") ||
      (player == "scissors" && computer == "paper")) {
    return "win";
  }
  return "lose";
}

function updateDisplay(playerChoice, computerChoice) {
  document.getElementById("player-choice").innerText = "You chose: " + playerChoice;
  document.getElementById("computer-choice").innerText = "Computer chose: " + computerChoice;
  
}

function updateScore(result) {
  if (result == "win") playerScore++;
  if (result == "lose") computerScore++;
  
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
  bestOf();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-choice").innerText = "You chose: -";
  document.getElementById("computer-choice").innerText = "Computer chose: -";
  document.getElementById("round-result").innerText = "Make your choice!";
  document.getElementById("player-score").innerText = "0";
  document.getElementById("computer-score").innerText = "0";
}

function bestOf() {
  if (playerScore == targetScore) {
    document.getElementById("round-result").innerText = "You won the game!";
  }
  if (computerScore == targetScore) {
    document.getElementById("round-result").innerText = "Computer won the game!";
  }
}