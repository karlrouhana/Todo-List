// Task.js
import React from 'react';
import './task.css';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <div class="task__content">
        <input type="checkbox" />
        <p>{task.name}</p>
        <p>{task.date}</p>
      </div>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
}

export default Task;
