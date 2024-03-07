export default function ToDo({ todo, onHandleComplete }) {
  const buttonStylesComplete = {
    backgroundColor: "#62b03e",
  };

  const buttonStylesNotComplete = {
    backgroundColor: "#C70039",
  };

  return (
    <div>
      <div
        onClick={() => onHandleComplete(todo.id)}
        className="item-containter"
        style={
          todo.isComplete === true
            ? buttonStylesComplete
            : buttonStylesNotComplete
        }
      >
        <div className="item">{todo.title}</div>
      </div>
    </div>
  );
}
