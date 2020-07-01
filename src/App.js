import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    error: false
  };

  onIncrementClick = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrementClick = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error && (
          <p data-test="error-message" style={{ color: 'red' }}>
            The counter cannot go below 0
          </p>
        )}
        <button data-test="increment-button" onClick={this.onIncrementClick}>
          increment counter
        </button>
        <button data-test="decrement-button" onClick={this.onDecrementClick}>
          decrement counter
        </button>
      </div>
    );
  }
}

export default App;
