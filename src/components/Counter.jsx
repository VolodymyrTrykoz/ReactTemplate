import React, { Component } from "react";

class Counter extends Component{
    componentWillUnmount(){
        console.log('Unmount');
    }
   render(){
       const {counter} = this.props;
        return (
            <div className={"counters__item"}>
                {counter.value}
                <button onClick=
                    {()=> this.props.onCalculate(counter, 1)}
                    >Increment
                </button>
                <button onClick=
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