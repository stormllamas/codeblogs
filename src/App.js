import "./static/scss/main.scss";

import { Provider } from "react-redux";
import { Home } from "./components/_Home/Home";
import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute component={Home} />} />
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
