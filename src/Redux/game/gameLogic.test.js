import { isAlreadyPlayed } from './gameLogic';

const grid = [
  ['a', '', ''],
  ['', 'a', ''],
  ['', '', 'a'],
]

describe('gameLogic', () => {
  describe('isAlreadyPlayed', () => {
    test('On a cell already played', () => {
      expect(isAlreadyPlayed(grid, 0)).toBe(true)
      expect(isAlreadyPlayed(grid, 4)).toBe(true)
      expect(isAlreadyPlayed(grid, 8)).toBe(true)
    });
    test('On a free cell', () => {
      expect(isAlreadyPlayed(grid, 1)).toBe(false)
      expect(isAlreadyPlayed(grid, 5)).toBe(false)
      expect(isAlreadyPlayed(grid, 6)).toBe(false)
    });
  });
});
