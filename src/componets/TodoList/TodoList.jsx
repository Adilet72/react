import React from "react";
import Todo from "../Todo/Todo.jsx";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo={todo}
                    toggleComplete={() => toggleComplete(index)}
                    deleteTodo={() => deleteTodo(index)}
                />
            ))}
        </ul>
    );
};

export default TodoList;