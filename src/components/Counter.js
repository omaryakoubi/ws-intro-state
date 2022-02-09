import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({
      counter:
        this.state.counter >= 1 ? this.state.counter - 1 : this.state.counter,
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15%",
        }}
      >
        <Button variant="danger" onClick={() => this.decrement()}>
          -
        </Button>
        <h1>{this.state.counter}</h1>
        <Button onClick={() => this.increment()}>+</Button>
      </div>
    );
  }
}

export default Counter;
