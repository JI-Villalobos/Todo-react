import React from 'react'
import './styles/TodoCounter.css'

function TodoCounter(){
    const { total, completed } = React.useContext()

    return(
        <h2 className="TodoCounter">
            Has completado {completed} tareas de {total}
        </h2>
    )
}

export { TodoCounter }