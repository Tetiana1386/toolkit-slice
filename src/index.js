// import react modules
import React from "react";

// import modules
import { render } from "react-dom";
import { Provider } from "react-redux";

// import project files
import store from "./slices/store";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);