// reducer.js
import { ADD_TASK, DELETE_TASK } from './actionTypes';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
