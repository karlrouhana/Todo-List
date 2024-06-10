// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Header from './Components/header/Header';
import TaskList from './Components/tasklist/TaskList';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
