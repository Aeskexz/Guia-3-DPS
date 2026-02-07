import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado para UNA tarea
  const [todo, setTodo] = useState({});

  // Estado para la LISTA de tareas
  const [todos, setTodos] = useState([
    { todo: 'todo 1' },
    { todo: 'todo 2' },
    { todo: 'todo 3' }
  ]);

  // Captura lo que se escribe en el input
  const handleChange = (e) => {
    setTodo({ [e.target.name]: e.target.value });
  };

  // Agrega una nueva tarea
  const handleClick = () => {
    if (!todo.todo || todo.todo.trim() === '') {
      alert('El campo no puede estar vacío');
      return;
    }

    setTodos([...todos, todo]);
    setTodo({});
  };

  // Elimina una tarea
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <input
            type="text"
            name="todo"
            placeholder="Agregar tarea"
            onChange={handleChange}
          />
          <button
            type="button"
            className="agregar"
            onClick={handleClick}
          >
            +
          </button>
        </div>
      </form>

      <h3>Lista</h3>

      {todos.map((value, index) => (
        <Todo
          key={index}
          todo={value.todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
