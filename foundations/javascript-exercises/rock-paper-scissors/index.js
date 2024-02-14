// globals vars
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let currentRound = 1;

function playRound(playerSelection, computerSelection) {
  // Tie clause
  if (playerSelection === computerSelection) {
    ties++;
    updateRound();
  }

  // Player win clause
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    updateRound();
  }

  // Computer win clause
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    updateRound();
  }

  // Escape condition, game over.
  if (currentRound === 6) {
    setWinner(playerScore, computerScore);
    return;
  }
  updateScore(playerScore, computerScore);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});

function updateScore(playerScore, computerScore) {
  const result = document.querySelector(".score");
  result.textContent =
    `Player score: ${playerScore} Computer score: ${computerScore}`;
  document.body.appendChild(result);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateRound() {
  document.querySelector(".round").textContent =
    `Round: ${currentRound++} Ties: ${ties}`;
}

function setWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    document.querySelector(".winner").textContent = "Player wins!";
  } else if (playerScore < computerScore) {
    document.querySelector(".winner").textContent = "Computer wins!";
  } else {
    document.querySelector(".winner").textContent = "Tie!";
  }
}
