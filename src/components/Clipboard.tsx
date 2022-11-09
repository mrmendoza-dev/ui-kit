import React, { useState } from "react";



export default function Clipboard() {
  function copyColor(e) {
    let color = e.currentTarget.style.backgroundColor.replace("#", "");

    let copyText = "";
    navigator.clipboard.writeText(color);
  }

  return (
    <div className="Clipboard">
      <button className="" onClick={copyColor}>
        Buttons
      </button>
    </div>
  );
}
    