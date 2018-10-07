/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying; // Declare global variables.

initialiseGame();  // Call this function to set the scores to zero, and hide the dice image.
var previousDice; // Create variable to store the previous number rolled on the dice.
document.querySelector('.btn-roll').addEventListener('click', function() {    // when the roll dice button is clicked a function is called.
    if (gamePlaying) { // Basically, the roll dice button will only work if the gamePlaying variable is set to true.
      // 1.Generate a random number.
      var dice = Math.floor(Math.random() * 6) + 1;  // Declare variable for the dice, then assign the random number method to it.

      // 2. Display the dice image with relevant number of dots.
      var diceDOM = document.querySelector('.dice');  //Store selector for the dice class in a variable to save typing it out each time.
      diceDOM.style.display = 'block';  // changes the css for the dice display from not being visible to a being visible as a block element.
      diceDOM.src = 'dice-' + dice + '.png'; // displays the relevant dice image that corresponds to the dice number.

      // 3. Update the round score IF the rolled number was NOT 1.
      if (dice === 6 && previousDice === 6) {  // if the number rolled and the number stored in previousDice is a 6:
        scores[activePlayer] = 0;  // score returns to zero.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; // changes text for the player score.
        nextPlayer(); // Proceed to next playerby calling the nextPlayer function.
      }else if (dice !== 1) {  // If the number on the dice is not a 1
        // Add score
        roundScore = roundScore + dice; // Then number on dice is added to the current score.
        document.querySelector('#current-' + activePlayer).textContent = roundScore; // Text in current score is changed to updated score.
      } else {  // If the number on the dice is a 1
        // Next player
        nextPlayer(); // nextPlayer function called and the game continues.
     }
     previousDice = dice; // Store the number rolled on the dice.
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {  // Hold button
  if (gamePlaying) {  // Once again the hold button will only function if the gamePlaying variable is set to true.

    // Add current score to global score:
    scores[activePlayer] = scores[activePlayer] + roundScore; // adds the current score to the global score.

    // Update the UI:
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; // Updates the text for the global score in the UI

     // Check if player has won the game:
    if (scores[activePlayer] >= 100) { // if the active player's score is equal to or greater than 100:
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; // Changes the text from either player 1 or player 2 to winner in the user UI.
      document.querySelector('.dice').style.display = 'none'; // Hides the dice image.
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // changes the winning player's display to the winner css.
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // removes the active css from the winning player's display.
      gamePlaying = false; // gamePlaying set to false so the roll dice and hold button will not function.
    } else {
      // Change to next player:
      nextPlayer();
    }
  }

});

document.querySelector('.btn-new').addEventListener('click', initialiseGame);  // New game button

function initialiseGame() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';  //Uses CSS to hide the dice. Saves having to delete or recreate elements.  Use style method followed by CSS property, then value.

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
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  //if activePlayer is 0, then it should be one. Otherwise it should be 0. This changes the player to the next player.  Change to next player.
  roundScore = 0; // keeps the next players score at zero until they roll.

  document.getElementById('current-0').textContent = '0'; // sets the current score text back to 0.
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');  // toggles between active player (active player will show as grey background with red dot.)
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

























//Math.floor removes the decimal from the randomly generated number.
                                         //Math.random generates a random number between 0 and 1. Multiplying by 6 generates a number between 0 and 6.
                                         // + 1 changes the range of randomly generated numbers to 1 - 6 needed for a dice.


//DOM manipulation requires access to the DOM.  Access is given with the document object.
// querySelector allows you to select elements from the document object. Selected elements are written the same as in CSS.
//document.querySelector('#current-' + activePlayer).textContent = dice;  //textContent is a method that changes the text of the current-0 element.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
