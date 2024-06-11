// TaskForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import Button from '../button/Button';
import './taskform.css';
import Input from './input/Input';

const TaskForm = ({ addTask, handleClick }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');


  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim) return;
    addTask({name,date});
    setName('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <div class="taskform__inputs">
        <Input type="text" placeholder="Enter Task Name..." onChange={handleName} value={name}/>
        <Input type="text" placeholder="Enter Task Date..." onChange={handleDate} value={date}/>
      </div>
      
      <div className="taskform__buttons">
        <Button type="submit" className="primary" value="Add Task" />
        <Button onClick={handleClick} class="secondary" value="Cancel" />
      </div>
    </form>
  );
}

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
