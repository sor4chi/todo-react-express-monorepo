import * as Todo from 'memo-interfaces/todo';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const todoIndex = async (): Promise<Todo.TodoIndexResponse> => {
  const todos = await prisma.todo.findMany();
  return todos.map((todo) => {
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    };
  });
};

export const todoShow = async (
  params: Todo.TodoShowRequest
): Promise<Todo.TodoShowResponse> => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!todo) return null;
  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
};

export const todoCreate = async (
  params: Todo.TodoCreateRequest
): Promise<Todo.TodoCreateResponse> => {
  const todo = await prisma.todo.create({
    data: {
      title: params.title,
      completed: params.completed,
    },
  });
  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
};

export const todoUpdate = async (
  params: Todo.TodoUpdateRequest
): Promise<Todo.TodoUpdateResponse> => {
  const todo = await prisma.todo.update({
    where: {
      id: params.id,
    },
    data: {
      title: params.title,
      completed: params.completed,
    },
  });
  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
};

export const todoDelete = async (
  params: Todo.TodoDeleteRequest
): Promise<Todo.TodoDeleteResponse> => {
  const todo = await prisma.todo.delete({
    where: {
      id: params.id,
    },
  });
  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
};
