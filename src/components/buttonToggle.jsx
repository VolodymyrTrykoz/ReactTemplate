import React, {Component} from "react";

class Toggler extends Component {
    state = {
        lang: {
            ua: "Текст",
            en:  "Text",
        }
    };
    render() {
        const {
            onRenderButtonText,
            isToggleOn
        } = this.props;
        const { ua, en } = this.state.lang;
        return (
            <React.Fragment>
                <button onClick={onRenderButtonText}>{isToggleOn ? 'UA' : 'EN'}</button>
                <p>{isToggleOn ? ua : en}</p>
            </React.Fragment>
        );
    }
}

export default Toggler;