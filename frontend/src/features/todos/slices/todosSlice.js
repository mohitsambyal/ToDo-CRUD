import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodosService, createTodoService, fetchTodoService, updateTodoService } from '../api/todoService';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
  createTodoStatus: 'idle',
  todo: {},
  fetchTodoStatus: 'idle',
  fetchTodoError: null,
  updateTodoStatus: 'idle',
  updateTodoError: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data } = await fetchTodosService();
  return data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (params) => {
  const { data } = await createTodoService(params);
  return data;
});

export const fetchTodo = createAsyncThunk('todos/fetchTodo', async (params) => {
  const { data } = await fetchTodoService(params);
  return data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (params) => {
  const { data } = await updateTodoService(params);
  return data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })

      .addCase(createTodo.pending, (state, action) => {
        state.createTodoStatus = 'loading';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.createTodoStatus = 'succeeded';
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.createTodoStatus = 'failed';
      })

      .addCase(fetchTodo.pending, (state, action) => {
        state.fetchTodoStatus = 'loading';
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.fetchTodoStatus = 'succeeded';
        state.todo = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.fetchTodoStatus = 'failed';
        state.fetchTodoError = action.error;
      })

      .addCase(updateTodo.fulfilled, (state, action) => {
        state.updateTodoStatus = 'succeeded';
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.updateTodoStatus = 'failed';
        state.updateTodoError = action.error;
      });
  },
});

export default todosSlice.reducer;

//Selectors
export const selectAllTodos = (state) => state.todos.todos;
export const selectSingleTodo = (state) => state.todos.todo;
