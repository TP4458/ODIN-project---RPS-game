choiceArray = ['rock', 'paper', 'scissors'];

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scBtn = document.getElementById('scissors');
let resetBtn = document.getElementById('reset');

let rndNo = 0;
let playerScore = 0;
let pcScore = 0;
let result = false;

document.getElementById('playerScore').innerHTML = 'player Score:' + ' ' + 0;
document.getElementById('pcScore').innerHTML = 'PC score:' + ' ' + 0;

function round(e) {
  playerInput = e.toLowerCase();
  const computerInput =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];
  document.getElementById('rollDisplay').innerHTML = computerInput;
  if (playerInput == computerInput) {
    document.getElementById('result').innerHTML = 'draw';
  } else if (playerInput === 'rock' && computerInput === 'scissors') {
    document.getElementById('result').innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  } else if (playerInput === 'rock' && computerInput === 'paper') {
    document.getElementById('result').innerHTML = 'paper beats rock, loser!';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'paper' && computerInput === 'scissors') {
    document.getElementById('result').innerHTML = 'scissors beat parper, loser';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'paper' && computerInput === 'rock') {
    document.getElementById('result').innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  } else if (playerInput === 'scissors' && computerInput === 'rock') {
    document.getElementById('result').innerHTML = 'rock beats scissors, loser!';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'scissors' && computerInput === 'paper') {
    document.getElementById('result').innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  }
}

function scoreCheck(r) {
  if (r) {
    playerScore += 1;
  } else {
    pcScore += 1;
  }
  console.log('playerScore' + ' ' + playerScore);
  console.log('pcscore' + ' ' + pcScore);
  document.getElementById('playerScore').innerHTML =
    'player Score:' + ' ' + playerScore;
  document.getElementById('pcScore').innerHTML = 'PC score:' + ' ' + pcScore;
}

function reset() {
  document.getElementById('playerScore').innerHTML = 'player Score:' + ' ' + 0;
  document.getElementById('pcScore').innerHTML = 'PC score:' + ' ' + 0;
}
