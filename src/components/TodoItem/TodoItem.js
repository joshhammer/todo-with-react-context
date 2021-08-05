import React, {useContext} from "react"
import {TodoContext} from "../../context/TodoContext"
import "./TodoItem.scss"
import {ReactComponent as XMark} from "../../icons/xmark.svg"
import {ReactComponent as Check} from "../../icons/check.svg"
import {ReactComponent as ArrowUp} from "../../icons/arrow-up.svg"
import {ReactComponent as ArrowDown} from "../../icons/arrow-down.svg"

export default function TodoItem(props) {
  const { deleteTodo, toggleCompleted, moveUpTodo, moveDownTodo} = useContext(TodoContext)

  return (
    <div className={"todo-item"}>
      <h2 className={props.todo.completed ? "completed" : 'incomplete'} >{props.todo.title}</h2>
      <div className="todo-icon-box">
        <XMark className="x-icon" onClick={() => deleteTodo(props.todo.id)}/>
        <Check 
          className={`check-icon ${props.todo.completed ? "completed" : 'incomplete'}`} 
          onClick={() => toggleCompleted(props.todo.id)}
        />
        <ArrowUp className="arrow-up-icon" onClick={() => moveUpTodo(props.todo.id)}/>
        <ArrowDown className="arrow-down-icon" onClick={() => moveDownTodo(props.todo.id)}/>
      </div>
    </div>
  )
}