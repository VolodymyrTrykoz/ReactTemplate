import React, { Component } from "react";

class Counter extends Component{
    componentWillUnmount(){
        console.log('Unmount');
    }
   render(){
        return (
            <div className={"counters__item"}>
                {this.props.counter.value}
                <button onClick=
                    {()=> this.props.onCalculate(this.props.counter, 1)}
                    >Increment
                </button>
                <button onClick=
                    {()=> this.props.onCalculate(this.props.counter, -1)}
                    >Decrement
                </button>
                <button onClick=
                    {()=> this.props.onDelete(this.props.counter.id)}
                    >Remove
                </button>
            </div>
        );
   };
}

export default Counter;