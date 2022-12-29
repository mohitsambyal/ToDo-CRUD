import API from '../../../apiConfig';
export const fetchTodosService = () => {
  return API.get('todos');
};

export const createTodoService = (params) => {
  return API.post('todos', params['payload']);
};

export const fetchTodoService = (params) => {
  const { todoId } = params;
  return API.get(`todos/${todoId}`);
};

export const updateTodoService = (params) => {
  const { todoId } = params;
  return API.put(`todos/${todoId}`, params['payload']);
};
