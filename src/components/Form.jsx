import React, {Component} from "react";
const labelColor = {
    color: 'lightgreen',
};
class Form extends Component {
    state = {

    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        });
    };
    render(){

        return(
            <React.Fragment>
                <form style={labelColor}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Surname:
                        <input type="text" name="surname" value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                </form>
            </React.Fragment>
        );
    }
}
export default Form;













