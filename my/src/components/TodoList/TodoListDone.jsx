import { Component } from "react";

export class TodoListDone extends Component{
    state = {
        done: 'false'
    }
    handlerDone = (e) => {
        this.setState({
            done: e.currentTarget.checked
        })
    }
    render() {
        return (
            <label>
                <input type="checkbox" name="done" checked={this.state.done} onChange={this.handlerDone} />
            </label>
        )
    }
}