import { configureStore } from '@reduxjs/toolkit';
import reducer from './createSlice';

const store = configureStore({
  reducer: {
    tasks: reducer
  }
});

export default store;
