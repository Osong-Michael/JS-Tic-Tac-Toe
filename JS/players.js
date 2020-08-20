export const playerOne = document.getElementById('player1');
export const playerTwo = document.getElementById('player2');

export function setPlayerNames() {
  const players = [];
  const playerOneName = playerOne.value;
  const playerTwoName = playerTwo.value;
  players.push(playerOneName);
  players.push(playerTwoName);
  return players;
}
