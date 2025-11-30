document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".btn-primary.btn-lg");
    const lyricsButton = buttons[0]; //first button
    const rpsButton   = buttons[1];  //second button

    lyricsButton.addEventListener("click", generateLyrics);
    rpsButton.addEventListener("click", playRPS);

});


function generateLyrics() {
    let lyrics = "";

    for (let i = 99; i >= 1; i--) {
        let next = i - 1;

        let bottleWord = i === 1 ? "bottle" : "bottles";
        let nextBottleWord = next === 1 ? "bottle" : "bottles";

        lyrics += `${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.\n`;

        if (next >= 0) {
            if (next === 0) {
                lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
            } else {
                lyrics += `Take one down and pass it around, ${next} ${nextBottleWord} of beer on the wall.\n\n`;
            }
        }
    }

    lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall!\n`;

    displayLyrics(lyrics);
}

function displayLyrics(text) {
    const oldLyrics = document.getElementById("lyrics-container");
    if (oldLyrics) oldLyrics.remove();

    let container = document.createElement("div");
    container.id = "lyrics-container";
    container.className = "container my-5";

    let card = document.createElement("div");
    card.className = "card p-4";
    card.style.maxHeight = "500px";
    card.style.overflowY = "auto";
    card.style.whiteSpace = "pre-wrap";

    card.innerText = text;

    container.appendChild(card);
    document.body.appendChild(container);

    container.scrollIntoView({ behavior: "smooth" });
}



//rock-paper-scissors//

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

        
        if (wins === 3) {
            alert("You won early!");
            break;
        }
    }

    alert(
        "Game over!\nYour guesses were:\n" +
        userGuesses.join(", ")
    );
}


