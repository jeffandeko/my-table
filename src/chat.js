import React, { Component } from 'react';

const pie = Math.PI

class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            name: "",
            text: "",
            time: "",
            radius: 0,
            triangle: { b: 0, h: 0 }
        }
    }
    render() {

        const { triangle, radius, messages, name, text, time } = this.state
        const messageBody = (message, index) =>
            <ul key={index}>

                <li>{message.text}</li>


            </ul>
        return (
            <div>
                <div>
                    <ol>
                        {messages.map(messageBody)}
                    </ol>
                </div>

                <textarea placeholder="chat here......"
                    onChange={(c) => this.setState({ text: c.target.value })}></textarea><br />
                <input type={"button"} value={'Send'} onClick={() =>
                    this.setState({
                        messages: [...this.state.messages, { name, text, time }]
                    })
                } />
                <input onChange={(r) => this.setState({ radius: r.target.value })} />
                <h1>area {pie * radius * radius}</h1>

                <div>
                    <input onChange={(r) => this.setState({ triangle: { ...this.state.triangle, b: r.target.value } })} value={triangle.b} />
                    <input onChange={(r) => this.setState({ triangle: { ...this.state.triangle, h: r.target.value } })} value={triangle.h} />
                    <h1>area {0.5 * triangle.b * triangle.h}</h1>
                </div>


            </div>
        );
    }
}

export default chat;