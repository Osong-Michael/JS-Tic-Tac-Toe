import { setPlayerNames } from '../JS/players';

const players = ['', ''];
const players2 = ['Josh', 'Kay'];

test('Returns default names for players', () => {
  expect(setPlayerNames(players)).toEqual(['Guest One', 'Guest Two']);
});

test('Returns names players chose to play game', () => {
  expect(setPlayerNames(players2)).toEqual(['Josh', 'Kay']);
});