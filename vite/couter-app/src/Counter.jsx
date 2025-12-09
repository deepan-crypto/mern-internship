import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button className="inc" onClick={handleIncrement}>
        Increment
      </button>
      <button className="dec" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
