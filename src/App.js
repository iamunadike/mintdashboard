import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import SideNavigation from "./components/navigation/SideNavigation";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <SideNavigation />
    </div>
  );
};

export default App;
