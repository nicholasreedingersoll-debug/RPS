document.getElementById("reset-btn").addEventListener("click", resetGame);
document.getElementById("rock-btn").addEventListener("click", chosenItem);
document.getElementById("paper-btn").addEventListener("click", chosenItem);
document.getElementById("scissors-btn").addEventListener("click", chosenItem);
document.getElementById("bst1").addEventListener("click", setBestOf);
document.getElementById("bst3").addEventListener("click", setBestOf);
document.getElementById("bst5").addEventListener("click", setBestOf);

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let targetScore = 1;

function setBestOf(event) {
  let buttonId = event.target.id;
  if (buttonId == "bst1") targetScore = 1;
  if (buttonId == "bst3") targetScore = 2;
  if (buttonId == "bst5") targetScore = 3;
  resetGame();
  document.getElementById("round-result").innerText = "Best of " + (targetScore * 2 - 1) + " | Make your choice!";
}

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

function updateDisplay(playerChoice, computerChoice, result) {
  document.getElementById("player-choice").innerText = "You chose: " + playerChoice;
  document.getElementById("computer-choice").innerText = "Computer chose: " + computerChoice;
  
  if (result == "win") {
    document.getElementById("round-result").innerText = "You won this round!";
  } else if (result == "lose") {
    document.getElementById("round-result").innerText = "Computer won this round!";
  } else {
    document.getElementById("round-result").innerText = "It's a tie!";
  }
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
    document.getElementById("round-result").innerText = "You won the Best of " + (targetScore * 2 - 1) + "! Starting new game...";
    setTimeout(function() {
      resetGame();
      document.getElementById("round-result").innerText = "Best of " + (targetScore * 2 - 1) + " | Make your choice!";
    }, 2000);
  }
  if (computerScore == targetScore) {
    document.getElementById("round-result").innerText = "Computer won the Best of " + (targetScore * 2 - 1) + "! Starting new game...";
    setTimeout(function() {
      resetGame();
      document.getElementById("round-result").innerText = "Best of " + (targetScore * 2 - 1) + " | Make your choice!";
    }, 2000);
  }
}