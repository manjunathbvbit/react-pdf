import React, { useState, useRef } from "react";
import { Viewer } from "./components/Viewer";
import "./App.css"
import "./components/Viewer.css"

export default function App() {
  const [scale, setScale] = useState(1.5);

  const ZoomIn = () => {
    setScale(scale - 0.25)
  }
  const ZoomOut = () => {
    setScale(scale + 0.25)
  }

  return (
    <div className="App">
      <div className="toolbar" style={{display: "flex",gap: "20px", justifyContent: "center", margin: "100px 400px"}}>
        <button onClick={ZoomIn}>-</button>
        <button onClick={ZoomOut}>+</button>
      </div>
      <Viewer scale = {scale} ></Viewer>
    </div>
  );
}
