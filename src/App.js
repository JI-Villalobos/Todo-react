import React from "react";
import { AppUI } from "./Components/AppUI";
import { TodoProvider } from './Components/context/TodoContext'

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
