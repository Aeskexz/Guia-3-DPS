import React from 'react';

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo}</span>
      <button
        className="eliminar"
        onClick={() => deleteTodo(index)}
      >
        ✕
      </button>
    </div>
  );
};

export default Todo;
