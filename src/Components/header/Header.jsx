// Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from '../taskform/TaskForm';
import './header.css';

const Header = ({ count }) => {
  const [visibile, setVisible] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);

  const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'short' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);


  function handleButtonClick() {
    setVisible(!visibile);
  }

  return (
    <div className="header">
      <div className="header__content">
        <h1>{formattedDate}</h1>
        <p>{count}</p>
      </div>
      <div>
        {!visibile ?
          <button onClick={handleButtonClick} className="add-btn">+</button> :
          <div className="header__form">
            <TaskForm handleClick={handleButtonClick}/>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;