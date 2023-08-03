import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    // setCounter(counter + 1);
    setCounter((preValues) => preValues + 1);
  };

  const decrement = () => {
    // setCounter(counter - 1);
    setCounter((preValues) => preValues - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>counter application</h1>
      <div>
        <div>
          <p>
            HTML paragraph or HTML p tag is used to define a paragraph in a
            webpage. Let's take a simple example to see how it work. It is a
            notable point that
          </p>
        </div>
        <h2>{counter}</h2>
        <button className="btn btn1" onClick={increment}>
          increment
        </button>
        <button className="btn btn3" onClick={reset}>
          reset
        </button>
        <button className="btn btn2" onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
};
export default App;
