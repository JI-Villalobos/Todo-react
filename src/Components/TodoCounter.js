import React from 'react'
import './styles/TodoCounter.css'

function TodoCounter({ total, completed }){
    return(
        <h2 className="TodoCounter">
            Has completado {completed} tareas de {total}
        </h2>
    )
}

export { TodoCounter }