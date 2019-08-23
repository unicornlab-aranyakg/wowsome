import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import * as OAuth from "./OAuth";
import thunk from "redux-thunk";

export default function configureStore(history, initialState) {
  const reducers = {
    data: OAuth.reducer
  };

  const middleware = [thunk];

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
