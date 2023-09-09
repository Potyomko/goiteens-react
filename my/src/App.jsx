import { Component } from 'react';
import { GlobalStyle } from './Global.styled';
import initialTodos from './todolist.json';
import TodoList from './components/TodoList/TodoList';
import { TodoEditor } from './components/TodoList/TodoEditor';
import { nanoid } from 'nanoid';
// import { Form } from './components/Form/Form';
// import stickers from './stickers.json';
// import { StickersList } from './components/Stickers/StickersList';
// import { StickerTitle } from './components/Stickers/Stickers.styled';
    
export class App extends Component {
  state = {
      todos: initialTodos
  };
    addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            text,
            completed: false
        }
        this.setState((prevState) => {
            return {
                todos: [newTodo, ...prevState.todos]
            }
        })
    }

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };
  render(){

    const { todos } = this.state;

    return (
        <>    
        <h1>Todo List</h1>
        <TodoEditor addTodo={this.addTodo} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <GlobalStyle />
      </>
    )
  }
}
    // state = {
    //     stickerLable: null
    // }
    // labelHandler = label => {
    //     this.setState({stickerLable:label})
    // }
    // render() {
    //     const { stickerLable } = this.state;
    //     return (
    //         <>
    //             {stickerLable && <StickerTitle>{stickerLable}</StickerTitle> }
    //             <StickersList
    //             stickers={stickers}
    //             onGetLabel={this.labelHandler}
    //             />