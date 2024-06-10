// actions.js
import { ADD_TASK, DELETE_TASK, TOGGLE_FORM } from './actionTypes';

export const addTask = (name, date) => ({
  type: ADD_TASK,
  payload: {name, date},
});

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  payload: task,
});

export const toggleForm = () => ({
  type: TOGGLE_FORM,
});
