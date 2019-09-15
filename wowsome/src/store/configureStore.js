import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import * as OAuth from "./OAuth";
import * as CharacterSearchComponents from "./CharacterSearchComponents";
import * as CharacterInfo from "./CharacterInfo";
import * as CharacterMedia from "./CharacterMedia";
import thunk from "redux-thunk";

import firebaseReducer from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

export default function configureStore(history, initialState) {
  const reducers = {
    OAuth: OAuth.reducer,
    CharacterSearchComponents: CharacterSearchComponents.reducer,
    CharacterInfo: CharacterInfo.reducer,
    CharacterMedia: CharacterMedia.reducer,
    Firebase: firebaseReducer,
    Firestore: firestoreReducer
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
