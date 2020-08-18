/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { tick, PLAY_X, PLAY_O } from './board.js';
import { setPlayerNames as playersNames, playerOne, playerTwo } from './players.js';

// eslint-disable-next-line import/no-mutable-exports
export let playerTurn = false;
export const winningText = document.querySelector('[data-winning-message-text]');
export const winningTextElt = document.getElementById('winningMessage');

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


export function changePlayer() {
  playerTurn = !playerTurn;
}


function playerWon(currentClass) {
  // eslint-disable-next-line arrow-body-style
  return WINNING_COMBO.some(combination => {
    return combination.every(index => tick[index].classList.contains(currentClass));
  });
}

function isDraw() {
  // eslint-disable-next-line arrow-body-style
  return [...tick].every(cell => {
    return cell.classList.contains(PLAY_X) || cell.classList.contains(PLAY_O);
  });
}

export function checkPlayersNames() {
  const names = playersNames();
  if ((names[0] === '') && (names[1] === '')) {
    playerOne.value = 'Guest One';
    playerTwo.value = 'Guest Two';
    return false;
  } else if (names[0] === '') {
    playerOne.value = 'Guest One';
  } else if (names[1] === '') {
    playerTwo.value = 'Guest Two';
    return false;
  }
  return true;
}

function endGame(draw) {
  const names = playersNames();
  if (draw) {
    winningText.innerHTML = 'It is a Draw!!';
  } else {
    winningText.innerHTML = `${playerTurn ? names[1] : names[0]} Wins!!`;
  }
  winningTextElt.classList.add('show');
}

export function checkWinner(currentClass) {
  if (playerWon(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    changePlayer();
  }
}