import React from "react";
import Marketplace from "./marketplace";
import StateContextProvider from "../state";

const App = () => (
  <div className="App">
    <StateContextProvider>
      <Marketplace />
    </StateContextProvider>
  </div>
);

export default App;
