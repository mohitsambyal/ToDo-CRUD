import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo, selectSingleTodo } from '../slices/todosSlice';
const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const { description, isCompleted, title } = useSelector(selectSingleTodo);
  useEffect(() => {
    const params = { todoId };
    dispatch(fetchTodo(params));
  }, [dispatch, todoId]);

  return (
    <>
      <div>
        <button onClick={() => navigate('/app/todos')}>Back to list</button>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{isCompleted ? 'Task Done' : 'Task Pending'}</p>
      </div>
    </>
  );
};

export default Todo;
