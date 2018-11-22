const initialState = {
  playerTurnName: 'Player 1',
  grid: [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
}

export const boardReducer = (state) => {
  if(!state) return initialState;
  return state
}
