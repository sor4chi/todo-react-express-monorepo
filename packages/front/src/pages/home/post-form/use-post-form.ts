import { useState } from 'react';
import { TodoRequest } from '../../../requests/todo';
import { Todo } from '../types';

export const usePostForm = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string>('');

  const reset = () => {
    setTitle('');
    setError('');
    setCompleted(false);
  };

  const validate = () => {
    if (title === '') {
      setError('タイトルを入力してください');
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    const todo = await TodoRequest.create({ title, completed });
    setTodos([...todos, todo]);
    reset();
  };

  return {
    title,
    setTitle,
    completed,
    setCompleted,
    error,
    validate,
    submit,
  };
};
