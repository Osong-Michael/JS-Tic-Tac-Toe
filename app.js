
const tick = document.querySelectorAll('.board-cell');
const PLAY_X = 'playX';
const PLAY_O = 'playO';
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
const winningText = document.querySelector('[data-winning-message-text]');
const winningTextElt = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
let playerTurn;

startGame();
restartButton.addEventListener('click', startGame);
// PLacing image on HTML
function showMe(e) {
  const actualCell = e.target;
  const currentClass = playerTurn ? PLAY_O : PLAY_X;

  // Update board space in HTML
  updateCell(actualCell, currentClass);

  // Check for win
  if (playerWon(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    // Swap player turns
    changePlayer();
  }
}

function updateCell(actualCell, currentClass) {
  actualCell.classList.add(currentClass);
}

function changePlayer() {
  playerTurn = !playerTurn;
}


function playerWon(currentClass) {
  return WINNING_COMBO.some(combination => {
    return combination.every(index => {
      return tick[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    winningText.innerHTML = 'It is a Draw!!';
  } else {
    winningText.innerHTML = `${playerTurn ? "O" : "X"} Wins!!`;
  }
  winningTextElt.classList.add('show');
}

function isDraw() {
  return [...tick].every(cell => {
    return cell.classList.contains(PLAY_X) || cell.classList.contains(PLAY_O);
  });
}


function startGame() {
  playerTurn = false;
  tick.forEach(cell => {
    cell.classList.remove(PLAY_X);
    cell.classList.remove(PLAY_O);
    cell.removeEventListener('click', showMe);
    cell.addEventListener('click', showMe, { once: true });
  });
  winningTextElt.classList.remove('show');
}