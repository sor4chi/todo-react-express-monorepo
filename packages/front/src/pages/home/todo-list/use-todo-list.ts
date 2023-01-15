import { getTodos } from './../../../requests/todo';
import { useEffect, useState } from 'react';
import { Todo } from '../types';

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    await new Promise((resolve) => setTimeout(resolve, 3000)); // skeletonのために3秒待つ
    try {
      const todos = await getTodos();
      setTodos(todos);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, setTodos, loading, error };
};
