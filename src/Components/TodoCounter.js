import React from 'react'
import './styles/TodoCounter.css'
import { TodoContext } from "./context/TodoContext"

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return(
        <h2 className="TodoCounter">
            Has completado {completedTodos} tareas de {totalTodos}
        </h2>
    )
}

export { TodoCounter }