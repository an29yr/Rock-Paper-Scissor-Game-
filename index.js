
// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to display the result on the page
function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>You chose: <strong>${playerChoice}</strong></p>
        <p>The computer chose: <strong>${computerChoice}</strong></p>
        <p><strong>${result}</strong></p>
    `;
}

// Function for when the player chooses Rock
function playRock() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    displayResult('rock', computerChoice, result);
}

// Function for when the player chooses Paper
function playPaper() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    displayResult('paper', computerChoice, result);
}

// Function for when the player chooses Scissors
function playScissors() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    displayResult('scissors', computerChoice, result);
}


