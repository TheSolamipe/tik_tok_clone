import React, { useRef, useState } from "react";
import "./../styles/Videos.css";
import VideoFooter from "./VideoFooter";

function Videos() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.tiktok.com/@zicsaloma/video/6861141133490146566"
      ></video>
      <VideoFooter />
      {/* {Video sidebar} */}
    </div>
  );
}

export default Videos;
