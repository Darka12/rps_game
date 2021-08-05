
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

allOptions.forEach(option => option.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  computerSelection()
  singleRound()
  endGame()
  console.log(playerScore, computerScore);
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
    gameWinner.innerHTML = "You";
    window.setTimeout(function(){location.reload()},5000)
  } else if (computerScore == 5) {
    gameWinner.innerHTML = "Computer";
    window.setTimeout(function(){location.reload()},5000)
  }
}













  
        
   

  

 
      
       

        
  











  
