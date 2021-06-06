function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(choice);
}

computerPlay();

const playerSelection = "rock";
const computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection) {

}


// Play 1 round only
// if player selection is the same as computer selection (case insensitive)
// Return string    
