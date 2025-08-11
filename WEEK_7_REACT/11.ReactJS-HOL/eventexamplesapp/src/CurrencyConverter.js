import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevents page refresh
    const euroRate = 0.011; // Example conversion rate
    const euros = (this.state.rupees * euroRate).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euros && (
          <p>
            {this.state.rupees} INR = {this.state.euros} EUR
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
