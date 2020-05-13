import React from "react";
import { Provider } from "react-redux";
import { dataStore } from "./components/store/DataStore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <Provider store={dataStore}>
      <Router>
        <Switch>
          <Route path="/merchant" component={Main} />
          <Redirect to="/merchant" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
