import { adjust, always } from 'ramda';

export const boardActionsType = {
  SET_CELL: 'SCENESTATE/BOARD/SET_CELL'
}

export const  boardActions = {
  setCell: (indexCell) => ({
    type: boardActionsType.SET_CELL,
    payload: indexCell
  })
}

const initialState = {
  playerTurnName: 'Player 1',
  grid: [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
}

export const boardReducer = (state, action) => {
  if(!state) return initialState;
  switch(action.type) {
    case boardActionsType.SET_CELL:
      return {
        ...state,
        grid: adjust(action.payload, always('x'), state.grid)
      }
    default:  return state
  }
}
