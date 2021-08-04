import React, {useState, useEffect} from "react"
import allTodos from "../utils/data.json"
const TodoContext = React.createContext()

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos([...allTodos])
  }, [])

  return (
    <TodoContext.Provider value={{
      todos
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }