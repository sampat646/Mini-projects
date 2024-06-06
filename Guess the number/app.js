let randomNumber = Math.round(Math.random() * 50 + 1);

const userInput = document.querySelector("#guessField");
const sub = document.querySelector("#submit");
const guesslot = document.querySelector("#guess");
const remaining = document.querySelector("#remaining");
const lastResult = document.querySelector(".LastResult");
const loworHI = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

// let p = document.querySelector("p");

var playGame = true;
var numberguess = 1;
var previousGuess = [];
if (playGame) {
  sub.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
      alert("Please enter a number");
    } else if (guess < 1 || guess > 50) {
      alert("Please enter a number between 1 and 50");
    } else if (playGame) { // Check if the game is still going
      previousGuess.push(guess);
      if (numberguess === 10) {
        displaymessage("Game Over! The number was " + randomNumber);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }
function checkGuess(guess) {
  if(guess === randomNumber) {
    displaymessage("Congratulations! You guessed it right!");
    endGame();
  } else if (guess < randomNumber) {
    displaymessage("Too Low! Try Again!");
  } else {
    displaymessage("Too High! Try Again!");
  }
}
function displayGuess(guess) {
    userInput.value = '';
    guesslot.innerHTML += ` ${guess} `;
    numberguess++;
    remaining.innerHTML = `Remaining guess ${11 - numberguess}`;
  }
function displaymessage(message) {
  loworHI.innerHTML = `<h2>${message}</h2>`
}
let p = document.createElement('p'); 
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = []; 
    numberguess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numberguess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
