import React from "react";
import MainForm from "./components/mainForms/mainform";
import Result from "./components/results/result";
import "../src/App.css";
function App() {
  return (
    <div className="App">
      <h1 style={{ margin: "15px" }}>Mixer</h1>
      <MainForm />
      <Result />
    </div>
  );
}

export default App;
