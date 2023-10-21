import React, { Component } from "react";

export class Value extends Component {
  state = {
    value1: null,
    value2: null,
  };

  shouldComponentUpdate(nextState) {
    return (
      this.state.value1 !== nextState.value1 || this.state.value2 !== nextState.value2
    );
  }
  handlerSubmit=(event)=>{
    event.preventDefault()
    this.setState({
        [event.target.name]: event.target.value
    });
  }
    handlerChange = (e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
  render() {
    const { value1, value2 } = this.state;
    const result = value1 + value2;

    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Number 1
            <input
              type="text"
              name="value1"
              value={value1}
              onChange={this.handlerChange}
              inputMode="numeric"
            />
          </label>
          <label>
            Number 2
            <input
              type="text"
              name="value2"
              value={value2}
              onChange={this.handlerChange}
              inputMode="numeric" 
            />
          </label>
          <button type="submit">Submit</button>
          <p>Result: {result}</p>
        </form>
      </div>
    );
  }
}