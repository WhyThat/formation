import { put, select } from 'redux-saga/effects';
import { gameActions as appGameActions } from '../appState/game/reducer';
import { selectCurrentPlayer, selectPlayers } from "../appState/selectors";

export function* changePlayer(hasPlayerToChange) {
  const players = yield select(selectPlayers);
  const currentPlayer = yield select(selectCurrentPlayer);
  if (hasPlayerToChange) {
    const nextPlayer = players.find((player) => player.id !== currentPlayer);
    yield put(appGameActions.changePlayer(nextPlayer.id))
    return nextPlayer;
  }
  return players.find((player) => player.id === currentPlayer);
}
