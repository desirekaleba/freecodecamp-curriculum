import React, { Component } from 'react';

class Operators extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button id="add" value="+" onClick={this.props.handleInput}>+</button>
                <button id="subtract" value="-" onClick={this.props.handleInput}>-</button>
                <button id="multiply" value="*" onClick={this.props.handleInput}>x</button>
                <button id="divide" value="/" onClick={this.props.handleInput}>/</button>
                <button id="modulus" value="%" onClick={this.props.handleInput}>%</button>
            </div>
        );
    }
}

export default Operators;