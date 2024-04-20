// Variables

let playerpts = 0
let computerpts = 0

let buttons = document.querySelectorAll('button')
let gameBodyDiv = document.querySelector('.gameBodyDiv')
let gameResult;

let round_no = 0


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id

    clearBody()

    let computerSelection = getComputerSelection()
    let gameResult = document.createElement('h3')

    const playerChoiceP = document.createElement('p')
    const computerChoiceP = document.createElement('p')
    const roundNumber = document.createElement('p')
    roundNumber.textContent = "Round " + round_no
    round_no ++;
    gameBodyDiv.appendChild(roundNumber)
    playerChoiceP.textContent = "you chose: " + playerSelection
    gameBodyDiv.appendChild(playerChoiceP)
    computerChoiceP.textContent = "computer chose: " + computerSelection
    gameBodyDiv.appendChild(computerChoiceP)
    



    if ((playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
      gameResult.textContent = 'You Lost!'
      computerpts ++
    }
    else if (playerSelection === computerSelection) {
      gameResult.textContent = "it's a draw!"
    }
    else {
      gameResult.textContent = "you won!"
      playerpts ++
    }
    updateCurrentPoints(playerpts, computerpts)
    gameBodyDiv.appendChild(gameResult)
  })
})

function getComputerSelection() {
  let availableselections = ["rock", "paper", "scissors"];
  let compSelection = Math.floor(Math.random() * availableselections.length);

  console.log(availableselections[compSelection]);
  return availableselections[compSelection];
}

function updateCurrentPoints(playerpts, computerpts) {
  const playerPoints = document.querySelector('.playerPoints')
  const ComputerPoints = document.querySelector('.computerPoints')
  const pointsTable = document.querySelector('.pointsTable')

  playerPoints.textContent = "player points: " + playerpts;
  ComputerPoints.textContent = "comptuer points: " + computerpts;

}

function clearBody()
{
    document.querySelector(".gameBodyDiv").innerHTML = "";
}