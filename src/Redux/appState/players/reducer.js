export const playersActionTypes = {
}

export const  playersActions = {
}

const initialState = [
  {
    id: 1,
    name: 'Player 1',
    score: 0,
    symbol: '💚',
  },
  {
    id: 2,
    name: 'Player 2',
    score: 0,
    symbol: '❌',
  },
]

export const playersReducer = (state) => {
  if(!state) return initialState;
  return state;
}
