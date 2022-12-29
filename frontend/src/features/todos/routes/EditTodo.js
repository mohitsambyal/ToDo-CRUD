import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditTodoForm from '../components/EditTodoForm';

const EditTodo = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  return (
    <>
      <div>
        <button onClick={() => navigate('/app/todos')}>Back to list</button>
      </div>

      <EditTodoForm todoId={todoId} />
    </>
  );
};

export default EditTodo;
