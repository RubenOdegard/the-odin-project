// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to get player input
function getPlayerChoice() {
  const playerSelection = prompt("Rock, Paper, or Scissors?");
  if (
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "paper" &&
    playerSelection.toLowerCase() !== "scissors"
  ) {
    alert("Invalid choice. Please try again.");
    return getPlayerChoice();
  }
  return playerSelection.toLowerCase();
}

// Function to play the game
function playRound(playerSelection, computerSelection) {
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  // Handle game tie
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return { output: "tie" };
  }

  // Handle game win
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win!");
    return { output: "win" };
  }

  // Handle game lose
  console.log("You lose!");
  return { output: "lose" };
}

// Get input and play the game
// playerSelection = getPlayerChoice();
// computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection);

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result) {
      if (result.output === "win") {
        playerScore++;
      } else if (result.output === "lose") {
        computerScore++;
      } else if (result.output === "tie") {
      }
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
    printScore(playerScore, computerScore);
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
    printScore(playerScore, computerScore);
  } else {
    console.log("The game is a tie!");
    printScore(playerScore, computerScore);
  }
}

function printScore(playerScore, computerScore) {
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();
