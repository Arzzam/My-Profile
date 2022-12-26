import React from "react";
import Left from "./Components/Left Section/Left";
import Right from "./Components/Right Section/Right";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const App = () => {
  return (
    <div>
      <Left />
      <Right />
    </div>
  );
};

export default App;
