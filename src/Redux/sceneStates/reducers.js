import { combineReducers } from "redux";
import { boardReducer } from "./Board/reducer";
import { informationPanelReducer } from "./InformationPanel/reducer";

export const sceneStateReducer = combineReducers({
  board: boardReducer,
  informationPanel: informationPanelReducer,
})
