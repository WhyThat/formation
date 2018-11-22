import { combineReducers } from "redux";
import { gameReducer } from "./game/reducer";
import { playersReducer } from "./players/reducer";

export const appStateReducer = combineReducers({
  game: gameReducer,
  players: playersReducer,
})
