// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import Input from '../taskform/input/Input';
import { editTask } from '../../redux/createSlice';
import './task.css';

const Task = ({ task, deleteTask }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);

  const newTask = { ...task, name, date };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim()) return;
    dispatch(editTask(newTask));
    setEdit(false);
  };

  const handleCheck = () => {
    const updatedTask = { ...task, checked: !task.checked };
    dispatch(editTask(updatedTask));
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="task">
      {edit ? (
        <form onSubmit={handleSubmit} className="task__edit">
          <div className="task__edit-input">
            <Input type="text" value={name} onChange={handleName} />
            <Input type="date" value={date} onChange={handleDate} />
          </div>

          <div className="task__edit-buttons">
            <Button className="primary" value="Update" type="submit" />
            <Button className="secondary" value="Cancel" onClick={handleEdit} />
          </div>
        </form>
      ) : (
        <div className="task__content">
          <div className="task__content-inputs">
            <label class="tasks-list-item">
              <input type="checkbox" checked={task.checked} onChange={handleCheck} name="task_1" class="tasks-list-cb" />
              <span class="tasks-list-mark"></span>
            </label>
            <div className="task__content-details">
              <p className={task.checked ? 'crossed' : ''}>{task.name}</p>
              <p className={task.checked ? 'crossed' : ''}>{task.date}</p>
            </div>
          </div>
          <div className="buttons">
            <Button onClick={() => dispatch(deleteTask(task.id))} className="danger" value="Delete" />
            <Button className="secondary" onClick={handleEdit} value="Edit" />
          </div>
        </div>
      )}
    </div>
  );
};


export default Task;
