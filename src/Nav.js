import React, { useState } from "react";

export default function Nav({ onAddItem }) {
  const [item, setItem] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!item) {
      return;
    }

    onAddItem(item);

    setItem("");
  };

  return (
    <div className="nav-container">
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
  );
}
