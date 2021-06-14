
// Function to randomly pick out of the available options
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    return choice;
} 

// Allows user input through the prompt command and converts anything typed into the box to lower case
let playerSelection = prompt("please enter rock, paper, or scissors!").toLowerCase();
// computerSelection is the result of the computerPlay function
const computerSelection = computerPlay();
// Logged the playerSelection variable to see whether the toLowerCase worked... it does

// Logs the user input text into the console
console.log(playerSelection)
// Logs the result of the computerSelection variable (the computerPlay function) in the console
console.log(computerSelection);

// Function for one round (all possible combinations)
function singleRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "It's a tie this round!";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win this round!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose this round!";
    }
    if (computerSelection === "paper" && playerSelection === "paper") {
        return "It's a tie this round!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose this round!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win this round!";
    }  
    if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "It's a tie this round!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win this round!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose this round!";
    }
}

// Logs the relevent return string in the console
console.log(singleRound(playerSelection, computerSelection));






  
