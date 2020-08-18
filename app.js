
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
let playerTurn;

// PLacing image on HTML
function showMe(e) {
  const actualCell = e.target;
  const currentClass = playerTurn ? PLAY_O : PLAY_X;

  // Update board space in HTML
  updateCell(actualCell, currentClass);

  // Check for win
  if (playerWon(currentClass)) {
    console.log('winner');
  }

  // Swap player turns
  changePlayer();
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
    })
  })
}


tick.forEach(cell => cell.addEventListener('click', showMe, { once: true }));