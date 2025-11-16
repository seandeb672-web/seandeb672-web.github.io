document.getElementById("playButton").addEventListener("click", function() {
    let playAgain = true;

    while (playAgain) {

        let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            alert("I bet you mispelled Scissors... Let's try again.");
            continue; 
        }

        const choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        
        alert("I picked: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));

        
        if (userChoice === computerChoice) {
            alert("Are you reading myt mind?");
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                alert("You win :( ....");
            } else {
                alert("HAHAHA You lose!");
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                alert("You win :( .....");
            } else {
                alert("HAHAHA You lose!");
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "paper") {
                alert("You win :( ....");
            } else {
                alert("HAHAHA You lose!");
            }
        }

    playAgain = confirm("I bet you wanna run that back! You can't end on a loss, can you?");
    }

    alert("Thanks for playing!"); 
});
