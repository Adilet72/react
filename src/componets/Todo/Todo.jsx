import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
            }}
        >
      <span
          onClick={toggleComplete}
          style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
          }}
      >
        {todo.text}
      </span>
            <div>
                <button onClick={toggleComplete} style={{ marginRight: "5px" }}>
                    ✓
                </button>
                <button onClick={deleteTodo}>✗</button>
            </div>
        </li>
    );
};

export default Todo;