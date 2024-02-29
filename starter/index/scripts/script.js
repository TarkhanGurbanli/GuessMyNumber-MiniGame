'use strict';
let secretNumber = parseInt(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const render = function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
    document.body.style.backgroundColor = '#60b347';
    // document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is too high or to low
  } else {
    const message = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

    if (score > 1) {
      document.querySelector('.message').textContent = message;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

const again = function () {
  // Reset variables
  secretNumber = parseInt(Math.random() * 20 + 1);
  score = 20;

  // Reset DOM elements
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', again);
document.querySelector('.check').addEventListener('click', render);
