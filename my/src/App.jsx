import { Component } from "react";
import { nanoid} from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
      name: "",
    number: "",
    filter: "",
  };



  isNameAlreadyExists = (name) => {
    return this.state.contacts.some((contact) => contact.name === name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.isNameAlreadyExists(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter((contact) => {
     return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };
  deletePhone = phoneid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( contacts => contacts.id !== phoneid),
    }));
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        <div>
      <h1>Phone book</h1>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
</div>
        <label>
          Find contacts by name
          <input onChange={this.handleFilter} type="text" />
        </label>

        <h2>Contacts</h2>
        <ul>
  {this.getVisibleContacts().map(({ id, name, number }) => {
    return (
      
    
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => this.props.deletePhone(id)}>
          Delete
        </button>
      </li>
    );
  })}
</ul>
      </div>
    );
  }
}
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