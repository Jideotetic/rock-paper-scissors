const choiceButtons = document.querySelector('.choice-button-container');
const roundWinner = document.querySelector('.round-winner');
const gameWinner = document.querySelector('.game-winner');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
let playerScoreCount = 0;
let computerScoreCount = 0;
const rePlayButton = document.querySelector('.replay-button');

choiceButtons.addEventListener('click', handleButton);

function handleButton(e) {
  const playerSelection = e.target.alt;
  const computerSelection = getComputerChoice();
  game(computerSelection, playerSelection);
}

// getComputerChoice is function to generate random choice for the computer
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}
// getComputerChoice ends

// game is a function to play five(5) rounds of the game and keep track of scores to display winner
function game(computerSelection, playerSelection) {
  let winner = playRound(computerSelection, playerSelection);
  showRoundWinner(winner);
  showGameWinner(computerScoreCount, playerScoreCount);
}
// game ends

// playRound is function to play a round of the game
function playRound(computerSelection, playerSelection) {
  if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    roundWinner.textContent = 'You Lose! Paper beats Rock';
    return 'You Lose! Paper beats Rock';
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    roundWinner.textContent = 'You Lose! Rock beats Scissors';
    return 'You Lose! Rock beats Scissors';
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    roundWinner.textContent = 'You Lose! Scissors beats Paper';
    return 'You Lose! Scissors beats Paper';
  } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
    roundWinner.textContent = 'You Win! Paper beats Rock';
    return 'You Win! Paper beats Rock';
  } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
    roundWinner.textContent = 'You Win! Rock beats Scissors';
    return 'You Win! Rock beats Scissors';
  } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
    roundWinner.textContent = 'You Win! Scissors beats Paper';
    return 'You Win! Scissors beats Paper';
  } else if (computerSelection === playerSelection) {
    roundWinner.textContent = 'It is a Tie! Try again';
    return 'It is a Tie! Try again';
  }
}
// playRound ends

// showRoundWinner display winner text for each round and increment score
function showRoundWinner(winner) {
  if (winner.startsWith('You Lose!')) {
    computerScoreCount++;
    computerScore.textContent = computerScoreCount;
  } else if (winner.startsWith('You Win!')) {
    playerScoreCount++;
    playerScore.textContent = playerScoreCount;
  }
  roundWinner.style.opacity = '1';
  setTimeout(() => {
    roundWinner.style.opacity = '0';
  }, 1000);
}
// showRoundWinner ends

// showGameWinner display winner when a player gets up to 5 scores
function showGameWinner(computerScoreCount, playerScoreCount) {
  if (computerScoreCount === 5) {
    for (const button of choiceButtons.children) {
      button.disabled = true;
      button.style.opacity = '0.1';
      button.style.cursor = 'not-allowed';
      roundWinner.style.display = 'none';
      gameWinner.textContent = 'You Lose';
      gameWinner.style.opacity = '1';
      rePlayButton.style.opacity = '1';
    }
  } else if (playerScoreCount === 5) {
    for (const button of choiceButtons.children) {
      button.disabled = true;
      button.style.opacity = '0.1';
      button.style.cursor = 'not-allowed';
      roundWinner.style.display = 'none';
      gameWinner.textContent = 'You Win';
      gameWinner.style.opacity = '1';
      rePlayButton.style.opacity = '1';
    }
  }
}
// showGameWinner ends

rePlayButton.addEventListener('click', replay);

function replay() {
  for (const button of choiceButtons.children) {
    button.disabled = false;
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    roundWinner.textContent = '';
    gameWinner.textContent = '';
    roundWinner.style.display = 'block';
    gameWinner.style.opacity = '0';
    rePlayButton.style.opacity = '0';
    computerScoreCount = 0;
    playerScoreCount = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  }
}
