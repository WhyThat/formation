const informationPanelActionTypes = {
  INCREMENT_WIN: 'SCENESTATE/INFORMATION_PANEL/INCREMENT_WIN',
}

export const  informationPanelActions = {
  incrementPlayerScore: (player) => ({
    type: informationPanelActionTypes.INCREMENT_WIN,
    payload: player
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
    case informationPanelActionTypes.INCREMENT_WIN:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          score: state[action.payload].score + 1
        }
      }
    default: return state
  }
}
