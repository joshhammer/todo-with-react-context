import React, {useContext, useState, useEffect} from "react"
import {TodoContext} from "../../context/TodoContext"

import TodoItem from "../TodoItem/TodoItem"

import "./TodoApp.scss"


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

useEffect(() => {
  
}, [todos])

  return (
    <main className="main-app-container">
      <h1 className="app-title">To Do..</h1>
      <div>
        <form className="input-form" action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={newTodoTitle}
            name="newtodo"
            onChange={handleChange}
          />
          <button type="submit" >Add</button>
        </form>
        <div className="todo-elements-container">
          {allTodos}
        </div>
      </div>
    </main>
  )
}