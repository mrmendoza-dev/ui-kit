import { useState } from "react";
import "../css/Counter.css"


export default function Counter() {
  const[counter, setCounter] = useState(0);

  function addCounter() {
    setCounter(prevCount => prevCount+1) 
  }
    function subtractCounter() {
      setCounter((prevCount) => prevCount - 1);
    }
  return (
    <div className="Counter" id="counter">
      <button className="counter-btn counter-left" onClick={subtractCounter}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <p className="counter-val">{counter}</p>
      <button className="counter-btn counter-right" onClick={addCounter}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );

}
