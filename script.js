
// Function to randomly pick out of the available options
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    return choice;
} 

// Function for one round (all possible combinations)
function singleRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "It's a tie this round!";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++; // Adds 1 to playerScore var
        return "You win this round!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++; // Adds 1 to computerScore var
        return "You lose this round!";
    }
    if (computerSelection === "paper" && playerSelection === "paper") {
        return "It's a tie this round!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++; // Adds 1 to computerScore var
        return "You lose this round!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++; // Adds 1 to playerScore var
        return "You win this round!";
    }  
    if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "It's a tie this round!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++; // Adds 1 to playerScore var
        return "You win this round!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++; // Adds 1 to computerScore var
        return "You lose this round!";
    }
}

// variables: player score and computer score should obviously start at 0
let playerScore = 0;
let computerScore = 0;

// Function to loop through the single round function 5 times and keep score
function mainGame() {
    for (i = 0; i < 5; i++) {
        // What we want the game to do 5 times goes in here (so the prompt and the computerPlay function)
        // Allows user input through the prompt command and converts anything typed into the box to lower case
        let playerSelection = prompt("please enter rock, paper, or scissors!").toLowerCase();
        // computerSelection is the result of the computerPlay function
        const computerSelection = computerPlay();
        // Logs the user input text into the console
        console.log(playerSelection)
        // Logs the result of the computerSelection variable (the computerPlay function) in the console
        console.log(computerSelection);
        // Logs the relevent return string in the console
        console.log(singleRound(playerSelection, computerSelection));
    }
    // Decides who won
    if (playerScore > computerScore) {
        return "Congratulations, you win the game!";
    } else if (computerScore > playerScore) {
        return "Unlucky, you lost!";
    }
}

// Displays all the above mainGame logs in the console. Calling the function doesnt display the end of game message and causes the prompt window to stay open. Logging the function instead fixes this issue.
console.log(mainGame());







  
