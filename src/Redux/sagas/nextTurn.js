import { call, fork, put, select, take } from 'redux-saga/effects';
import { gameActions as appStateGameActions } from '../appState/game/reducer';
import { selectGrid } from '../appState/selectors';
import { gameActions } from '../game/actions';
import { isAlreadyPlayed, isDraw, isWinner } from '../game/gameLogic';
import { boardActions, boardActionsType } from '../sceneStates/Board/reducer';
import { changePlayer } from './changePlayer';

export function* nextTurn(hasPlayerToChange) {
  const currentPlayer = yield call(changePlayer, hasPlayerToChange)
  const { payload: indexCell } = yield take(boardActionsType.ON_USER_CLICK);
  const currentGrid = yield select(selectGrid);
  if (isAlreadyPlayed(currentGrid, indexCell)) {
    return yield fork(nextTurn, false);
  }
  yield put(appStateGameActions.updateGrid(currentPlayer, indexCell))
  yield put(boardActions.setCell(indexCell, currentPlayer.symbol));
  const newGrid = yield select(selectGrid)
  if (isWinner(newGrid, currentPlayer)) return yield put(gameActions.winner(currentPlayer.id))
  if (isDraw(newGrid)) return yield put(gameActions.draw())
  return yield put(gameActions.nextTurn())
}
