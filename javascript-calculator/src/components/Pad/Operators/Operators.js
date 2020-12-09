import React, { Component } from 'react';
import './Operators.css';
class Operators extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="operators">
                <button id="add" className="operator" value="+" onClick={this.props.handleInput}>+</button>
                <button id="subtract" className="operator" value="-" onClick={this.props.handleInput}>-</button>
                <button id="multiply" className="operator" value="*" onClick={this.props.handleInput}>x</button>
                <button id="divide" className="operator" value="/" onClick={this.props.handleInput}>/</button>
                <button id="modulus" className="operator" value="%" onClick={this.props.handleInput}>%</button>
            </div>
        );
    }
}

export default Operators;