function playRPS() {
    let userGuesses = [];
    let wins = 0;
    let maxRounds = 5;

    const choices = ["rock", "paper", "scissors"];

    for (let round = 1; round <= maxRounds; round++) {

        let userChoice = prompt(
            `Round ${round}: Rock, Paper, or Scissors?`
        ).toLowerCase();

        if (!choices.includes(userChoice)) {
            alert("Invalid choice, try again.");
            round--;
            continue;
        }

        userGuesses.push(userChoice);

        let computerChoice = choices[Math.floor(Math.random() * 3)];

        alert("I picked: " + computerChoice);

        if (userChoice === computerChoice) {
            alert("Draw!");
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            wins++;
            alert("You win this round!");
        } else {
            alert("You lose this round!");
        }
    }

    alert(
        "Game over!\nYour guesses were:\n" +
        userGuesses.join(", ")
    );
}
