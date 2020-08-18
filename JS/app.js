import {
  render as renderBoard,
  tick,
  showMe,
  PLAY_X,
  PLAY_O,
// eslint-disable-next-line import/extensions
} from './board.js';

const restartButton = document.getElementById('restartButton');

// eslint-disable-next-line no-use-before-define
startGame();

function startGame() {
  renderBoard();
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
restartButton.addEventListener('click', restart);
