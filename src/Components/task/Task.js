// Task.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import Input from '../taskform/input/Input';
import { editTask } from '../../redux/actions';
import './task.css';

const Task = ({ task, deleteTask, editTask }) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);

  const newTask = {...task, name: name, date: date};

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim()) return;
    editTask(newTask);
    setEdit(!edit);
  };

  function handleCheck() {
    setChecked(!checked);
  }

  function handleEdit() {
    setEdit(!edit);
  }
  

  return (
    <div className="task">
        {edit ? (
            <form onSubmit={handleSubmit} class="task__edit">
              <div class="task__edit-input">         
                <Input type="text" value={name} onChange={handleName}/>
                <Input type="text" value={date} onChange={handleDate}/>
              </div>

              <div class="task__edit-buttons">
                <Button class="primary" value="Update" type="submit" />
                <Button class="secondary" value="Cancel" onClick={handleEdit} />
              </div>
            </form>
          ) : (
          <div class="task__content">
            <input type="checkbox" onClick={handleCheck} />
            <div class="task__content-details">
              <p className={checked ? 'crossed' : ''}>{task.name}</p>
              <p className={checked ? 'crossed' : ''}>{task.date}</p>
            </div>
            <div class="buttons">
              <Button onClick={() => deleteTask(task.id)} class="danger" value="Delete" />
              <Button class="secondary" onClick={handleEdit} value="Edit"/>
            </div>
          </div>
          )
        }
      </div>
  );
}

const mapDispatchToProps = {
  editTask,
};

export default connect(null, mapDispatchToProps)(Task);