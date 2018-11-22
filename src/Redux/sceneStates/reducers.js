import { combineReducers } from "redux";
import { boardReducer } from "./Board/reducer";

export const sceneStateReducer = combineReducers({
  board: boardReducer
})
