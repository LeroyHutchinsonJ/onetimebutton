import React from "react";
import ReactDOM from "react-dom";
import OneTimeButton from "./oneTimeButton";

import "./styles.css";

function App() {
  return <OneTimeButton />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
