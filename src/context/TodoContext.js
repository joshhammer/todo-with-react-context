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

  const moveTodo = (id, direction) => {
    const element = todos.find(todo => todo.id === id)
    const index = todos.indexOf(element)

    if(direction === "up" && index > 0) {
      setTodos([...array_move(todos, index, index - 1)])
    }
    else if (direction === "down" && index < todos.length - 1) {
      setTodos([...array_move(todos, index, index + 1)])
    }
  }

  function array_move(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };

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

  return (
    <TodoContext.Provider value={{
      todos,
      addNewTodo,
      moveTodo,
      toggleCompleted,
      deleteTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }