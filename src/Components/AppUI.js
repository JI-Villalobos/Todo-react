import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContext } from "./context/TodoContext";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>

            {error && <p>Ha ocurrido un error.....</p>}
            {loading && <p>Cargando items ....</p>}
            {(!loading && searchedTodos.length) && <p>¡Agrega tu primer TODO!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
