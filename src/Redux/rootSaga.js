import { flatten } from 'ramda';
import { fork, put, select } from 'redux-saga/effects';
import { boardActions } from './sceneStates/Board/reducer';
import { informationPanelActions } from './sceneStates/InformationPanel/reducer';

const selectPlayers = (state) => state.appState.players
const selectGrid = (state) => flatten(state.appState.game.grid);

function* initializeScenes() {
  const players = yield select(selectPlayers);
  yield put(informationPanelActions.initializePlayers(players));
  const grid = yield select(selectGrid);
  yield put(boardActions.initializeGrid(grid));
}

export function* rootSaga() {
  yield put({type: 'SAGA_INITIALIZED'})
  yield fork(initializeScenes);
}
