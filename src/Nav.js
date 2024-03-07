import React, { useState } from "react";
import Stats from "./Stats";

export default function Nav({ onAddItem, numOfTodos, complete, notComplete }) {
  const [item, setItem] = useState("");
  const [lastId, setLastId] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();

    if (!item) {
      return;
    }

    const newItem = {
      id: lastId + 1,
      title: item,
      isComplete: false,
    };

    onAddItem(newItem);

    setLastId(lastId + 1);
    setItem("");
  };

  return (
    <div className="nav-container">
      <div className="nav-right">
        <div className="add-item">
          <form onSubmit={handleClick}>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              name="todo"
              placeholder="New item..."
            ></input>
            <button>Add</button>
          </form>
        </div>
        <div className="stats-component">
          <Stats
            numOfTodos={numOfTodos}
            complete={complete}
            notComplete={notComplete}
          />
        </div>
      </div>
    </div>
  );
}
