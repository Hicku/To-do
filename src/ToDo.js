import React from "react";

export default function ToDo({ todo }) {
  return (
    <div className="item-containter">
      <div className="item"> {todo}</div>
    </div>
  );
}
