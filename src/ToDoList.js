import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos }) {
  return (
    <div className="todo-list-container">
      <h2>TODO</h2>
      <div className="todo-list-items">
        {todos.map((todo) => (
          <ToDo todo={todo} />
        ))}
      </div>
    </div>
  );
}
