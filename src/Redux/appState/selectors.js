import { flatten } from 'ramda';

export const selectPlayers = (state) => state.appState.players;
export const selectFlattenedGrid = (state) => flatten(state.appState.game.grid);
