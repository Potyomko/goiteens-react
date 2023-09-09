import { Component } from "react";

export class TodoEditor extends Component {
    state = {
        textValue: '',
        level: 'junior',
        licence: 'false'
    }
    handlerChange = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            textValue: e.currentTarget.value
        })
    }
    handlerRadioChange = (e) => {
        console.log(e.currentTarget);
        console.log(e.currentTarget.name);
        console.log(e.currentTarget.value);

        this.setState({
            level: e.target.name
        })
    }
    handlerLicenceChange = (e) => {
        this.setState({
            licence: e.currentTarget.checked
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.textValue)
        this.reset();
    }
    reset = () => {
        this.setState({
            textValue: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <label>
                    Write your task
                    <textarea value={this.state.textValue} onChange={this.handlerChange}/>
                </label>
                <h2>Level</h2>
                <label>
                    <input type="radio" name="junior" checked={this.state.level === 'junior'} onChange={ this.handlerRadioChange} />  
                    junior  
                </label>
                <label>
                    <input type="radio" name="middle" checked={this.state.level === 'middle'} onChange={ this.handlerRadioChange}/> 
                    middle   
                </label>
                <label>
                    <input type="radio" name="senior" checked={this.state.level === 'senior'} onChange={ this.handlerRadioChange}/>   
                    senior 
                </label>
                <label>
                    <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handlerLicenceChange} />
                    Погоджуюсь з умовами договору
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}