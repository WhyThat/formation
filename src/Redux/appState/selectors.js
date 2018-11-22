import { flatten } from 'ramda';

export const selectPlayers = (state) => state.appState.players;
export const selectGrid = (state) => state.appState.game.grid;
export const selectFlattenedGrid = (state) => flatten(state.appState.game.grid);
export const selectCurrentPlayer = (state) => state.appState.game.playerPlayingId;
