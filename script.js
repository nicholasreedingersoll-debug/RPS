console.log("start")
function chosenItem(){
  let rock = document.getElementById("rock-btn")
  let sisr = document.getElementById("scissors-btn")
  let ppr = document.getElementById("paper-btn")
  let randoGen = ["rock", "scissors", "paper"];
  let randX = Math.floor(Math.random() * randoGen.length);
  let computerChoice = randoGen[randX];

}