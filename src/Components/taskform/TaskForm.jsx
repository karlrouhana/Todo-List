// TaskForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import './taskform.css';
import Input from './input/Input';

const TaskForm = ({ addTask, handleClick }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');


  const handleName = (e) => {
    setTask(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim() || !date.trim) return;
    addTask(task,date);
    setTask('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <Input type="text" placeholder="Enter Task Name..." onChange={handleName} value={task}/>
      <Input type="text" placeholder="Enter Task Date..." onChange={handleDate} value={date}/>
      <button type="submit" className="add-task-btn">Add Task</button>
      <button onClick={handleClick} className="cancel-btn">Cancel</button>
    </form>
  );
}

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
