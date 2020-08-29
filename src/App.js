import React from "react";
import "./App.css";
import Videos from "./Components/Videos";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
