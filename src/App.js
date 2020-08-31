import React from "react";
import "./App.css";
import Videos from "./Components/Videos";
import viddyData from "./videodata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viddies: viddyData,
    };
  }
  render() {
    const videoComponent = this.state.viddies.map((viddy) => (
      <Videos
        key={viddy.id}
        url={viddy.url}
        channel={viddy.channel}
        description={viddy.description}
        song={viddy.song}
        likes={viddy.likes}
        messages={viddy.messages}
        shares={viddy.shares}
      />
    ));

    return (
      <div className="app">
        <div className="app__videos">{videoComponent}</div>
      </div>
    );
  }
}

export default App;
