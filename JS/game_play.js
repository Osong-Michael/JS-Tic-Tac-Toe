/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { tick, PLAY_X, PLAY_O } from './board.js';
import { setPlayerNames as playersNames, nameOfPlayers } from './players.js';
import { renderEndGame } from './DOM.js';

// eslint-disable-next-line import/no-mutable-exports
let playerTurn = false;
const winningText = document.querySelector('[data-winning-message-text]');
const winningTextElt = document.getElementById('winningMessage');

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


function changePlayer() {
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

function checkPlayersNames(playersArray) {
  const names = playersNames(playersArray);
  return names;
}

function endGame(draw, names, playerTurn) {
  let message = 'It is a Draw!!';
  if (!draw) {
    message = `${playerTurn ? names[1] : names[0]} Wins!!`;
  }
  return message;
}

function checkWinner(currentClass) {
  let gameResult;
  if (playerWon(currentClass)) {
    gameResult = endGame(false, nameOfPlayers, playerTurn);
    renderEndGame(gameResult);
  } else if (isDraw()) {
    gameResult = endGame(true, nameOfPlayers, playerTurn);
    renderEndGame(gameResult);
  } else {
    changePlayer();
  }
  return gameResult;
}

export {
  endGame, checkWinner, checkPlayersNames, changePlayer, playerTurn, winningText, winningTextElt,
};