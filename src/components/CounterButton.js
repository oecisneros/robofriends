import React, { Component } from "react";

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    updateCount = () => this.setState(state => ({ count: state.count + 1 }));

    render = () => {console.log('header'); return (
        <button color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
        </button>
    );};
}

export default CounterButton;