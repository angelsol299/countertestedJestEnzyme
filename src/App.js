import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        {this.state.counter < 0 &&
          this.setState(state => {
            return { counter: (state.counter = 0) };
          })}
        {this.state.counter <= 0 && (
          <h4 data-test="counter-display-danger" style={{ color: "red" }}>
            the counter cannot go below 0
          </h4>
        )}
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
          data-test="decrement-button"
        >
          Decrement counter
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
