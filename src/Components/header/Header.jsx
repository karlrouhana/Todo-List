// Header.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../../redux/actions';
import TaskForm from '../taskform/TaskForm';
import './header.css';

const Header = ({ toggleForm }) => {
  const [visibile, setVisible] = useState(false);

  function handleButtonClick() {
    setVisible(!visibile);
  }

  return (
    <div className="header">
      <div className="header__content">
        <h1>Friday, 10 Nov</h1>
        <p>3</p>
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

const mapDispatchToProps = {
  toggleForm,
};

export default connect(null, mapDispatchToProps)(Header);
