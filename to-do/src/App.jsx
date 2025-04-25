import { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setTodo] = useState('');
  const [task, setTask] = useState([]);

  function addTask() {
    if (toDo.trim() === '') return; 
    setTask(prevTasks => [...prevTasks, toDo]);
    setTodo('');
  }

  function removeTask(index) {
    setTask(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="ToDo">
      <h1>To-Do List with React</h1>

      <input
        type="text"
        value={toDo}
        placeholder="Write a new task here"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTask();
        }}
      />
      <button onClick={addTask}>ADD</button>

      <ul>
        {task.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <button
              className="remove-btn"
              onClick={() => removeTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
