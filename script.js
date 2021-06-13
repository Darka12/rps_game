
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    return choice;
}

// Logs the result of the function.... it works 
console.log(computerPlay()); 

// Allows user input through the prompt command and converts anything typed into the box to lower case
let playerSelection = prompt("please enter rock, paper, or scissors!").toLowerCase();
// computerSelection is the result of the computerPlay function
const computerSelection = computerPlay();
// Logged the playerSelection variable to see whether the toLowerCase worked... it does
console.log(playerSelection);

function singleRound(playerSelection, computerSelection) {

}








  
