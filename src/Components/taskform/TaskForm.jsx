// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/createSlice';
import Button from '../button/Button';
import Input from './input/Input';
import './taskform.css';

const TaskForm = ({ handleClick }) => {
  const dispatch = useDispatch();
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
    dispatch(addTask({ name, date }));
    setName('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <div className="taskform__inputs">
        <Input
          type="text"
          placeholder="Enter Task Name..."
          value={name}
          onChange={handleName}
        />
        <Input
          type="date"
          placeholder="Enter Task Date..."
          value={date}
          onChange={handleDate}
        />
      </div>

      <div className="taskform__buttons">
        <Button type="submit" className="primary" value="Add Task" />
        <Button onClick={handleClick} className="secondary" value="Cancel" />
      </div>
    </form>
  );
};

export default TaskForm;
