import React, { Component } from "react";
import PropTypes from 'prop-types';

class JustText extends Component{
    render(){
        const {value} = this.props.name;
        return (
            <div className={"someTest"}>Hello {value}</div>
        );
    };
}

//PropTypes

JustText.propTypes = {
  name: PropTypes.object.isRequired
};

export default JustText;
