import React, { useState, useRef } from "react";
// import "./styles.css";
import Viewer from "./components/Viewer";

export default function App() {
  const [page, setPage] = useState(1);
  const windowRef = useRef();
  const url = "https://api.printnode.com/static/test/pdf/multipage.pdf";

  const scrollToItem = () => {
    windowRef.current && windowRef.current.scrollToItem(page - 1, "start");
  };

  return (
    <div className="App">
      <div>
        <button>Load PDF</button>
      </div>
      <h1>Pdf Viewer</h1>
      <div>
        <input value={page} onChange={(e) => setPage(e.target.value)} />
        <button type="button" onClick={scrollToItem}>
          goto
        </button>
      </div>
      <br />
      <Viewer url={url} windowRef={windowRef} />
    </div>
  );
}
