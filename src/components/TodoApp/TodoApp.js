import React, {useContext} from "react"
import {TodoContext} from "../../context/TodoContext"

export default function TodoApp() {
const {todos} = useContext(TodoContext)
const allTodos = todos.map(todo => {
  return <h1>{todo.title}</h1>
})

  return (
    <main className="main-app-container">
      <h1>My Todo App</h1>
      <div>
        <input type="text" placeholder="Enter new Todo here"/>
        <button>Add new Todo</button>
        {allTodos}
      </div>
    </main>
  )
}