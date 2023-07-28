function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return computerChoice[randomNumber]
}

const playerSelection = "rOCK".toLowerCase()
const computerSelection = getComputerChoice();
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection) {
        return "Draw!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else {
        console.log(playerSelection)
        console.log(computerSelection)
        return "unknown";
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
      let computerSelection = getComputerChoice();
      let playerChoice = prompt("Enter your choice (rock / paper / scissors)")
      result = playRound(playerChoice.toLowerCase(), computerSelection)  
      console.log(result)
      console.log("Your score: " + playerScore + " Computer score: " + computerScore)
    }
    if (playerScore > computerScore) {
        console.log("You won!")
    }
    else {
        console.log("The winner is the computer!")
    }
}

game()