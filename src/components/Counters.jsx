import React, { Component } from 'react';
import Counter from './Counter';
import JustText from './JustText';
import Clock from './Clock';
import Toggler from './ButtonToggle';
import Form from './Form';

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
    handleCalculate = (counter, numb ) => {
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
        let clock;
        let userName;
        const {isToggleOn} = this.state;
        clock = <Clock onClickShowConsoleMessage={this.handleConsole}/>;
        if(isToggleOn){
            userName =  <JustText name={this.state.names[0]} />;
        }


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

                    {userName}

                    {clock}

                    <Toggler
                        onRenderButtonText={this.renderButtonText}
                        isToggleOn={isToggleOn}
                    />

                </div>

                <Form/>

            </React.Fragment>
        )
    }
}

export default Counters;