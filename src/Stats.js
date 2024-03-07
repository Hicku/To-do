import React from "react";

export default function Stats({ numOfTodos, complete, notComplete }) {
  const numComplete = complete();
  const percentage = (numComplete / numOfTodos) * 100;

  return (
    <div className="stats-container">
      <div>Todos: {numOfTodos}</div>
      <div>Complete: {complete()}</div>
      <div>Left: {notComplete()}</div>
      <div>{Math.floor(percentage)}%</div>
    </div>
  );
}
