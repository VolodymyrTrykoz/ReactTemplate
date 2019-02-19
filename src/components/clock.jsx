import React, { Component } from "react";

class Clock extends Component{
    state = {
        dates: [
            {value: new Date()}
        ]
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            dates: [
                {value: new Date()}
            ]
        });
    }



    render() {
        return (
            <div>
                <h2>Current time is {this.state.dates[0].value.toLocaleTimeString()}.</h2>
                <button onClick={this.props.onClickShowConsoleMessage}>Show console message</button>
            </div>
        );
    }
}
export default Clock;