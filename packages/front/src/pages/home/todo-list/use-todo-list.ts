import { TodoRequest } from './../../../requests/todo';
import { useEffect, useState } from 'react';
import { Todo } from '../../../types/todo';

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    await new Promise((resolve) => setTimeout(resolve, 3000)); // skeletonのために3秒待つ
    try {
      const todos = await TodoRequest.get();
      setTodos(todos);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCompleted = async (id: number, completed: boolean) => {
    setError('');
    try {
      const newTodo = await TodoRequest.update(id, { completed });
      setTodos((todos) => {
        const newTodos = todos.map((todo) => {
          if (todo.id === newTodo.id) return newTodo;
          return todo;
        });
        return newTodos;
      });
    } catch (e) {
      if (e instanceof Error) {
        setError('更新に失敗しました。時間をおいて再度お試しください。');
      }
    }
  };

  const deleteTodo = async (id: number) => {
    setError('');
    try {
      await TodoRequest.delete(id);
      setTodos((todos) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        return newTodos;
      });
    } catch (e) {
      if (e instanceof Error) {
        setError('削除に失敗しました。時間をおいて再度お試しください。');
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, setTodos, deleteTodo, updateCompleted, loading, error };
};
