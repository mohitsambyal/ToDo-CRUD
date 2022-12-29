import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../components/Forms/InputField';
import TextAreaField from '../../../components/Forms/TextAreaField';
import { createTodo } from '../slices/todosSlice';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const { createTodoStatus } = useSelector((state) => state.todos);

  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Title is required')
      .min(5, 'Title must be of minimum 5 characters')
      .max(30, 'Title must be under 30 characters'),
    description: yup
      .string()
      .required('Description is required')
      .min(10, 'Description must be of minimum 10 characters')
      .max(200, 'Description must be under 200 characters'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const params = { payload: data };
      await dispatch(createTodo(params)).unwrap();
    } catch (err) {
      console.log('failed', err);
    } finally {
      navigate('/app/todos');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label={'Title'} registration={register('title')} error={errors?.title} />
      <TextAreaField label={'Description'} registration={register('description')} error={errors?.description} />
      <div>
        <input type="submit" disabled={createTodoStatus === 'loading'} />
      </div>
    </form>
  );
};

export default AddTodoForm;
