import {
  TodoCreateRequest,
  TodoCreateResponse,
  TodoIndexResponse,
} from 'memo-interfaces/todo';

const API_URL = 'http://localhost:8000';

export const getTodos = async () => {
  const res = await fetch(API_URL + '/todo');
  const todos: TodoIndexResponse = await res.json();
  return todos;
};

export const createTodo = async (params: TodoCreateRequest) => {
  const res = await fetch(API_URL + '/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const todo: TodoCreateResponse = await res.json();
  return todo;
};
