import React from "react";
import { Provider } from "react-redux";
import { dataStore } from "./components/store/DataStore";
import Main from "./components/Main";

const App = (props) => {
  return (
    <Provider store={dataStore}>
      <div className="container">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
