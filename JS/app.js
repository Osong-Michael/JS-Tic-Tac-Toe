/* eslint-disable import/extensions */
import {
  render as renderBoard,
  tick,
  showMe,
  PLAY_X,
  PLAY_O,
} from './board.js';
import { playerOne, playerTwo } from './players.js';
import { checkPlayersNames, winningText, winningTextElt } from './game_play.js';


const restartButton = document.getElementById('restartButton');
const startPage = document.getElementById('startPage');
const startButton = document.getElementById('startBtn');
const exitButton = document.getElementById('exitBtn');

// eslint-disable-next-line no-use-before-define
startGame();

function startGame() {
  if (checkPlayersNames()) {
    startPage.classList.add('d-none');
    renderBoard();
  }
}

function restart() {
  tick.forEach(cell => {
    cell.classList.remove(PLAY_X);
    cell.classList.remove(PLAY_O);
    cell.removeEventListener('click', showMe);
    cell.addEventListener('click', showMe, { once: true });
  });
  startGame();
}

function exit() {
  winningTextElt.classList.remove('show');
  tick.forEach(cell => {
    cell.classList.remove(PLAY_X);
    cell.classList.remove(PLAY_O);
    winningText.innerHTML = '';
    cell.removeEventListener('click', showMe);
  });
  playerOne.value = '';
  playerTwo.value = '';
  startPage.classList.toggle('d-none');
}

restartButton.addEventListener('click', restart);
startButton.addEventListener('click', startGame);
exitButton.addEventListener('click', exit);
