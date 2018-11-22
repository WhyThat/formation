import { adjust, always } from 'ramda';

export const boardActionsType = {
  INITIALIZE_GRID: 'SCENESTATE/BOARD/INITIALIZE_GRID',
  ON_USER_CLICK: 'SCENESTATE/BOARD/ON_USER_CLICK',
  SET_CELL: 'SCENESTATE/BOARD/SET_CELL',
}

export const  boardActions = {
  initializeGrid: (grid) => ({
    type: boardActionsType.INITIALIZE_GRID,
    payload: grid
  }),
  onUserClick: (indexCell) => ({
    type: boardActionsType.ON_USER_CLICK,
    payload: indexCell
  }),
  setCell: (indexCell) => ({
    type: boardActionsType.SET_CELL,
    payload: indexCell
  }),
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
    case boardActionsType.INITIALIZE_GRID:
      return {
        ...state,
        grid: action.payload
      }
    default:  return state
  }
}
