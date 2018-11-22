import { combineReducers } from "redux";
import { appStateReducer } from "./appState/reducers";
import { sceneStateReducer } from "./sceneStates/reducers";

export const rootReducer = combineReducers({
  sceneState: sceneStateReducer,
  appState: appStateReducer,
})
