import React, { useState } from 'react';
import '../styles/Lista.css';

function TodoList() {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input

  const aniadirtarea = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const tareacompletada = (index) => {
    const nuevatarea = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks( nuevatarea );
  };

  return (
    <div className="todo-container">

      <h1>Lista de Tareas</h1>

      <div className="input-container">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Agregar una tarea"
        />
        <button onClick={aniadirtarea} className="add-button">Agregar</button>
      </div>

      <h2>Toca para tachar la tarea</h2>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => tareacompletada
          (index)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;