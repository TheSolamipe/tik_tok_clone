import React from "react";
import "./App.css";
import Videos from "./Components/Videos";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Videos
          url="https://v16m.tiktokcdn.com/319eb4d47ec"
          channel="blvckrage"
          description="world best programmer"
          song="The Great and confident dude!"
          likes={145}
          messages={578}
          shares={102}
        />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
