import React, { useState } from "react";
import Color from "./color";

function Picker() {
  const [selectedColor, setSelectedColor] = useState("red"); // Initial color is red

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: {selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" onClick={setSelectedColor} />
        <Color color="green" onClick={setSelectedColor} />
        <Color color="black" onClick={setSelectedColor} />
      </div>
    </div>
  );
}

export default Picker;
