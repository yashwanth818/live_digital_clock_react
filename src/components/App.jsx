import { useState } from "react";
import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);
  setInterval(current_Time, 1000);

  function current_Time() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={current_Time}>Get Time</button>
    </div>
  );
}

export default App;
