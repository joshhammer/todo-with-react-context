import {TodoContextProvider} from "./context/TodoContext"
import './App.scss';
import TodoApp from "./components/TodoApp/TodoApp"

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoApp />
      </div>
    </TodoContextProvider>
  );
}

export default App;
