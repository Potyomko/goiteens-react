// import s from './ColorPicker.module.css'
import { Component } from "react";
import { ColorContainer } from "./ColorPicker.styled";
import { ColorSpan } from "./ColorPicker.styled";
import { ColorTitle } from "./ColorPicker.styled";

export class ColorPicker extends Component{
    state = {
        currentOptionIdx: 0,
    }
    render() {
        return (
        <ColorContainer>
            <ColorTitle>Color Picker</ColorTitle>
            <div>
                {this.props.options.map((option, idx) => {
                    return <ColorSpan key = {option.label} backgroundColor = {option.color}>{option.label}</ColorSpan>
                })}
            </div>
        </ColorContainer>
    )
    }
}
export default ColorPicker;