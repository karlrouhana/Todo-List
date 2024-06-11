// reducer.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';

const initialState = {
  tasks: [],
  lastId: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.lastId + 1,
        ...action.payload,
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        lastId: state.lastId + 1,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id 
            ? { ...task, name: action.payload.name, date: action.payload.date } 
            : task
        ),
        };
    default:
      return state;
  }
};

export default reducer;
