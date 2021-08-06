
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const allOptions = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
const gameWinner = document.getElementById('winner');
const computerLog = document.getElementById('computer-score');
const playerLog = document.getElementById('player-score');

allOptions.forEach(option => option.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  computerSelection()
  singleRound()
  endGame()
  computerLog.innerHTML = computerScore;
  playerLog.innerHTML = playerScore;
}))

function computerSelection() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function singleRound() {
  if (computerChoice === userChoice) {
    result = "It's a draw this round!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    playerScore++;
    result = "You win this round!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    computerScore++;
    result = "You lost this round!";
  } else if (computerChoice === 'paper' && userChoice === "scissors") {
    playerScore++;
    result = "You win this round!";
  } else if (computerChoice === 'paper' && userChoice === "rock") {
    computerScore++;
    result = "You lost this round!";
  } else if (computerChoice === 'scissors' && userChoice === "rock") {
    playerScore++;
    result = "You win this round!";
  } else if (computerChoice === 'scissors' && userChoice === "paper") {
    computerScore++;
    result = "You lost this round!";
  }
  resultDisplay.innerHTML = result;
}


function endGame() {
  if (playerScore == 5) {
    document.getElementById("rock").style.display = "none";  
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    gameWinner.innerHTML = "YOU WIN THE GAME! New game starts in 5 seconds.";
    window.setTimeout(function(){location.reload()},5000)
  } else if (computerScore == 5) {
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none"; 
    gameWinner.innerHTML = "YOU LOST! New game starts in 5 seconds.";
    window.setTimeout(function(){location.reload()},5000)
  }
}













  
        
   

  

 
      
       

        
  











  
