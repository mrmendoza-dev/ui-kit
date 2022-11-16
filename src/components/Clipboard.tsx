import React, { useState } from "react";



export default function Clipboard() {
  function copyColor(e: any) {
    let color = e.currentTarget.style.backgroundColor.replace("#", "");

    let copyText = "";
    navigator.clipboard.writeText(color);
  }

  return (
    <div className="Clipboard" id="clipboard">
      <button className="" onClick={copyColor}>
        Buttons
      </button>
    </div>
  );
}
    