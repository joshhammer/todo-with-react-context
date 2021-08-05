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
      return [newTodo, ...prevTodos]
    })
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos([...filteredTodos])
  }

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } 
      else {
        return todo
      }
    })
    setTodos([...updatedTodos])
  }

  useEffect(() => {
    setTodos([...allTodos])
  }, [])

  console.log(todos)

  return (
    <TodoContext.Provider value={{
      todos,
      addNewTodo,
      toggleCompleted,
      deleteTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }