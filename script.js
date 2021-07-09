
const allButtons = document.querySelectorAll(".buttons");
console.log(allButtons);

allButtons.forEach(e => {e.addEventListener('click', function() { 
    console.log(e.innerHTML);
})
})








  
