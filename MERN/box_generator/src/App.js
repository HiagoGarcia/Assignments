import React, { useState } from "react";
import CreateBox from "./Components/CreateBox";
import MadeBoxes from "./Components/MadeBoxes";

function App() {
  const [currBox, setCurrBox] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleNewBox = (newBox) => {
    setCurrBox(newBox);
    setBoxes([...boxes, newBox]);
  }

  return (
    <div className="App">
      <CreateBox onNewBox={handleNewBox} />
        <MadeBoxes boxes={boxes} />
    </div>
  );
}

export default App;
