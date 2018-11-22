import { compose, flatten, nth } from 'ramda';
import { isTruthy } from 'ramda-adjunct';

export const isAlreadyPlayed = (grid, idCell) => compose(
  isTruthy,
  nth(idCell),
  flatten
)(grid)


/*
  rows          crosses       columns
  ['X','X','X'] ['X',' ',' '] ['X',' ',' ']
  [' ',' ',' '] [' ','X',' '] ['X',' ',' ']
  [' ',' ',' '] [' ',' ','X'] ['X',' ',' ']

  [' ',' ',' '] [' ',' ',' '] [' ','X',' ']
  ['X','X','X'] [' ',' ',' '] [' ','X',' ']
  [' ',' ',' '] [' ',' ',' '] [' ','X',' ']

  [' ',' ',' '] [' ',' ','X'] [' ',' ','X']
  [' ',' ',' '] [' ','X',' '] [' ',' ','X']
  ['X','X','X'] ['X',' ',' '] [' ',' ','X']
*/
const winningPatterns = [
  // rows
  [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
  [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
  [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
  // crosses
  [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
  [{ r: 0, c: 2 }, { r: 1, c: 1 }, { r: 2, c: 0 }],
  // columns
  [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
  [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
  [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }]
];

export const isWinner = (grid, player) => winningPatterns.some(pattern => pattern.every(square => {
    const { r, c } = square;

    return grid[r][c] === player;
  }));

export const isDraw = (grid) => {
  const notDraw = grid.some(row => row.some(col => col === ""));

  return !notDraw;
};

