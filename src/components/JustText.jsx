import React, { Component } from "react";
import PropTypes from 'prop-types';

class JustText extends Component{

    static propTypes = {
        name: PropTypes.object.isRequired
    };

    render(){
        const {value} = this.props.name;
        return (
            <div className={"someTest"}>Hello {value}</div>
        );
    };
}

export default JustText;
