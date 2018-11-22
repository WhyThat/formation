import { fork, put } from 'redux-saga/effects';
import { initializeScenes } from './sagas/initializeScenes';

export function* rootSaga() {
  yield put({type: 'SAGA_INITIALIZED'})
  yield fork(initializeScenes);
}
