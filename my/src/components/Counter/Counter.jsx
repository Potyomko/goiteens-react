import { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';
import { Buttons } from './Buttons';
import { CounterValue } from './CounterValue';

export class Counter extends Component{

    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue,
    }

    handlerIncrement = (e) => {
        console.log('Збільшуємо на 1');
        // this.setState({
        //     value: 10
        // })
        this.setState((prevState) => {
            return {
                value: prevState.value + 1
            }
        })
    }
    handlerDecrement = (e) => {
        console.log('Зменшуємо на 1');
        this.setState((prevState) => {
            return {
                value: prevState.value - 1
            }
        })
    }
    render() {
        const { handlerDecrement, handlerIncrement } = this;
        return (
            <div className="Counter__controls">
                <CounterValue value={ this.state.value } />
                <Buttons onDecrement={handlerDecrement} onIncrement={ handlerIncrement } />
            </div>
        )
    }
}