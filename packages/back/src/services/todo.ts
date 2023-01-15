import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const todoIndex = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
};

export const todoShow = async (req: Request, res: Response) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(todo);
};

export const todoCreate = async (req: Request, res: Response) => {
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
      completed: req.body.completed,
    },
  });
  res.json(todo);
};

export const todoUpdate = async (req: Request, res: Response) => {
  const todo = await prisma.todo.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title: req.body.title,
      completed: req.body.completed,
    },
  });
  res.json(todo);
};

export const todoDelete = async (req: Request, res: Response) => {
  const todo = await prisma.todo.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(todo);
};
