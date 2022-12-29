import AddTodoForm from '../components/AddTodoForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const AddTodo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate('/app/todos')}>Back to list</button>
      </div>

      <AddTodoForm />
    </>
  );
};

export default AddTodo;
