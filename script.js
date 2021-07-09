
// Function to randomly pick out of the available options
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    return choice;
} 

    

    const allButtons = document.querySelectorAll(".buttons");
    allButtons.forEach(e => {e.addEventListener('click', function() {
        const computerSelection = computerPlay();
        console.log(computerSelection);
    if (computerSelection === "rock" && e.innerHTML === "Rock") {
        document.getElementById("result").innerHTML = "It's a tie this round!";
    } else if (computerSelection === "rock" && e.innerHTML === "Paper") {
        ++playerScore;
        document.getElementById("result").innerHTML = "You win this round!";
    } else if (computerSelection === "rock" && e.innerHTML === "Scissors") {
        ++computerScore;
        document.getElementById("result").innerHTML = "You lose this round!";
    }
    if (computerSelection === "paper" && e.innerHTML === "Paper") {
        document.getElementById("result").innerHTML = "It's a tie this round!";
    } else if (computerSelection === "paper" && e.innerHTML === "Rock") {
        ++computerScore;
        document.getElementById("result").innerHTML = "You lose this round!";
    } else if (computerSelection === "paper" && e.innerHTML === "Scissors") {
        ++playerScore;
        document.getElementById("result").innerHTML = "You win this round!";
    }  
    if (computerSelection === "scissors" && e.innerHTML === "Scissors") {
        document.getElementById("result").innerHTML = "It's a tie this round!";
    } else if (computerSelection === "scissors" && e.innerHTML === "Rock") {
        ++playerScore;
        document.getElementById("result").innerHTML = "You win this round!";
    } else if (computerSelection === "scissors" && e.innerHTML === "Paper") {
        ++computerScore;
        document.getElementById("result").innerHTML = "You lose this round!";
    }
    console.log(playerScore, computerScore);
})
})

      let playerScore = 0;
      let computerScore = 0;  
      











  
