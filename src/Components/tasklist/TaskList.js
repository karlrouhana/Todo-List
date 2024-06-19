import React, { useState, useEffect } from 'react';
import Task from '../task/Task';
import { useSelector } from 'react-redux';
import { deleteTask } from '../../redux/createSlice';
import './tasklist.css';

const TaskList = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    filterTasks();
  }, [tasks, filter]);

  const filterTasks = () => {
    const filtered = filter === 'all' ? tasks : tasks.filter(task => {
      if (filter === 'completed') {
        return task.checked;
      } else if (filter === 'active') {
        return !task.checked;
      }
      return true;
    });
    setFilteredTasks(filtered);
    onFilterChange(filtered.length);
  };


  return (
    <div>
      <div className="tasklist__buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? "active" : "tasklist__buttons-filter"}>All</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? "active" : "tasklist__buttons-filter"}>Completed</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? "active" : "tasklist__buttons-filter"}>Active</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
