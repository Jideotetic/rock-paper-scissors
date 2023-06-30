function getComputerChoice() {
    debugger;
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerChoice() {
    debugger;
    const playerChoice = prompt("Enter your choice");
    return playerChoice.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
    debugger;
    while(playerSelection === "") {
        alert("You can only choose between Rock, Paper and Scissors");
        console.log("You can only choose between Rock, Paper and Scissors");
        playerSelection = prompt("Enter your choice");
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beat Scissors";
    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beat paper";
    } else if(computerSelection === playerSelection) {
        return "It is a Tie! Try again";
    }
}

function game() {
    debugger;
    const ROUNDS = 2;
    let round = 0;
    let computerScore = 0;
    let playerScore = 0;
    let winner = "";
    for(let i = 1; i <= ROUNDS; i++) {
        if(round < ROUNDS) {
            winner = playRound(getComputerChoice(), getPlayerChoice());
            if(winner.startsWith("You Lose!")) {
                computerScore++;
            } else if(winner.startsWith("You Win!")) {
                playerScore++;
            } else {
                computerScore++;
                playerScore++;
            }
            round++;
        }
        console.log(winner);
    }

    if(computerScore > playerScore) {
        console.log("You Lose! Play again");
    }else if(computerScore < playerScore) {
        console.log("You Win! Play again");
    } else {
        console.log("It is a tie! Play again");
    }
    
}

game();