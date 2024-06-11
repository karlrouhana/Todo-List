// actions.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task
});
