
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        const playerChoice = event.target.id;
        if (aboutToWin()) {
            return;
        }
        playRound(playerChoice, getComputerChoice());
    });
});

const result = document.getElementById('result');
const player = document.getElementById('playerScore');
const cpu = document.getElementById('cpuScore');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (choice == 1) {
        return rock;
    } else if (choice == 2) {
        return paper;
    } else if (choice == 3) {
        return scissors;
    }
}


function playRound(playerSelection, computerSelection) {    
    if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
        result.textContent = `Round Won ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        player.textContent = "Player: " + playerScore;
    } else if (
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        result.textContent = `Round Lost ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        cpu.textContent = "Computer: " + computerScore;
    } else if (playerSelection == computerSelection) {
        result.textContent = "Tie!";
    }    

}

function aboutToWin() {
    if (playerScore == 4) {
        result.textContent = "You are the Winner!";
        playerScore++;
        player.textContent = "Player: " + playerScore;
        return true;
    } else if (computerScore == 4) {
        result.textContent = "CPU Wins, You lose";
        computerScore++;
        cpu.textContent = "Computer: " + computerScore;
        return true;
    } else if (computerScore == 5 || playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        player.textContent = "Player: " + playerScore;
        cpu.textContent = "Computer: " + computerScore;
        return true;
    }
}

// function playerSelection() {
//     let input;

//     while (true) {
//         input = prompt("Please enter an option: rock, paper, or scissors");
//         input.toLowerCase();
//         if (input == "rock" || input == "paper" || input == "scissors") {
//             console.log("You chose: " + input);
//             return input;
//         } else {
//             console.warn("Error: Invalid Choice Option");
//         }
//     }
// }
