function getComputerChoice() {
  let availableChoices = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * availableChoices.length);

  console.log(availableChoices[compChoice]);
  return availableChoices[compChoice];
}

console.log("managed to enter js file");

function playRound(playerSelection, computerSelection) {
  console.log("user input is" + playerSelection);
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return 0;
    } else if (computerSelection == "rock") {
      return 1;
    } else if (computerSelection == "scissors") {
      return 2;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return 1;
    } else if (computerSelection == "rock") {
      return 2;
    } else if (computerSelection == "scissors") {
      return 0;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return 2;
    } else if (computerSelection == "rock") {
      return 0;
    } else if (computerSelection == "scissors") {
      return 1;
    }
  }

  return 1;
}

function playGame() {
  let computerPoints = 0;
  let userPoints = 0;
  for (let round = 0; round < 5; round++) {
    let scoreStatus = playRound(prompt("round " + round + " , choose rock, paper or scissors").toLowerCase(), getComputerChoice());
    if (scoreStatus == 0) {
      console.log("You lost!");
      computerPoints++;
    } else if (scoreStatus == 2) {
      console.log("You won!");
      userPoints++;
    } else {
      console.log("It was a draw");
    }
    console.log('Your points: ' + userPoints)
    console.log('Computer points: ' + computerPoints)
  }
  return 1
}

playGame()