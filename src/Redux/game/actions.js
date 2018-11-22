export const gameActionTypes = {
  NEXT_TURN: 'GAME/NEXT_TURN',
  DRAW: 'GAME/DRAW',
  WINNER: 'GAME/WIN',
}

export const gameActions = {
  nextTurn: () => ({ type: gameActionTypes.NEXT_TURN }),
  draw: () => ({ type: gameActionTypes.DRAW }),
  winner: (playerId) => ({ type: gameActionTypes.WINNER, payload: playerId }),
}
