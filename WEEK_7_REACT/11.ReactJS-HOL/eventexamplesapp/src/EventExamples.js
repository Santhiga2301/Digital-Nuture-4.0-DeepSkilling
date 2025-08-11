import React, { Component } from "react";

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    // Binding methods for `this`
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticClick = this.handleSyntheticClick.bind(this);
  }

  // Increment counter
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Decrement counter
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Say hello message
  sayHello() {
    console.log("Hello! This is a static message from sayHello method.");
  }

  // Say welcome with argument
  sayWelcome(message) {
    console.log(message);
  }

  // Synthetic event example
  handleSyntheticClick(event) {
    console.log("I was clicked");
    console.log("Synthetic Event Object:", event);
  }

  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h2>React Event Examples</h2>
        <p>Counter Value: {this.state.counter}</p>

        {/* Increase button calls multiple methods */}
        <button
          onClick={() => {
            this.increment();
            this.sayHello();
          }}
        >
          Increment
        </button>

        {/* Decrement button */}
        <button onClick={this.decrement}>Decrement</button>

        {/* Pass argument to function */}
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        {/* Synthetic Event example */}
        <button onClick={this.handleSyntheticClick}>OnPress</button>
      </div>
    );
  }
}

export default EventExamples;
