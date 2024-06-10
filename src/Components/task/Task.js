// Task.js
import React, { useState } from 'react';
import './task.css';

const Task = ({ task, deleteTask }) => {
  const [checked, setChecked] = useState(false);

  function handleCheck(){
    setChecked(!checked);
  }

  return (
    <div className="task">
      <div class="task__content">
        <input type="checkbox" onClick={handleCheck}/>
        <div class="task__content-details">
          <p className={checked ? 'crossed' : ''}>{task.name}</p>
          <p className={checked ? 'crossed' : ''}>{task.date}</p>
        </div>
      </div>
      <button onClick={() => deleteTask(task)} className="delete-btn">Delete</button>
    </div>
  );
}

export default Task;
