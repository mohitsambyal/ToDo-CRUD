import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllTodos, fetchTodos, updateTodo } from '../slices/todosSlice';
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const { status: todosStatus, error: todosError } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleTodoToggle = async (id) => {
    let updatedTodo = { ...todos.find((todo) => todo.id === id) };
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    try {
      const params = { todoId: id, payload: updatedTodo };
      await dispatch(updateTodo(params)).unwrap();
    } catch (err) {
      console.log('Error in updating', err);
    } finally {
      dispatch(fetchTodos());
    }
  };

  if (todosStatus === 'loading') {
    return <h4>App is Loading</h4>;
  }

  if (todosStatus === 'failed') {
    return <h4>Error Occured: {todosError?.message}</h4>;
  }

  if (todosStatus === 'succeeded') {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos?.map(({ id, title, isCompleted }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                <input
                  type="checkbox"
                  id="isCompleted"
                  name="isCompleted"
                  checked={isCompleted}
                  onChange={() => handleTodoToggle(id, !isCompleted)}
                />
              </td>

              <td>
                <Link to={`/app/todos/${id}`}>View Details </Link>
              </td>
              <td>
                <Link to={`/app/todos/edit/${id}`}>Edit </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default TodoList;
