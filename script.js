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
    let rounds = 3;

    for (let i = 1; i <= rounds; i++) {
        let userChoice = prompt(`Round ${i}: Rock, Paper, or Scissors?`).toLowerCase();

        if (!["rock", "paper", "scissors"].includes(userChoice)) {
            alert("I bet you mispelled Scissors... let's try again.");
            i--; 
            continue;
        }

        const choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        alert("I picked: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));

        if (userChoice === computerChoice) {
            alert("Are you reading my mind?");
        } else if (
            (userChoice === "rock"     && computerChoice === "scissors") ||
            (userChoice === "paper"    && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            alert("You win :( ....");
        } else {
            alert("HAHAHA You lose!");
        }
    }

    alert("Thanks for playing! It was best of 3 ;)");
}
