import { combineReducers } from "redux";
import { sceneStateReducer } from "./sceneStates/reducers";

export const rootReducer = combineReducers({
  sceneState: sceneStateReducer,
})
