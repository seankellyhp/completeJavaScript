'use strict';

/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);

console.log((document.querySelector('.number').textContent = 13));

console.log((document.querySelector('.score').textContent = 10));

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let gameScore = 20;
let highScore = 0;

const newValue = function (messageType, message) {
  document.querySelector(messageType).textContent = message;
};

/*
newValue('.number', secretNumber);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no guess
  if (!guess) {
    newValue('.message', 'No guess');

    // When player wins
  } else if (guess === secretNumber) {
    newValue('.message', 'Correct Guess');
    /*
    document.querySelector('.message').textContent = 'Correct Guess';
    */

    newValue('.number', secretNumber);

    if (gameScore > highScore) {
      highScore = gameScore;
      newValue('.highscore', highScore);
    }

    // Manipulate Style
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When player is wrong
  } else if (guess != secretNumber) {
    if (gameScore > 1) {
      gameScore--;

      newValue(
        '.message',
        guess > secretNumber ? `Guess is too high` : 'Guess too low'
      );
    } else {
      newValue('.message', 'You lost bitch!');
    }

    /*
  } else if (guess > secretNumber) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = `Guess is too high`;
      gameScore--;
    } else {
      document.querySelector('.message').textContent = 'You lost bitch';
    }
  } else if (guess < secretNumber) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = `Guess is too low`;
      gameScore--;
    } else {
      document.querySelector('.message').textContent = 'You lost bitch';
    }

    */
  }

  document.querySelector('.score').textContent = gameScore;
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset Values
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Manipulate Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
