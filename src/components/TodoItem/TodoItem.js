import React, {useContext} from "react"
import {TodoContext} from "../../context/TodoContext"
import "./TodoItem.scss"
import {ReactComponent as XMark} from "../../icons/xmark.svg"
import {ReactComponent as Check} from "../../icons/check.svg"

export default function TodoItem(props) {
  const { deleteTodo, toggleCompleted} = useContext(TodoContext)

  return (
    <div className={"todo-item"}>
      <h2 className={props.todo.completed ? "completed" : 'incomplete'} >{props.todo.title}</h2>
      <div>
        <XMark className="x-icon" onClick={() => deleteTodo(props.todo.id)}/>
        <Check 
          className={`check-icon ${props.todo.completed ? "completed" : 'incomplete'}`} 
          onClick={() => toggleCompleted(props.todo.id)}
        />
      </div>
    </div>
  )
}