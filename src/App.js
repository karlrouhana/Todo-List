// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Header from './Components/header/Header';
import TaskList from './Components/tasklist/TaskList';
import store from './redux/store';
import './App.css';

const App = () => {
  const [filteredTasksCount, setFilteredTasksCount] = useState(0);

  const handleFilterChange = (count) => {
    setFilteredTasksCount(count);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header count={filteredTasksCount} />
        <TaskList onFilterChange={handleFilterChange} />
      </div>
    </Provider>
  );
}

export default App;
