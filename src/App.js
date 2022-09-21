import "./static/scss/main.scss";

import { Provider } from "react-redux";
import Home from "./components/Home";
import UseRefSample from "./components/_CodeSamples/UseRefSample";
import UseStateSample from "./components/_CodeSamples/UseStateSample";
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
            path="/UseRefSample"
            element={<PublicRoute component={UseRefSample} />}
          />
          <Route
            path="/UseStateSample"
            element={<PublicRoute component={UseStateSample} />}
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
