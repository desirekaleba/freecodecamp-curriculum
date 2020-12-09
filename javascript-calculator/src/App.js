import React, { Component } from "react";
import Top from "./components/Pad/Top/Top";
import Bottom from "./components/Pad/Bottom/Bottom";
import Digits from "./components/Pad/Digits/Digits";
import Operators from "./components/Pad/Operators/Operators";
import Screen from "./components/Screen/Screen";

import "./App.css";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "0",
    };
    this.handleInput = this.handleInput.bind(this);
    this.removeEndOperator = this.removeEndOperator.bind(this);
  }
  removeEndOperator(str) {
    return str.replace(/[%*+-/]$/, '');
  }
  handleInput(event) {
    const target = event.target.value;

    if (target === "=") {
      try {
        this.setState((state) => ({
          // eslint-disable-next-line no-eval
          result: eval(this.removeEndOperator(state.input))
        }));
      } catch (e) {
        this.setState({
          result: "Error"
        });
      }
    } else if (target === "c") {
      this.setState({
        input: "",
        result: "0",
      });
    } else {
      this.setState((state) => ({
        input: (state.input += target)
      }));
    }
  }

  render() {
    return (
      <div id="calculator">
        <Screen input={this.state.input} result={this.state.result} />{" "}
        <Top handleInput={this.handleInput} />{" "}
        <div id="digits-operators">
          <Digits handleInput={this.handleInput} />{" "}
          <Operators handleInput={this.handleInput} />{" "}
        </div>
        

        <Bottom handleInput={this.handleInput} />{" "}
      </div>
    );
  }
}

export default App;
