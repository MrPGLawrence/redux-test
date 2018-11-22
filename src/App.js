import React from "react";
import "./App.css";
import Channel from "./components/Channel";

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <h1>CALREC</h1>
      </div>
      <Channel />
    </div>
  );
};

export default App;
