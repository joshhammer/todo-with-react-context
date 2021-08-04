import React, {useContext, useState} from "react"
import {TodoContext} from "../../context/TodoContext"

import TodoItem from "../TodoItem/TodoItem"

export default function TodoApp() {
const {todos, addNewTodo} = useContext(TodoContext)


const allTodos = todos.map(todo => {
  return <TodoItem key={todo.id} todo={todo}/>
})
const [newTodoTitle, setNewTodoTitle] = useState("")

const handleChange = (event) => {
  const {value} = event.target
  setNewTodoTitle(value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  addNewTodo(newTodoTitle)
  setNewTodoTitle("")
}

  return (
    <main className="main-app-container">
      <h1>My Todo App</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter new Todo here"
            value={newTodoTitle}
            name="newtodo"
            onChange={handleChange}
          />
          <button type="submit" >Add new Todo</button>
        </form>
        {allTodos}
      </div>
    </main>
  )
}