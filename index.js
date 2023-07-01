const text = ["Welcome", "It is the popular Rock Paper Scissors Game", "The game will be played with computer\, the first player to get to 5 wins"];
const welcomeText = document.createElement("h1");
// const gameTitle = document.createElement("p");
// const gameInfo = document.createElement("p");
// const container = document.querySelector('main');
// const playButton = document.createElement("button");
// const choiceButtonsContainer = document.querySelector(".choice-container");
// const choiceButtons = document.querySelector(".choice-container").children;
const rePlayButton = document.querySelector(".replay-button");
const buttons = document.querySelector(".choice-container").children;
const message = document.querySelector(".message");
const scores = document.querySelector(".scores").children;
let playerScore = scores[0].children[0];
let computerScore = scores[1].children[0];

let score1 = 0;
let score2 = 0;

let computerChoice = getComputerChoice();


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

for(let button of buttons) {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.alt;

        if(computerChoice === "Paper" && playerChoice === "Rock") {
            score1++;
            computerScore.textContent = score1;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Lose! Paper beats Rock";
            console.log("You Lose! Paper beats Rock");
        } else if(computerChoice === "Rock" && playerChoice === "Scissors") {
            score1++;
            computerScore.textContent = score1;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Lose! Rock beats Scissors";
            console.log( "You Lose! Rock beats Scissors");
        } else if(computerChoice === "Scissors" && playerChoice === "Paper") {
            score1++;
            computerScore.textContent = score1;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Lose! Scissors beats Paper";
            console.log( "You Lose! Scissors beats Paper");
        } else if(computerChoice === "Rock" && playerChoice === "Paper") {
            score2++;
            playerScore.textContent = score2;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Win! Paper beats Rock";
            console.log( "You Win! Paper beats Rock");
        } else if(computerChoice === "Scissors" && playerChoice === "Rock") {
            score2++;
            playerScore.textContent = score2;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Win! Rock beats Scissors";
            console.log( "You Win! Rock beat Scissors");
        } else if(computerChoice === "Paper" && playerChoice === "Scissors") {
            score2++;
            playerScore.textContent = score2;
            console.log(computerChoice = getComputerChoice());
            message.textContent = "You Win! Scissors beats Paper";
            console.log( "You Win! Scissors beat Paper");
        } else if(computerChoice === playerChoice) {
            console.log(computerChoice = getComputerChoice());
            message.textContent = "It is a Tie! Try again";
            console.log( "It is a Tie! Try again");
        };

        if(score1 === 5) {
            for(const button of buttons) {
                button.disabled = true;
                button.style.opacity = "0.1";
                message.textContent = "Computer Wins";
                rePlayButton.style.display = "block";
            };
        } else if(score2 === 5) {
            for(const button of buttons) {
                button.disabled = true;
                button.style.opacity = "0.1";
                message.textContent = "You Win";
                rePlayButton.style.display = "block";
            };
        };
    });
};

rePlayButton.addEventListener("click", () => {
    for(const button of buttons) {
        button.disabled = false;
        button.style.opacity = "1";
        score1 = 0;
        score2 = 0;
        computerScore.textContent = score1;
        playerScore.textContent = score2;
        message.textContent = "Pick your choice"
        rePlayButton.style.display = "none";
    };
})

// function playRound(computerChoice, getPlayerChoice) {
//     if (computerChoice === "Paper" && playerChoice === "Rock") {
//         console.log( "You Lose! Paper beats Rock");
//     } else if(computerChoice === "Rock" && playerChoice === "Scissors") {
//         console.log( "You Lose! Rock beats Scissors");
//     } else if(computerChoice === "Scissors" && playerChoice === "Paper") {
//         console.log( "You Lose! Scissors beats Paper");
//     } else if(computerChoice === "Rock" && playerChoice === "Paper") {
//         console.log( "You Win! Paper beats Rock");
//     } else if(computerChoice === "Scissors" && playerChoice === "Rock") {
//         console.log( "You Win! Rock beat Scissors");
//     } else if(computerChoice === "Paper" && playerChoice === "Scissors") {
//         console.log( "You Win! Scissors beat Paper");
//     } else if(computerChoice === playerChoice) {
//         console.log( "It is a Tie! Try again");
//     }
// }

// playerChoice = playerChoice();
// computerChoice = getComputerChoice();

// console.log(playerChoice, computerChoice, "3");



// playButton.textContent = "Let's Play";

// const str1 = text[0].split("");
// const str2 = text[1].split("");
// const str3 = text[2].split("");

// function animate() {
//     str1.length > 0 ? welcomeText.textContent += str1.shift() : clearTimeout(running);
//     str2.length > 0 ? gameTitle.textContent += str2.shift() : clearTimeout(running);
//     str3.length > 0 ? gameInfo.textContent += str3.shift() : clearTimeout(running);
//     var running = setTimeout(animate, 150);
// };


// container.appendChild(welcomeText);
// container.appendChild(gameTitle);
// container.appendChild(gameInfo);
// setTimeout(() => {
//     container.appendChild(playButton);
    
// }, 8000);

// setTimeout(() => {
//     playButton.style.opacity = "1";
// }, 11500);

// playButton.addEventListener("click", () => {
//     welcomeText.style.display = "none";
//     gameTitle.style.display = "none";
//     gameInfo.style.display = "none";
//     playButton.style.display = "none";
//     message.style.display = "block";
//     choiceButtonsContainer.style.display = "flex";
//     scores.style.display = "block";
//     setTimeout(() => {
//         for(let button of choiceButtons) {
//             button.style.opacity = "1";
//             message.style.opacity = "1";
//             scores.style.opacity = "1";
//         }
//     }, 1000);
// });

// for(let button of choiceButtons) {
//     button.addEventListener("click", (e) => {
//         playerChoice = e.target.textContent;
//     });
// }

// playerChoice = prompt("Your Choice");

// function game() {
//     const ROUNDS = 2;
//     let round = 0;
//     let computerScore = 0;
//     let playerScore = 0;
//     let winner = "";
//     for(let i = 1; i <= ROUNDS; i++) {
//         if(round < ROUNDS) {
//             winner = playRound(getComputerChoice(), playerChoice());
//             if(winner.startsWith("You Lose!")) {
//                 computerScore++;
//             } else if(winner.startsWith("You Win!")) {
//                 playerScore++;
//             } else {
//                 computerScore++;
//                 playerScore++;
//             }
//             round++;
//         }
//         console.log(winner);
//     }
//     if(computerScore > playerScore) {
//         console.log("You Lose! Play again");
//     }else if(computerScore < playerScore) {
//         console.log("You Win! Play again");
//     } else {
//         console.log("It is a tie! Play again");
//     }
    
// }

// game();

// animate();