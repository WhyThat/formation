import { fork, race, take } from 'redux-saga/effects';
import { gameActionTypes } from '../game/actions';
import { nextTurn as nextTurnSaga } from './nextTurn';
import { onDraw } from './onDraw';
import { onWin } from './onWin';

export function* gameTick() {
  yield fork(nextTurnSaga, false);
  while (true) {
    const { draw, win, nextTurn } = yield race({
      draw: take(gameActionTypes.DRAW),
      nextTurn: take(gameActionTypes.NEXT_TURN),
      win: take(gameActionTypes.WINNER),
    });

    if (win) yield fork(onWin);
    if (draw) yield fork(onDraw)
    if (nextTurn) yield fork(nextTurnSaga, true);
  }
}
