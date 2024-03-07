import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const numOfTodos = todos.length;

  const complete = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.isComplete === true) {
        count += 1;
      }
    });
    return count;
  };

  const notComplete = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.isComplete === false) {
        count += 1;
      }
    });
    return count;
  };

  const addNewItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

  const handleToggleComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="nav-component">
        <Nav
          todos={todos}
          setTodos={setTodos}
          onAddItem={addNewItem}
          numOfTodos={numOfTodos}
          complete={complete}
          notComplete={notComplete}
        />
      </div>

      <div className="todo-list-component">
        <ToDoList todos={todos} onHandleComplete={handleToggleComplete} />
      </div>
    </div>
  );
}

export default App;
