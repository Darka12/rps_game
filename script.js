
const computersChoiceDisplay = document.getElementById('computers-choice');
const usersChoiceDisplay = document.getElementById('users-choice');
const result = document.getElementById('result');
const allOptions = document.querySelectorAll('button');
let usersChoice;
let computerChoice;

allOptions.forEach(option => option.addEventListener('click', (e) => {
    usersChoice = e.target.id; 
    usersChoiceDisplay.innerHTML = usersChoice;  
    computerPlay()
}))


// Function to randomly pick out of the available options
function computerPlay() {
    // Array of the possible options the computer is allowed to choose from
    const computerChoices = ["rock", "paper", "scissors"];
    // Chooses a random string out of the array above
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Calls the choice variable
    computersChoiceDisplay.innerHTML = computerChoice;
    
} 



















  
        
   

  

 
      
       

        
  











  
