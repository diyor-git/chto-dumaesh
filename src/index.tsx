import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import Preloader from "./components/common/Preloader/Preloader";
import "./App.scss";
ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
