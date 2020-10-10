import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const onIncrementClick = () => {
    if (error) {
      setError(false);
    }
    setCounter(counter + 1);
  };

  const onDecrementClick = () => {
    if (counter === 0) {
      setError(true);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{counter}</span>
      </h1>
      {error && (
        <p data-test="error-message" style={{ color: 'red' }}>
          The counter cannot go below 0
        </p>
      )}
      <button data-test="increment-button" onClick={onIncrementClick}>
        increment counter
      </button>
      <button data-test="decrement-button" onClick={onDecrementClick}>
        decrement counter
      </button>
    </div>
  );
};

export default App;
