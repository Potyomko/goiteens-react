// import s from './ColorPicker.module.css'
import { Component } from "react";
import { ColorContainer } from "./ColorPicker.styled";
import { ColorSpan } from "./ColorPicker.styled";
import { ColorTitle } from "./ColorPicker.styled";

export class ColorPicker extends Component{
    state = {
        currentOptionIdx: 0,
    }

    handlerActive = (idx) => {
        this.setState({
            currentOptionIdx: idx,
        })
    }
    render() {
        return (
        <ColorContainer>
            <ColorTitle>Color Picker</ColorTitle>
            <div>
                {this.props.options.map((option, idx) => {
                    return <ColorSpan
                            key={option.label}
                            onClick={()=>{this.handlerActive(idx)}} 
                            backgroundColor={option.color}
                            currentIdx={this.state.currentOptionIdx}
                            idx={idx}
                            >{ option.label }</ColorSpan>
                            })}
            </div>
        </ColorContainer>
    )}
}
export default ColorPicker;