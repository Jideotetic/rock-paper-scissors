const text = ["Welcome", "It's Rock Paper Scissors Game", "The game will be played with computer, the first player to get 5 wins"];
const welcomeTextParagraph = document.createElement("p");
const gameTitleHeading = document.createElement("h1");
const gameInfoParagraph = document.createElement("p");
const welcomePageContainer = document.querySelector('.welcome-page');
const gameDashboard = document.querySelector(".game-dashboard");
const footerContainer = document.querySelector("footer");
const playButton = document.createElement("button");
const rePlayButton = document.querySelector(".replay-button");
const choiceButtons = document.querySelector(".choice-button-container").children;
const message = document.querySelector(".message");
const scores = document.querySelector(".scores").children;
let playerScore = scores[0].children[0];
let computerScore = scores[1].children[0];
let playerScoreCount = 0;
let computerScoreCount = 0;
let computerChoice = getComputerChoice();
const welcomeText = text[0].split("");
const gameTitle = text[1].split("");
const gameInfo = text[2].split("");


// FUNCTION TO DISPLAY AND ANIMATE THE WELCOME PAGE CONTENT
function displayWelcomePageContent() {
    let running;
    welcomeText.length > 0 ? welcomeTextParagraph.textContent += welcomeText.shift() : clearTimeout(running);
    gameTitle.length > 0 ? gameTitleHeading.textContent += gameTitle.shift() : clearTimeout(running);
    gameInfo.length > 0 ? gameInfoParagraph.textContent += gameInfo.shift() : clearTimeout(running);
    running = setTimeout(displayWelcomePageContent, 100);
};

welcomePageContainer.appendChild(welcomeTextParagraph);
welcomePageContainer.appendChild(gameTitleHeading);
welcomePageContainer.appendChild(gameInfoParagraph);
welcomePageContainer.appendChild(playButton);

playButton.textContent = "Let's Play";
playButton.setAttribute("class", "play-button");

setTimeout(() => {
    playButton.style.opacity = "1";
    footerContainer.style.opacity = "1";
}, 8000);

playButton.addEventListener("click", () => {
    welcomePageContainer.style.opacity = "0";
    setTimeout(() => {
        welcomePageContainer.style.display = "none";
        gameDashboard.style.display = "flex";
    }, 1000);
})

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

for(let button of choiceButtons) {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.alt;

        if(computerChoice === "Paper" && playerChoice === "Rock") {
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
            console.log("Paper beats Rock");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Paper beats Rock";
        } else if(computerChoice === "Rock" && playerChoice === "Scissors") {
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
            console.log( "Rock beats Scissors");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Rock beats Scissors";
        } else if(computerChoice === "Scissors" && playerChoice === "Paper") {
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
            console.log( "Scissors beats Paper");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Scissors beats Paper";
        } else if(computerChoice === "Rock" && playerChoice === "Paper") {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log( "Paper beats Rock");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Paper beats Rock";
        } else if(computerChoice === "Scissors" && playerChoice === "Rock") {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log( "Rock beat Scissors");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Rock beats Scissors";
        } else if(computerChoice === "Paper" && playerChoice === "Scissors") {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log( "Scissors beat Paper");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "Scissors beats Paper";
        } else if(computerChoice === playerChoice) {
            console.log( "It is a Tie! Try again");
            console.log(computerChoice = getComputerChoice());
            message.textContent = "It is a Tie! Try again";
        };

        if(computerScoreCount === 5) {
            for(const button of choiceButtons) {
                button.disabled = true;
                button.style.opacity = "0.1";
                button.style.cursor = "default";
                message.textContent = "Computer Wins";
                rePlayButton.style.display = "block";
            };
        } else if(playerScoreCount === 5) {
            for(const button of choiceButtons) {
                button.disabled = true;
                button.style.opacity = "0.1";
                button.style.cursor = "not-allowed";
                message.textContent = "You Win";
                rePlayButton.style.display = "block";
            };
        };
    });
};

rePlayButton.addEventListener("click", () => {
    for(const button of choiceButtons) {
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
        computerScoreCount = 0;
        playerScoreCount = 0;
        computerScore.textContent = computerScoreCount;
        playerScore.textContent = playerScoreCount;
        message.textContent = "Pick your choice"
        rePlayButton.style.display = "none";
    };
})

displayWelcomePageContent();