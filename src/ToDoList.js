import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos, onHandleComplete }) {
  return (
    <div className="todo-list-container">
      <h2>TODO</h2>
      <div className="todo-list-items">
        {todos.map((todo) => (
          <ToDo
            onHandleComplete={onHandleComplete}
            todo={todo}
            key={Math.floor(Math.random() * 100000000000)}
          />
        ))}
      </div>
    </div>
  );
}
