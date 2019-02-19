import React, { Component } from "react";

class JustText extends Component{
    render(){
        return (
            <div className={"someTest"}>Hello {this.props.name.value}</div>
        );
    };
}

export default JustText;
