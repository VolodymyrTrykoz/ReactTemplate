import React, { Component } from 'react';
import Counter from './counter';
import JustText from './justText';
import Clock from './clock';
import Toggler from './buttonToggle';

class Counters extends Component{
    state = {
        counters: [
            {id: 1, value: 4, },
            {id: 2, value: 5, },
            {id: 3, value: 7, },
        ],
        names: [
            {id: 1, value: "Sarah"}
        ],
        dates: [
            {value: new Date()}
        ],
        isToggleOn: false
    };
    handleDelete = (counterId) => {
        const countRendered = this.state.counters.filter(item => item.id !== counterId);
        this.setState({counters:countRendered});
    };
    handleCalculate = (counter, numb) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value+=numb;
        this.setState({counters});
    };
    handleConsole = () => {
        console.log('Bubbling user`s event from child component')
    };

    renderButtonText = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    };

    render(){
        return(
            <React.Fragment>
                <div className={"counters__wrapper"}>
                    {this.state.counters.map(counter =>
                        <Counter
                            key={counter.id}
                            onDelete={this.handleDelete}
                            onCalculate={this.handleCalculate}
                            counter={counter}
                        />
                    )}
                        <JustText name={this.state.names[0]} />
                        <Clock onClickShowConsoleMessage={this.handleConsole}/>
                        <Toggler
                            onRenderButtonText={this.renderButtonText}
                            isToggleOn={this.state.isToggleOn}
                        />
                </div>
            </React.Fragment>
        )
    }
}

export default Counters;