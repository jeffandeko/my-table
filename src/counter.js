import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        const { initial } = this.props;
        this.setState({ counter: initial })
    }
    render() {
        const { counter } = this.state
        const { name } = this.props;


        return (
            <div>
                <h2>{name}</h2>
                <h1>{counter}</h1>
                <button onClick={() => this.setState({ counter: counter - 1 })}>Sub</button>
                <button onClick={() => this.setState({ counter: counter + 1 })}>Add</button>
            </div>
        );
    }
}

export default index;