import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const addNewItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

  return (
    <div className="App">
      <div className="nav-component">
        <Nav todos={todos} setTodos={setTodos} onAddItem={addNewItem} />
      </div>

      <div className="todo-list-component">
        <ToDoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
