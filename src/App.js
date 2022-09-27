import "./static/scss/main.scss";

import React from "react";

import Home from "./components/Home";
import ConsOfContext from "./components/_CodeSamples/ConstOfContext.js/ConsOfContext";
import ProsOfRedux from "./components/_CodeSamples/ProsOfRedux/ProsOfRedux";
import UseRefNoRerender from "./components/_CodeSamples/UseRefNoRerender";
import UseRefValuePersist from "./components/_CodeSamples/UseRefValuePersist";
import UseStateAndUseEffect from "./components/_CodeSamples/UseStateAndUseEffect";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute component={Home} />} />
        <Route
          path="/UseRefValuePersist"
          element={<PublicRoute component={UseRefValuePersist} />}
        />
        <Route
          path="/UseRefNoRerender"
          element={<PublicRoute component={UseRefNoRerender} />}
        />
        <Route
          path="/UseStateAndUseEffect"
          element={<PublicRoute component={UseStateAndUseEffect} />}
        />
        <Route
          path="/ConsOfContext"
          element={<PublicRoute component={ConsOfContext} />}
        />
        <Route
          path="/ProsOfRedux"
          element={<PublicRoute component={ProsOfRedux} />}
        />
      </Routes>

      {/* TODO NO MATCH ROUTE */}
      {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
    </Router>
  );
};

export default App;
