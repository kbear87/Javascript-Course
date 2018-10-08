var globalScores, currentScore, activePlayer, gameInPlay;

initialiseGame();

var previousDiceRoll;

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gameInPlay) {
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM1 = document.querySelector('.dice');
    diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-' + dice + '.png';

   if (previousDiceRoll === 6 && dice === 6) {
    globalScores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    nextPlayer();
  } else if (dice !== 1) {
      currentScore = currentScore + dice + dice2;
      document.querySelector('#current-' + activePlayer).textContent = currentScore;
      previousDiceRoll = dice;
  } else{
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gameInPlay) {
    globalScores[activePlayer] = globalScores[activePlayer] + currentScore;
    document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];

    var finalScoreInputField = document.querySelector('.final-score-input').value;
    var winningScore;

    if (finalScoreInputField) {
      winningScore = finalScoreInputField;
    } else {
      winningScore = 100;
    }

    if (globalScores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gameInPlay = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', initialiseGame);


function initialiseGame() {
  globalScores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  gameInPlay = true;

  //document.querySelector('.dice').style.display = 'none';


  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  currentScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}
