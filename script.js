
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
        console.log("It's a tie this round!");
    } else if (computerSelection === "rock" && e.innerHTML === "Paper") {
        console.log("You win this round!");
    } else if (computerSelection === "rock" && e.innerHTML === "Scissors") {
        console.log("You lose this round!");
    }
    if (computerSelection === "paper" && e.innerHTML === "Paper") {
        console.log("It's a tie this round!");
    } else if (computerSelection === "paper" && e.innerHTML === "Rock") {
        console.log("You lose this round!");
    } else if (computerSelection === "paper" && e.innerHTML === "Scissors") {
        console.log("You win this round!");
    }  
    if (computerSelection === "scissors" && e.innerHTML === "Scissors") {
         console.log("It's a tie this round!");
    } else if (computerSelection === "scissors" && e.innerHTML === "Rock") {
        console.log("You win this round!");
    } else if (computerSelection === "scissors" && e.innerHTML === "Paper") {
        console.log("You lose this round!");
    }
})
})








  
