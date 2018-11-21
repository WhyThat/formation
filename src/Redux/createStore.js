import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState  = {}

const reducer = (state) => {
  if(!state) return initialState;
  return state
}

export const store = createStore(
  reducer,
  composeWithDevTools(),
);


