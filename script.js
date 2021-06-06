function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(choice);
}

computerPlay();

const playerSelection = prompt("Please enter your choice: ");
const computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection) {
    
}


    
