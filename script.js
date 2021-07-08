const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// Function to randomly pick out of the available options
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    return choice;
} 

// When the rock button is clicked then execute the function with the curly brackets
rockButton.addEventListener('click', function() {
    console.log("You chose rock");
})





  
