choiceArray = ['rock', 'paper', 'scissors'];

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scBtn = document.getElementById('scissors');
let resetBtn = document.getElementById('reset');
let gameRes = document.getElementById('result');
let happyFace = document.createElement('img');
let sadFace = document.createElement('img');

happyFace.src = '/face-id-svgrepo-com.svg';
sadFace.src = '/face-id-error-svgrepo-com.svg';

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
    gameRes.innerHTML = 'draw';
  } else if (playerInput === 'rock' && computerInput === 'scissors') {
    gameRes.innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  } else if (playerInput === 'rock' && computerInput === 'paper') {
    gameRes.innerHTML = 'paper beats rock, loser!';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'paper' && computerInput === 'scissors') {
    gameRes.innerHTML = 'scissors beat parper, loser';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'paper' && computerInput === 'rock') {
    gameRes.innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  } else if (playerInput === 'scissors' && computerInput === 'rock') {
    gameRes.innerHTML = 'rock beats scissors, loser!';
    result = false;
    scoreCheck(result);
  } else if (playerInput === 'scissors' && computerInput === 'paper') {
    gameRes.innerHTML = 'winner winner';
    result = true;
    scoreCheck(result);
  }
}

function scoreCheck(r) {
  if (r) {
    playerScore += 1;
    document.getElementById('face').appendChild(happyFace);
  } else {
    pcScore += 1;
    document.getElementById('face').appendChild(sadFace);
  }
  console.log('playerScore' + ' ' + playerScore);
  console.log('pcscore' + ' ' + pcScore);
  document.getElementById('playerScore').innerHTML =
    'player Score:' + ' ' + playerScore;
  document.getElementById('pcScore').innerHTML = 'PC score:' + ' ' + pcScore;
}

function reset() {
  playerScore = 0;
  pcScore = 0;
  document.getElementById('playerScore').innerHTML = 'player Score:' + ' ' + 0;
  document.getElementById('pcScore').innerHTML = 'PC score:' + ' ' + 0;
}
