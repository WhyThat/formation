export const playersActionTypes = {
}

export const  playersActions = {
}

const initialState = {
  player1: {
    name: 'Player 1',
    score: 0,
  },
  player2: {
    name: 'Player 2',
    score: 0,
  },
}

export const playersReducer = (state) => {
  if(!state) return initialState;
  return state;
}
