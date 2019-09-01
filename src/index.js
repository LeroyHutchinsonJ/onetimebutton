import React from "react";
import ReactDOM from "react-dom";
import OneTimeButton from "./oneTimeButton";
import OneTimeButtonHook from "./oneTimeButtonHook";
import "./styles.css";

function App() {
  return <OneTimeButtonHook />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
