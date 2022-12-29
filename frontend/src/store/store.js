import { configureStore } from '@reduxjs/toolkit';

import todosReducer from '../features/todos/slices/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
