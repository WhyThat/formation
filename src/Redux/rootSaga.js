import { fork, put, select } from 'redux-saga/effects';
import { informationPanelActions } from './sceneStates/InformationPanel/reducer';

const selectPlayers = (state) => state.appState.players

function* initializeScenes() {
  const players = yield select(selectPlayers);
  yield put(informationPanelActions.initializePlayers(players));
}

export function* rootSaga() {
  yield put({type: 'SAGA_INITIALIZED'})
  yield fork(initializeScenes);
}
