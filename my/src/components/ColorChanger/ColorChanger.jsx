import './ColorChanger.styled.jsx';
import { Component } from 'react';
import { RandomBtn } from './ColorChanger.styled.jsx';

export class ColorChanger extends Component{

    state = {
        backgroundColor: 'rgb(253 255 114)'
    }

    randomColor = ()=>{
        const randomColor =  Math.floor(Math.random()*16777215).toString(16);
        const color = '#' + randomColor
        this.setState(
        {
            backgroundColor: color
        }
        )
    }

    render() {
        return (
            <RandomBtn onClick={this.randomColor} style={{backgroundColor: this.state.backgroundColor}}>Change Color</RandomBtn>
        )
    }
}