import React from "react";
import ReactDOM from "react-dom";
import './styles/Modal.css'
import { TodoForm } from "./TodoForm";

function Modal({ children }) {
  return ReactDOM.createPortal(
      <div className="ModalBackground">
          <TodoForm />
      </div>,
    document.getElementById("modal")
  );
}

export { Modal };
