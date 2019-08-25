import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import * as OAuth from "./OAuth";
import * as AppNavBar from "./AppNavbar";
import thunk from "redux-thunk";

export default function configureStore(history, initialState) {
  const reducers = {
    OAuth: OAuth.reducer,
    Navbar: AppNavBar.reducer
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
