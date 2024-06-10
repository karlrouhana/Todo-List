// Header.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../../redux/actions';
import TaskForm from '../taskform/TaskForm';
import './header.css';

const Header = ({ toggleForm, tasks }) => {
  const [visibile, setVisible] = useState(false);

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
        <p>{tasks.length}</p>
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  toggleForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);