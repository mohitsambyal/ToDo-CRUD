import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo, selectSingleTodo, updateTodo } from '../slices/todosSlice';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../components/Forms/InputField';
import TextAreaField from '../../../components/Forms/TextAreaField';
import { useParams } from 'react-router-dom';

const EditTodoForm = () => {
  const dispatch = useDispatch();
  const singleTodo = useSelector(selectSingleTodo);
  const { description, isCompleted, title } = singleTodo;
  const { updateTodoStatus } = useSelector((state) => state.todos);
  const { todoId } = useParams();

  useEffect(() => {
    const params = { todoId };
    dispatch(fetchTodo(params));
  }, [todoId, dispatch]);

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
    isCompleted: yup.boolean(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: title,
      description: description,
      isCompleted: isCompleted,
    },
  });

  useEffect(() => {
    reset(singleTodo);
  }, [singleTodo, reset]);

  const onSubmit = async (updatedTodo) => {
    try {
      const params = { todoId, payload: updatedTodo };
      await dispatch(updateTodo(params)).unwrap();
    } catch (err) {
      console.log('Error in updating', err);
    } finally {
      const params = { todoId };
      dispatch(fetchTodo(params));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label={'Title'} registration={register('title')} error={errors?.title} />
      <TextAreaField label={'Description'} registration={register('description')} error={errors?.description} />
      Completed ? : <input type="checkbox" {...register('isCompleted')} />
      <div>
        <input type="submit" disabled={updateTodoStatus === 'loading'} />
      </div>
    </form>
  );
};

export default EditTodoForm;
