import React, { Component } from "react";
import PropTypes from "prop-types";



class Counter extends Component{
    static propTypes = {
        name: PropTypes.object.isRequired
    };

    buttonIncrease = {
        backgroundColor: "#82e382",
    }

    buttonDecrease = {
        backgroundColor: "pink",
    }

    componentWillUnmount(){
        console.log('Unmount');
    }

    getCounterValue = (value) => {
        if (value === 0) {
            return  <span className={'zero'}>Zero</span>
        }
        else if (value <= 0) {
            return 0;
        }
        else {
            return value;
        }
    }

    render(){
        const {counter} = this.props;

        return (
            <div className={"counters__item"}>
                {this.getCounterValue(counter.value)}
                <button
                    style={this.buttonIncrease}
                    onClick=
                    {()=> this.props.onCalculate(counter, 1)}
                    >Increment
                </button>
                <button
                    style={this.buttonDecrease}
                    onClick=
                    {()=> this.props.onCalculate(counter, -1)}
                    >Decrement
                </button>
                <button onClick=
                    {()=> this.props.onDelete(counter.id)}
                    >Remove
                </button>
            </div>
        );
   };
}

export default Counter;