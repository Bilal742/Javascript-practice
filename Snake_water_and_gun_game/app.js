let runAgain = true;

while (runAgain) {
    // User input
    let userChoice = prompt("Enter your choice: Snake, Water, or Gun").toLowerCase();

    // Computer choice
    const choices = ["snake", "water", "gun"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`Computer chose: ${computerChoice}`);

    // Check result
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "gun") ||
        (userChoice === "gun" && computerChoice === "snake")
    ) {
        alert("You win! 🎉");
    } else if (
        (userChoice === "snake" && computerChoice === "gun") ||
        (userChoice === "water" && computerChoice === "snake") ||
        (userChoice === "gun" && computerChoice === "water")
    ) {
        alert("You lose! 😢");
    } else {
        alert("Invalid input! Please type Snake, Water, or Gun.");
    }

    // Ask if user wants to play again
    runAgain = confirm("Do you want to play again?");
}
