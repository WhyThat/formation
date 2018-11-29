import { adjust, always, assoc, compose, flatten, splitEvery, __ } from 'ramda';


export const gameActionTypes = {
  UPDATE_GRID: 'APPSTATE/GAME/UPDATE_GRID',
  CHANGE_PLAYER: 'APPSTATE/GAME/CHANGE_PLAYER'
}

export const  gameActions = {
  updateGrid: (playerId, index) => ({
    type: gameActionTypes.UPDATE_GRID,
    payload: {
      index,
      playerId,
    }
  }),
  changePlayer: (playerId) => ({
    type: gameActionTypes.CHANGE_PLAYER,
    payload: playerId,
  })
}

const initialState = {
  grid: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  playerPlayingId: 1,
}

export const gameReducer = (state, action) => {
  if(!state) return initialState;
  switch(action.type) {
    case gameActionTypes.UPDATE_GRID: {
      const { playerId, index} = action.payload;
      return  compose(
        assoc('grid', __, state),
        splitEvery(3),
        adjust(__, always(playerId), flatten(state.grid)),
      )(index)
    }

    case gameActionTypes.CHANGE_PLAYER:
      return assoc('playerPlayingId', action.payload, state)

    default:
      return state;
  }
}
