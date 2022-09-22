import "./static/scss/main.scss";

import { Provider } from "react-redux";
import Home from "./components/Home";
import UseRefValuePersist from "./components/_CodeSamples/UseRefValuePersist";
import UseStateAndUseEffect from "./components/_CodeSamples/UseStateAndUseEffect";
import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute component={Home} />} />
          <Route
            path="/UseRefValuePersist"
            element={<PublicRoute component={UseRefValuePersist} />}
          />
          <Route
            path="/UseStateAndUseEffect"
            element={<PublicRoute component={UseStateAndUseEffect} />}
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
    </Provider>
  );
};

export default App;
