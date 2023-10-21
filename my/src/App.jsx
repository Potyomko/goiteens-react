import { Component } from "react"
// import { Timer } from "./components/Timer/Timer"
// import { TimerButton } from "./components/Timer/TimerButton"
// import { Value } from "./Value"
// import { Component } from "react";
import { GlobalStyle } from "./Global.styled";
// import {PokemonForm} from "./components/Pokemon/PokemonForm";
// import {ToastContainer} from 'react-toastify';
// import { createPortal } from 'react-dom';
// import { Modal } from "./components/Modal/Modal";
import 'react-toastify/dist/ReactToastify.css';
// import { PokemonInfo } from "./components/Pokemon/PokemonInfo";
import { Clock } from "./components/Clock/Clock";

export class App extends Component {
  
  state= {
    pokemon: null,
  }

 getPokemonName=(name)=>{
  this.setState({pokemon: name})
 }

  render(){
    return (
      <>
      <Clock/>
      <GlobalStyle/>
      </>
    );
  }
};
// export class App extends Component {
 
// state = {
//   showTimer: false
// }
// toggleTimer=()=>{
// this.setState((prevState)=>{
//  return {
//     showTimer: !prevState.showTimer}
// })
// }
//   render(){
//     return (
//       <>
//         <Value/>
//         {this.state.showTimer && <Timer/>}
//         <TimerButton onToggle={this.toggleTimer} textButton={this.state.showTimer} />
//        </>
//     );
//   }

// };
// const modalRoot = document.querySelector('#modal-root')
// export class App extends Component{
//   state = {
//     isOpen: false
//   }
//   closeModal=()=> {
//     this.setState({isOpen: false})
//   }
//   openModal=()=> {
//     this.setState({isOpen: true})
//   }
//   render() {
//     return (
//       <>
        
//         <button type="button"onClick={this.openModal}>Open</button>
//         {this.state.isOpen && createPortal(<Modal onClose={ this.closeModal} />, modalRoot)}
//       </>
//     )
//   }
// }
// export class App extends Component {
  
//   state={
//     todos: initialTodos,
//     filter: '',
//   }
 
//   addTodo = (text)=>{
//     const newTodo = {
//       id: nanoid(),
//       text,
//       completed: false
//     }
    
//   this.setState((prevState)=>{
//     return {
//       todos: [newTodo, ...prevState.todos]
//     }
//   })
//   }

//   toggleCompleted = todoId => {
//       this.setState(({ todos }) => ({
//       todos: todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
//       ),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   calculateCompletedTodos = () => {
//     const { todos } = this.state;

//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );
//   };
//   deleteTodo = todoId => {
//         this.setState(prevState => ({
//             todos: prevState.todos.filter(todo => todo.id !== todoId),
//         }));
//     };
//   render(){
//     const { todos, filter } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();
//     return (
//       <>
//       <InfoBox>
//           <p>Вього завдань: {totalTodoCount}</p>
//           <p>Виконано: {completedTodoCount}</p>
//         </InfoBox>
//       <TodoEditor addTodo={this.addTodo}/>

//       <Filter value={filter} onChange={this.changeFilter} />

//       <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       <GlobalStyle/>
//       </>
//     );
//   }
// };
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
    
// handlerChange = (e)=>{
//         this.setState({
//             [e.currentTarget.name]: e.currentTarget.value
//         })
//     }
//     handlerSubmit = (e) => {
//         e.preventDefault()
//         const newContact = { id: nanoid(), name: this.state.name, number: null }
//         this.setState(  ({ contacts })=> {
//             return { contacts: [...contacts, newContact] }
//         })
//     }
//     handlerFilter = (e) => {
//         this.setState({
//             filter: e.currentTarget.value
//         })
//     }
//     getVisibleContacts = () => {
//         return(
//         this.state.contacts.filter(() => {
//             return()
//         })
//         )
//     }

        // <>
        //     <h1>Phonebook</h1>
        //     <form onSubmit={this.handlerSubmit}>
        //         <label>
        //             Name
        //             <input
        //             type="text"
        //             name="name"
        //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             required
        //             onChange={this.handlerChange}
        //             />
        //         </label>
        //         <label>
        //             <input
        //             type="tel"
        //             name="number"
        //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //                 required
                        
        //             />
        //         </label>
        //         <button type='submit'>Add conact</button>
        //     </form>
        //     <h2>Contacts</h2>
        //     <ul>
        //         {this.getVisibleContacts().map(({ name, number }) => {
        //             return (
        //             <li>
        //                 <p>{name}:{number}</p>
        //             </li>
        //             )
        //         })}
//     </ul>

// import { Form } from './components/Form/Form';
// import stickers from './stickers.json';
// import { StickersList } from './components/Stickers/StickersList';
// import { StickerTitle } from './components/Stickers/Stickers.styled';