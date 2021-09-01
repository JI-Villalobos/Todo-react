import React from 'react'

function TodoItem(props) {
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                ł
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="icon icon-delete">
                x
            </span>
        </li>
    )
}

export { TodoItem }