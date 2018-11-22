import { keys } from 'ramda';
import { put, select } from 'redux-saga/effects';
import { gameActions } from '../appState/game/reducer';
import { selectCurrentPlayer, selectPlayers } from "../appState/selectors";

export function* changePlayer(hasPlayerToChange) {
  const currentPlayer = yield select(selectCurrentPlayer);
    if (hasPlayerToChange) {
      const players = yield select(selectPlayers);
      const nextPlayer = keys(players).find((player) => player !== currentPlayer);
      yield put(gameActions.changePlayer(nextPlayer));
      return nextPlayer;
    }
    return currentPlayer;
}
