import React from "react";

import "./App.scss";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <div data-test="cmp-test-wrapper" className="App">
      <Restaurant />
    </div>
  );
}

export default App;
