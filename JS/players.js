/* eslint-disable prefer-destructuring */

const nameOfPlayers = ['Guest One', 'Guest Two'];

function setPlayerNames(playersNames) {
  if (playersNames[0] !== '') {
    nameOfPlayers[0] = playersNames[0];
  }

  if (playersNames[1] !== '') {
    nameOfPlayers[1] = playersNames[1];
  }
  return nameOfPlayers;
}

export { setPlayerNames, nameOfPlayers };
