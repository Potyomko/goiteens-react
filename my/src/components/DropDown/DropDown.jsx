import './DropDown.css';
import { Component } from 'react';

export class DropDown extends Component {

    state = {
        visible: false,
    }
    toggle = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
        <div className="Dropdown">
          <button
                type="button"
                className="Dropdown__toggle"
                onClick={this.toggle}
          >
          Open
            </button>
            {this.state.visible && <div className="Dropdown__menu">Випадаюче меню</div>}
            </div>
        )
    }
}