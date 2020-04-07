import React, { Component } from 'react';

class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            width: 0
        }
    }

    render() {
        const { length, width } = this.state

        return (
            <div>
                <input placeholder="Insert Legth" value={length} onChange={(client) => this.setState({ length: client.target.value })} />
                <input placeholder="insert width" value={width} onChange={(client) => this.setState({ width: client.target.value })} />
                <h1>Area = {length * width}</h1>
            </div>
        );
    }
}

export default Area;