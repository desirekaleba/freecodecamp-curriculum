
import React, { Component } from 'react';
import Top from './components/Pad/Top/Top';
import Bottom from './components/Pad/Bottom/Bottom';
import Digits from './components/Pad/Digits/Digits';
import Operators from './components/Pad/Operators/Operators';
import Screen from './components/Screen/Screen';


import './App.css';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const target = event.target.value;
        console.log(target);
  }

  render(){
      return (
        <div className="App">
          <Screen input={this.state.input} result={this.state.result}/>
          <Top handleInput={this.handleInput}/>
          <Operators handleInput={this.handleInput}/>
          <Digits handleInput={this.handleInput}/>
          <Bottom handleInput={this.handleInput}/>
        </div>
  );
  }

}

export default App;
