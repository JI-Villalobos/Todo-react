import React from 'react'
import { TodoContext } from './context/TodoContext'
import './styles/TodoForm.css'


function TodoForm(params) {
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = (event) => {
        setOpenModal(false)
    }


    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return(
        <form>
            <label>Añade un nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Añade una TODO"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button-add" type="submit" onClick={onSubmit}>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }