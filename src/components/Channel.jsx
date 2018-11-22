import React from "react";
import "../App.css";
import Mute from "./Mute";
import Solo from "./Solo";
import Fader from "./Fader";
import OnOff from "./OnOff";

const Channel = () => {
  return (
    <div className="Channel">
      <h2>{`Channel ${1}`}</h2>
      <OnOff />
      <div className="channel-button-container">
        <Mute />
        <Solo />
      </div>
      <div className="channel-fader-container">
        <Fader />
      </div>
    </div>
  );
};

export default Channel;
