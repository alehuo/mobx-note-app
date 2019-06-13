import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "mobx-react";
import { noteStore } from "./store/NoteStore";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider noteStore={noteStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
