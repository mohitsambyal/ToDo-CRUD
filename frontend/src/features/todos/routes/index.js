import { Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Todo from './Todo';
import Todos from './Todos';

export const TodosRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Todos />} />
      <Route path=":todoId" element={<Todo />} />
      <Route path="add" element={<AddTodo />} />
      <Route path="edit/:todoId" element={<EditTodo />} />
    </Routes>
  );
};
