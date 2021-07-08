import React from "react";
import AppRouter from "./config/router";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default App;
