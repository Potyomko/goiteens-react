import React from 'react';
import { List, Item, Text, Button } from './TodoList.styled.jsx';
import { TodoListDone } from './TodoListDone.jsx';

const TodoList = ({ todos, onDeleteTodo }) => (
  <List >
    {todos.map(({ id, text }) => (
        <Item key={id}>
            <TodoListDone/>
            <Text>{text}</Text>
            <Button onClick={() => onDeleteTodo(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

export default TodoList;