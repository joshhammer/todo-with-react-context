import React, {useState, useEffect} from "react"
import allTodos from "../utils/data.json"
const TodoContext = React.createContext()

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([])

  const createRandomId = () => {
    return String(Math.floor(Math.random() * 10000))
  }

  const addNewTodo = (newTodoTitle) => {
    const newTodo = {
      title: newTodoTitle,
      id: createRandomId(),
      completed: false
    }

    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

  useEffect(() => {
    setTodos([...allTodos])
  }, [])

  console.log(todos)

  return (
    <TodoContext.Provider value={{
      todos,
      addNewTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }