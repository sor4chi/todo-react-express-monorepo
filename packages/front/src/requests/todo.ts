import {
  TodoCreateRequest,
  TodoCreateResponse,
  TodoIndexResponse,
  TodoUpdateRequest,
  TodoUpdateResponse,
} from 'memo-interfaces/todo';

const API_URL = 'http://localhost:8000';

export const TodoRequest = {
  get: async () => {
    const res = await fetch(API_URL + '/todo');
    const todos: TodoIndexResponse = await res.json();
    return todos;
  },
  create: async (params: TodoCreateRequest) => {
    const res = await fetch(API_URL + '/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const todo: TodoCreateResponse = await res.json();
    return todo;
  },
  update: async (id: number, params: TodoUpdateRequest) => {
    const res = await fetch(API_URL + `/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const todo: TodoUpdateResponse = await res.json();
    return todo;
  },
};