import React from "react";
import "./styles/TodoItem.css";
import { CompleteIcon } from "./TodoIcon/CompleteIcon";
import { DeleteIcon } from "./TodoIcon/DeleteIcon";

function TodoItem(props) {
  /*const onComplete = () => {
    alert("Completed task: " + props.text);
  };*/

  /*const onDelete = () => {
    alert("Deleted task: " + props.text);
  };*/

  return (
    <li className="TodoItem">
     <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
     />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
