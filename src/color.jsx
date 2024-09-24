import React from "react";

function Color({ color, onClick }) {
  return <div className={color} onClick={() => onClick(color)}></div>;
}

export default Color;
