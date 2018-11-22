import { put, select } from 'redux-saga/effects';
import { selectFlattenedGrid, selectPlayers } from '../appState/selectors';
import { boardActions } from '../sceneStates/Board/reducer';
import { informationPanelActions } from '../sceneStates/InformationPanel/reducer';

export function* initializeScenes() {
  const players = yield select(selectPlayers);
  yield put(informationPanelActions.initializePlayers(players));
  const grid = yield select(selectFlattenedGrid);
  yield put(boardActions.initializeGrid(grid));
}
