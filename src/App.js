import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import SideNavigation from "./components/navigation/SideNavigation";
import { Provider } from "react-redux";
import { dataStore } from "./components/store/DataStore";
import Statistics from "./components/Statistics";
const App = (props) => {
  return (
    <Provider store={dataStore}>
      <div className="container">
        <Navigation />
        <SideNavigation />
        <Statistics {...props} />
      </div>
    </Provider>
  );
};

export default App;
