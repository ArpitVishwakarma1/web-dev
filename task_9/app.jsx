import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Restaurant Counter</h1>
      <div className="flex items-center justify-center">
        <button onClick={decrement} className="btn">
          -
        </button>
        <span className="mx-4">{count}</span>
        <button onClick={increment} className="btn">
          +
        </button>
      </div>
      <button onClick={reset} className="btn mt-4">
        Reset
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
