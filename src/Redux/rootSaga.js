import { put } from 'redux-saga/effects';

export function* rootSaga() {
  yield put({type: 'SAGA_INITIALIZED'})
}
