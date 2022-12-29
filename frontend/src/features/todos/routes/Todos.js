import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';

const Todos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate('/app/todos/add')}>Create New</button>
      </div>
      <TodoList />
    </>
  );
};

export default Todos;
