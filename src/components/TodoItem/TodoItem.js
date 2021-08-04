import React from "react"

export default function TodoItem(props) {
  return (
    <div className={"todo-item"}>
      <h2>{props.todo.title}</h2>
    </div>
  )
}