import { useEffect, useState } from 'react';
import { TodoRequest } from '../../../requests/todo';
import { Todo } from '../../../types/todo';

export const useTodoDisplay = (id: number) => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTodo = async (id: number) => {
    setLoading(true);
    try {
      const todo = await TodoRequest.show(id);
      setTodo(todo);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  return { todo, loading, setTodo };
};
