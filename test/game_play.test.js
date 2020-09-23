import { endGame } from '../JS/game_play';


const players = ['Jay', 'Kay'];

test('Returns Game is a draw when no one wins', () => {
  const gameResult = endGame(true, players, false);
  expect(gameResult).toBe('It is a Draw!!');
});

test('Returns Player One wins', () => {
  const gameResult = endGame(false, players, false);
  expect(gameResult).toBe('Jay Wins!!');
});

test('Returns Player Two wins', () => {
  const gameResult = endGame(false, players, true);
  expect(gameResult).toBe('Kay Wins!!');
});