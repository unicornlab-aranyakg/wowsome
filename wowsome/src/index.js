import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Store
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

//Routing
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Imported Classes
import OAuth from "./OAuth";

const rootElement = document.getElementById("root");
const initialState = window.initialReduxState;
const store = configureStore(initialState); //initiate store here

ReactDOM.render(
  <Provider store={store}>
    <div>
      <OAuth />
    </div>
  </Provider>,
  rootElement
);
