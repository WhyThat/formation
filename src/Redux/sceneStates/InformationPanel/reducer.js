import { gameActionTypes } from "../../game/actions";

const informationPanelActionTypes = {
  INITIALIZE_PLAYERS: 'SCENESTATE/INFORMATION_PANEL/INITIALIZE_PLAYERS',
}

export const  informationPanelActions = {
  initializePlayers: (players) => ({
    type: informationPanelActionTypes.INITIALIZE_PLAYERS,
    payload: players
  })
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

export const informationPanelReducer = (state, action) => {
  if(!state) return initialState;
  switch (action.type) {

    case gameActionTypes.WINNER :
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          score: state[action.payload].score + 1
        }
      }

    case informationPanelActionTypes.INITIALIZE_PLAYERS:
      return action.payload;

    default: return state
  }
}
