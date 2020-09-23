const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');

const getPlayerNames = () => {
  const player1 = document.getElementById('player1').value;
  const player2 = document.getElementById('player2').value;
  return [player1, player2];
};

function renderEndGame(gameResult) {
  const winningText = document.querySelector('[data-winning-message-text]');
  const winningTextElt = document.getElementById('winningMessage');
  winningText.innerHTML = gameResult;
  winningTextElt.classList.add('show');
}

export {
  getPlayerNames, playerOne, playerTwo, renderEndGame,
};