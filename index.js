let playerpts = 0
let computerpts = 0



function getComputerselection() {
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


let buttons = document.querySelectorAll('button')
let gameBodyDiv = document.querySelector('.gameBodyDiv')
let gameResult;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id

    let computerSelection = getComputerselection()
    let gameResult = document.createElement('h3')

    const playerChoiceP = document.createElement('p')
    const computerChoiceP = document.createElement('p')
    playerChoiceP.textContent = "you choose: " + playerSelection
    gameBodyDiv.appendChild(playerChoiceP)
    computerChoiceP.textContent = "computer choose: " + computerSelection
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

