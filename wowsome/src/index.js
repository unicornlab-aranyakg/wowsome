import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

//Store
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
//Routing
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Imported Classes

import App from "./app/App";

var firebaseConfig = {
  apiKey: "AIzaSyDmPR3W8BsTkAz-4vxtCDsDu-Y7ZumxGg0",
  authDomain: "wowsome-armory.firebaseapp.com",
  databaseURL: "https://wowsome-armory.firebaseio.com",
  projectId: "wowsome-armory",
  storageBucket: "wowsome-armory.appspot.com",
  messagingSenderId: "76586548974",
  appId: "1:76586548974:web:55fddc0418b4615aa67dff"
};

const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore(); // <- needed if using firestore

const rootElement = document.getElementById("root");
const initialState = window.initialReduxState;
const store = configureStore(initialState); //initiate store here

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <div>
        <App />
      </div>
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement
);
