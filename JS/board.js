/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/extensions
import { playerTurn, checkWinner, winningTextElt } from './game_play.js';

export const tick = document.querySelectorAll('.board-cell');
export const PLAY_X = 'playX';
export const PLAY_O = 'playO';


function updateCell(actualCell, currentClass) {
  actualCell.classList.add(currentClass);
}

export function showMe(e) {
  const actualCell = e.target;
  const currentClass = playerTurn ? PLAY_O : PLAY_X;
  updateCell(actualCell, currentClass);
  checkWinner(currentClass);
}

export function render() {
  tick.forEach(cell => cell.addEventListener('click', showMe, { once: true }));
  winningTextElt.classList.remove('show');
}