//import './App.css';
import React from 'react'
import { TodoCounter } from './Components/TodoCounter';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Llorar con la llorona", completed: false },
  {
    text: "Solucionar la hambruna mundial y no decirle a nadie",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
